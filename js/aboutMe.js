export default class About {
    constructor() {
        this.about = "";

    }




    appendAbout() {
        document.getElementById('aboutMe_container').innerHTML = /*html*/ `
        <article class="aboutMe_article">
        <h1>Helle Flohr Fjelding</h1>
        <h2>Om mig</h2>
        <p>Jeg er 35 år, gift og mor til 3.</p>
        <p>Jeg læser Multimediedesign på Erhversakademi Aarhus, og er startet 3. semester i januar 2020.</p>
        <p>Jeg nyder at bruge min fritid sammen med mine venner og familie, og jeg elsker at lave smukke kage overtrukket med fondant. Af natur er jeg nysgerrig, opsøgende og lærenem. Derfor også hurtig til at sætte mig ind i nye ting. </p>
        <p>Ind til videre har jeg under min uddannelse tilegnet mig praktiske kompetencer indenfor grafisk design (UI), UX, kommunikation og programmering.</p>
        <p> Jeg har valgt at tage studieretningen Frontend Developer. Dette har jeg gjort for at styrke mine kompetencer inden for kodning, HTML, CSS og JavaScript. </p>
        <p>Jeg er tidligere uddannet pædagog, og har været inde for faget i 9 år. Jeg søgte i 2018 nye udfordringer, og havde brug for noget i en helt anden retning. Da jeg altid har haft it-teknisk snilde, er en kreativ person og er nysgerrig, lå det ikke helt fjernt at skifte retning til Multimediedesigner.</p>
        </p>
        </article>
        
        <img id="myKids" src="./img/ungerIs.jpg" alt="Helle Flohr Fjeldings børn">
        
        <article class="aboutMe_article"> 
        <h2> Dette portfolio </h2>
        <p>For at udfordre mig selv mest muligt med denne portfolio, og for at vide de kompetencer jeg har tilegnet mig på uddannelsen, har jeg valgt at lave portfolioen som en Single Page Application (SPA).</p>
        <p> Jeg har brugt de nye ES6 class standarter for JavaScript, til opbygningen af min SPA. Det har jeg gjort fordi jeg er af den overbevisning, at der hvor jeg lærer mest, er hvor jeg er på dybt vand. Der hvor jeg virkelig skal bruge min hjerne, og lære af de utallige fejl jeg har begået igen og igen.</p>
        <p> Har du lyst til at se nærmere på min kode, så kig endelig indenfor på min <a href="https://github.com/helleflohr?tab=repositories">GitHub</a>.</p>
        </p>
        </article>

        <img id="myCode" src="./img/coding.jpg" alt="Part of my code">

        <article class="aboutMe_article"> 
        <h2>Hvor finder jeg inspiration?</h2>
        <p>Inspiration er en meget fluffy ting syntes jeg. Der er inspiration de mest uforudsigelige steder. Jeg har oplevet at blive inspireret på gaden, i et spil, på en café, i andre mennesker eller på nettet.</p>
        <p>Det vigtigste i forhold til inspiration, tror jeg, er, at man tør gå de skæve og anderledes idéer, man får. Jeg tror dog at det er vigtigt er at man ikke bliver så fokuseret på at tænke ud af boksen, at man ikke ser det der er lige foran en.</p>
        </article>

        <article class="aboutMe_article"> 
        <h2> Hvad er godt design?</h2>
        <p>Godt design for mig, er individuelt for hvert projekt, så derfor designer jeg med fokus på hvert enkelt projekt. Jeg brænder for det jeg laver, og vil altid gøre mit bedste i hver eneste opgave jeg får.</p>
        <p> Det er godt design for mig. Jeg gør mit bedste for altid at lytte til brugerne og virksomhederne og skabe et færdigt lækkert produkt. Det skal se godt ud samtidig med, at brugeroplevelsen altid skal være i fokus.</p>
        <img id="citat" src="./img/lettering.png" alt="Lettering">
        </article>`

    }
}