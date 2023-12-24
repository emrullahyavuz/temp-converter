const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");


function calculatorTemperature(e) {
    
    //const currentValue = Number(event.target.name);
    
   switch(e.target.name) {
    case 'celcius':
       fahrenheit.value = Number(((celcius.value) * 1.8) + 32).toFixed(2);
       kelvin.value = (Number(celcius.value) + 273.15).toFixed(2);
        break;
    case 'fahrenheit':
        celcius.value = Number(((fahrenheit.value - 32) / 1.8)).toFixed(2);
        kelvin.value = Number(((fahrenheit.value - 32) / 1.8) + 273.15).toFixed(2);
        break;
    case 'kelvin':
        celcius.value = Number(kelvin.value - 273.15).toFixed(2);
        fahrenheit.value = Number(((kelvin.value - 273.15) * 1.8) + 32).toFixed(2);
        break;
    default:
        break;
   }
}