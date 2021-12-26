const inputNewTask = document.querySelector('.input-new-task')
const btnAddTask = document.querySelector('.btn-add-task')
const tasks = document.querySelector('.tasks')

function cleanInput() {
  inputNewTask.value = ''
  inputNewTask.focus()
}

function createLiTag(param) {
  const li = document.createElement('li')
  return li
}

function createEraseBtn(li) {
  li.innerText += ' '
  const eraseBtn = document.createElement('button')
  eraseBtn.innerHTML = 'x'
  eraseBtn.setAttribute('class', 'erase')
  eraseBtn.setAttribute('title', 'Apagar esta tarefa')
  li.appendChild(eraseBtn)
}

function saveTasks() {
  const tasksLi = tasks.querySelectorAll('li')
  const taskList = []

  for (let task of tasksLi) {
    let taskText = task.innerText
    taskText = taskText.replace('x', '').trim()
    taskList.push(taskText)
  }

  const tasksJSON = JSON.stringify(taskList)
  localStorage.setItem('tasks', tasksJSON)

}

function addTasksSaves() {
  const tasks = localStorage.getItem('tasks')
  const listTask = JSON.parse(tasks)
  console.log(listTask);
  for (let task of listTask) {
    createTask(task)
  }
}

function createTask(inputText) {
  const li = createLiTag()
  li.innerText = inputText
  tasks.appendChild(li)
  createEraseBtn(li)
  cleanInput()
  saveTasks()
}

inputNewTask.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputNewTask.value) return
    createTask(inputNewTask.value)
  }
})

btnAddTask.addEventListener('click', function () {
  if (!inputNewTask.value) return
  createTask(inputNewTask.value)
})

document.addEventListener('click', function (e) {
  const el = e.target
  if (el.classList.contains('erase')) {
    el.parentElement.remove()
    saveTasks()
  }
})

addTasksSaves()