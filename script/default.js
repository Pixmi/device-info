const md = new MobileDetect(window.navigator.userAgent);
/*
console.log( md.mobile() );          // 'Sony'
console.log( md.phone() );           // 'Sony'
console.log( md.tablet() );          // null
console.log( md.userAgent() );       // 'Safari'
console.log( md.os() );              // 'AndroidOS'
console.log( md.is('iPhone') );      // false
console.log( md.is('bot') );         // false
console.log( md.version('Webkit') );         // 534.3
console.log( md.versionStr('Build') );       // '4.1.A.0.562'
console.log( md.match('playstation|xbox') ); // false
*/
function deviceOS() {
    let os;
    if (md.match('Windows NT') && md.version('Windows NT') > 0) {
        os = `Windows ${md.version('Windows NT')}`;
    } else
    if (md.match('Android') && md.version('Android') > 0) {
        os = `Android OS ${md.version('Android')}`;
    } else
    if ((md.match('iPhone') || md.match('iPad')) && md.version('iOS') > 0) {
        os = `iOS ${md.version('iOS')}`;
    } else
    if (md.versionStr('iOS').length) {
        os = `Mac OS ${md.versionStr('iOS')}`
    } else {
        os = md.os();
    }
    return os;
}

function Browser() {
    if (md.userAgent()) {
        // 這邊屬於行動裝置
        return `${md.userAgent()} ${md.version(md.userAgent())}`;
    } else {
        let agData = window.navigator.userAgentData || false;
        // 非行動裝置
        if (agData) {
            // 有這段資料表示屬於 chrome 或 edge
            return `${agData.brands[1].brand} ${agData.brands[1].version}`;
        } else {
            // firefox
            if (md.version('Firefox')) {
                return `Firefox ${md.version('Firefox')}`;
            } else
            // chrome
            if (md.version('Safari')) {
                return `Safari ${md.version('Safari')}`;
            } else {
                return window.navigator.userAgent;
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const LabelOS = document.querySelector('#os');
    const LabelBrowser = document.querySelector('#Browser');
    const LabelWidth = document.querySelector('#width');
    const LabelHeight = document.querySelector('#height');

    LabelOS.value = deviceOS();
    LabelBrowser.value = Browser();
    LabelWidth.value = window.innerWidth;
    LabelHeight.value = window.innerHeight;
});