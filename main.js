var typeNumber = 4;
var errorCorrectionLevel = 'L';
var qr = qrcode(typeNumber, errorCorrectionLevel);
qr.addData('http://192.168.0.108/resume/resume.pdf');
qr.make();
document.getElementById('qrCode').innerHTML = qr.createImgTag();