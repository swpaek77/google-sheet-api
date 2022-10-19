import nodemailer from "nodemailer";

import { gmailSettings } from "./constants";

export const transporter = nodemailer.createTransport(gmailSettings);
