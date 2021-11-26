colors
axios.get('http://api-tutor.herokuapp.com/v1/colors')
.then(function(result){
    console.log(result.data)
})

colors.innerHTML = colorTemplete({
    // console.log(colors.result.data);
})
const color = document.createElement('li');
// const colorTempleteText = document.querySelector('.colorTemplate');