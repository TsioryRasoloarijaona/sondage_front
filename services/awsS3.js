const { S3Client, GetObjectCommand , PutObjectCommand} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
require("dotenv").config();

const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
const bucketName = process.env.BUCKET_NAME;

const s3Client = new S3Client({
  region: "eu-west-3",
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function getPresignedUrl() {
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: "sondagepublic/sondage.xlsx",
  });

  try {
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 });
    return url;
  } catch (err) {
    console.log("Error", err);
  }
}

async function uploadFile(fileContent, key) {
  try {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
    });

    const response = await s3Client.send(command);
    console.log("Fichier uploadé avec succès :", response);
    return response;
  } catch (err) {
    console.error("Erreur lors de l'upload :", err);
  }
}

module.exports = { getPresignedUrl, uploadFile };
