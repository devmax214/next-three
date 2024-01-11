// THIS USED TO CREATE RECTANGLE FOR BOUNDING LIMIT
// dLeft and dRight is original top and left of the rectangle
// if u change the position of the rectangle, please change both of them
const CMRATE = 8, CMRATE1 = 14;
export const clipPath: any = {
    Hoodies: [
        {
            id: 'mask-front',
            width: 400,
            height: 380,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 1204,
            dTop: 1504,
            left: 1204 - (400 / 2),
            top: 1504 - (380 / 2)
        },
        {
            id: 'mask-back',
            width: 490,
            height: 687,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 397,
            dTop: 1619,
            left: 428 - (490 / 2),
            top: 1592 - (687 / 2)
        },
        {
            id: 'mask-h-left',
            width: 253,
            height: 629,
            cWidth: CMRATE * 6,
            cHeight: CMRATE * 45,
            rWidth: 6,
            rHeight: 45,
            dLeft: 408,
            dTop: 748,
            left: 408 - (253 / 2),
            top: 748 - (629 / 2)
        },
        {
            id: 'mask-h-right',
            width: 253,
            height: 629,
            cWidth: CMRATE * 6,
            cHeight: CMRATE * 45,
            rWidth: 6,
            rHeight: 45,
            dLeft: 1198,
            dTop: 748,
            left: 1198 - (253 / 2),
            top: 748 - (629 / 2)
        }
    ],
    Sweatshirts: [
        {
            id: 'mask-front',
            width: 493,
            height: 697,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 418,
            dTop: 1608,
            left: 418 - (493 / 2),
            top: 1608 - (697 / 2)
        },
        {
            id: 'mask-back',
            width: 493,
            height: 802,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 1614,
            dTop: 1578,
            left: 1614 - (493 / 2),
            top: 1578 - (802 / 2)
        },
        {
            id: 'mask-h-right',
            width: 260,
            height: 693,
            cWidth: CMRATE * 45,
            cHeight: CMRATE * 50,
            rWidth: 45,
            rHeight: 50,
            left: 376 - (260 / 2),
            top: 582 - (693 / 2)
        },
        {
            id: 'mask-h-left',
            width: 260,
            height: 693,
            cWidth: CMRATE * 6,
            cHeight: CMRATE * 45,
            rWidth: 6,
            rHeight: 45,
            dLeft: 1006,
            dTop: 972,
            left: 1006 - (260 / 2),
            top: 972 - (693 / 2)
        }
    ],
    Oversize: [
        {
            id: 'mask-front',
            width: 670,
            height: 780,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 466,
            dTop: 1547,
            left: 466 - (670 / 2),
            top: 1547 - (780 / 2)
        },
        {
            id: 'mask-back',
            width: 670,
            height: 889,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 1424,
            dTop: 1480,
            left: 1424 - (670 / 2),
            top: 1480 - (889 / 2)
        },
        {
            id: 'mask-h-right',
            width: 324,
            height: 238,
            cWidth: CMRATE * 10,
            cHeight: CMRATE * 9,
            rWidth: 10,
            rHeight: 9,
            dLeft: 1405,
            dTop: 675,
            left: 1405 - (324 / 2),
            top: 675 - (238 / 2)
        },
        {
            id: 'mask-h-left',
            width: 324,
            height: 238,
            cWidth: CMRATE * 10,
            cHeight: CMRATE * 9,
            rWidth: 10,
            rHeight: 9,
            dLeft: 432,
            dTop: 711,
            left: 432 - (324 / 2),
            top: 711 - (238 / 2)
        }
    ],
    "T-Shirts": [
        {
            id: 'mask-front',
            width: 521,
            height: 750,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 380,
            dTop: 1554,
            left: 380 - (521 / 2),
            top: 1554 - (750 / 2)
        },
        {
            id: 'mask-back',
            width: 521,
            height: 863,
            cWidth: CMRATE * 40,
            cHeight: CMRATE * 50,
            rWidth: 40,
            rHeight: 50,
            dLeft: 1125,
            dTop: 1519,
            left: 1125 - (521 / 2),
            top: 1519 - (863 / 2)
        },
        {
            id: 'mask-h-right',
            width: 278,
            height: 213,
            cWidth: CMRATE * 10,
            cHeight: CMRATE * 9,
            rWidth: 10,
            rHeight: 9,
            dLeft: 1169,
            dTop: 775,
            left: 1169 - (278 / 2),
            top: 775 - (213 / 2)
        },
        {
            id: 'mask-h-left',
            width: 278,
            height: 213,
            cWidth: CMRATE * 10,
            cHeight: CMRATE * 9,
            rWidth: 10,
            rHeight: 9,
            dLeft: 373,
            dTop: 766,
            left: 373 - (278 / 2),
            top: 766 - (213 / 2)
        }
    ],
    Pants: [
        {
            id: 'mask-f-right',
            width: 160,
            height: 1084,
            cWidth: CMRATE1 * 6,
            cHeight: CMRATE1 * 68,
            rWidth: 6,
            rHeight: 68,
            dLeft: 187,
            dTop: 1384,
            left: 187 - (160 / 2),
            top: 1384 - (1084 / 2)
        },
        {
            id: 'mask-f-left',
            width: 160,
            height: 1084,
            cWidth: CMRATE1 * 6,
            cHeight: CMRATE1 * 68,
            rWidth: 6,
            rHeight: 68,
            dLeft: 724,
            dTop: 1384,
            left: 724 - (160 / 2),
            top: 1384 - (1084 / 2)
        },
        {
            id: 'mask-b-left',
            width: 160,
            height: 1184,
            cWidth: CMRATE1 * 6,
            cHeight: CMRATE1 * 68,
            rWidth: 6,
            rHeight: 68,
            dLeft: 1182,
            dTop: 1384,
            left: 1182 - (160 / 2),
            top: 1354 - (1184 / 2)
        },
        {
            id: 'mask-b-right',
            width: 160,
            height: 945,
            cWidth: CMRATE1 * 6,
            cHeight: CMRATE1 * 68,
            rWidth: 6,
            rHeight: 68,
            dLeft: 1832,
            dTop: 1504,
            left: 1832 - (160 / 2),
            top: 1474 - (945 / 2)
        },
        {
            id: 'mask-pouch',
            width: 152,
            height: 135,
            cWidth: CMRATE1 * 10,
            cHeight: CMRATE1 * 9,
            rWidth: 10,
            rHeight: 9,
            dLeft: 1235,
            dTop: 499,
            left: 1235 - (152 / 2),
            top: 499 - (135 / 2)
        }
    ],
    Shorts: [
        {
            id: 'mask-f-left',
            width: 288,
            height: 645,
            cWidth: CMRATE1 * 6,
            cHeight: CMRATE1 * 45,
            rWidth: 6,
            rHeight: 45,
            dLeft: 850,
            dTop: 582,
            left: 850 - (288 / 2),
            top: 582 - (645 / 2)
        },
        {
            id: 'mask-f-right',
            width: 288,
            height: 645,
            cWidth: CMRATE1 * 6,
            cHeight: CMRATE1 * 45,
            rWidth: 6,
            rHeight: 45,
            dLeft: 258,
            dTop: 582,
            left: 258 - (288 / 2),
            top: 582 - (645 / 2)
        },
        {
            id: 'mask-b-left',
            width: 288,
            height: 735,
            cWidth: CMRATE1 * 6,
            cHeight: CMRATE1 * 45,
            rWidth: 6,
            rHeight: 45,
            dLeft: 258,
            dTop: 1542,
            left: 258 - (288 / 2),
            top: 1542 - (735 / 2)
        },
        {
            id: 'mask-b-right',
            width: 288,
            height: 461,
            cWidth: CMRATE1 * 10,
            cHeight: CMRATE1 * 9,
            rWidth: 10,
            rHeight: 9,
            dLeft: 1030,
            dTop: 1679,
            left: 1030 - (288 / 2),
            top: 1679 - (461 / 2)
        },
        {
            id: 'mask-pouch',
            width: 154,
            height: 170,
            cWidth: CMRATE1 * 10,
            cHeight: CMRATE1 * 9,
            rWidth: 10,
            rHeight: 9,
            dLeft: 1900,
            dTop: 1211,
            left: 1870 - (154 / 2),
            top: 1211 - (170 / 2)
        }
    ],
}
// This is used to decide which current ptype is
export const maskPosition: any = {
    Hoodies: ['back', 'front', 'h-left', 'h-right'],
    Sweatshirts: ['back', 'front', 'h-left', 'h-right'],
    Oversize: ['back', 'front', 'h-left', 'h-right'],
    "T-Shirts": ['back', 'front', 'h-left', 'h-right'],
    Pants: ['f-left', 'f-right', 'b-left', 'b-right', 'pouch'],
    Shorts: ['f-left', 'f-right', 'b-left', 'b-right', 'pouch'],
}

export const hideControls = {
    'tl': true,
    'tr': true,
    'bl': true,
    'br': true,
    'ml': false,
    'mt': false,
    'mr': false,
    'mb': false,
    'mtr': true
};

export const svgRotCursor = encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'>
    <defs>
      <filter id='a' width='266.7%' height='156.2%' x='-75%' y='-21.9%' filterUnits='objectBoundingBox'>
        <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/>
        <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1'/>
        <feColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'/>
        <feMerge>
          <feMergeNode in='shadowMatrixOuter1'/>
          <feMergeNode in='SourceGraphic'/>
        </feMerge>
      </filter>
      <path id='b' d='M1.67 12.67a7.7 7.7 0 0 0 0-9.34L0 5V0h5L3.24 1.76a9.9 9.9 0 0 1 0 12.48L5 16H0v-5l1.67 1.67z'/>
    </defs>
    <g fill='none' fill-rule='evenodd'><path d='M0 24V0h24v24z'/>
      <g fill-rule='nonzero' filter='url(#a)' transform='rotate(-90 9.25 5.25)'>
        <use fill='#000' fill-rule='evenodd' xlink:href='#b'/>
        <path stroke='#FFF' d='M1.6 11.9a7.21 7.21 0 0 0 0-7.8L-.5 6.2V-.5h6.7L3.9 1.8a10.4 10.4 0 0 1 0 12.4l2.3 2.3H-.5V9.8l2.1 2.1z'/>
      </g>
    </g>
  </svg>
`);

export const svgRotIcon = encodeURIComponent(`
    <svg id="Camada_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90.02 83.15">
        <defs><style>.cls-1{fill:#f05a4a;stroke-width:0px;}</style></defs>
        <g id="OBJECTS">
            <path class="cls-1" d="M38.61,83.05C18.13,81.62,1.54,65.02.1,44.54-1.57,20.62,17.13.56,40.57,0c.55-.01,1.01.44,1.01,1v8.59c0,.54-.44.97-.98.99-17.38.54-31.2,15.45-29.95,33.21,1.07,15.27,13.44,27.65,28.72,28.71,18.09,1.26,33.22-13.1,33.22-30.93h10.57c0,23.91-20.29,43.17-44.55,41.48Z"/>
            <path class="cls-1" d="M77.01,20.77l-11.14,19.3c-.38.67.1,1.5.87,1.5h22.28c.77,0,1.25-.83.87-1.5l-11.14-19.3c-.38-.67-1.35-.67-1.73,0Z"/>
        </g>
    </svg>
`);

export const svgLoadingIcon = encodeURIComponent(`
    <svg id="Objects" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430.85 430.85"><defs><style>.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9,.cls-10,.cls-11,.cls-12{stroke-width:0px;}.cls-2{fill:#b7b7b7;}.cls-3{fill:#686868;}.cls-4{fill:#dedfe0;}.cls-5{fill:#494949;}.cls-6{fill:#a0a0a0;}.cls-7{fill:#c6c6c6;}.cls-8{fill:#f9f9f9;}.cls-9{fill:#282828;}.cls-10{fill:#828282;}.cls-11{fill:#d8d8d8;}.cls-12{fill:#efefef;}</style></defs><rect class="cls-1" x="206.11" y="0" width="18.63" height="73.68" rx="9.32" ry="9.32"/><rect class="cls-9" x="116.82" y="23.93" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(-13.48 71.21) rotate(-30)"/><rect class="cls-5" x="51.45" y="89.29" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(-78.85 115.69) rotate(-60)"/><rect class="cls-3" x="27.52" y="178.59" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(-178.59 252.26) rotate(-90)"/><rect class="cls-10" x="51.45" y="267.88" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(-172.75 509.7) rotate(-120)"/><rect class="cls-6" x="116.82" y="333.25" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(50.32 753.65) rotate(-150)"/><rect class="cls-2" x="206.11" y="357.17" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(430.85 788.02) rotate(180)"/><rect class="cls-7" x="295.4" y="333.25" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(753.65 538.23) rotate(150)"/><rect class="cls-11" x="360.77" y="267.88" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(819.02 136.57) rotate(120)"/><rect class="cls-4" x="384.69" y="178.59" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(609.43 -178.59) rotate(90)"/><rect class="cls-12" x="360.77" y="89.29" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(294.28 -257.44) rotate(60)"/><rect class="cls-8" x="295.4" y="23.93" width="18.63" height="73.68" rx="9.32" ry="9.32" transform="translate(71.21 -144.22) rotate(30)"/></svg>
`)