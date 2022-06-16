
let area=document.querySelector('#area');
document.querySelector('#btn').addEventListener('click',()=>{

   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    area.innerHTML = "Geolocation is not supported by this browser.";
  }


})
function showPosition(position) {
  area.innerHTML = `Latitide is ${position.coords.latitude}
  and longitude is ${position.coords.longitude}`; 
  
}

