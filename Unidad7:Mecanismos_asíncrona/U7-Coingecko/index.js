window.onload = () =>{
    document.getElementById('carga_xml').addEventListener('click',carga_cripto_xml);
}
//variable global
let coins;
let ids = ["bitcoin", "ethereum", "tether", "binancecoin", "usd-coin", 
            "ripple", "cardano", "solana", "terra-luna", "binance-usd",]
//carga de coins
function carga_cripto_xml(){
    console.log('cargando criptomonedas xml')
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () =>{
        if(xhr.readyState===4 && xhr.status===200){
            document.getElementById("informacion").innerHTML = 'Datos coins cargados'
            coins = JSON.parse(xhr.responseText)
            generar_tabla_coins(coins)
            select_datos_coins(coins, ids)
        }
    }
    xhr.open('GET', 'https://api.coingecko.com/api/v3/coins/list')
    xhr.send()
}
//generacion de tabla coins
function generar_tabla_coins(coins){
    console.log('generar tabla coins')
    let contador = 0

    let container_table = document.getElementById('resultados');
    container_table.innerHTML = "";

    let table = document.createElement('table');
    let tr_cabecera = document.createElement('tr')

    let cabeceras  = ['id', 'symbol','name']
    cabeceras.forEach((cabecera) => {
        let th = document.createElement('th')
        th.appendChild(document.createTextNode(cabecera))
        tr_cabecera.appendChild(th)
    })

    table.appendChild(tr_cabecera)

    coins.forEach((coin) =>{
        contador+=1
        let tr = document.createElement('tr');

        for (const camp in coin){
            let td = document.createElement('td');
            td.appendChild(document.createTextNode(coin[camp]))
            tr.appendChild(td);
        }

        table.appendChild(tr)
    })

    container_table.appendChild(table)
    document.getElementById("informacion").innerHTML += `<br> Tabla coins generada. ${contador} registros`;
}

function select_datos_coins(coins, ids){
    console.log("Select dinamico")
    let select = document.getElementById('criptomonedas');
    select.innerHTML=""
    for (let moneda of ids) {
        for (let coin of coins) {
            if (coin.id == moneda) {
                let option = document.createElement("option");
                option.setAttribute("value", coin.id);
                option.innerHTML = coin.name;
                select.appendChild(option);
            }
        }
    }
    document.getElementById("informacion").innerHTML += '<br> Select dinámico generado'
    select.addEventListener('change', mostrar_datos)
}

function mostrar_datos(){
    let valor = document.getElementById('criptomonedas').value
    document.getElementById('resultados').innerHTML = "";

    fetch(`https://api.coingecko.com/api/v3/coins/${valor}`)
    .then((response) => {
        if (response.ok) return response.json()
    })
    .then((datos)=>{
        let moneda = {
            "symbol": datos.symbol,
            "name": datos.name,
            "image_url": datos.image.large,
            "current_price_eur": datos.market_data.current_price.eur
        }
        mostrar_ficha_moneda(moneda)
        guarda_moneda_BBDD(moneda)
    }).catch((err)=>{console.log(err)})

    document.getElementById("informacion").innerHTML += `<br> Datos de ${valor} mostrados`
}

function mostrar_ficha_moneda(moneda){
    console.log("Mostrar Ficha")
    let container = document.getElementById('resultados')
    container.innerHTML = ""
    ///card
    let card = document.createElement('div')
    card.className = 'card'
    card.style = 'width:350px'
    //imagen de la card
    let img_card = document.createElement('img')
    img_card.className = 'card-img-top'
    img_card.classList.add('mt-2')
    img_card.src = moneda.image_url
    img_card.alt = 'imagen del usuario'

    card.appendChild(img_card)
    //cuerpo de la card
    let card_body = document.createElement('div')
    card_body.className = 'card-body'

    //datos del usuario1-
    //name:
    let h4_name = document.createElement('h4')
    h4_name.appendChild(document.createTextNode(moneda.name))
    //phone
    let p_symbol = document.createElement('p')
    p_symbol.appendChild(document.createTextNode(`Simbolo: ${moneda.symbol}`))
    //street
    let p_price = document.createElement('p')
    p_price.appendChild(document.createTextNode(`Precio: ${moneda.current_price_eur}`))

    card_body.appendChild(h4_name)
    card_body.appendChild(p_symbol)
    card_body.appendChild(p_price)
    card.appendChild(card_body)

    container.appendChild(card)
}

function guarda_moneda_BBDD(moneda){
    console.log("guardando moneda")
    document.getElementById("informacion").innerHTML += `<br> ${moneda.name} guardad en la BBDD`
    fetch('guardar_moneda.php',
    {
        method: 'POST',
        headers:{
            "Content-type": "application/json"    
        },
        body: JSON.stringify(moneda)
    })
    .then((response) => {
        if(response.ok) return response.json()
    })
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{console.log(err)})
}

