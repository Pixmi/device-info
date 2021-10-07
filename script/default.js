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
    if (md.match('Windows NT') && md.version('Windows NT') > 0) {
        return `Windows ${md.version('Windows NT')}`;
    } else
    if (md.match('Android') && md.version('Android') > 0) {
        return `Android OS ${md.version('Android')}`;
    } else
    if ((md.match('iOS') || md.match('iPad')) && md.version('iOS') > 0) {
        return `iOS ${md.version('iOS')}`;
    } else {
        return '-';
    }
}
console.log(deviceOS());