function add_new_task(task_content){

    var block = document.getElementById("tasks");

    var t = document.createElement("p");

    t.innerHTML = task_content;

    block.appendChild(t);
}