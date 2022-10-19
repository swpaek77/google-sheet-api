import "./lib/env";

import { google } from "googleapis";

import { logger } from "./lib/winston";

const { client_email, private_key, spreadsheetId } = process.env;

const start = async () => {
  try {
    /**
     * * JWT 가져오기
     */
    const auth = new google.auth.JWT(client_email, undefined, private_key, ["https://www.googleapis.com/auth/spreadsheets"]);

    /**
     * * google spread sheet api 가져오기
     */
    const googleSheet = google.sheets({ auth, version: "v4" });

    /**
     * * 실제 스프레드시트 내용 가져오기
     */
    const context = await googleSheet.spreadsheets.values.get({ spreadsheetId, range: "A1:M32" });
    logger.info(JSON.stringify(context.data.values));

    /**
     * * 실제 스프레드시트 업데이트
     */
    const update = await googleSheet.spreadsheets.values.update({
      spreadsheetId,
      valueInputOption: "RAW",
      range: "A10:E10",
      requestBody: {
        values: [["사기적인 스킬", "베리베리굿", null, null, 1234]],
      },
    });
    logger.info(JSON.stringify(update.data));
  } catch (e) {
    logger.error(e);
  }
};

start();
