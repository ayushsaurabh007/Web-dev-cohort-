const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');

const totoItemsContainer = document.getElementById('todo-items-container');

addBtn.addEventListener('click' , () => {
    const value = todoInput.value;
    console.log('User enterd' , value);

    const li = document.createElement('li');
    li.innerText = value;

    const delBtn = document.createElement('button');
    delBtn.innerText = 'X';

    li.appendChild(delBtn);

    delBtn.addEventListener('click' , function(){
        li.remove();
    });

    totoItemsContainer.appendChild(li);
    todoInput.value = "";
});
