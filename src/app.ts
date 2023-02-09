import "./lib/env";

import { google } from "googleapis";

import { logger } from "./lib/winston";

import { client_email, private_key } from "./account/theta-solution-366003-2f270561d46c.json";
import { xappolUrls } from "./lib/constants";

logger.info("client_email, private_key", client_email, private_key);

const start = async () => {
  try {
    /**
     * * JWT 가져오기
     */
    const auth = new google.auth.JWT(
      //
      client_email,
      undefined,
      private_key,
      ["https://www.googleapis.com/auth/indexing"]
    );

    /**
     * @link https://googleapis.dev/nodejs/googleapis/latest/indexing/classes/Indexing.html
     */
    const indexing = google.indexing({ auth, version: "v3" });

    for (const url of xappolUrls) {
      /**
       * @description URL_UPDATED | URL_DELETED
       */
      const { data } = await indexing.urlNotifications.publish({
        requestBody: { url, type: "URL_UPDATED" },
      });
      logger.info(JSON.stringify(data));
    }
  } catch (e) {
    logger.error(e);
  }
};

start();
