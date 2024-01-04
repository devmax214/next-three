// THIS USED TO CREATE RECTANGLE FOR BOUNDING LIMIT
// dLeft and dRight is original top and left of the rectangle
// if u change the position of the rectangle, please change both of them
export const clipPath:any = {
    Hoodies: [
        {
            id:'mask-front',
            width: 490, 
            height: 344,
            dLeft: 1204,
            dTop: 1504,
            left: 1204 - (490 / 2),
            top: 1504 - (344 / 2)
        },
        {
            id:'mask-back',
            width:490,
            height:687,
            dLeft: 397,
            dTop: 1619,
            left:428-(490/2),
            top:1592-(687/2)
        },
        {
            id:'mask-h-left',
            width:253,
            height:629,
            dLeft: 408,
            dTop: 748,
            left:408-(253/2),
            top:748-(629/2)
        },
        {
            id:'mask-h-right',
            width:253,
            height:629,
            dLeft: 1198,
            dTop: 748,
            left:1198-(253/2),
            top:748-(629/2)
        }
    ],
    Sweatshirts: [
        {
            id:'mask-front',
            width: 493,
            height: 697,
            dLeft: 418,
            dTop: 1608,
            left: 418 - (493 / 2),
            top: 1608 - (697 / 2)
        },
        {
            id:'mask-back',
            width:493,
            height:802,
            dLeft: 1614,
            dTop: 1578,
            left:1614-(493/2),
            top:1578-(802/2)
        },
        {
            id:'mask-h-right',
            width:260,
            height:693,
            left:376-(260/2),
            top:582-(693/2)
        },
        {
            id:'mask-h-left',
            width:260,
            height:693,
            dLeft: 1006,
            dTop: 972,
            left:1006-(260/2),
            top:972-(693/2)
        }
    ],
    Oversize: [
        {
            id:'mask-front',
            width: 670,
            height: 780,
            dLeft: 466,
            dTop: 1547,
            left: 466 - (670 / 2),
            top: 1547 - (780 / 2)
        },
        {
            id:'mask-back',
            width:670,
            height:889,
            dLeft: 1424,
            dTop: 1480,
            left:1424-(670/2),
            top:1480-(889/2)
        },
        {
            id:'mask-h-right',
            width:324,
            height:238,
            dLeft: 1405,
            dTop: 675,
            left:1405-(324/2),
            top:675-(238/2)
        },
        {
            id:'mask-h-left',
            width:324,
            height:238,
            dLeft: 432,
            dTop: 711,
            left:432-(324/2),
            top:711-(238/2)
        }
    ],
    "T-Shirts": [
        {
            id:'mask-front',
            width: 521,
            height: 750,
            dLeft: 380,
            dTop: 1554,
            left: 380 - (521 / 2),
            top: 1554 - (750 / 2)
        },
        {
            id:'mask-back',
            width:521,
            height:863,
            dLeft: 1125,
            dTop: 1519,
            left:1125-(521/2),
            top:1519-(863/2)
        },
        {
            id:'mask-h-right',
            width:278,
            height:213,
            dLeft: 1169,
            dTop: 775,
            left:1169-(278/2),
            top:775-(213/2)
        },
        {
            id:'mask-h-left',
            width:278,
            height:213,
            dLeft: 373,
            dTop: 766,
            left:373-(278/2),
            top:766-(213/2)
        }
    ],
    Pants: [
        {
            id:'mask-f-right',
            width: 160,
            height: 1084,
            dLeft: 187,
            dTop: 1384,
            left: 187 - (160 / 2),
            top: 1384 - (1084 / 2)
        },
        {
            id:'mask-f-left',
            width:160,
            height:1084,
            dLeft: 724,
            dTop: 1384,
            left:724-(160/2),
            top:1384-(1084/2)
        },
        {
            id:'mask-b-left',
            width:160,
            height:1084,
            dLeft: 1182,
            dTop: 1384,
            left:1182-(160/2),
            top:1384-(1084/2)
        },
        {
            id:'mask-b-right',
            width:160,
            height:845,
            dLeft: 1832,
            dTop: 1504,
            left:1832-(160/2),
            top:1504-(845/2)
        },
        {
            id:'mask-pouch',
            width:152,
            height:135,
            dLeft: 1235,
            dTop: 499,
            left:1235-(152/2),
            top:499-(135/2)
        }
    ],
    Shorts: [
        {
            id:'mask-f-left',
            width: 288,
            height: 645,
            dLeft: 850,
            dTop: 582,
            left: 850 - (288 / 2),
            top: 582 - (645 / 2)
        },
        {
            id:'mask-f-right',
            width:288,
            height:645,
            dLeft: 258,
            dTop: 582,
            left:258-(288/2),
            top:582-(645/2)
        },
        {
            id:'mask-b-left',
            width:288,
            height:735,
            dLeft: 258,
            dTop: 1542,
            left:258-(288/2),
            top:1542-(735/2)
        },
        {
            id:'mask-b-right',
            width:288,
            height:461,
            dLeft: 1030,
            dTop: 1679,
            left:1030-(288/2),
            top:1679-(461/2)
        },
        {
            id:'mask-pouch',
            width:194,
            height:218,
            dLeft: 1884,
            dTop: 1191,
            left:1884-(194/2),
            top:1191-(218/2)
        }
    ],
}
// This is used to decide which current ptype is
export const maskPosition : any = {
    Hoodies :['back','front','h-left','h-right'],
    Sweatshirts :['back','front','h-left','h-right'],
    Oversize :['back','front','h-left','h-right'],
    "T-Shirts" :['back','front','h-left','h-right'],
    Pants :['f-left','f-right','b-left','b-right','pouch'],
    Shorts :['f-left','f-right','b-left','b-right','pouch'],
}