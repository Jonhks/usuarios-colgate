// const root = document.getElementById('root')

// const imprimirTriangulo =  (number) => {
//   let str = '#'
//   let piramide = ''
//   for(let i = 0; i<number ; i++ ){
//     piramide = piramide +  str
//     console.log(piramide)
//     root.insertAdjacentHTML( 'beforeend' ,piramide + '<br/>')
//   }
// }

// var number = parseInt(prompt('ingresa el numero'))
// imprimirTriangulo(number)

// const fizzBuzz = (number) => {
  
//   for (let i = 1; i <= number; i++){
//     if(i % 5 == 0 && i % 3 == 0){
//       document.write('Fizzbuzz' + '<br/>')
//     } else if(i % 5 == 0) {
//       document.write('Buzz' + '<br/>')
//     } else if(i % 3 == 0) {
//       document.write('Fizz' + '<br/>')
//     } else{
//       document.write(i + '<br/>')
//     }
//   }
// }

// var number = parseInt(prompt('ingresa el numero'))
// fizzBuzz(number)



const posts = [{
    title: 'uno',
    name: 'Maria'
  },
  {
    title: 'dos',
    name: 'Jesy'
  }
]

                                                  // normal =>


// const getPost = () => {
//   console.log('Se ejecuta la funcion de getPost')
//   setTimeout(() => {
//     let output = ' '
//     posts.forEach(post =>{
//       output += `
//       <p>${post.title}</p>
//       <li>${post.name}</li>`
//     })
//     document.body.innerHTML = output
//   }, 2000)
// }


// const createPost = (post) => {
//   console.log('Se ejecuta createPost')
//   setTimeout( () =>{
//     console.log('Se ejecuta el setTime de createPost')
//     posts.push(post)
//     // callback()
//   }, 1000) 
// }

// createPost({title: 'tres', name: 'Pepe'})
// getPost()





                                                    // callbaks =>


// const getPost = () => {
//   console.log('Se ejecuta la funcion de getPost')
//   // setTimeout(() => {
//     let output = ' '
//     posts.forEach(post =>{
//       output += `
//       <p>${post.title}</p>
//       <li>${post.name}</li>`
//     })
//     document.body.innerHTML = output
//   // }, 2000)
// }
// getPost()


// const createPost = (post, callback) => {
//   console.log('Se ejecuta createPost')
//   setTimeout( () =>{
//     console.log('Se ejecuta el setTime de createPost')
//     posts.push(post)
//     callback()
//   }, 1000) 
// }

// createPost({title: 'tres', name: 'Pepe'} , getPost)


// ----------------------------------Promesas =>


// const getPost = () => {
//   console.log('Se ejecuta la funcion de getPost')
//   // setTimeout(() => {
//     let output = ' '
//     posts.forEach(post =>{
//       output += `
//       <p>${post.title}</p>
//       <li>${post.name}</li>`
//     })
//     document.body.innerHTML = output
//   // }, 2000)
// }
// getPost()


// const createPost = (post) => {
//   return new Promise((resolve, reject) =>{
//     console.log('Se ejecuta createPost')
//     setTimeout( () =>{
//       console.log('Se ejecuta el setTime de createPost')
//       posts.push(post)
//       const error = false

//       !error ? resolve() : reject('Error:' + error)

//     }, 1000) 
//   })
// }

// createPost({title: 'tres', name: 'Pepe'} )
// .then(getPost)
// .catch(err => console.error(err))



// ------------------------------------------Promise All


// const promise1 = Promise.resolve('Hello All')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Adios'))
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
//   .then(resp => resp.json())

// Promise.all([promise1, promise2, promise3, promise4])
//   .then(
//     ((values) =>console.log(values))
//   )



// -------------------------------async


// const getPost = () => {
//   console.log('Se ejecuta la funcion de getPost')
//   // setTimeout(() => {
//     let output = ' '
//     posts.forEach(post =>{
//       output += `
//       <p>${post.title}</p>
//       <li>${post.name}</li>`
//     })
//     document.body.innerHTML = output
//   // }, 2000)
// }
// getPost()


// const createPost = (post) => {
//   return new Promise((resolve, reject) =>{
//     console.log('Se ejecuta createPost')
//     setTimeout( () =>{
//       console.log('Se ejecuta el setTime de createPost')
//       posts.push(post)
//       const error = false

//       !error ? resolve() : reject('Error:' + error)

//     }, 3000) 
//   })
// }

// const  init = async () =>{
//   await createPost({title: 'tres', name: 'Pepe'})
//   getPost()
// } 

// init()



// -----------------async fetch 


const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  console.log(data)
}

fetchUsers()