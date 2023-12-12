import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import pm2 from "pm2";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "POST":
      const fileName = await saveFile(req.body.file as any, req.body.isQuote as boolean);
      try {
        pm2.restart(1, (err) => {
          return res
            .status(201)
            .send({ success: true, data: { path: fileName } });
        });
      } catch (error) {
      }
      return res
        .status(201)
        .send({ success: true, data: { path: fileName } });
    default:
      break;
  }
}

async function saveFile(file: any, isQuote: boolean) {
  const fileName = isQuote ? 'quote-tmp.jpg' : `${uuidv4()}.jpg`;
  if (typeof file === 'string') {
    fs.writeFileSync(`./public/uploads/${fileName}`, file.replace("data:image/png;base64,", ""), { encoding: 'base64' });
  } else {
    // console.log(file)
    // fs.createWriteStream(`./public/uploads/${fileName}`).write(file.buffer);
  }
  return fileName;
}