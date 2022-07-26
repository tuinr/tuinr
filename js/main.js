///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
let windows_width = window.innerWidth;
let windows_height = window.innerHeight;
let baffle = document.querySelector("#baffle");
let baffle_width = document.querySelector("#baffle_width");
let baffle_height = document.querySelector("#baffle_height");
let baffle_standard = document.querySelector("#baffle_standard");
let baffle_standard2 = document.querySelector("#baffle_standard2");


function lisbaffle() {
    const widthnow = window.innerWidth;
    const heightnow = window.innerHeight;
    // baffle_width.innerHTML = "当前窗口宽度:" + widthnow + "px";
    baffle_height.innerHTML = heightnow;

    if (widthnow < 1155) {
        standardtop = 499;
        baffle_standard.innerHTML = "460";
        if (heightnow < 499) { //baffle on
            baffle.className = "bafflem";
        } else { //baffle off
            baffle.className = "n";
        };
    } else {
        standardtop = 849;
        baffle_standard.innerHTML = "850";
        if (heightnow < 850) { //baffle on
            baffle.className = "baffle";
        } else { //baffle off
            baffle.className = "n";
        };
    };
    baffle_standard2.innerHTML = baffle_standard.innerHTML;
};
baffle_height.innerHTML = windows_height;
lisbaffle(); //网站初始化时检测baffle
window.onresize = lisbaffle; //窗口改变大小时检测baffle
function proposal() {
    window.location = `Mailto:tuinr@tuinr.com?Subject=提出建议——Tuinr.com&Body=请在此处输入内容%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a内容创建于` + new Date();
    //const widthnow = window.innerWidth;
    // if (widthnow < 900) {
    //     window.location = "http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=YBQVCQ4SIBQVCQ4STgMPDQ";
    // } else {
    //     window.location = `Mailto:tuinr@tuinr.com?Subject=提出建议——Tuinr.com&Body=请在此处输入内容%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a%0d%0a内容创建于` + new Date();
    // }


};