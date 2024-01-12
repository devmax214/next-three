import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
import webFontData from "@/theme/fonts/fonts.json";

export const fontList = webFontData;

// To verify the validity of the token and get the user id from it
export async function getDataFromToken(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value || "";
    const data: any = Jwt.verify(token, process.env.JWT_SECERITY!);
    return data.id;
  } catch (error: any) {
    NextResponse.json({ error });
  }
}

export function typeIndexToLabel(ptype: string, index: number) {
  if (ptype !== "Pants" && ptype !== "Shorts") {
    switch (index) {
      case 0:
        return "Back"
        break;
      case 1:
        return "Front"
        break;
      case 2:
        return "Left Sleeve"
        break;
      case 3:
        return "Right Sleeve"
        break;
      default:
        break;
    }
  } else {
    switch (index) {
      case 0:
        return "Front Leg Left"
        break;
      case 1:
        return "Front Leg Right"
        break;
      case 2:
        return "Back Leg Left"
        break;
      case 3:
        return "Back Leg Right"
        break;
      case 4:
        return "Back Pocket"
        break;
      default:
        break;
    }
  }

  return "";
}

export function isEmpty(data: any) {

  try {
    if (data.name) return false;
  } catch (err) { }

  try {
    if (
      data !== null &&
      data !== undefined &&
      data !== 0 &&
      data !== "" &&
      data.length !== 0 &&
      Object.keys(data).length !== 0
    ) {
      return false;
    }
  } catch (error) { }

  return true;
}