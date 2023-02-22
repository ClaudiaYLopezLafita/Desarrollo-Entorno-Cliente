# Coingecko

Vamos a obtener la información de ciertas criptomonedas, y para ello vamos a utilizar la API de Coingecko. La documentación de la API la podemos encontrar [aquí](https://www.coingecko.com/es/api/documentation).

Las diferentes consultas que podemos realizar a la API son:

 - **/coins/list**: Obtener una lista de criptomonedas.
 - **/coins/:coin_id**: Obtener información de una criptomoneda.

Vamos a diseñar una web que nos permita, a partir de una criptomoneda, obtener cierta información de la misma.

# Parte 1

Diseñamos un HTML que contenga un botón "Cargar criptomonedas (XMLHttpRequest)", que realizará una petición `GET` a la url `https://api.coingecko.com/api/v3/coins/list`. El servidor responderá con un `JSON`, que será un array de las criptomonedas disponibles. Ejemplo:

    ```json
    [
        {
            "id": "bitcoin",
            "symbol": "btc",
            "name": "Bitcoin"
        },
        {
            "id": "binance-usd",
            "symbol": "busd",
            "name": "Binance USD"
        },
        // ...
    ]
    ```
La respuesta la guardaremos en una variable global `coins`. Nos servirá luego para acceder desde cualquier función. 

Con los resultados construiremos una tabla HTML que muestre la lista de criptomonedas (puede que se ralentice el PC, son más de 12000 registros).

# Parte 2

Recogeremos la información de las 10 primeras criptomonedas, con los siguientes `id`: 

    ["bitcoin", "ethereum", "tether", "binancecoin", "usd-coin", "ripple", "cardano", "solana", "terra-luna", "binance-usd"]

Con un `select` tendremos todos esos `id` en el value de cada option. Utiliza dos `for` anidados para recorrer el array de criptomonedas y crear un `option` por cada una, coincidiéndolo con el campo `id`, poniendo como `innerHTML` del `select`  el nombre del símbolo y como `value` el valor del `id`. Ejemplo:

    <option value="binance-usd">Binance USD</option>

Cuando se cambie la selección del `select`, se ejecutará una función que obtendrá la información de la criptomoneda seleccionada.

Haremos mediante una petición `GET` a la url `https://api.coingecko.com/api/v3/coins/<COIN_ID>` la cual nos devolverá la información de la criptomoneda. Puedes ver un ejemplo de respuesta sobre _bitcoin_ aquí: https://api.coingecko.com/api/v3/coins/bitcoin

De todo el resultado, queremos extraer únicamente los siguientes campos:

    - symbol
    - name
    - image.large
    - market_data.current_price.eur

Crearemos por tanto un objeto con la siguiente estructura:

    ```json
    {
        "symbol": "btc",
        "name": "Bitcoin",
        "image_url": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price_eur": 33465
    }
    ```
Y construiremos una ficha HTML que muestre la información de la criptomoneda seleccionada, incluida la imagen.

Y haremos una petición de tipo `POST` a la url `guardar_moneda.php` con el objeto `JSON` que hemos creado. Haremos una petición por cada criptomoneda.

El servidor devolverá una respuesta de tipo `JSON` con el siguiente formato:

    ```json
    {
        "resultado": "Criptomoneda XXXX guardada correctamente. "
    }
    ```

Cualquier otro resultado se considerará error.

Información adicional:

DOCUMENTACIÓN:  https://www.coingecko.com/es/api/documentation
BASE_URL: https://api.coingecko.com/api/v3