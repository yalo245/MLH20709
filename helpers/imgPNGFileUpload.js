const fileUploadLinkAppear = require('../helpers/fileUploadLinkAppear.js');
const path = require('path');

function imgPNGFileUpload(){
    const inputDiv = $('.ant-upload input');
    const filePath = path.join(__dirname, '../data/imgPNG.png');
    const remoteFilePath = browser.uploadFile(filePath);
    fileUploadLinkAppear();
    inputDiv.waitForDisplayed();
    inputDiv.setValue(remoteFilePath);
}

module.exports = imgPNGFileUpload;