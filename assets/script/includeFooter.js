document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement('footer');
    const head = document.querySelector('head')
    head.innerHTML += `<link rel="stylesheet" href="/assets/style/footer.css">`
    footer.innerHTML = `
        <div id="Contato"></div>
        <section id="contato">
            <div class="hr"></div>
            <br>
            <section>
                <h3>Atelie cleide Arts Atelie cleide Arts Atelie cleide Arts</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>
        </section>
        <div id="Sobre"></div>
        <section id="sobre">
                <section id="container-footer">
                    <section class="footer-box">
                        <h3>Atelie cleide Arts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3>Atelie cleide Arts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3>Atelie cleide Arts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                    <section class="footer-box">
                        <h3>Atelie cleide Arts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3>Atelie cleide Arts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <h3>Atelie cleide Arts</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                    <section class="footer-box">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.1506037093957!2d-49.719806558034904!3d-23.42731086797882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c1c870f03aa429%3A0xee4b18838fafa211!2sR.%20Benedito%20Sales%2C%20695%20-%20Carl%C3%B3polis%2C%20PR%2C%2086420-000!5e0!3m2!1spt-BR!2sbr!4v1694292593999!5m2!1spt-BR!2sbr" width="300" height="250" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </section> 
        </section>
    `;
    document.body.appendChild(footer);
});
