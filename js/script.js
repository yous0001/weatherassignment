var boxes =document.getElementById("boxes");
var searchlocation=document.getElementById("location");
var datalist;
var weekweather;
async function getapi(location="cairo"){
    var data =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c90fa77170254679a8972547231008&q=${location}&days=7&lang=en`)
    datalist=await data.json();
    weekweather=datalist.forecast.forecastday;
    
}
console.log();
display();


async function display(location){
    await getapi(location);
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
    let day = weekday[d.getDay()];
    let nextday=weekday[d.getDay()+1];
    let next2day=weekday[d.getDay()+2];
    let dataofday = weekweather[0].date;


    boxes.innerHTML=`
    <div class="col-lg-4 rounded-2 box1">
    <div class="box1head rounded-2">
      <p class="day">${day}</p>
      <p class="date">14August</p>
    </div>
    <div class="box1body p-4">
      <div class="location">${datalist.location.name}</div>
      <div class="degree">
        <span class="temp">${datalist.current.temp_c}<sup>o</sup>c</span>
        <span class="icon"><img src="https:${datalist.current.condition.icon}" width="90"></span>
      </div>
      <div class="weatherstatus">${datalist.current.condition.text}</div>
      <div class="windstatus">
        <span><img src="imgs/icon-umberella.png" alt=""> 20%</span>
        <span><img src="imgs/icon-wind.png" alt=""> ${datalist.current.wind_kph}km/h</span>
        <span><img src="imgs/icon-compass.png" alt=""> East</span>
      </div>
    </div>
  </div>


  <div class="col-lg-4 box2">
    <div class="box2head justify-content-center">
      <p class="nextday">${nextday}</p>
    </div>
    <div class="box2body  p-5">
      <div class="next-icon">
        <img src="https:${weekweather[1].day.condition.icon}" width="48">
      </div>
      <div class="next-degree">

        <div class="next-temp">
          <p class="max">${weekweather[1].day.maxtemp_c}<sup>o</sup>c</p>
          <small class="min">${weekweather[1].day.mintemp_c}<sup>o</sup>c</small>
        </div>

      </div>
      <div class="weatherstatus">${weekweather[1].day.condition.text}</div>
    </div>
  </div>

  <div class="col-lg-4 box3 rounded-2">
    <div class="box3head justify-content-center">
      <p class="nextday">${next2day}</p>
    </div>
    <div class="box3body  p-5">
      <div class="next-icon">
        <img src="https:${weekweather[2].day.condition.icon}" width="48">
      </div>
      <div class="next-degree">

        <div class="next-temp">
          <p class="max">${weekweather[2].day.maxtemp_c}<sup>o</sup>c</p>
          <small class="min">${weekweather[2].day.mintemp_c}<sup>o</sup>c</small>
        </div>

      </div>
      <div class="weatherstatus">${weekweather[2].day.condition.text}</div>
    </div>
  </div>
`
}
function search(){
  display(searchlocation.value);

}