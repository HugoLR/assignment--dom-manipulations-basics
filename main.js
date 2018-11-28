
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  var number = parseInt(answerPTagWithValue.textContent)
  var newNumber = number * 2
  answerPTagWithValue.innerHTML = newNumber
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #3
 //conseguir la clase donde está el circulo
  var answerCirculo = document.querySelector('.circle-red')
 //Guardar el incremneto en variables
  var widthVariable = answerCirculo.offsetWidth * 2
  var heightVariable = answerCirculo.offsetHeight * 2
  // Modificamos nuestro circulo
  answerCirculo.style.width = widthVariable + "px"
  answerCirculo.style.height = heightVariable + "px"
  //Extablecemos la condición
  if (widthVariable === 320 && heightVariable === 320) {
    answerCirculo.style.width = 40 + "px"
    answerCirculo.style.height = 40 + "px"
  }
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #4
  //Acceder a todos los elementos con clase active
  var eliminateClass = document.querySelectorAll('.inactive')
  var fatherList = document.querySelector('#user-list')
  var nodesArray = Array.prototype.slice.call(eliminateClass);
  nodesArray.forEach(function(list){
    fatherList.removeChild(list);
  })
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #5
  var array = []
  //Identificar al papa de las cajas
  var fatherBox = document.querySelector('#squares-box')
  //Obtener los span
  var box = document.querySelectorAll('.square')
  //Iterar con for each nuestro node-fatherList
  box.forEach(function(square){
    array.push(square)
    square.remove();
  })

  array.reverse().forEach(function(square){
    fatherBox.appendChild(square)
  })
  //Eliminar las cajas

  //Crear otra vez las cajas

  //Usar appendChild para meter al final del papa nuestros elementos
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #6
  //Acceder a los li de id="tasks"
  // var elementosLista = document.querySelectorAll('#tasks li')
  // var textoLista = elementosLista.textContent
  //Convertir cada las palabras en Array
  //Iterar sobre nuestro array de palabras

  //Remover las palabras

  //Colocar las palabras de manera invertida

  //Regresar el array en forma de string

  var reverseContainer = [];
  var container = document.querySelector('#tasks')
  var itemsList = document.querySelectorAll('#tasks li')

  itemsList.forEach(function(item){
    var word = item.innerHTML
    var wordReverse = word.split(" ").reverse().join(" ")
    reverseContainer.push(wordReverse)
    item.remove();
  })

  reverseContainer.forEach(function(text){
    var li = document.createElement('li')
    li.innerHTML = text;
    container.appendChild(li)
  })
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #7
})
