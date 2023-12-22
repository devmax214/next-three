import { Avatar, Stack, TableCell, TableRow, Typography } from "@mui/material";
import { QUOTE_STATE } from "../../../../global-config";
import { ICustomizeItem } from "@/@types/customize";
import { useResponsive } from "@/hooks";
import { useRouter } from "next/router";
type Props = {
  data: ICustomizeItem;
};

export default function QuoteTableRow({ index, data }: Props) {
  // const { quoteState } = data;
  let quoteState = index % 2 + 1;
  const seq = data._id.slice(0, 8).toUpperCase();
  const isDesktop = useResponsive("up", "lg");
  const { push } = useRouter();

  const renderState = (
    <>
      {quoteState === QUOTE_STATE.approved && (
        <Stack direction="row" alignItems="center" gap={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="13"
            viewBox="0 0 15 13"
            fill="none"
          >
            <g clipPath="url(#clip0_5308_17505)">
              <path
                d="M4.91112 13.0001L0.288896 7.8001C-0.144437 7.22232 -0.144437 6.5001 0.577785 6.06677C1.15556 5.77788 2.02223 5.77788 2.45556 6.35566L4.76667 8.95566L11.7 0.433433C12.1333 9.98266e-05 13 -0.144345 13.5778 0.288989C14.1556 0.577878 14.3 1.44454 13.8667 1.87788L4.91112 13.0001Z"
                fill="#6AB67A"
              />
            </g>
            <defs>
              <clipPath id="clip0_5308_17505">
                <rect width="14.1556" height="13" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {isDesktop ?
            <Typography sx={{ color: "#6AB67A", fontSize: 16 }} noWrap>
              Approved
            </Typography>
            : null}
        </Stack>
      )}

      {quoteState === QUOTE_STATE.review && (
        <Stack direction="row" alignItems="center" gap={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
          >
            <g clipPath="url(#clip0_5308_17521)">
              <path
                d="M14.7 5.52821C13.1923 2.1359 10.3026 0 7.28718 0C4.27179 0 1.50769 2.1359 0 5.52821C0 5.77949 0 6.03077 0 6.15641C1.50769 9.54872 4.27179 11.6846 7.28718 11.6846C10.3026 11.6846 13.0667 9.54872 14.5744 6.15641C14.7 6.03077 14.7 5.77949 14.7 5.52821ZM7.28718 10.3026C5.02564 10.3026 2.7641 8.54359 1.50769 5.90513C2.7641 3.14103 5.02564 1.50769 7.28718 1.50769C9.54872 1.50769 11.8103 3.14103 13.0667 5.90513C11.9359 8.54359 9.67436 10.3026 7.28718 10.3026ZM7.28718 2.88974C5.65385 2.88974 4.39744 4.14615 4.39744 5.77949C4.39744 7.41282 5.77949 8.79487 7.28718 8.79487C8.79487 8.79487 10.1769 7.53846 10.1769 5.90513C10.1769 4.2718 8.92051 2.88974 7.28718 2.88974ZM7.28718 7.28718C6.53333 7.28718 5.77949 6.65897 5.77949 5.77949C5.77949 4.9 6.40769 4.2718 7.28718 4.2718C8.16667 4.2718 8.79487 5.02564 8.79487 5.90513C8.79487 6.78462 8.16667 7.28718 7.28718 7.28718Z"
                fill="#F3BC1A"
              />
            </g>
            <defs>
              <clipPath id="clip0_5308_17521">
                <rect width="14.7" height="11.8103" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {isDesktop ?
            <Typography sx={{ color: "#F3BC1A", fontSize: 16 }} noWrap>
              In Review
            </Typography>
            : null}
        </Stack>
      )}

      {quoteState === QUOTE_STATE.contact && (
        <Stack direction="row" alignItems="center" gap={1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="12"
            viewBox="0 0 15 12"
            fill="none"
          >
            <g clipPath="url(#clip0_5308_17531)">
              <path
                d="M12.2263 11.5H2.05789C0.968421 11.5 0 10.5316 0 9.32105V2.05789C0 0.968421 0.968421 0 2.05789 0H12.2263C13.4368 0 14.2842 0.968421 14.2842 2.05789V9.32105C14.4053 10.5316 13.4368 11.5 12.2263 11.5ZM2.05789 1.33158C1.57368 1.33158 1.21053 1.69474 1.21053 2.17895V9.44211C1.21053 9.92632 1.57368 10.2895 2.05789 10.2895H12.2263C12.7105 10.2895 13.0737 9.92632 13.0737 9.44211V2.17895C13.0737 1.69474 12.7105 1.33158 12.2263 1.33158H2.05789Z"
                fill="#F05A4A"
              />
              <path
                d="M7.1421 7.1418C7.02104 7.1418 6.89999 7.1418 6.77894 7.02074L0.242095 2.66285C-9.98937e-06 2.42074 -0.121063 2.05758 0.121043 1.69443C0.363148 1.45232 0.726306 1.33127 0.968411 1.57337L7.1421 5.68916L13.3158 1.57337C13.5579 1.33127 14.0421 1.45232 14.1631 1.69443C14.5263 2.05758 14.4053 2.42074 14.0421 2.66285L7.50525 7.02074C7.3842 7.02074 7.26315 7.1418 7.1421 7.1418Z"
                fill="#F05A4A"
              />
            </g>
            <defs>
              <clipPath id="clip0_5308_17531">
                <rect width="14.4053" height="11.5" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {isDesktop ?
            <Typography sx={{ color: "#F05A4A", fontSize: 16 }} noWrap>
              Contact Necessary
            </Typography>
            : null}
        </Stack>
      )}
    </>
  );

  return (
    <>
      <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
        <TableCell onClick={() => quoteState === QUOTE_STATE.approved ? push(`/quote/${data._id}/approved`) : push(`/customize/${data._id}/quoterequest`)} sx={{ cursor: "pointer" }}>Quote Requests # {seq}</TableCell>

        {isDesktop ?
          <TableCell>
            <Stack direction="row">
              <Avatar
                // src={item.coverUrl}
                variant="rounded"
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              Women's Light Organic Tee T-Shirt
            </Stack>
          </TableCell>
          : null}

        <TableCell>17.09.2023</TableCell>

        <TableCell>{renderState}</TableCell>
      </TableRow >
    </>
  );
}
