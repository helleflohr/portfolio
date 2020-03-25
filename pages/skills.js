// 
export default class Skills {
  constructor() {
    this.template();
  }

  // Template for the content on the homepage
  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="skills" class="page">
        <header class="topbar">
          <h2>Kompetencer</h2>
        </header>
        <!-- Unique content on the page-->
        <article id="skills_article">
        <h1>Hvad kan jeg tilbyde?</h1>
        <div class="svg_logo_div" data-aos="zoom-in">
        <img src="./img/Html.svg" alt="HTML logo" class="svg_logo">
        <img src="./img/Css3.svg" alt="CSS logo" class="svg_logo">
        <img src="./img/javascript.svg" alt="JavaScript logo" class="svg_logo">
        <img src="./img/Github.svg" alt="Github logo" class="svg_logo">
        <img src="./img/Photoshop.svg" alt="Photoshop logo" class="svg_logo">
        <img src="./img/InDesign.svg" alt="InDesign logo" class="svg_logo">
        <img src="./img/Illustrator.svg" alt="Photoshop logo" class="svg_logo">
        <img src="./img/XD.svg" alt="XD logo" class="svg_logo">
    </div>
        <div id="skills_article_div" >
            <div class="col-3" data-aos="zoom-in">
            <h2>Web udvikling</h2>
            <p>Jeg har sans for detaljer og blik for design og brugervenlighed. Jeg har erfaring med at udvikle 
            hjemmesider i HMTL, CSS og JavaScript, samt vedligeholde en Wordpress hjemmeside</p>
            <p>Jeg har erfaring med Responsive Web Design, og forståelse for ES6 Javascript. </p>
            <p>Flere kompetencer inden for web udvikling:</p>
            <ul>
                <li> • JQuery</li>
                <li> • Headless CMS</li>
                <li> • GitHub</li>
                <li> • GitKraken</li>
                <li> • Visualstudio</li>
                <li> • Api</li>
            </ul>
            </div>
    
            <div class="col-3" data-aos="zoom-in">
    
            <h2>Design</h2>
            <p>Jeg har erfaring med at udforme wireframs og prototyper, samt forståelse for sammenhængen mellem layout, typografi og farver. </p>
            <p>Jeg har erfaring med udarbejdelse af materiale til brug både online og offline.</p> 
            <p>Jeg har erfaring med Adobe-pakken, i særdeleshed de programmer der er listet herunder: </p>
            <ul>
                <li> • Photoshop</li>
                <li> • InDesign</li>
                <li> • Illustrater</li>
                <li> • XD</li>
                <li> • Moodboard</li>
                <li> • Styletile</li>
    
            </ul>
            </div>
    
            <div class="col-3" data-aos="zoom-in">
                <h2>Kommunikation</h2>
                <p>Jeg har erfaring med at lave og udføre brugertest og brugerresearch. </p>
               <p> Jeg er godt til at koordinere i et samarbejde, og ser mig selv som en der er god til at have mange bolde i luften.</p>
               <p> Jeg har udviklet creative brief til flere projekter, samt tone of voice.</p>
               <p>Yderligere har jeg arbejdet med nedenstående værktøjer:            
                </p>
                <ul>
                <li> • UX Resarch plan</li>
                <li> • Målgruppeanalyse - herunder persona</li>
                <li> • Scrum</li>
                <li> • Projektstyring</li>
                <li> • SEO</li>
                </ul>
            </div>
           
        </div>
    
        </article>

      <!-- Unique content ended -->  
      </section>
    `;
  }
}