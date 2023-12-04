import { forwardRef } from "react";
import { ButtonBase, Stack, StackProps } from "@mui/material";
import Iconify from "@/components/iconify";
import { secondaryFont } from "@/theme/typography";

interface Props extends StackProps {
  name?: string;
  quantity: number;
  disabledIncrease?: boolean;
  disabledDecrease?: boolean;
  onIncrease: VoidFunction;
  onDecrease: VoidFunction;
}

const IncrementButton = forwardRef<HTMLDivElement, Props>(
  (
    {
      quantity,
      onIncrease,
      onDecrease,
      disabledIncrease,
      disabledDecrease,
      sx,
      ...other
    },
    ref
  ) => {
    return (
      <Stack
        ref={ref}
        flexShrink={0}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          p: 0.5,
          width: 88,
          borderRadius: 1,
          typography: "subtitle2",
          fontFamily: secondaryFont.style.fontFamily,
          // border: (theme) => `solid 1px ${alpha(theme.palette.grey[500], 0.2)}`,
          ...sx,
        }}
        {...other}
      >
        <ButtonBase
          onClick={onDecrease}
          disabled={disabledDecrease}
          sx={{
            borderRadius: 0.75,
            border: (theme) => `solid 1px #000`,
            p: 0.3,
          }}
        >
          <Iconify icon="eva:minus-fill" width={16} />
        </ButtonBase>

        {quantity}

        <ButtonBase
          onClick={onIncrease}
          disabled={disabledIncrease}
          sx={{
            borderRadius: 0.75,
            border: (theme) => `solid 1px #000`,
            p: 0.3,
          }}
        >
          <Iconify icon="mingcute:add-line" width={16} />
        </ButtonBase>
      </Stack>
    );
  }
);

export default IncrementButton;
