var typeNumber = 4;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('https://vishalkumarmitra786.github.io/resume/resume/resume.pdf');
qr.make();
document.getElementById('qrCode').innerHTML = qr.createImgTag();