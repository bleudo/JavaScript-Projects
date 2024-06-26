const INPUT_BOX = document.getElementById('input-box')
const LIST_CONTAINER = document.getElementById('list-container')

function addTask(){
    if(INPUT_BOX.value === ''){
        alert("You must write a task");
    }else{
        let li = document.createElement("li");
        li.innerHTML = INPUT_BOX.value;
        LIST_CONTAINER.appendChild(li);///
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    INPUT_BOX.value = '';
    saveData();
}

LIST_CONTAINER.addEventListener("click",function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",LIST_CONTAINER.innerHTML);

}

function showTasksList(){
    LIST_CONTAINER.innerHTML = localStorage.getItem("data")
}

showTasksList();