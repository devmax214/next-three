import { IconifyProps } from "../iconify";

type Props = {
  icon?: IconifyProps; // Right icon
  isRTL?: boolean;
};

export function LeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
    >
      <path
        d="M8 1L2 7L8 13"
        stroke="#292F3D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 7L2 7"
        stroke="#292F3D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="14"
      viewBox="0 0 19 14"
      fill="none"
    >
      <path
        d="M11 13L17 7L11 1"
        stroke="#292F3D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 7H17"
        stroke="#292F3D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function DownSpinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M1 1L5 5L9 1" stroke="#292F3D" stroke-linecap="round" />
    </svg>
  );
}

export function UpSpinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
      <path d="M9 5L5 1L1 5" stroke="#292F3D" stroke-linecap="round" />
    </svg>
  );
}

// export function LeftIcon({
//   icon = "eva:arrow-ios-forward-fill",
//   isRTL,
// }: Props) {
//   return (
//     <Iconify
//       icon={icon}
//       sx={{
//         transform: " scaleX(-1)",
//         ...(isRTL && {
//           transform: " scaleX(1)",
//         }),
//       }}
//     />
//   );
// }
//
// export function RightIcon({
//   icon = "eva:arrow-ios-forward-fill",
//   isRTL,
// }: Props) {
//   return (
//     <Iconify
//       icon={icon}
//       sx={{
//         ...(isRTL && {
//           transform: " scaleX(-1)",
//         }),
//       }}
//     />
//   );
// }
