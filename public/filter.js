const chooseColorElem = document.querySelector('.chooseColor');
const chooseBrandElem = document.querySelector('.chooseBrand');
const carsOutputElem = document.querySelector('.carsOutput');
// const colorValuesElem = document.getElementById('colorValues');
// const carBrandValuesElem = document.getElementById('carBrandValues')

const btnElem = document.querySelector('.btn');

const colorTemplateText = document.querySelector('.colorTemplate');
// compile handlebars template
const colorTemplete = Handlebars.compile(colorTemplateText.innerHTML);

axios.get('http://api-tutor.herokuapp.com/v1/colors/')
.then(function(result){
    chooseColorElem.innerHTML = colorTemplete({templateData:result.data})
})

axios.get('http://api-tutor.herokuapp.com/v1/makes')
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
    axios.get(`http://api-tutor.herokuapp.com/v1/cars/make/${makesValues}/color/${colorsValues}`)
    .then(function(result){
        carsOutputElem.innerHTML = colorTemplete({template:result.data})
    })
}
// btnElem.addEventListener("click", function() {
//     axios.get(`http://api-tutor.herokuapp.com/v1/cars/make/${makesValues}/color/${colorsValues}`)
// .then(function(result){
//     carsOutputElem.innerHTML = colorTemplete({template:result.data})
// })

    
// })

// const carOfColorBrands = () =>{
//     var chooseColorElem = colorValuesElem.value;
//     var selectBrand = chooseBrandElem.value;
//     console.log(selectColor)

// }

btnElem.addEventListener('click', carOfColorBrands);