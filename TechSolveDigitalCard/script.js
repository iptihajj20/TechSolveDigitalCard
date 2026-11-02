
const business = {
  name: "TECH SOLVE",
  whatsapp: "254115747135",
  phone: "+254115747135",
  instagram: "https://www.instagram.com/tech_.solve/"
};

// WhatsApp
document.getElementById("whatsapp").href =
  `https://wa.me/${business.whatsapp}`;

// Direct phone call
document.getElementById("call").href =
  `tel:${business.phone}`;

// Instagram
document.getElementById("instagram").href =
  business.instagram;

// Save contact
document.getElementById("saveContact").addEventListener("click", () => {
  const vCard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${business.name}`,
    `ORG:${business.name}`,
    `TEL;TYPE=WORK,VOICE:${business.phone}`,
    `URL:${business.instagram}`,
    "END:VCARD"
  ].join("\r\n");

  const file = new Blob([vCard], {
    type: "text/vcard;charset=utf-8"
  });

  const url = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = url;
  link.download = "TECH-SOLVE.vcf";
  link.click();

  URL.revokeObjectURL(url);
});
// Automatically update copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// Service enquiry buttons
document.querySelectorAll("[data-service]").forEach(button => {
  const service = button.dataset.service;

  button.href =
    `https://wa.me/254115747135?text=${encodeURIComponent(
      `Hello TECH SOLVE! I am interested in ${service}. Please share more details.`
    )}`;
});