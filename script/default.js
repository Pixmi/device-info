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
    } else {
        os = window.navigator.userAgent;
    }
    return os;
}

window.addEventListener('DOMContentLoaded', (event) => {
    const LabelOS = document.querySelector('#os');
    const LabelWidth = document.querySelector('#width');
    const LabelHeight = document.querySelector('#height');

    LabelOS.value = deviceOS();
    LabelWidth.value = window.innerWidth;
    LabelHeight.value = window.innerHeight;
});