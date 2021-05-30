var cnt_tasks = 0;

function add_new_task(task_content){

    var block = document.getElementById("task_list");

    // Create a <li> list item
    var li = document.createElement("li");
    li.id = "task" + cnt_tasks;

    // Create task div & define attributes
    var t = document.createElement("div");

    // increase the counter
    cnt_tasks = cnt_tasks+1;

    // Create p & define attributes
    var p1 = document.createElement("p");
    p1.innerHTML = task_content;

    // Create delete button & define attributes
    var del = document.createElement("button");
    del.innerHTML = "Delete";
    var dele_attribute = "delete_task(" + (li.id) + ");";
    del.setAttribute("onclick",dele_attribute);

    // Append p1 & del to t
    t.appendChild(p1);
    t.appendChild(del);

    // Append t to li
    li.appendChild(t);

    // Append li to block
    block.appendChild(li);
}

function delete_task(num){
    num.remove();
}