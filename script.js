const img = document.getElementById('qrcode-img');
const input = document.getElementById('qrcode-inp-text');
const QRCodeGenerator = document.querySelector('#qrcode-generate-btn');
const QRCodeDownloader = document.querySelector('#qrcode-download-btn');

QRCodeGenerator.addEventListener('click' , ()=>{
    if(input.value==''){
        document.getElementById('qrcode-inp-text').style.border = '2px solid red';
        document.getElementById('qrcode-box').style.bdisplay = 'none';
    }

    else {
        api = 'https://api.qrserver.com/v1/create-qr-code/?data='+input.value+'&size=200x200';
        img.src = api;
        document.getElementById('qrcode-inp-text').style.border = '1px solid #dcdcdc';
        document.getElementById('qrcode-box').style.display = 'flex';
    }
});

QRCodeDownloader.addEventListener('click' , async()=>{
    const response = await fetch (img.src);
    const blob = await response.blob();
    const downloadlink = document.createElement("a");
    downloadlink.href = URL.createObjectURL(blob);
    downloadlink.download = "QRCodeImage.jpg";
    downloadlink.click();
})