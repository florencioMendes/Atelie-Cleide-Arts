document.addEventListener("DOMContentLoaded", function() {
    const productName = document.getElementById("product-name").textContent;
    const whatsappLink = "https://api.whatsapp.com/send?phone=554396632670&text=Olá, estou interessado no produto: " + encodeURIComponent(productName);
    
    document.getElementById("contact-product").addEventListener("click", function() {
        window.location.href = whatsappLink;
    });
});