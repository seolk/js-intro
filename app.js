var pDemo = document.getElementById("demo")
var imageSrc = document.getElementById("img")
  
  pDemo.innerHTML = "hello world"
  // document.getElementsByClassName("demo2").innerHTML = "HAHAH"
  // document.getElementByTagName("p")
  
  imageSrc.src = "https://images.unsplash.com/photo-1513639725746-c5d3e861f32a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
  imageSrc.src = "https://images.unsplash.com/photo-1529927066849-79b791a69825?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
  
  pDemo.style.color = "red"

  // Event handlers
  // onclick=js
  // element.addEventListener(event, fuction, useCapture)
  // element.addEventListener("click" function() {
    // do something
  // })

// element.addEventListener("click", myFunction)

//     function myFunction() {
        // do something
//     }
var colors = ["red", "#0DFF9A", "blue", "orange"]
var btn = document.getElementById("btn")

btn.addEventListener("click", changeColor)
function changeColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}



// Scope

// var foo = 'bar'; //global

// function someFunction(params1, params2) { //params1 and 2 are local
//   var bar= 'foo' // local
// }

// function myFunction() {
//   // debugger
//   console.log(bar) // error
//   console.log(foo) // 'bar'
// }

// function whatIsThis() {
//   baz = "what variable is this?"
// }

// // console.log(baz)

// whatIsThis()

// console.log(baz)

// myFunction()

// Object

// datatypes
  // string, booleans, numbers, null, undefined, symbol

// arrays, hashes, function, classes

// window object what the user sees
  // window
    // global
    // function calls
var num = 23
console.log(this.num)
console.log(this)

var person =  {
  firstName: 'bob',
  lastName: 'smith',
  func: function() {
    return this.firstName + " " + this.lastName
  }
}

console.log(person.func)