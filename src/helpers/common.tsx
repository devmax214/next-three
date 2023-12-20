import { NextRequest, NextResponse } from "next/server";
import Jwt from "jsonwebtoken";

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