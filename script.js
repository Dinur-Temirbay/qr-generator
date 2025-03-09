function generateQRCode() {
  const text = document.querySelector("#text-input").value;
  const qrDiv = document.querySelector("#qr-code");
  const saveBtn = document.querySelector("#save-btn");

  if (!text.trim()) {
    alert("Enter text!");
    return;
  }

  qrDiv.innerHTML = "";

  const qr = new QRCode(qrDiv, {
    text: text,
    width: 200,
    height: 200,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  saveBtn.style.display = "block";
}

function downloadQRCode() {
  const qrCanvas = document.querySelector("#qr-code canvas");
  if (!qrCanvas) {
    alert("First, create a QR code!");
    return;
  }

  const link = document.createElement("a");
  link.href = qrCanvas.toDataURL("image/png");
  link.download = "qrcode.png";
  link.click();
}
