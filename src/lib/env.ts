import dotenv from "dotenv";
import path from "path";

if (process.env.NODE_ENV === "prod") {
  dotenv.config({ path: path.join(__dirname, "../../env/.env") });
} else if (process.env.NODE_ENV === "dev") {
  dotenv.config({ path: path.join(__dirname, "../../env/.env.dev") });
} else if (process.env.NODE_ENV === "app") {
  dotenv.config({ path: path.join(__dirname, "../../env/.env.app") });
}
