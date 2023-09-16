const items = [
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
    { id: 0, nome: 0, img: "./assets/images/products/itematelie2.webp", quantidade: 0 },
];

const containers = [];

function iniciarLoja() {
    const vitrine = document.querySelector("#home-product");
    let container;
    let page = 1;

    for (let i = 0; i < items.length; i++) {
        if (i % 12 === 0) {
            container = document.createElement("section");
            container.classList.add("container-products-none");
            containers.push({ container });
            vitrine.appendChild(container);
        }
        container.innerHTML += `
            <section class="product">
                <a href="./view/pages/produto1.html">
                    <section class="product-img">
                        <img  src="${items[i].img}" alt="Imagem Macacão">
                    </section>
                    <section class="product-text">
                        <h4>Macacão Pima Luxo Gabriel Azul longo com ponto smock</h4>
                        <h3>R$ 385,00</h3>
                        <p><strong>R$365,75</strong> à vista com desconto ou <strong>10x</strong> de</p>
                        <p><strong>R$ 38,50</strong> Sem juros</p>
                    </section>
                    <button class="btn">Ver Produto</button>
                </a>
            </section>`;
    }
    containers[0].container.classList.remove("container-products-none");
    containers[0].container.classList.add("container-products-flex");

    function showPage(pageId) {
        const currentPage = containers.findIndex(container => !container.container.classList.contains("container-products-none"));

        containers.forEach((pagina, index) => {
            if (index === pageId) {
                pagina.container.classList.remove("container-products-none");
                pagina.container.classList.add("container-products-flex");
            } else {
                pagina.container.classList.remove("container-products-flex");
                pagina.container.classList.add("container-products-none");
            }
        });

        if (pageId > currentPage) {
            containers[pageId].container.classList.add("right-animation");
        } else if (pageId < currentPage) {
            containers[pageId].container.classList.add("left-animation");
        }
    }
    const botoes = document.querySelector("#btn-vitrine-page");

    containers.forEach((pagina, index) => {
        const bottomPage = document.createElement("article");
        bottomPage.classList.add("botao");
        bottomPage.innerHTML = `<p>${index + 1}</p>`;
        bottomPage.addEventListener("click", function () {
            containers.forEach((container) => {
                container.container.classList.add("page-animation");
            });
            showPage(index);
        });
        botoes.appendChild(bottomPage);
    });
}
iniciarLoja();