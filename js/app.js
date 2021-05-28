var list_tasks = [];

function add_new_task(task_content){

    var block = document.getElementById("tasks");

    var t = document.createElement("div");

    // Create p & insert values
    var p1 = document.createElement("p");
    
    p1.innerHTML = task_content;

    /*
    /// create p & insert values

    var p2 = document.createElement("p");
    
    p2.innerHTML = "Delete";
    */

    // Create delete button & settings

    var del = document.createElement("button");

    del.innerHTML = "Delete";

    del.setAttribute("onclick","delete_task();");

    // Append p1 & del to t

    t.appendChild(p1);
    t.appendChild(del);

    // Append t to block

    block.appendChild(t);
}


// Yet to be d
function delete_task(){
    console.log("You are in delete task function");

    ele.remove();
}