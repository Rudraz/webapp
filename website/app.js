/* Global Variables */
const apiKey = "&appid=9863121b8624fa23e7c8a4fad4b50d80&units=imperial";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const generate = document.querySelector("#generate");
const zip = document.querySelector("#zip");
const feelings = document.querySelector("#feelings");
const temperature = document.querySelector('temp');
const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
//https://api.openweathermap.org/data/2.5/weather?zip=


generate.addEventListener("click", (e)=>{
    e.preventDefault();
    const fullURL = `${baseURI}${zip.value}${apiKey}`;
    console.log("TEST");
    getData(fullURL);
});   

const getData = async (url) =>{
    try {   
            const response = await fetch(url);
            const result = await response.json();
            return result;
        }
        catch(e) {
        console.log(e.message);
        }
};
