let DOMnow, DOMmin, DOMmax, DOMwind, DOMwindD, DOMsvg, DOMlatlong, DOMVoor, DOMabbr1, DOMabbr2, DOMabbr3, DOMabbr4, DOMabbr5;
let DOMbuttonlo, DOMbuttonbr, DOMbuttonny, DOMbuttonla, DOMtitle;

const VerwerkWeather = function (data){
    //vandaag
    naam = data.title;
    vandaag = data.consolidated_weather[0];
    console.log(vandaag.created);
    now = vandaag.the_temp.toFixed(0);
    min = vandaag.min_temp.toFixed(0);
    max = vandaag.max_temp.toFixed(0);
    wind = vandaag.wind_speed.toFixed(2);
    abbr = vandaag.weather_state_abbr;
    console.log(abbr);
    windDirection = vandaag.wind_direction_compass;
    latlong = data.latt_long;


    //dag 1
    dag1 = data.consolidated_weather[1]
    min1 = dag1.min_temp.toFixed(0);
    max1 = dag1.max_temp.toFixed(0);
    abbr1 = dag1.weather_state_abbr;
    date1 = dag1.applicable_date;
    maand1 = date1.substring(5,7);
    dg1 = date1.substring(8,10);
    jaar1 = date1.substring(0,4);
    datum1 = dg1 + "-" + maand1 + "-" + jaar1;


    //dag 2
    dag2 = data.consolidated_weather[2]
    min2 = dag2.min_temp.toFixed(0);
    max2 = dag2.max_temp.toFixed(0);
    abbr2 = dag2.weather_state_abbr;
    date2 = dag2.applicable_date;
    maand2 = date2.substring(5,7);
    dg2 = date2.substring(8,10);
    jaar2 = date2.substring(0,4);
    datum2 = dg2 + "-" + maand2 + "-" + jaar2;


    //dag 3
    dag3 = data.consolidated_weather[3]
    min3 = dag3.min_temp.toFixed(0);
    max3 = dag3.max_temp.toFixed(0);
    abbr3 = dag3.weather_state_abbr;
    date3 = dag3.applicable_date;
    maand3 = date3.substring(5,7);
    dg3 = date3.substring(8,10);
    jaar3 = date3.substring(0,4);
    datum3 = dg3 + "-" + maand3 + "-" + jaar3;


    //dag 4
    dag4 = data.consolidated_weather[4]
    min4 = dag4.min_temp.toFixed(0);
    max4 = dag4.max_temp.toFixed(0);
    abbr4 = dag4.weather_state_abbr;
    date4 = dag4.applicable_date;
    maand4 = date4.substring(5,7);
    dg4 = date4.substring(8,10);
    jaar4 = date4.substring(0,4);
    datum4 = dg4 + "-" + maand4 + "-" + jaar4;


    //dag 5
    dag5 = data.consolidated_weather[5]
    min5 = dag5.min_temp.toFixed(0);
    max5 = dag5.max_temp.toFixed(0);
    abbr5 = dag5.weather_state_abbr;
    date5 = dag5.applicable_date;
    maand5 = date5.substring(5,7);
    dg5 = date5.substring(8,10);
    jaar5 = date5.substring(0,4);
    datum5 = dg5 + "-" + maand5 + "-" + jaar5;

    let htmlcodeNaam = '';
    let htmlcodeNow = '';
    let htmlcodeMin = '';
    let htmlcodeMax = '';
    let htmlcodeWind = '';
    let htmlcodeWindD = '';
    let htmlcodeLatLong = '';
    let htmlcodeVoor = '';
    htmlcodeNow = `
    <h3 id="js-now" class="white">${now}°C</h3>
    `
    htmlcodeMin = `
    <h3 id="js-min" class="white">${min}°C</h3>
    `
    htmlcodeMax = `
    <h3 id="js-max" class="white">${max}°C</h3>
    `
    htmlcodeWind = `
    <h3 id="js-wind" class="white">${wind}</h3>
    `
    htmlcodeWindD = `
    <h3 id="js-wind-d">${windDirection}</h3>
    `
    htmlcodeLatLong = `
    <p id="js-latlong" class="c-app_latlong">${latlong}</p>
    `
    htmlcodeVoor = `
			    <div class="c-app__tomorrow-label u-grid-column-1">
					<span class="c-app__daylabel">Tomorrow</span>
				</div>
				<div class="c-app__tomorrow-temp1 u-grid-column-1">
					<p class="c-label-v">${min1}°C</p>
				</div>
				<div class="c-app__tomorrow-temp2 u-grid-column-1">
					<p class="c-label-v">${max1}°C</p>
				</div>
				<div class="c-app__tomorrow-voor u-grid-column-1">
					<img class="c-img" id="js-abbr1">
				</div>
				<div class="c-app__tomorrow-label u-grid-column-1">
					<span class="c-app__daylabel">${datum2}</span>
				</div>
				<div class="c-app__tomorrow-temp1 u-grid-column-1">
					<p class="c-label-v">${min2}°C</p>
				</div>
				<div class="c-app__tomorrow-temp2 u-grid-column-1">
					<p class="c-label-v">${max2}°C</p>
				</div>
				<div class="c-app__tomorrow-voor u-grid-column-1">
					<img class="c-img" id="js-abbr2">
				</div>
				<div class="c-app__tomorrow-label u-grid-column-1">
					<span class="c-app__daylabel">${datum3}</span>
				</div>
				<div class="c-app__tomorrow-temp1 u-grid-column-1">
					<p class="c-label-v">${min3}°C</p>
				</div>
				<div class="c-app__tomorrow-temp2 u-grid-column-1">
					<p class="c-label-v">${max3}°C</p>
				</div>
				<div class="c-app__tomorrow-voor u-grid-column-1">
					<img class="c-img" id="js-abbr3">
				</div>
				<div class="c-app__tomorrow-label u-grid-column-1">
					<span class="c-app__daylabel">${datum4}</span>
				</div>
				<div class="c-app__tomorrow-temp1 u-grid-column-1">
					<p class="c-label-v">${min4}°C</p>
				</div>
				<div class="c-app__tomorrow-temp2 u-grid-column-1">
					<p class="c-label-v">${max4}°C</p>
				</div>
				<div class="c-app__tomorrow-voor u-grid-column-1">
					<img class="c-img" id="js-abbr4">
				</div>
				<div class="c-app__tomorrow-label u-grid-column-1">
					<span class="c-app__daylabel">${datum5}</span>
				</div>
				<div class="c-app__tomorrow-temp1 u-grid-column-1">
					<p class="c-label-v">${min5}°C</p>
				</div>
				<div class="c-app__tomorrow-temp2 u-grid-column-1">
					<p class="c-label-v">${max5}°C</p>
				</div>
				<div class="c-app__tomorrow-voor u-grid-column-1">
					<img class="c-img" id="js-abbr5">
				</div>
    `
    htmlcodeNaam = `
    <span id="js-naam" class="c-app__location-label">${naam}</span>
    `

    DOMsvg = document.getElementById('js-svg').src = "./svg/" + abbr.toString() + ".svg";

    DOMVoor.innerHTML = htmlcodeVoor;
    DOMnow.innerHTML = htmlcodeNow;
    DOMmin.innerHTML = htmlcodeMin;
    DOMmax.innerHTML = htmlcodeMax;
    DOMwind.innerHTML = htmlcodeWind;
    DOMwindD.innerHTML = htmlcodeWindD;
    DOMlatlong.innerHTML = htmlcodeLatLong;
    DOMtitle.innerHTML = htmlcodeNaam;

    DOMabbr1 = document.getElementById('js-abbr1').src = "./svg/" + abbr1.toString() + ".svg";
    DOMabbr2 = document.getElementById('js-abbr2').src = "./svg/" + abbr2.toString() + ".svg";
    DOMabbr3 = document.getElementById('js-abbr3').src = "./svg/" + abbr3.toString() + ".svg";
    DOMabbr4 = document.getElementById('js-abbr4').src = "./svg/" + abbr4.toString() + ".svg";
    DOMabbr5 = document.getElementById('js-abbr5').src = "./svg/" + abbr5.toString() + ".svg";
}

const getWeather = function (id){
    handleData(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`,
        VerwerkWeather
    )
}

const Loader = function() {
    setTimeout(() => { document.getElementById('loader-wrapper').style.display = "none"; }, 2500)
}

const init = function(){
    DOMnow = document.getElementById('js-now');
    DOMmin = document.getElementById('js-min');
    DOMmax = document.getElementById('js-max');
    DOMwind = document.getElementById('js-wind');
    DOMwindD = document.getElementById('js-wind-d');
    DOMlatlong = document.getElementById('js-latlong');
    DOMtitle = document.getElementById('js-naam');
    DOMVoor = document.querySelector('.js-voor');
    getWeather('44418');
    Loader();
    document.getElementById('js-lo').addEventListener('click', function () {
        getWeather('44418');
        document.getElementById('loader-wrapper').style.display = "flex"; 
        Loader();
        document.getElementById('js-lo').classList.remove('is-selected');
        document.getElementById('js-lo').classList.add('is-selected');
        document.getElementById('js-br').classList.remove('is-selected');
        document.getElementById('js-ny').classList.remove('is-selected');
        document.getElementById('js-la').classList.remove('is-selected');
    })
    document.getElementById('js-br').addEventListener('click', function () {
        getWeather('968019');
        document.getElementById('loader-wrapper').style.display = "flex"; 
        Loader();
        document.getElementById('js-br').classList.remove('is-selected');
        document.getElementById('js-br').classList.add('is-selected');
        document.getElementById('js-lo').classList.remove('is-selected');
        document.getElementById('js-ny').classList.remove('is-selected');
        document.getElementById('js-la').classList.remove('is-selected');
    })
    document.getElementById('js-ny').addEventListener('click', function () {
        getWeather('2459115');
        document.getElementById('loader-wrapper').style.display = "flex";
        Loader();
        document.getElementById('js-ny').classList.remove('is-selected');
        document.getElementById('js-ny').classList.add('is-selected');
        document.getElementById('js-lo').classList.remove('is-selected');
        document.getElementById('js-br').classList.remove('is-selected');
        document.getElementById('js-la').classList.remove('is-selected');
    })
    document.getElementById('js-la').addEventListener('click', function () {
        getWeather('2442047');
        document.getElementById('loader-wrapper').style.display = "flex";
        Loader();
        document.getElementById('js-la').classList.remove('is-selected');
        document.getElementById('js-la').classList.add('is-selected');
        document.getElementById('js-lo').classList.remove('is-selected');
        document.getElementById('js-ny').classList.remove('is-selected');
        document.getElementById('js-br').classList.remove('is-selected');
    })
}

document.addEventListener('DOMContentLoaded', init);