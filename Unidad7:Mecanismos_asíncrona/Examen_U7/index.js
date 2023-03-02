const API_KEY = "b48ebc75f49a471881849e8eda75af48";
const TRENDING_MOVIES_URL = "trending/movie/week";
const API_BASE_URL = `https://api.themoviedb.org/3/${TRENDING_MOVIES_URL}?api_key=${API_KEY}`;

window.onload = ()=>{
    document.getElementById('carga_peliculas').addEventListener('click', cargar_peliculas);
    document.getElementById('guarda_fav_fetch').addEventListener('click', guardar_fav_fetch);
    document.getElementById('obtener_fav_xml').addEventListener('click', obtener_fav_xml);
    document.getElementById('limpiar_fichas').addEventListener('click', limpiar_fichas);
}

let peliculas_modificadas=[]
let peliculas_fav=[]
let peliculas_fav_id = []
let aux = []

function cargar_peliculas(){
    console.log('cargar_peliculas');
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange= ()=>{
        if(xhr.status ===200 && xhr.readyState===4){
            let peliculas = JSON.parse(xhr.responseText)
            let lista_peliculas = peliculas.results
            lista_peliculas.forEach(pelicula => {
                procesa_datos(pelicula);
            });
            muestra_fichas_peliculas(peliculas_modificadas)
            document.getElementById("informacion").innerHTML= 'Peliculas cargadas'
        }
    }
    xhr.open('GET',API_BASE_URL)
    xhr.send()
}

function procesa_datos(pelicula){
    console.log('procesa_datos')
    let pelicula_mod = {
        id:pelicula.id,
        original_title: pelicula.original_title,
        overview: pelicula.overview,
        original_language: pelicula.original_language,
        release_date: pelicula.release_date,
        vote_average: pelicula.vote_average,
        poster_path:`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`,
    }
    peliculas_modificadas.push(pelicula_mod)
}

function muestra_fichas_peliculas(peliculas_modificadas){
    console.log("Muestra_fichas_peliculas")
    let container = document.getElementById('resultados')

    peliculas_modificadas.forEach((pelicula)=>{
        ///card
        let card = document.createElement('div')
        card.className = 'card'
        card.style = 'width:350px'

        //imagen de la card
        let img_card = document.createElement('img')
        img_card.className = 'card-img-top'
        img_card.classList.add('mt-2')
        img_card.src = pelicula.poster_path
        img_card.alt = 'cartel peliculas'

        card.appendChild(img_card)

        //cuerpo de la card
        let card_body = document.createElement('div')
        card_body.className = 'card-body'

        //datos de la película
        //name:
        let h4_title = document.createElement('h4')
        h4_title.appendChild(document.createTextNode(pelicula.original_title))
        //fav
        let img = document.createElement('img')
        img.src='heart_border.png'
        img.className='like'
        img.id=pelicula.id
        img.style='width:5%;'

        img.addEventListener('click',()=>{ 
            
            // let click_id = document.getElementById(pelicula.id).getAttribute('id')
            // let img_click = document.getElementsByClassName('like')
            // console.log(img_click)
            
            // for (let i = 0; i < img_click.length; i++) {
            //     if(img_click[i].getAttribute('id') === click_id){
            //         console.log(img_click[i])
            //         img_click[i].removeAttribute('src')
            //         img_click[i].src='heart_border.png'
            //     }
            // }

            img.removeAttribute('src')
            img.src='heart_filled.png'
            peliculas_fav.push(pelicula)
            peliculas_fav_id.push(pelicula.id)

        })

        //date
        let p_date = document.createElement('p')
        p_date.appendChild(document.createTextNode(`Date: ${pelicula.release_date}`))
        //vote
        let p_vote = document.createElement('p')
        p_vote.appendChild(document.createTextNode(`Vote: ${pelicula.vote_average}`))
        //overview
        let p_overview = document.createElement('p')
        p_overview.appendChild(document.createTextNode(`Overview: ${pelicula.overview}`))

        card_body.appendChild(h4_title)
        card_body.appendChild(img)
        card_body.appendChild(p_date)
        card_body.appendChild(p_vote)
        card_body.appendChild(p_overview)

        card.appendChild(card_body)
        container.appendChild(card)
    })
}

function limpiar_fichas(){
    console.log('borrando fichas')
    document.getElementById('resultados').innerHTML=""
    document.getElementById('informacion').innerHTML="Fichas borradas"
    
}

function guardar_fav_fetch(){
    peliculas_fav
    console.log('Guardando favoritos')
    fetch('save_movies.php',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(peliculas_fav)
    }).then((response)=>{
        if (response.ok) return response.json();
    }).then((datos)=>{
        console.log(datos);
        document.getElementById("informacion").innerHTML += `<br> Peliculas favoritas guardadas en BD con metodo FETCH`;
    }).catch((err)=>{
        console.log(err);
        document.getElementById("informacion").innerHTML += `<br> ${err.message}`;
    });
}

function obtener_fav_xml(){
    console.log("obtener_fav_xml")

    let xhr = new XMLHttpRequest();
    document.getElementById('resultados').innerHTML = ""
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4 && xhr.status ===200){
            let favoritos = JSON.parse(xhr.responseText)
            muestra_fichas_peliculas(favoritos)
            document.getElementById('informacion').innerHTML+= '<br> Lista de favoritos cargada (XML)'
        }
        
    }
    xhr.open('GET', 'get_favs.php');
    xhr.send()
}

