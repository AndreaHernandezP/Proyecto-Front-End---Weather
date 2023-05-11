var barraBusqueda = document.querySelector('form');
const input = document.querySelector('input');
const button = document.getElementById('button'); //Una etiqueta botón recarga la página, input type button no recarga la página, 

const ciudadBuscada = document.getElementById('ciudadBuscada');
const iconoClima = document.getElementById('iconoClima');
const temperature = document.getElementById('temperature');
const windSpeed = document.getElementById('windSpeed');
const humidity = document.getElementById('humidity');

const iconoClima2 = document.getElementById('iconoClima');

const contenedorGeneral = document.getElementById('contenedorGeneral');
const templateError = document.getElementById('templateError');

const form = document.querySelector('form');

button.addEventListener('click',function(){datosClima()}); //Evento click o submit***

function datosClima(){
    let ciudad = input.value;   //API se encuentra en inglés
    
    fetch('http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query='+ciudad).then((response) => {
    response.json().then((data) => {
        if (data.error) {
        console.log(data.error)

        if(document.getElementById('mensajeError') == null){
            let templateClone = document.importNode(templateError.content, true);
            contenedorGeneral.insertBefore(templateClone, form);
        }
        
        let mensajeError = document.getElementById('mensajeError');
            if(data.error.code == 105){
                console.log('Lost connection with the server, try again later');
                mensajeError.innerHTML = 'Lost connection with the server, try again later';
            } else if(data.error.code == 601){
                console.log('Input is empty');
                mensajeError.innerHTML = 'Input is empty';
            } else if(data.error.code == 615){
                console.log('Request failed, try again');
                mensajeError.innerHTML = 'Request failed, try again';
            }
        } else {
        console.log(data.location)
        console.log(data.request)
        console.log(data.current)
        console.log("Datos de interés: "+ data.location.name + data.location.country + data.request.query + data.current.temperature + data.current.weather_icons + data.current.wind_speed + data.current.humidity)
        
        if(document.getElementById('mensajeError')){
            let mensajeError = document.getElementById('mensajeError');
            contenedorGeneral.removeChild(mensajeError);
        }
        

        ciudadBuscada.innerHTML = data.request.query;
        iconoClima.src = data.current.weather_icons; //'<img src="'+data.current.weather_icons+'">';
        iconoClima.src = data.current.weather_icons;

        temperature.innerHTML = data.current.temperature + ' °C';
        windSpeed.innerHTML = data.current.wind_speed + ' km/h';
        humidity.innerHTML = data.current.humidity + '%';

        }
        
        
    })
})

}


/*
let ciudad = 'New York';
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
});*/




//http://api.weatherstack.com/current?access_key=30a0c9b417883f7457f686d4c1abb198&query=New%20York
 


