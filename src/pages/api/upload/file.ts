import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import formidable from "formidable-serverless";
import fs from "fs";
import IncomingForm from "formidable/Formidable";
import { v4 as uuidv4 } from "uuid";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "POST":
      const form = formidable() as IncomingForm;
      form.parse(req, async function (err, fields, files) {
        const fileName = await saveFile(files.file as any);
        return res
          .status(201)
          .send({ success: true, data: { path: fileName } });
      });
      break;
    default:
      break;
  }
}

async function saveFile(file: any) {
  const data = fs.readFileSync(file.path);
  const fileName = `${uuidv4()}${path.extname(file.name)}`;
  fs.writeFileSync(`./public/uploads/${fileName}`, data);
  await fs.unlinkSync(file.path);
  return fileName;
}

export const config = {
  api: {
    bodyParser: false,
  },
};
