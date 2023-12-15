function typeIndexToLabel(ptype: string, index: number) {
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

export { typeIndexToLabel };