var Model = document.getElementById("Model");
var subTasksContainer = document.getElementById("subTasksContainer");
var saveBtn = document.getElementById("saveBtn");
var titleInput = document.getElementById("titleInput");
var data =document.getElementById("data");
var head =document.getElementsByClassName("head");
var todoList = [];
let count=0;

subTasksContainer.addEventListener("click", function(event) {
  var target = event.target;

  if (target.classList.contains("subtask-add-btn")) {
    var subTaskContainer = target.parentNode;
    var newSubTaskDiv = document.createElement("div");
    newSubTaskDiv.classList.add("subtask-container");

    var subTaskInput = document.createElement("input");
    subTaskInput.type = "text";
    subTaskInput.placeholder ="Enter task";
    subTaskInput.classList.add("subtask-input");

    var addBtn = document.createElement("button");
    addBtn.textContent = "+";
    addBtn.classList.add("subtask-add-btn");

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    removeBtn.classList.add("subtask-remove-btn");

    newSubTaskDiv.appendChild(subTaskInput);
    newSubTaskDiv.appendChild(addBtn);
    newSubTaskDiv.appendChild(removeBtn);

    subTasksContainer.insertBefore(newSubTaskDiv, subTaskContainer.nextSibling);

    if (subTasksContainer.childElementCount > 1) {
      var minusBtns = subTasksContainer.getElementsByClassName("subtask-remove-btn");
      for (var i = 0; i < minusBtns.length; i++) {
        minusBtns[i].style.display = "inline-block";
      }
    }
  } else if (target.classList.contains("subtask-remove-btn")) {
    var subTaskContainer = target.parentNode;
    subTasksContainer.removeChild(subTaskContainer);

    if (subTasksContainer.childElementCount === 1) {
      var minusBtn = subTasksContainer.querySelector(".subtask-remove-btn");
      minusBtn.style.display = "none";
    }
  }
});

saveBtn.addEventListener("click", function() {
  todoList = [];
  
  var subTaskContainers = document.getElementsByClassName("subtask-container");

  for (var i = 0; i < subTaskContainers.length; i++) {
    var subTaskInput = subTaskContainers[i].querySelector(".subtask-input");
    todoList.push(subTaskInput.value);
  }
  
//   console.log("Title: ", titleInput.value);
//   console.log("Subtasks: ", todoList);
  display();
  titleInput.value=' ';
  subTaskInput.value =' ';
});

function display(){
    // alert();
    const heading=titleInput.value;
    console.log(heading);
    const store = document.createElement("div");
    store.classList.add('store');

    const input_title =document.createElement("input");
    input_title.classList.add('text','d-flex');
    input_title.type ='text';
    let val = count+":" +heading;
    input_title.value =val;
    input_title.setAttribute('readonly','readonly');
    count++;    
    store.appendChild(input_title);

    let input_task;
    let array=[]; 
    for(var i=0;i<todoList.length;i++){
        input_task =document.createElement("input");
         input_task.classList.add("havelist",'m-2','d-flex');
        input_task.type ='text';
        let newdata = i+":"+todoList[i]
         input_task.value =newdata;
        input_task.setAttribute('readonly','readonly');
        store.appendChild(input_task);   
    }

    const update_action = document.createElement("div");
    update_action.classList.add('uptd-action');
    store.appendChild(update_action);

    const edit_item = document.createElement('button');
    edit_item.classList.add('edit','m-2');
    edit_item.type="button";
    edit_item.innerText ="Edit";
    store.appendChild(edit_item);


    const delete_item = document.createElement('button');
    delete_item.classList.add('delete','btn','btn-danger','fa','fa-trash');
    store.appendChild(delete_item);
    
    delete_item.addEventListener('click',(e)=>{
        data.removeChild(store);
    })

    edit_item.addEventListener('click',(e)=>{
        if(edit_item.innerText.toLocaleLowerCase()=='edit'){
            edit_item.innerText="save";
            input_title.removeAttribute("readonly");
            input_title.focus(); 
            for(var i=0;i<todoList.length;i++){
            input_task.removeAttribute("readonly");  
            input_task.focus();
            }  
        }
        else{
                edit_item.innerText ="Edit";
                input_title.setAttribute('readonly','readonly');
                input_task.setAttribute('readonly','readonly');
                          
            }
        
    });

    data.appendChild(store);
       
}