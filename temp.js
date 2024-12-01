let inp = document.getElementById('inp-value');
let searchbtn= document.getElementById('search')

let loc= document.getElementById('loc')
let time= document.getElementById('time')
let temp= document.getElementById('temp')

searchbtn.addEventListener('click',async function(){
    let city= inp.value 
    let data= await getdata(city)
    loc.innerText=data.location.name
    time.innerText=data.location.localtime
    temp.innerText=data.current.temp_c
})

async function getdata(name) 
{
    let promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=8f15c229b3204a67bd263127241011&q=${name}&aqi=yes`) 
    return await promise.json()  
}