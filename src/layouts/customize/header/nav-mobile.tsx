import { Drawer, IconButton } from "@mui/material";
import SvgColor from "@/components/svg-color";
import { useBoolean } from "@/hooks";
import Scrollbar from "@/components/scrollbar/Scrollbar";
import Logo from "@/components/logo";

type Props = {
  offsetTop: boolean;
};

export default function NavMobile({ offsetTop }: Props) {
  const nav = useBoolean();

  return (
    <>
      <IconButton
        onClick={nav.onTrue}
        sx={{
          ...(offsetTop && {
            color: "text.primary",
          }),
        }}
      >
        <SvgColor src="/icons/ic_hamboger.svg" />
      </IconButton>

      <Drawer
        open={nav.value}
        onClose={nav.onFalse}
        PaperProps={{
          sx: {
            pb: 5,
            width: 260,
          },
        }}
      >
        <Scrollbar>
          <Logo color="dark" sx={{ mx: 2.5, my: 3, width: 158 }} />
        </Scrollbar>
      </Drawer>
    </>
  );
}
