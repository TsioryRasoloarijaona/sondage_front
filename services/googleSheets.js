const { google } = require("googleapis");
require("dotenv").config();


const credentials = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key.replace(/\\n/g, "\n"),
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
    universe_domain: process.env.universe_domain,
  };

async function writeToGoogleSheet(data) {
    console.log(credentials)
  try {
   
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

  
    const spreadsheetId = "1wiWuW5uAzm9i1dALK5U6_HEvvWPT7WPoQss4Rdn5Bkg";

 
    const resource = {
      values: data,
    };

  
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "'Feuille 1'",
      valueInputOption: "RAW",
      resource: {
        values: data,
      },
    });

    console.log(`${result.data.updates.updatedCells} cellules mises à jour.`);
  } catch (error) {
    console.error("Erreur lors de l'écriture dans Google Sheets :", error);
  }
}

module.exports = { writeToGoogleSheet };