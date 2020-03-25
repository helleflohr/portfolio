// 
import _modalService from "./../services/modalService.js"
export default class Portfolio {
    constructor() {
        this.template()
        this.modalService = _modalService;
    }

    // Template for the content on the homepage
    template() {
        document.getElementById('content').innerHTML += /*html*/ `
        <section id="portfolio" class="page">
          <header class="topbar">
            <h2>Portfolio</h2>
          </header>
          <!-- Unique content on the page-->
          <div id="portfolio_article">
          <h1>Mine projekter</h1>
          <p>Indtil videre har jeg under min uddannelse tilegnet mig praktiske kompetencer indenfor grafisk design,
           UI, UX, kommunikation og programmering.</p>
            <p>Her er der et udpluk af nogle af de projekter jeg har lavet på Multimediedesigner uddannelsen. De er 
            listet i kronologisk rækkefølge, med de nyeste projekter først.</p>
            <p></p>Hvis du er interesseret i at læse mere om de forskellige projekter, og processen i dem, så skal du være
            velkommen til at klikke dig ind.</p>
            <p>God læselyst.</p>
      </div>
      <div class="container">

<!-- Web Application | Dit Festspil-->
          <div class="cell modal-btn" data-modal="webapp" data-aos="zoom-in"><img src="img/webapp3.jpg" alt="WebApp - Dit festspil" class="image">
              <p class="middle">Web Application</p>
          </div>
          <div id="webapp" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2> 3. semester eksamen | Web Application</h2>
                  </div>
                  <div class="modal-body">
                      <div class="col-2">
                          <h3> Om Web Application projektet </h3>
                          <p>Dette var vores første eksamen på 3.semester - Frontend Developer linjen. </p>
                              <p>Vi skulle udvikle et koncept til en web app, og det skulle være en interaktiv prototype, der
                              skulle implementeres med JavaScript, HTML:5 og CSS. Webappen skulle
                              demonstrere de essentielle dele af vores koncept, og demonstrere de kompetencer vi havde
                              fået i vores korte tid på specialiseringen. </p>
                              <p>Vores idé var en festspilsapp, hvor deltagerne selv skulle have mulighed for at tilføje
                              indhold
                              til kendte selskabs- og druklege som "Jeg har aldrig...", "Kategorien er...", "Hvem er mest
                              tilbøjelig til.. " m.fl.</p>
                              <p>Vi benyttede os af Firebase til at opsamle og lagre informationer omkring indholdet til
                              vores
                              web app. Vi benyttede ES6 classses og modules, samt en Single Page Application opbygning.
                          </p>
      
                          <h3> Udarbejdet med: </h3>
                          <ul>
                              <li> • HTML:5</li>
                              <li> • CSS</li>
                              <li> • JavaScript</li>
                              <li> • Firebase</li>
                              <li> • ES6: modules og classes</li>
                              <li> • Single Page Application</li>
                          </ul>
                          <h3> Karakter: 12 </p>
                          </h3>
      
                      </div>
                      <div class="col-2"><img class="col-2-img" src="img/webapp3.jpg" alt="Mockup WebApp projektet"><img class="col-2-img" src="img/webapp2.jpg" alt="Mockup WebApp projektet"></div>
                      
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
      
<!-- Undervisning | Movie App-->
<div class="cell modal-btn" data-modal="movieapp" data-aos="zoom-in"><img src="img/movie.jpg" alt="Movie app - undervisning" class="image">
<p class="middle">Movie App</p>
</div>
<div id="movieapp" class="modal">
<div class="modal-content">
    <div class="modal-header">
        <span class="close">&times;</span>
        <h2> Undervisning | Movie App </h2>
    </div>
    <div class="modal-body">
        <div class="col-2">
            <h3> Om Movie app opgaven </h3>
            <p>Dette er en af de mange små opgaver vi er blevet stillet i vores undervisning på 3.semester.</p>
            <p>Her har vi arbejdet med headless cms, wordpress json API og fetch. Kravet var at denne app skulle kunne
            hente, vise og sortere en masse film posts. Sorteringen skulle både kunne foregå ved input, efter årstal, tittel mfl.</p>
            <p>Grunden til at jeg har projektet med her, er fordi jeg syntes det viser meget godt hvor langt man kan komme på kort 
            tid, med den rette undervisning og vejledning. Da jeg startede på 3.semester kunne jeg ikke meget JAvascript, og kendte 
            da slet ikke til headless CMS, og alligevel inden for næsten en uge, vi fået denne op og stå. </p>
            <p><a href="https://helleflohr.dk/movieapp/" class="link-dark">Link</a> til det fungerende produkt, og <a href="https://github.com/helleflohr/movieapp" class="link-dark">link</a> til Github</p>
        </div>
        <div class="col-2">
        <img class="col-2-img" src="img/movie3.jpg" alt="Mockup WebApp projektet">
        <img class="col-2-img" src="img/movie2.jpg" alt="Mockup WebApp projektet">
        </div>
        
    </div>
    <div class="modal-footer">
    </div>
</div>
</div>

          <!-- Eksamensprojekt 2.semester | Anker Andersen A/S-->
          <div class="cell modal-btn" data-modal="aa" data-aos="zoom-in"><img src="img/AA.jpg" alt="Mockup Anker Andersen A/S" class="image">
              <p class="middle">Anker Andersen A/S</p>
          </div>
          <div id="aa" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2> Eksamensprojekt 2.semester | Anker Andersen A/S</h2>
                  </div>
                  <div class="modal-body">
                  <div class="col-2 half">
                            <img class="col-2-img" src="img/AA1.jpg" alt="Mockup Anker Andersen projektet">
                            <img class="col-2-img" src="img/AA2.jpg" alt="Rapport Anker Andersen A/S">
                            <img class="col-2-img"src="img/AA3.jpg" alt="Rapport Anker Andersen A/S">
                            <img class="col-2-img" src="img/AA.jpg" alt="Mockup Anker Andersen projektet">
                            <img class="col-2-img"src="img/AA4.jpg" alt="Rapport Anker Andersen A/S"></div>
                        
                      <div class="col-2">
                          <h3> Om Anker Andersen A/S projektet </h3>
                          <p>Som afslutning på første studieår skulle vi gennemføre et tværfagligt projektforløb, der
                              skulle
                              afspejle væsentlige dele af alle områder fra uddannelsens 2. semester.
                              Projektet havde til formål at kombinere de emner, vi havde været igennem, således at der
                              blev
                              skabt grundlag for en tværfaglig projekt-eksamen.
                              Vi skulle udvikle et koncept og en interaktiv digital prototype for en virksomhed, samt
                              argumentere for, hvordan konceptet skabte værdi for kunden.
                              Koncept og prototype skulle dokumenteres gennem en rapport. </p>
                              <p>Projektet var et gruppeprojekt. </p>
                              <p>Vi fik kontakt til Anker Andersen A/S, der er førende indenfor udvikling og konstruering af
                              højhastigheds tælle- og sorteringsmaskiner til emballage af plast, glas og metal.
                              De ønskede vores idé til hvordan man kunne visualisere de data deres maskiner opsamler, hver
                              gang de køre om batch, sæk, emballager igennem. Det var en virkelig spændende
                              opgave, og meget anderledes end det vi ellers har beskæftiget os med, da dette var en B2B
                              opgave. Opgaven greb om sig i forhold til JavaScript, og vi blev virkelig udfordret
                              og lærte en masse.
                          </p>
      
                          <h3> Udarbejdet med: </h3>
                          <ul>
                              <li> • HTML:5</li>
                              <li> • CSS</li>
                              <li> • JavaScript</li>
                          </ul>
                          <h3> Karakter: 12 </h3>
                      </div>
                      </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
          
<!-- NATRUBØRNEHAVEN BAKKELY-->
          <div class="cell modal-btn" data-modal="bakkely" data-aos="zoom-in"><img src="img/bakkely.jpg" alt="Naturbørnehaven Bakkely"
                  class="image">
              <p class="middle">Naturbørnehaven Bakkely</p>
          </div>
          <div id="bakkely" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2> Naturbørnehaven Bakkely | Privat børnehaven i Stilling ved Skanderborg </h2>
                  </div>
                  <div class="modal-body">
                      <div class="col-2">
                          <h3> Om Naturbørnehaven Bakkely </h3>
                          <p> Det eneste projekt her på siden der skiller sig ud er Naturbørnehaven Bakkely. Det er den børnehave
                              mine børn går og har gået i siden december 2013. Jeg har siden marts 2014 været en del af bestyrelsen i
                              børnehaven, og er i den forbindelse blevet administrator på deres 
                              <a href="https://www.bakkelystilling.dk/" class="link-dark">wordpress side</a>, samt deres 
                              <a href="https://www.facebook.com/Naturb%C3%B8rnehaven-Bakkely-521683947883092/" class="link-dark"> facebook side.</a> </p>
                              <p>I løbet af uddannelsen til Multimediedesigner har jeg lavet trykt
                              materiale til dem i form af diverse foldere.
                              Det har både været en info folder om børnehaven, en velkomstfolder til nye børn, samt en
                              info folder omkring det er være Brumbasse, en del af storbørnsgruppen, i børnehaven. Der ud over har 
                              jeg også fornyet børnehavens logo. </p>
                              <p>Det har var været fantastisk at have mulighed for at bruge nogle af alle de ting jeg har
                              lært under min uddannelse, til at gøre noget godt for børnehaven, og til at øve mig med. </p>
                          <h3> Programmer der er arbejdet med: </h3>
                          <ul>
                              <li> • WordPress</li>
                              <li> • Illustrator</li>
                              <li> • InDesign</li>
                          </ul>
      
                          
                      </div>
                      <div class="col-2 half">
                      <img class="col-2-img" src="img/bakkelyLogo.png" alt="Bakkely Logo">
                      <img class="col-2-img" src="img/bakkelyInfo.jpg" alt="Velkomstfolder Naturbørnehaven Bakkely"> 
                      <img class="col-2-img" src="img/bakkelyVelkommen.jpg" alt="Velkomst folder til nye børn i Naturbørnehaven Bakkely">
                      <img class="col-2-img" src="img/bakkelyBrumbasse.jpg" alt="Brumbasse folder til Bakkely">
                      </div>
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
      
<!-- Specialisering 2.semester | Illustrator -->      
          <div class="cell modal-btn" data-modal="illustrator" data-aos="zoom-in"><img src="img/illustrator.jpg"
                  alt="Illustrator illustrationer" class="image">
              <p class="middle">Illustrator</p>
          </div>
          <div id="illustrator" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2> Specialisering 2.semester | Illustrator </h2>
                  </div>
                  <div class="modal-body">
                  <div class="col-2"><img class="col-2-img-small" src="img/spiderman.png"
                              alt="Spiserman illustration">
                          <img class="col-2-img-small" src="img/illustrator8.jpg" alt="Illustrator element"><img
                              class="col-2-img-small" src="img/illustratorz.jpg" alt="Illustrator element"> </div>
                      <div class="col-2">
                          <h3> Om specialiseringsprojektet </h3>
                          <p> I dette projekt skulle vi finde noget der interesserede os, og dykke mere ned i det. Det
                              kunne
                              være kode, animation, Adobe programmer mm. </p>
                              <p>Jeg valgte at bruge min tid på at blive bedre til Adobe Illustrator, nærmere bestemt "Pen
                              Tool".
                          </p>
                          <h3>Formål:</h3>
                          <ul>
                              <li> • At prøve uddannelsens emner af og finde dine egne interesser</li>
                          </ul>
                          <h3>Rammer:</h3>
                          <ul>
                              <li> • Individuelt eller i grupper på 2 - 3 personer</li>
                          </ul>
                          <h3>Indhold:</h3>
                          <ul>
                              <li> • Læs: Dyk ned i et emne, som I gerne vil vide mere om</li>
                              <li> • Løs: Find en opgave – eller lav en selv - som I har lyst til at arbejde med</li>
                              <li> • Træn: Øv jer i noget, som I synes, I trænger til at arbejde mere med</li>
                          </ul>
                          <h3> Udarbejdet i: </h3>
                          <ul>
                              <li> • Adobe Illustrator</li>
                          </ul>
                          <h3> Karakter:<p class="itallic"> Godkendt </p>
                          </h3>
                      </div>
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
      
<!-- SoMe | Flixbus / Håndbdold -->      
          <div class="cell modal-btn" data-modal="some" data-aos="zoom-in"><img src="img/soMe.jpg" alt="SoMe - FlixBus/Håndbold"
                  class="image">
              <p class="middle">SoMe</p>
          </div>
          <div id="some" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2> SoMe | Flixbus / Håndbdold </h2>
                  </div>
                  <div class="modal-body">
                      <div class="col-2">
                          <h3> Om SoMe projektet </h3>
                          <p>Vi skulle designe og udvikle en interaktiv brugeroplevelse til et sportsevent efter eget
                              valg.
                              Opgaven lød på at brugerne skulle interagere med digitale
                              devices i rummet eller ting i omgivelserne. Det kunne altså ikke være noget man kunne bruge
                              hjemmefra.
                              Projektet blev afrundet med udvikling af en Social Mediestrategi om løsningen. </p>
                              <p>Dette var et gruppeprojekt. </p>
                              <p>Vi valgte at se på en løsning for Flixbus, i forbindelse med Lige Håndbold i Danmark. Tanken
                              var
                              at når man kommer ind i indgangshallen til en håndboldhal,
                              skal der være noget at fordrive tiden med. Her skulle så stå en stor boks, som man kunne gå
                              ind
                              igennem. På væggen af denne boks skulle der være en illustration
                              med en Flixbus, der kørte igennem en masse nationale og internationale byer. Når bussen
                              kommer
                              til en ny by, kommer et byskilt op, men bynavn og lokal temperatur.
                              Ned fra loftet skulle der hænge mange 1000 håndbolde, og når man rørte ved en af disse,
                              skulle
                              der komme noget interaktion på skærmen. Vi fik kodet det sådan at der
                              kom fyrværkeri på skærnem når man trykker på piletasterne, som, ved hjælp af makeymakey var
                              tilsluttet håndbolde. </p>
                              <p>Sjovt og anderledes projekt, der virkelig satte kreativiteten i gang hos alle
                              gruppemedlemmer.
                              </p>
                              <p><a href="https://helleflohr.dk/eaaa/SoMe/"class="link-dark">Link</a> til vores løsning. Benyt piletasterne for
                              at
                              få fyrværkeri. Da løsningen er lavet specifikt til en 1366 x 768 skærmopløsning,
                              kan propertionerne være lidt skøre på andre skærme.</p>
      
                          <h3> Udarbejdet med: </h3>
                          <ul>
                              <li> • HTML:5</li>
                              <li> • CSS</li>
                              <li> • JavaScript</li>
                              <li> • Api</li>
                              <li> • Photoshop</li>
                              <li> • Illustrator</li>
                          </ul>
                          <h3> Karakter:<p class="itallic"> Godkendt </p>
                          </h3>
      
      
                      </div>
                      <div class="col-2"><img class="col-2-img" src="img/soMe.jpg" alt="Mockup SoMe projektet"> <img
                              class="col-2-img-small" src="img/flixbus.gif" alt="Flixbus gif"></div>
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
      
<!-- FindMe! | GastroFun-->      
          <div class="cell modal-btn" data-modal="gastrofun" data-aos="zoom-in"><img src="img/gastro.jpg" alt="Gastro Fun" class="image">
              <p class="middle">GastroFun</p>
          </div>
          <div id="gastrofun" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2>FindMe! | GastroFun</h2>
                  </div>
                  <div class="modal-body">
                  <div class="col-2"><img class="col-2-img" src="img/gastro.jpg" alt="Mockup af FindMe! projektet">
                          <img class="col-2-img" src="img/gastro2.jpg" alt="Mockup af FindMe! projektet"> </div>
                      <div class="col-2">
                          <h3>Om FindMe! projektet</h3>
                          <p>FindMe! projektet er fra 2.semester på Erhvervsakademi Aarhus. FindMe! var en case med fokus
                              på
                              Content og Search Engine Optimization. Vi skulle gøre rede for SEO-tiltag, lave en
                              content-strategi og udvikle content i WordPress,
                              hvor indholdet var optimeret til søgemaskiner. </p>
                              <p>Opgaven var udformet således, at vi arbejdede med en passiv kunde, hvilket vil sige at vi
                              ikke på noget tidspunkt var i kontakt med kunden. </p>
                              <p>FindMe! var en individuel opgave. </p>
                          <h3>Læringsmål i Projektet:</h3>
                          <ul>
                              <li>Evne til at:</li>
                              <li> • Beskrivelse en målgruppe, incl. en segmentering, der skulle laves content til</li>
                              <li> • Udforme en SEO-strategi diskussion</li>
                              <li> • Udforme en teknisk analyse af og forslag til SEO-forbedringer til en eksisterende
                                  hjemmeside</li>
                              <li> • Udforme en tone of voice-guide baseret på en analyse af, hvilken tone of voice siden
                                  burde have</li>
                              <li> • Lave en analyse af relevante keywords</li>
                              <li> • Lave en content marketing diskussion for kunden</li>
                          </ul>
                          <h3>Arbejdet i:</h3>
                          <ul>
                              <li>• WordPress - med fokus på SEO addon Yoast</li>
                          </ul>
                          <h3> Karakter:<p class="itallic"> Godkendt </p>
                          </h3>
      
                      </div>
                  </div>
                  <div class="modal-footer">
              </div>
              </div>
          </div>
      
<!-- Eksamen 1.Semester | Hjem-Is -->      
          <div class="cell modal-btn" data-modal="hjemis" data-aos="zoom-in"><img src="img/hjemis.jpg" alt="Hjemis" class="image">
              <p class="middle">HjemIs</p>
          </div>
          <div id="hjemis" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2> Eksamen 1.Semester | Hjem-Is </h2>
                  </div>
                  <div class="modal-body">
                      <div class="col-2">
                          <h3> Om Hjem-Is projektet </h3>
                          <p> <a href="https://helleflohr.dk/eaaa/hjemis" class="link-dark">Hjem-Is</a> projektet var vores eksamensprojekt på 1. semester på Erhvervsakademi Aarhus. </p>
                             <p> I dette projekt skulle vi skabe en prototype på et website,
                              der skulle udforske Mobile First paradigmet og Responsive Web Design strategien.
                              Dette krævede analyse af brugeradfærden specifikt for mobile devices. </p>
                              <p>Vi skulle bruge Responsive Web Design teknikken og komme med en løsning, der
                              omfattede alle devices. </p> 
                              <p>Siden skulle fungere som en informationsside
                              hvor man f.eks. kunne lære mere om produktet, om anvendelsen af det, se billeder
                              eller måske endda deltage i konkurrencer. </p> 
                              <p>Vi skulle selv lave content baseret på hvilke behov vores målgruppe havde, når det kommer til det valgte
                              produkt.
                          </p>
                          <h3>Krav til processen:</h3>
                          <ul>
                              <li> • Vælge en udviklingsmetode og bruge denne i projektet</li>
                              <li> • Analysere virksomheden i fht. det valgte produkt. Udfyld relevante dele af en
                                  BMC
                                  og en SWOT-TOWS</li>
                              <li> • Indsamle og anvende data om bruger og brugssituation, som blev samlet i en
                                  persona</li>
                              <li> • Udvikle et visuelt design</li>
                              <li> • Teste prototypen undervejs i processen. Til dette skulle der benytte mindst 2
                                  testmetoder</li>
                          </ul>
                          <h3> Krav til det digitale produkt: </h3>
                          <ul>
                              <li> • Sitet skulle have en responsiv navigation med minimum 4 fire fungerende links
                              </li>
                              <li> • Sidet skulle have relevant, originalt indhold tilpasset virksomheden og
                                  målgruppen</li>
                              <li> • Sitet skulle være responsiv</li>
                              <li> • Sitet skull være valideret, SEO-optimeret, og der skulle være taget hensyn
                                  til
                                  performance, herunder Page Load Time</li>
                          </ul>
                          <h3> Udarbejdet i: </h3>
                          <ul>
                              <li> • HTML:5</li>
                              <li> • CSS</li>
                              <li> • Mobile First</li>
                          </ul>
                          <h3> Karakter: 12 </h3>
                      </div>
                      <div class="col-2"><img class="col-2-img" src="img/hjemis.jpg"
                              alt="Mockup af HjemIs eksamensprojekt 1.semester"> <img class="col-2-img"
                              src="img/hjemisPhone.jpg" alt="Mockup af HjemIs eksamensprojekt 1.semester"><img
                              class="col-2-img-small" src="img/logoHjemis.png" alt="Logo Hjemis"> </div>
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>

<!-- Mobile First | BilligBlomst -->      
          <div class="cell modal-btn" data-modal="billigblomst" data-aos="zoom-in"><img src="img/billigBlomstlap.jpg" alt="BilligBlomst"
                  class="image">
              <p class="middle" onclick="openModal()">BilligBlomst</p>
          </div>
          <div id="billigblomst" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2>Mobile First | BilligBlomst</h2>
                  </div>
                  <div class="modal-body">
                  <div class="col-2"><img class="col-2-img" src="img/billigblomst.jpg"
                              alt="Mockup af BilligBlomst projektet"> <img class="col-2-img" src="img/billigBlomstlap.jpg"
                              alt="Mockup af BilligBlomst projektet"> </div>
                      <div class="col-2">
                          <h3>Om Mobile First projektet</h3>
                          <p>Dette projekt var det 3.projekt vi havde på første semester på Multimediedesigner
                              uddannelen. </p> 
                              <p>I dette projekt skulle vi skabe et website, der udforskede Mobile First
                              paradigmet og Responsive Web Design strategien. </p>
                              <p>Vi skulle arbejde for en rigtig kunde efter eget valg. Vi skulle indsamle information
                              om
                              brugeradfærden specifikt for mobil device, for at kunne udarbejde denne website. </p>
                              <p>Vi skulle bruge Responsive Web Design teknikken og komme med en løsning, der
                              omfattede alle enheder: smartphone, tablet, laptop og desktop. </p>
                              <p>Mobile First var et gruppeprojekt. </p>
                          <h3>Læringsmål i Projektet</h3>
                          <ul>
                              <li>Evne til at:</li>
                              <li> • Analysere kundens digitale udfordring</li>
                              <li> • Skabe ekstra værdi for kundens brugere</li>
                              <li> • Anvende personas og wireframes ved design</li>
                              <li> • Anvende en designproces og argumentere for brug af designelementer og
                                  komposition
                              </li>
                              <li> • Anvende brugertest til design-iterationer</li>
                              <li> • Argumentere for valget af indhold, funktionalitet og visuel stil</li>
                              <li> • Udvikle og bygge en digital brugergrænseflade</li>
                              <li> • Bygge et responsivt website ud fra Mobile First tilgangen</li>
                              <li> • Formidle og kommunikere</li>
                              <li> • Deltage i team- og projektarbejde</li>
                          </ul>
                          <h3>Udarbejdet i:</h3>
                          <ul>
                              <li>• HTML:5</li>
                              <li>• CSS</li>
                          </ul>
                          <h3>Karakter: <p class="itallic"> Godkendt </p>
                          </h3>
                      </div>
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
      
<!-- Online Magazine | Bagte lækkerier -->      
          <div class="cell modal-btn" data-modal="onlineMagazine" data-aos="zoom-in"><img src="img/onlineMagazine.jpg" alt="Online magazine"
                  class="image">
              <p class="middle">Online magazine</p>
          </div>
          <div id="onlineMagazine" class="modal">
              <div class="modal-content">
                  <div class="modal-header">
                      <span class="close">&times;</span>
                      <h2> Online Magazine | Bagte lækkerier </h2>
                  </div>
                  <div class="modal-body">
                      <div class="col-2">
                          <h3> Om Online Magazine projektet </h3>
                          <p> Online Magazine projektet var vores andet projekt på 1. semester på Erhvervsakademi
                              Aarhus. </p>
                              <p> I denne case skulle vi se os selv som fremtidens content creator. For at kunne skabe godt
                              content skulle vi kende vores målgruppe godt, og vi skulle skrive interessant, 
                              oplysende og kreativt content. </p>
                              <p>Dette projekt skulle give os erfaring i at skrive content til en bestemt målgruppe.
                              Vi skulle træffe alle beslutninger, som normalt ville træffes på et redaktionskontor
                              på et magasin eller avis. </p> 
                              <p>Ud over at skrive artikler skulle vi holde øje med tidsforbrug, deadlines og prioritere 
                              de forskellige opgaver. </p>
                              <p>Til denne case var målgruppen givet, idet vi skulle lave et online magasin til vores
                              medstuderende. </p>
                          <h3> Læringsmål i Projektet: </h3>
                          <ul>
                              <li> • Træning i at vælge og udarbejde content til en specifik målgruppe, vælge
                                  content
                                  - typer og formidle indhold hensigtsmæssigt på en skærm </li>
                              <li> • Træning i den kreative analoge proces og udarbejdelse af færdige mockups
                              </li>
                              <li> • Træning i at udvikle en digital brugergrænseflade </li>
                              <li> • Træning i at konstruere et responsivt website </li>
                          </ul>
                          <h3> Udarbejdet i: </h3>
                          <ul>
                              <li> • HTML:5</li>
                              <li> • CSS</li>
                          </ul>
                          <h3> Karakter:<p class="itallic"> Godkendt </p>
                          </h3>
                      </div>
                      <div class="col-2"><img class="col-2-img-small" src="img/logoOnline.png"
                              alt="Logo fra Online Magazine"> <img class="col-2-img" src="img/onlineMagazinePhone.jpg"
                              alt="Mockup af Online Magazine"> <img class="col-2-img" src="img/onlineMagazine.jpg"
                              alt="Mockup af Online Magazine">
                      </div>
                  </div>
                  <div class="modal-footer">
                  </div>
              </div>
          </div>
      
      
      
      </div>
          </article>
  
        <!-- Unique content ended -->  
        </section>`;

    }

}