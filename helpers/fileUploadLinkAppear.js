
function fieUploadLinkAppear() {
    browser.execute(function () {
        document.getElementsByTagName('input')[6].style.display = 'block';
    });
}


module.exports = fieUploadLinkAppear;