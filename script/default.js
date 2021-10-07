const md = new MobileDetect(window.navigator.userAgent);

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
    if (md.versionStr('iOS')) {
        os = `Mac OS ${md.versionStr('iOS')}`
    } else {
        os = md.os();
    }
    return os;
}

function Browser() {
    let subInfo = document.querySelector('#sub_info');
    let line = window.navigator.userAgent.match(/(Line)\/([0-9.]+)/);
    let fb = window.navigator.userAgent.match(/(FBAN)/);
    if (line) {
        subInfo.textContent = `LINE App ${line[2]}`;
        subInfo.classList.remove('d-none');
    }
    if (fb) {
        subInfo.textContent = `Facebook App`;
        subInfo.classList.remove('d-none');
    }
    if (md.userAgent()) {
        // 這邊屬於行動裝置
        return `${md.userAgent()} ${md.version(md.userAgent())}`;
    } else {
        let agData = window.navigator.userAgentData || false;
        // 非行動裝置或 webview
        if (agData) {
            // 有這段資料表示屬於 chrome 或 edge
            return `${agData.brands[1].brand} ${agData.brands[1].version}`;
        } else {
            // firefox
            if (md.version('Firefox')) {
                return `Firefox ${md.version('Firefox')}`;
            } else
            // safari
            if (md.version('Safari')) {
                return `Safari ${md.version('Safari')}`;
            } else {
                return `Webkit ${md.version('Webkit')}`;
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    const LabelOS = document.querySelector('#os');
    const LabelBrowser = document.querySelector('#browser');
    const LabelWidth = document.querySelector('#width');
    const LabelHeight = document.querySelector('#height');

    LabelOS.value = deviceOS();
    LabelBrowser.value = Browser();
    LabelWidth.value = window.innerWidth;
    LabelHeight.value = window.innerHeight;
});