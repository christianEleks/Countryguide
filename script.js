const input = document.querySelector("input");
const btn = document.querySelector("button");
const content = document.querySelector("#content");

async function myCountry(country){
const response = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)

if(response.status == 404){
   content.innerHTML = `<h5 class="pen">Input a valid country name</h5>` 
}
else{
    
    var data = await response.json();
    
content.innerHTML = `
<div class="card">
            <div class="cardo" id="bag">
                <img src="${data[0].flags.svg}" alt="Country Flag">
                <h3>${data[0].name.common}</h3>
            </div>

            <div class="cardo">
                <span class="met">Continent:</span>
                <span>${data[0].continents[0]}</span>
            </div>

            <div class="cardo">
                <span class="met">Capital:</span>
                <span>${data[0].capital[0]}</span>
            </div>

            <div class="cardo">
                <span class="met">Currency:</span>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>

            <div class="cardo">
                <span class="met">Population:</span>
                <span>${data[0].population}</span>
            </div>

            <div class="cardo">
                <span class="met">Border:</span>
                <span>${data[0].borders[0]}</span>
            </div>

            <div class="cardo">
                <span class="met">Language:</span>
                <span>${Object.values(data[0].languages).join(", ")}</span>
            </div>

            
            <div class="cardo">
                <span class="met">Timezone:</span>
                <span>${data[0].timezones[0]}</span>
            </div>
          
        </div>`
}



}

btn.addEventListener("click", () =>{
    myCountry(input.value)
})









     
            





