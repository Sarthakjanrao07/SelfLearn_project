let todoList = ['Buy milk','for me','go home'];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  console.log(todoItem);
  todoList.push(todoItem);
  inputElement.value = '';
  displayItems();
}


function displayItems(){
let containerElement = document.querySelector('.todo-container');

let newHtml = '';

  for(let i =0;i<todoList.length;i++){
      newHtml = newHtml + `

      <div>
        <span>${todoList[i]}</span>
        <button onclick="todoList.splice(${i} , 1); displayItems()" >Delete</button>
      </div>
      `;
  }
  containerElement.innerHTML = newHtml;
}