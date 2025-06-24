// barcode-scanner.js
function startScanner() {
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#interactive'),
      constraints: {
        facingMode: "environment"
      },
    },
    decoder: {
      readers: ["ean_reader"] // EAN-13 barcode
    },
  }, function (err) {
    if (err) {
      console.error(err);
      return;
    }
    Quagga.start();
  });

  Quagga.onDetected(async function (data) {
    const barcode = data.codeResult.code;
    document.getElementById("barcode-result").innerText = `Barcode: ${barcode}`;
    Quagga.stop();

    // Send barcode to blockchain check
    checkProductOrigin(barcode);
  });
} 
