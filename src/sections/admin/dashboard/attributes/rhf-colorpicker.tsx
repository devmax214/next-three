import { ColorPicker, IColor, useColor } from "react-color-palette";

type Props = {
  value: string;
  setValue: (hex: string) => void;
};

export default function ControlColorPicker({ value, setValue }: Props) {
  const [color, setColor] = useColor(value);

  const changeColor = (c: IColor) => {
    setValue(c.hex);

    setColor(c);
  };

  return (
    <>
      <ColorPicker color={color} onChange={changeColor} />
    </>
  );
}
