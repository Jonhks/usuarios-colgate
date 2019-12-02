const sendForm = document.getElementById('send-form')
const admin = document.getElementById('admin-check')
const trabajador = document.getElementById('trabajador-check')
const terminos = document.getElementById('terminos')
const form = document.getElementById('form')
const root = document.getElementById('root')
let arr = []




class Persona {
  constructor(name, paterno, materno, email, password, cel){
    this.name = name,
    this.paterno = paterno,
    this.materno = materno,
    this.email = email,
    this.password = password,
    this.cel = cel
  } 
}

class Admin extends Persona {
  constructor(name, paterno, materno, email, password, cel, departamento){
    super(name, paterno, materno, email, password, cel, departamento)
    this.departamento = departamento
  }
}


const printUsers = () => {
  let str = ''
  const data = JSON.parse(localStorage.getItem('arr'))
  data.forEach(element => {
    str += `
    <div class="col-md-8 offset-md-2 shadow-lg p-3 mb-5 bg-white rounded">
    <div class="card">
      <div class="card-header">
      ${element.name} ${element.paterno} ${element.materno}
      </div>
        <div class="card-body">
          <ol>
            <li>${element.email}</li>
            <li>${element.password}</li>
            <li>${element.cel}</li>
          </ol>
        </div>
      </div>
    </div>
    `
  });
  root.innerHTML = str
}



if(!localStorage.getItem('arr') ){
  console.log('no hay data')
} else {
  arr.push(JSON.parse(localStorage.getItem('arr')))
  printUsers()
}




admin.addEventListener('change', () => {
  console.log(admin.checked)
  admin.checked ? form.inputDept.setAttribute('style', 'display: block !important'): form.inputDept.setAttribute('style', 'display: none !important')
})

trabajador.addEventListener('change', () => {
  console.log(trabajador.checked)
  trabajador.checked ? form.inputDept.setAttribute('style', 'display: none !important') : form.inputDept.setAttribute('style', 'display: block !important')
})

terminos.addEventListener('change', () => {
  terminos.checked ? sendForm.disabled = false : sendForm.disabled = true
})



sendForm.addEventListener('click', (e) => {
  e.preventDefault()
  const name = form.inputName.value
  const first = form.inputFirst.value
  const last = form.inputLast.value
  const email = form.inputEmail.value
  const password = form.inputPassword.value
  const cel = form.inputCel.value
  const adminCheck = admin.checked
  console.log(adminCheck);
  
  const uno = new Persona(name, first, last, email, password, cel, adminCheck)
  arr.push(uno)
  localStorage.setItem('arr', JSON.stringify(arr))
  printUsers()
})