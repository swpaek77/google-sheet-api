declare namespace NodeJS {
  export interface ProcessEnv {
    APP_NAME: string;
    GMAIL_USER: string;
    GMAIL_PASS: string;
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
    client_x509_cert_url: string;
    spreadsheetId: string;
  }
}
