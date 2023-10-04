function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    return results ? decodeURIComponent(results[2].replace(/\+/g, ' ')) : null;
}

function loadProductDetails() {
    const productId = getParameterByName('id');
    if (!productId) {
        console.error('ID do produto não encontrado na URL.');
        return;
    }

    fetch('/json/produto.json')
        .then((response) => response.json())
        .then((data) => {
            const product = data.find((item) => item.id === parseInt(productId));
            if (product) {
                const { nome, preco, descricao, img, informacoes_adicionais, id } = product;
                document.getElementById('product-name').textContent = nome;
                document.getElementById('product-price').textContent = `R$ ${preco.toFixed(2)}`;
                document.getElementById('product-description').textContent = descricao;
                document.getElementById('product-idention').textContent = `Id: ${id}`;
                document.getElementById('informacoes-adicionais').textContent = informacoes_adicionais;
                document.getElementById('product-image').src = img; 
                document.getElementById('product-image-modal').src = img; 
                        // colocar mais conteudo abaixo dependendo do fo rusa
                                                                     // Trocar numero e colocar o da moca da loja 
                const whatsappLink = "https://api.whatsapp.com/send?phone=5543996448729";
                const message = `Olá estou interessado no produto de ID: ${id}, NOME: ${nome}, NESSE LINK: ${window.location.href}`;
                document.getElementById("contact-product").addEventListener("click", function() {
                    window.open(`${whatsappLink}&text=${encodeURIComponent(message)}`, "_blank");
                });
            } else {
                console.error('Produto não encontrado');
            }
        })
        .catch((error) => {
            console.error('Erro ao carregar detalhes do produto:', error);
        });
}

loadProductDetails();





