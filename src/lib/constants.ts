export const gmailSettings = {
  service: "gmail",
  prot: 587,
  host: "smtp.gmlail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
};
