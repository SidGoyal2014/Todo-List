// the id not passing

var list_tasks = [];

function add_new_task(task_content){

    var block = document.getElementById("tasks");

    var t = document.createElement("div");

    t.id = "task" + list_tasks.length;

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

    // var dele_attribute = "delete_task(" + Number((list_tasks.length)) + ");"

    // var dele_attribute = "delete_task(" + t + ");";

    var dele_attribute = "delete_task(" + (t.id) + ");";

    console.log(t.id);

    del.setAttribute("onclick",dele_attribute);

    // Append p1 & del to t

    t.appendChild(p1);
    t.appendChild(del);

    // Append t to block

    list_tasks[list_tasks.length] = t;

    block.appendChild(t);
}


// Yet to be d
function delete_task(num){
    console.log("You are in delete task function");
    console.log(String(num));
    console.log("sdfsdf");

    // var ele = document.getElementById(num);

    // console.log(ele);
    num.remove();
}