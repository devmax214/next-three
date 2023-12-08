import { NextApiRequest, NextApiResponse } from "next";
import { dbConnect, Rate } from "@/helpers/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body,
    query,
  } = req;
  await dbConnect();

  const session = await getServerSession(req, res, authOptions);

  if (!session) throw new Error("");

  let dateArr =new Intl.DateTimeFormat('en-GB',{year:"numeric", month:"long", day:"numeric"}).format(new Date()).split(" ");
  dateArr[0] = dateArr[0] + "th";
  
  const userId = session.user?.id as string;
  const data = {...body, customer: userId, date: dateArr.join(" ")};
  
  switch (method) {
    case "POST":
      await Rate.updateOne({productId: data.productId, customer: data.customer}, data, {upsert: true});
      res.status(200).json(true);
      break;
    case "DELETE":
      var result = await Rate.deleteOne({_id: query.rateId});
      res.status(200).json(true);  
    default:
      break;
  }
}
