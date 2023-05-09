var barraBusqueda = document.querySelector('form');
const input = document.querySelector('input');
const button = document.getElementById('button2'); //Una etiqueta botón recarga la página, input type button no recarga la página, 

button.addEventListener('click',function(){cambio()});

const h22 = document.getElementById("h2");
const h2 = document.querySelector('h2');

function cambio(){
    
    h2.innerHTML = 'otro';
    h2.innerText = 'otro';

    
    h22.innerHTML = "otro";
    h22.innerText = "otro";

}

/*barraBusqueda.addEventListener('submit', (e) => {
    e.preventDefault()
    const ciudad = input.value;*/

//http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query=New%20York
var ciudad = '';    //API se encuentra en inglés

fetch('http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query='+ciudad).then((response) => {
    response.json().then((data) => {
        if (data.error) {
        console.log(data.error)
        } else {
        console.log(data.location)
        console.log(data.request)
        console.log(data.current)
        //console.log("Datos de interés: "+ data.location.name + data.location.country + data.request.query + data.current.temperature + data.current.weather_icons + data.current.wind_speed + data.current.humidity)
        }
        console.log("Datos de interés: "+ data.location.name + data.location.country + data.request.query + data.current.temperature + data.current.weather_icons + data.current.wind_speed + data.current.humidity)
    
    })
    
})
    
    

    //const temperatura = 20;

//})