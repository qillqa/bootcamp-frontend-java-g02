console.log('Hola JS')

const taskAdd = document.querySelector('.task__add')
const taskInput = document.querySelector('.task__input')
// const taskInput = document.querySelector('#taskInput')
// const taskInput = document.getElementById('taskInput')
const taskList = document.querySelector('.task__list')

// console.log(taskAdd)
// console.log(taskInput)
// console.log(taskList)

taskAdd.addEventListener('click', function (event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"
  // console.log('Click!')

  // console.log(taskInput.value)

  // const button = document.createElement('button')
  // button.textContent = 'Hola soy un botón'
  // document.body.appendChild(button)

  if (taskInput.value === '') {
    alert('El campo es requerido')
    return
  }

  const li = document.createElement('li')

  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  taskList.appendChild(li)

  taskInput.value = ''
})
