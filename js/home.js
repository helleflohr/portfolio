export default class Home {
    constructor() {
        this.home = "";
    }

    appendHome() {
        document.getElementById('home_container').innerHTML = /*html*/ `
    <article id="home_article">
    <h1 id="homeH1">Helle Flohr Fjelding</h1>
    <h2 id="itallic">Kreativ - <br>Perfektionist - <br>Multimediedesigner</h2>
    </article>`
    };
}