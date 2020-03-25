// 
export default class AboutMe {
  constructor() {
    this.template();
  }

  // Template for the content on the homepage
  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="aboutMe" class="page">
        <header class="topbar">
          <h2>Om mig</h2>
        </header>
        <!-- Unique content on the page-->
        <article class="aboutMe_article" data-aos="zoom-in">
        <h1>Helle Flohr Fjelding</h1>
        <div class="flex">
        <div class="col-2">
        <p> Jeg læser Multimediedesign på Erhversakademi Aarhus, og er startet 3. semester i januar 2020. </p>
        <p>Jeg søger en praktikplads fra 27. juli 2020, eller snarest derefter, og 10 uger frem, måske med mulighed
         for at skrive min hovedopgave i samarbejde med jer.</p>
         <p>Af natur er jeg nysgerrig, opsøgende, detaljeorienteret og lærenem, og er derfor også hurtig til at sætte
         mig ind i nye ting.</p>
         <p>Jeg har valgt at tage studieretningen Frontend Developer, for virkelig at styrke mine kompetencer inden 
        for kodning, HTML, CSS og JavaScript. </p>
        <p>For at udfordre mig selv mest muligt med denne portfolio, og for at vise de kompetencer jeg har tilegnet
        mig på uddannelsen, har jeg valgt at lave den som en Single Page Application (SPA). Jeg har brugt de nye 
        ES6 class og modules standarter for JavaScript, til opbygningen af min SPA. </p>
        <p>Dette har jeg gjort, fordi jeg er af den overbevisning, at der hvor jeg lærer mest, er hvor jeg er på dybt
        vand, der hvor jeg virkelig skal bruge min hjerne, og lære af de utallige fejl jeg begår igen og igen. </p>
        Har du lyst til at se nærmere på min kode, så kig endelig indenfor på min 
        <a href="https://github.com/helleflohr?tab=repositories">GitHub</a>
         </p>
        </div>
        <div class="col-2">
         <img src="./img/helle3_1.png" class="col-2-img" id="helleAbout">
         </div>
         </div>
    </article>

    <img id="myCode" data-aos="zoom-in" src="./img/coding.jpg" alt="Part of my code">

    
<div class="letters" data-aos="zoom-in">
    <article class="aboutMe_article" data-aos="zoom-in">
    <div class="flex">
        <div class="col-3">
        <h2>Den private Helle</h2>
    <p>Jeg er 35 år, gift med Thomas og mor til 3 skønne unger.</p>
    <p>Jeg er tidligere uddannet pædagog, og har været inde for faget i 9 år. Jeg valgte i efteråret 2018 at 
    søge nye udfordringer.</p>
    <p> Da jeg altid har haft it-teknisk snilde, er en kreativ person og er nysgerrig, lå det mig 
    ikke helt fjernt at skifte retning til Multimediedesigner.</p>
    <p>Jeg nyder at bruge min fritid sammen med mine venner og familie, og jeg elsker at lave smukke kager overtrukket med 
    fondant, og løbe ture for at få forbrændt alt kagen igen.</p>
    </div>

    <div class="col-3">
    <h2>Hvor finder jeg inspiration? </h2>
        <p>Inspiration er en meget fluffy ting syntes jeg. Der er inspiration de mest uforudsigelige steder. Jeg har
        oplevet at blive inspireret på gaden, i et spil, på en café, i andre mennesker eller på nettet. </p>
        <p>Det vigtigste i forhold til inspiration, tror jeg, er, at man tør gå de skæve og anderledes idéer, man får.
        Lige så vigtigt tror jeg dog at det er, at man ikke bliver så fokuseret på at tænke ud af boksen, at man ikke ser
        det der er lige foran en.</p>
    </div>
    <div class="col-3">
    <h2> Hvad er godt design? </h2>
        <p>Godt design for mig, er individuelt fra projekt til projekt. Jeg gør altid mit bedste, og designer med fokus på hvert enkelt
        projekt. </p>
        <p>Jeg brænder for det jeg laver, og vil altid gøre mit bedste i hver eneste opgave jeg får. Det er godt design for mig. </p>
        <p>Jeg gør mit bedste for altid at lytte til brugerne og virksomhederne, og skabe et lækkert færdigt produkt. Det skal se 
        godt ud, samtidig med at brugeroplevelsen altid skal være i fokus. </p></div>
    </div>
    </article>
    </div>


      <!-- Unique content ended -->  
      </section>
    `;
  }
}