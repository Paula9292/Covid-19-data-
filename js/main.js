const country= document.querySelector('.search input');
const btn = document.querySelector('.search button');
const nationName = document.querySelector('.countryName')
const confirm = document.querySelector('.confirmed');
const deaths = document.querySelector('.deaths');
const result=document.querySelector('.result');
const vaccined= document.querySelector('.vaccined');
const update = document.querySelector('.update');
const loader=document.querySelector('.loader')
const loaderBox= document.querySelector('.loader-box');

const URL_API = 'https://covid-api.mmediagroup.fr/v1'

const API_COUNTRY = '/cases?country='
const API_VACCINED= '/vaccines?country='



function getCovid  (){
const countryName = country.value || 'Poland'
const newCountryName = countryName.charAt(0).toUpperCase() + countryName.slice(1) 
const link = URL_API + API_COUNTRY + newCountryName
const link2= URL_API + API_VACCINED + newCountryName

axios.get(link).then(res => {
    console.log(res.data)

    const nationNameRes=res.data.All.country
    nationName.textContent=nationNameRes
    

    const confirmedRes = res.data.All.confirmed
    confirm.textContent= confirmedRes

    const deathsRes=res.data.All.deaths
    deaths.textContent=deathsRes

    const updateRes=res.data.All.updated
    update.textContent= "updated: "+ updateRes


})

axios.get(link2).then(res => {
    console.log(res.data)

    const vaccinedRes= res.data.All.people_vaccinated
    vaccined.textContent= vaccinedRes
})

.catch(err => console.log ('błąd'));

result.style.display = 'grid';
}

btn.addEventListener('click', () => getCovid())

function enterKey(e){
    if(e.key==='Enter'){
        
        let targetElement = e.target

        if (targetElement == country){
            getCovid();
    }}
    }

window.addEventListener('keydown', (e) => enterKey(e) )
btn.addEventListener('mousedown', () => btn.classList.add('clickButton'));
btn.addEventListener('mouseup', () => btn.classList.remove('clickButton'));
btn.addEventListener('touchstart', () => btn.classList.add('clickButton'));
btn.addEventListener('touchend', () => btn.classList.remove('clickButton'));


window.addEventListener('load', () => loader.style.display = 'none', loaderBox.style.display = 'none');