const color = document.querySelector('.colors');
const carMakes = document.querySelector('.brands');
const carsObj = document.querySelector('.cars');


const colorTemplateText = document.querySelector('.colorTemplate');
// compile handlebars template
const colorTemplete = Handlebars.compile(colorTemplateText.innerHTML);

axios.get('http://api-tutor.herokuapp.com/v1/colors/')
.then(function(result){
    console.log(result.data)
    color.innerHTML = colorTemplete({templateData:result.data})
})

axios.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(result){
    console.log(result.data)
    carMakes.innerHTML = colorTemplete({templateData:result.data})
})

axios.get('http://api-tutor.herokuapp.com/v1/cars')
.then(function(result){
    console.log(result.data)
    carsObj.innerHTML = colorTemplete({template:result.data})
})









// const color = document.createElement('li');