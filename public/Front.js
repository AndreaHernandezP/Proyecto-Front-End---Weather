var barraBusqueda = document.querySelector('form');
const input = document.querySelector('input');
const button = document.getElementById('button2'); //Una etiqueta botón recarga la página, input type button no recarga la página, 

button.addEventListener('click',function(){temperatura()}); //Evento click o submit***

const h22 = document.getElementById("h2");
const h2 = document.querySelector('h2');

function temperatura(){
    let ciudad = input.value;   //API se encuentra en inglés
    
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
        
        
        h22.innerHTML = '<img src="'+data.current.weather_icons+'">';
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
 


