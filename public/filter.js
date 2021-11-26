const chooseColorElem = document.querySelector('.chooseColor');
const chooseBrandElem = document.querySelector('.chooseBrand');
const carsOutputElem = document.querySelector('.carsOutput');

const btnElem = document.querySelector('.btn');

const colorTemplateText = document.querySelector('.colorTemplate');
// compile handlebars template
const colorTemplete = Handlebars.compile(colorTemplateText.innerHTML);

axios.get('https://api-tutor.herokuapp.com/v1/colors/')
.then(function(result){
    chooseColorElem.innerHTML = colorTemplete({templateData:result.data})
})

axios.get('https://api-tutor.herokuapp.com/v1/makes')
.then(function(result){
    chooseBrandElem.innerHTML = colorTemplete({templateData:result.data})
})

var makesValues = '';
var colorsValues = '';

chooseColorElem.addEventListener("change", function(myColors) {
    colorsValues = myColors.target.value;
})

chooseBrandElem.addEventListener("change", function(myBrands) {
    makesValues = myBrands.target.value;
})

const carOfColorBrands = ()=>{
    axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${makesValues}/color/${colorsValues}`)
    .then(function(result){
        carsOutputElem.innerHTML = colorTemplete({template:result.data})
    })
}

btnElem.addEventListener('click', carOfColorBrands);