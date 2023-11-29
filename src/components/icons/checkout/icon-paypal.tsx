import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function VisaIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 61 16"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path d="M10.32 0.777257C9.56925 0.260558 8.58443 0 7.37438 0H2.68435C2.31338 0 2.10582 0.185482 2.07049 0.556445L0.167097 12.5156C0.145016 12.6348 0.17593 12.7408 0.255422 12.838C0.334914 12.9351 0.432071 12.9837 0.546893 12.9837H2.77267C3.1613 12.9837 3.3777 12.7982 3.41744 12.4273L3.94297 9.20342C3.96064 9.04885 4.0313 8.92078 4.14612 8.82363C4.26536 8.72647 4.41109 8.66023 4.58774 8.63373C4.76439 8.60282 4.92779 8.58957 5.08678 8.58957C5.24134 8.58957 5.42683 8.5984 5.64322 8.62048C5.85962 8.63815 5.99652 8.65139 6.05393 8.65139C7.7321 8.65139 9.05255 8.17886 10.0109 7.22937C10.9692 6.27988 11.4461 4.96826 11.4461 3.28568C11.4461 2.12862 11.0708 1.29396 10.32 0.777257ZM7.89992 4.36765C7.80276 5.05217 7.54662 5.50262 7.13591 5.7146C6.7252 5.931 6.13784 6.03699 5.37825 6.03699L4.41109 6.0679L4.91013 2.93238C4.94987 2.71598 5.07794 2.60999 5.28992 2.60999H5.84637C6.62804 2.60999 7.19332 2.7204 7.54662 2.94563C7.89992 3.17085 8.01915 3.64339 7.89992 4.36765ZM59.8039 0H57.6355C57.4191 0 57.291 0.10599 57.2557 0.322385L55.3523 12.5156L55.3214 12.573C55.3214 12.6702 55.3611 12.7629 55.4406 12.8512C55.5201 12.9396 55.6173 12.9837 55.7321 12.9837H57.6664C58.0374 12.9837 58.2405 12.7982 58.2803 12.4273L60.1837 0.441623V0.41071C60.1837 0.136903 60.0556 0 59.8039 0ZM33.6024 4.71653C33.6024 4.61938 33.5626 4.52664 33.4875 4.43831C33.4081 4.34999 33.3197 4.30582 33.2226 4.30582H30.9659C30.7495 4.30582 30.5728 4.40298 30.4404 4.5973L27.3313 9.17251L26.0418 4.77836C25.9446 4.46481 25.7282 4.31024 25.397 4.31024H23.1977C23.1006 4.31024 23.0123 4.3544 22.9328 4.44273C22.8533 4.53105 22.8135 4.62379 22.8135 4.72095C22.8135 4.7607 23.0034 5.33481 23.3832 6.45211C23.763 7.565 24.1737 8.76622 24.6153 10.0558C25.057 11.3453 25.2866 12.0298 25.3043 12.1049C23.7012 14.2953 22.9018 15.4656 22.9018 15.6202C22.9018 15.8763 23.0299 16 23.2816 16H25.5383C25.7547 16 25.927 15.9028 26.0639 15.7085L33.545 4.9241C33.5847 4.88435 33.6024 4.81811 33.6024 4.71653ZM54.6148 4.30582H52.389C52.1152 4.30582 51.9518 4.62821 51.89 5.27298C51.3821 4.49131 50.4547 4.10268 49.1078 4.10268C47.699 4.10268 46.5022 4.62821 45.5174 5.68369C44.5325 6.73917 44.0379 7.98013 44.0379 9.40657C44.0379 10.5592 44.3736 11.4778 45.0492 12.1623C45.7249 12.8468 46.6258 13.1869 47.7608 13.1869C48.3261 13.1869 48.9046 13.0676 49.492 12.8336C50.0793 12.5995 50.5386 12.286 50.8698 11.8973C50.8698 11.915 50.8477 12.0033 50.8124 12.1623C50.7727 12.3169 50.755 12.4361 50.755 12.5156C50.755 12.8291 50.8831 12.9837 51.1348 12.9837H53.1574C53.5284 12.9837 53.7448 12.7982 53.8022 12.4273L55.0034 4.77836C55.0211 4.65912 54.9946 4.55313 54.9151 4.45598C54.8312 4.35882 54.734 4.30582 54.6148 4.30582ZM50.7903 10.0823C50.2913 10.5725 49.6907 10.8153 48.9885 10.8153C48.4232 10.8153 47.9639 10.6608 47.6106 10.3472C47.2574 10.0337 47.0807 9.6053 47.0807 9.05769C47.0807 8.33343 47.3236 7.72399 47.8138 7.22495C48.2996 6.72592 48.909 6.47861 49.6289 6.47861C50.1765 6.47861 50.6314 6.64201 50.9935 6.95998C51.3556 7.28236 51.5367 7.7284 51.5367 8.29368C51.5367 8.99586 51.2894 9.59205 50.7903 10.0823ZM21.3253 4.30582H19.0995C18.8257 4.30582 18.6579 4.62821 18.6004 5.27298C18.0749 4.49131 17.1431 4.10268 15.8182 4.10268C14.4094 4.10268 13.2126 4.62821 12.2278 5.68369C11.243 6.73917 10.7484 7.98013 10.7484 9.40657C10.7484 10.5592 11.084 11.4778 11.7597 12.1623C12.4354 12.8468 13.3363 13.1869 14.4713 13.1869C15.0189 13.1869 15.5842 13.0676 16.1715 12.8336C16.7589 12.5995 17.227 12.286 17.5803 11.8973C17.5008 12.1314 17.4611 12.3389 17.4611 12.5112C17.4611 12.8247 17.5891 12.9793 17.8408 12.9793H19.8635C20.2344 12.9793 20.4508 12.7938 20.5082 12.4229L21.7095 4.77394C21.7271 4.65471 21.7006 4.54872 21.6211 4.45156C21.5372 4.35882 21.4401 4.30582 21.3253 4.30582ZM17.5008 10.0955C17.0018 10.5769 16.3923 10.8153 15.6681 10.8153C15.1028 10.8153 14.6479 10.6608 14.3034 10.3472C13.9634 10.0337 13.7912 9.6053 13.7912 9.05769C13.7912 8.33343 14.0341 7.72399 14.5243 7.22495C15.0145 6.72592 15.6195 6.47861 16.3393 6.47861C16.8869 6.47861 17.3418 6.64201 17.7039 6.95998C18.0661 7.28236 18.2471 7.7284 18.2471 8.29368C18.2471 9.01794 17.9954 9.61855 17.5008 10.0955ZM43.6095 0.777257C42.8588 0.260558 41.874 0 40.6639 0H36.0048C35.6118 0 35.3998 0.185482 35.36 0.556445L33.4566 12.5156C33.4346 12.6348 33.4655 12.7408 33.545 12.838C33.6245 12.9351 33.7216 12.9837 33.8364 12.9837H36.2389C36.4729 12.9837 36.6275 12.8556 36.707 12.6039L37.2369 9.20342C37.2546 9.04885 37.3253 8.92078 37.4401 8.82363C37.5593 8.72647 37.705 8.66023 37.8817 8.63373C38.0583 8.60282 38.2217 8.58957 38.3807 8.58957C38.5353 8.58957 38.7208 8.5984 38.9372 8.62048C39.1536 8.63815 39.2905 8.65139 39.3479 8.65139C41.0305 8.65139 42.3465 8.17886 43.3048 7.22937C44.2631 6.27988 44.7401 4.96826 44.7401 3.28568C44.7401 2.12862 44.3647 1.29396 43.6095 0.777257ZM40.6065 5.59536C40.1781 5.88683 39.5334 6.03699 38.6722 6.03699L37.736 6.0679L38.235 2.93238C38.2747 2.71598 38.3984 2.60999 38.6148 2.60999H39.1403C39.5687 2.60999 39.9132 2.62766 40.1649 2.6674C40.4166 2.70715 40.6639 2.82639 40.898 3.03395C41.132 3.2371 41.2513 3.5374 41.2513 3.92603C41.2513 4.74745 41.0349 5.30389 40.6065 5.59536Z" fill="#5C6166" />
    </Box >
  );
}

export default memo(VisaIcon);
