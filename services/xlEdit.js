const { getPresignedUrl, uploadFile } = require("./awsS3");
const XLSX = require("xlsx");

async function updateFile(newData) {
  try {
    const response = await fetch(await getPresignedUrl());
    if (!response.ok) {
      throw new Error(`Erreur lors du téléchargement : ${response.statusText}`);
    }

    const blob = await response.blob();

    const arrayBuffer = await blob.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    sheetData.push(newData);

    const updatedWorksheet = XLSX.utils.aoa_to_sheet(sheetData);

    workbook.Sheets[sheetName] = updatedWorksheet;

    const updatedExcel = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    uploadFile(updatedExcel, "sondagepublic/sondage.xlsx")
      .then(() => {
        console.log("Fichier Excel mis à jour et uploadé avec succès !");
      })
      .catch((error) => {
        console.error("Erreur lors de l'upload du fichier Excel :", error);
      });
  } catch (error) {
    console.error(
      "Erreur lors du téléchargement ou de la modification du fichier Excel :",
      error
    );
  }
}

module.exports = { updateFile };
