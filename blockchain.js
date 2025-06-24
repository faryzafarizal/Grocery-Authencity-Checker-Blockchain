// blockchain.js (SIMULATED - No real blockchain connection)

const fakeData = [
  {
    barcode: "9551234567896",
    productName: "ABC Chili Sauce",
    manufacturer: "Kilang ABC Sdn Bhd",
    origin: "Malaysia",
    mfgDate: "Jan 2025",
    verified: true,
  },
  {
    barcode: "9559876543210",
    productName: "Bumi Rice 5kg",
    manufacturer: "Bumi Agro Industries",
    origin: "Malaysia",
    mfgDate: "Feb 2025",
    verified: true,
  },
  {
    barcode: "4901234567894",
    productName: "Kikkoman Soy Sauce",
    manufacturer: "Kikkoman Corporation",
    origin: "Japan",
    mfgDate: "May 2025",
    verified: false,
  },
  {
    barcode: "9551122334456",
    productName: "Farm Fresh Milk 1L",
    manufacturer: "Farm Fresh Sdn Bhd",
    origin: "Malaysia",
    mfgDate: "June 2025",
    verified: true,
  },
  {
    barcode: "8853219876544",
    productName: "Foremost UHT Milk 1L",
    manufacturer: "FrieslandCampina (Thailand) PCL",
    origin: "Thailand",
    mfgDate: "June 2025",
    verified: false,
  }
];

async function checkProductOrigin(barcode) {
  const product = fakeData.find(p => p.barcode === barcode);
  const resultEl = document.getElementById("origin-result");
  const detailsEl = document.getElementById("product-details");

  if (product) {
    resultEl.innerText = product.origin === "Malaysia"
      ? "✅ This product is Made in Malaysia."
      : "❌ This product is IMPORTED.";

    document.getElementById("product-name").innerText = product.productName;
    document.getElementById("manufacturer").innerText = product.manufacturer;
    document.getElementById("origin-country").innerText = product.origin === "Malaysia" ? "🇲🇾 Malaysia" : product.origin;
    document.getElementById("verification").innerText = product.verified ? "✅ Blockchain Verified" : "❌ Not Verified";
    document.getElementById("barcode-value").innerText = product.barcode;
    document.getElementById("mfg-date").innerText = product.mfgDate;
    document.getElementById("cert-status").innerText = product.certStatus;

    detailsEl.style.display = "block";
  } else {
    resultEl.innerText = "⚠️ Product not found in database.";
    detailsEl.style.display = "none";
  }
}
