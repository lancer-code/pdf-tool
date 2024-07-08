import ilovepdf from "@ilovepdf/ilovepdf-nodejs";


class PdfServices {
  instense = new ilovepdf();

  constructor() {
    this.instense(process.env.PDF_PUBLIC_KEY, process.env.PDF_SECRET_KEY);
  }

  async PdfToJpg(file) {
    task = instense.newTask("pdfjpg");

    try {
      await task.start();
      await task.addfile(file);
      await task.process();
      data = await task.download();

      return data;
    } catch (error) {
      console.log("Error PDF to Jpeg", error);
    }
  }

  async ImageToPdf(file) {
    task = instense.newTask("imagepdf");

    try {
      await task.start();
      await task.addfile(file);
      await task.process();

      data = task.download();

      return data;
    } catch (error) {
      console.log("Error in Image to PDF ", error);
    }
  }
}

const pdfService = new PdfServices();

export default pdfService;
