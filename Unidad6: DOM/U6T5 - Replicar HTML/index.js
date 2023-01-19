// Replica mediante generación con JS, manipulando el DOM, el siguiente trozo de HTML dentro 
//de un contenedor div.

window.addEventListener("load", replicarHtml);

function replicarHtml() {

//1. Contenedor DIV

    let container = document.createElement("div");
    container.className = "container";

    document.body.appendChild(container);


//2. primer div
    
    let div1 = document.createElement("div")
    div1.className = "grid__column_space1of4-3Auw";
    div1.classList.add("grid__column-2zuc");

    container.appendChild(div1)

//3. segundo div

    let div2 = document.createElement("div");
    div2.className = "grid__card-1AMl";
    div2.classList.add("grid__is_not_ad-3CXE");

    div1.appendChild(div2)

//4. article

    let article = document.createElement("article");
    article.className = "cards__postcard-37d3";
    article.classList.add("cards__postcardLandscape-3RIF");
    article.classList.add("cards__font_landscape_single_text_below_4_col-7iX7");
    article.classList.add("cards__columns-4-YOiO");
    article.classList.add("background_color_zeta");
    article.classList.add("cards__no_has_section-3wNM")

    div2.appendChild(article);

// 5. tercer div

    let div3 = document.createElement("div");
    
    article.appendChild(div3);

//6. img 

    let img = document.createElement("img");
    img.title = "";
    img.className = "cards__snap_image-aOud"
    img.loading = "lazy";
    img.src="https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024";
    img.srcset = "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024 1024w,"+
    "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=800   800w,"+
    "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=768   768w,"+
    "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=640   640w,"+
    "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=600   600w,"+
    "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=480   480w,"+
    "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=360   360w,"+
    "https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=320   320w";
    img.sizes="(min-width: 960px) 502px, (min-width: 768px) 50vw, 100vw";
    img.alt = ""
    img.setAttribute("pinger-seen",true);
    div3.appendChild(img)

//7. cuarto div (mismo nivel que el tercer div

    let div4 = document.createElement("div");
    div4.className = "cards__postcard__content-1w21"

    article.appendChild(div4);

//8. figure

    let figure = document.createElement("figure");
    figure.className = "cards__postcard__cnt_media-1R9F";

    div4.appendChild(figure)

//9. quinto div dentro de figure

    let div5 = document.createElement("div");
    div5.className = "cards__cnt_coin-2H_i"

    figure.appendChild(div5)

//10. sexto div dentro de div5

    let div6 = document.createElement("div");
    
    div5.appendChild(div6);

//11. span dentro de div6

    let span = document.createElement("span");
    span.className = "cards__postcard__channel-1-fM";
    span.classList.add("coin_undefined")

    div6.appendChild(span)

//12. septimo div dentro de div5

    let div7 = document.createElement("div");

    div5.appendChild(div7)

//13. enlace dentro de div5

    let a = document.createElement("a");
    a.href="https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html"
    a.className = "cards__link-1oHn"
    a.target = "_self";

    div5.appendChild(a)

//14. img dentro de a

    let img2 = document.createElement("img");
    img2.title="";
    img2.class="cards__image-24d0";
    img2.loading="lazy";
    img2.src="https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024";
    img2.srcset = "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024 1024w,"+
    "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=800   800w,"+
    "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=768   768w,"+
    "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=640   640w,"+
    "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=600   600w,"+
    "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=480   480w,"+
    "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=360   360w,"+
    "https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=320   320w";
    img2.sizes="(min-width: 960px) 245px, (min-width: 768px) 50vw, 100vw"
    img2.alt="Gal·la desvela en qué punto se encuentra con Miguel de Hoyos"
    img2.setAttribute("pinger-seen",true);

    a.appendChild(img2)

//15. octavo div dentro del div4 al mismo nivel que figure

    let div8 = document.createElement("div")
    div8.className="cards__postcard__cnt_info-21bV";

    div4.appendChild(div8)

//16. noveno div dentro del div8

    let div9 = document.createElement("div")
    div9.className = "sponsor__content-3-Ul";
    div9.classList.add("sponsor__typeH-3Hjq");
    div9.classList.add("sponsor__imgBand-2XTv");

    div8.appendChild(div9)

//17. decimo div dentro del div8

    let div10 = document.createElement("div")
    div10.setAttribute("data-agthe","cardTitle")
    
    div8.appendChild(div10);

//18. enlace dentro de div10

    let a2 = document.createElement("a");
    a2.class="color_eta";
    a2.href="https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html"
    a2.target="_self"

    div10.appendChild(a2)

//19. h3 dentro de a2

    let h3 = document.createElement("h3");
    h3.className="site_font";
    h3.classList.add("cards__postcard__paragraph-2EVg", "color_eta")
    h3.classList.add("color_eta")

    a2.appendChild(h3)

//20. contenido h3

    let comment1 = document.createComment(" ");

    h3.appendChild(comment1);

    let text = document.createTextNode("Gal·la desvela en qué punto se encuentra su relación con Miguel tras su rechazo en 'La isla de las tentaciones'"
    )
    h3.appendChild(text);

    let comment2 = document.createComment(" ");

    h3.appendChild(comment2);
}

