const items = [
    { id: 1, nome: "Jogo de fralda", img: "./assets/images/products/Pdt-01-01.jpeg", quantidade: 0, preco: 0  },
    { id: 2, nome: "Toalha de boca para batizado a toalha da marca dorlher", img: "./assets/images/products/Pdt-02-01.jpeg", quantidade: 0, preco: 39.90  },
    { id: 3, nome: "Jogo de toalha de banho", img: "./assets/images/products/Pdt-03-01.jpeg", quantidade: 0, preco: 320.00  },
    { id: 4, nome: "Toalha de banho marca dolher", img: "./assets/images/products/Pdt-04-01.jpeg", quantidade: 0, preco: 120.00  },
    { id: 5, nome: "Toalha de banho e toalha de boca marca dolher", img: "./assets/images/products/Pdt-05-01.jpeg", quantidade: 0, preco: 150.00  },
    { id: 6, nome: "Jogo de fralda passeio", img: "./assets/images/products/Pdt-06-01.jpeg", quantidade: 0, preco: 150.00  },
    { id: 7, nome: "Fralda Cremer luxo passeio", img: "./assets/images/products/Pdt-07-01.jpeg", quantidade: 0, preco: 250.00  },
    { id: 8, nome: "Fralda de boca", img: "./assets/images/products/Pdt-08-01.jpeg", quantidade: 0, preco: 0  },
    { id: 9, nome: "Toalha de boca", img: "./assets/images/products/Pdt-09-01.jpeg", quantidade: 0, preco: 37.00  },
    { id: 10, nome: "Fralda de passeio", img: "./assets/images/products/Pdt-10-01.jpeg", quantidade: 0, preco: 100.00 },
    { id: 11, nome: "Capa de cardeneta", img: "./assets/images/products/Pdt-11-01.jpeg", quantidade: 0, preco: 65.00  },
    { id: 12, nome: "Fralda de boca", img: "./assets/images/products/Pdt-12-01.jpeg", quantidade: 0, preco: 29.90 },
    { id: 13, nome: "Capa de cardeneta de vacinação", img: "./assets/images/products/Pdt-13-01.jpeg", quantidade: 0, preco: 75.00 },
    { id: 14, nome: "Toalha de boca para madrinha de batizado", img: "./assets/images/products/Pdt-14-01.jpeg", quantidade: 0, preco: 39.90  },
    { id: 15, nome: "Toalha de banho fralda mabber", img: "./assets/images/products/Pdt-15-01.jpeg", quantidade: 0, preco: 80.00 },
    { id: 16, nome: "Toalha de rosto para músico", img: "./assets/images/products/Pdt-16-01.jpeg", quantidade: 0, preco: 80.00   },
    { id: 17, nome: "160", img: "./assets/images/products/Pdt-17-01.jpeg", quantidade: 0, preco: 160  },
    { id: 18, nome: "Fralda de passeio, Fralda de boca, Fralda de amamentação ", img: "./assets/images/products/Pdt-18-01.jpeg", quantidade: 0, preco: 0  },
    { id: 19, nome: "Fraldinha de boca", img: "./assets/images/products/Pdt-19-01.jpeg", quantidade: 0, preco: 29.90   },
    { id: 20, nome: "Manta de piquet", img: "./assets/images/products/Pdt-20-01.jpeg", quantidade: 0, preco: 250.00  },
    { id: 21, nome: "Fralda de boca", img: "./assets/images/products/Pdt-21-01.jpeg", quantidade: 0, preco: 35.00  },
    { id: 22, nome: "Redutor de berço", img: "./assets/images/products/Pdt-22-01.jpeg", quantidade: 0, preco: 330.00  },
    { id: 23, nome: "Jogo de fralda", img: "./assets/images/products/Pdt-23-01.jpeg", quantidade: 0, preco: 0  },
    { id: 24, nome: "Jogo de fralda", img: "./assets/images/products/Pdt-24-01.jpeg", quantidade: 0, preco: 0  },
];

const containers = [];

function calcularParcelaSemJuros(preco, numParcelas) {
    return preco / numParcelas;
}

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

    
        const productLink = `./view/pages/produto${items[i].id}.html`;
    
        container.innerHTML += `
            <section class="product">
                <a href="${productLink}">
                    <section class="product-img">
                        <img  src="${items[i].img}" alt="Imagem Macacão">
                    </section>
                    <section class="product-text">
                        <h4>${items[i].nome}</h4>
                        <h3>R$ ${items[i].preco.toFixed(2)}</h3>
                        <p><strong>R${items[i].preco.toFixed(2)}</strong> à vista com desconto ou <strong>10x</strong> de</p>
                        <p><strong>R$ ${(calcularParcelaSemJuros(items[i].preco, 10)).toFixed(2)}</strong> Sem juros</p>
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