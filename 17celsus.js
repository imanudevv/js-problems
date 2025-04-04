//function to convert celsius to farenheit

function celsiusToFarenheit(celsius) {
    var farenheit=celsius*9/5+32;
    return farenheit;
}
console.log(celsiusToFarenheit(9))

function farenheittocelcius(farenheit){
    var celcius=(farenheit-32)*5/9;
    return celcius;
}
console.log(farenheittocelcius(178))