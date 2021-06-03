var cnt_tasks = 0;

window.onload = function(){ // function load_tasks(){

    var t_list = document.cookie.split(';');

    cnt_tasks = t_list.length;

    var block = document.getElementById("task_list");

    console.log(t_list.length);

    for(var i=0;i<t_list.length;i++){

        var c = t_list[i];

        while(c[0] == ' '){
            c = c.substring(1);
        }

        var task_arr = c.split("=");

        if((task_arr[1] != "") && (task_arr[0] != "") && (task_arr[1] != "undefined") && (task_arr[0] != "undefined")){
            create_task(task_arr[0], task_arr[1], block);
        }
    }
}

function add_new_task(task_content){

    while(task_content[0] == ''){
        task_content.substring(1);
    }

    if(task_content == ""){
        window.alert("Task can't be empty");
        return;
    }

    var block = document.getElementById("task_list");

    var block = document.getElementById("task_list");

    // Create a <li> list item
    var li = document.createElement("li");
    li.id = "task" + cnt_tasks;
    li.type = "None";

    /************ COOKIE STUFF ***********/
    // Create the Cookie
    document.cookie = li.id + "=" + task_content;
    /*************************************/

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

    var br = document.createElement("br");
    block.appendChild(br);
}

function create_task(task_id,task_name, block){

    // Create a <li> list item
    var li = document.createElement("li");
    li.id = task_id;
    li.type = "None";

    /************ COOKIE STUFF ***********/
    // Create the Cookie
    // document.cookie = li.id + "=" + task_name;
    /*************************************/

    // Create task div & define attributes
    var t = document.createElement("div");

    // Create p & define attributes
    var p1 = document.createElement("p");
    p1.innerHTML = task_name;

    // Create delete button & define attributes
    var del = document.createElement("button");
    del.innerHTML = "Delete";
    var li_id = li.id;

    var dele_attribute = "delete_task('" + li_id + "');";
    del.setAttribute("onclick",dele_attribute);

    // Append p1 & del to t
    t.appendChild(p1);
    t.appendChild(del);

    // Append t to li
    li.appendChild(t);
    var br = document.createElement("br");
    li.appendChild(br);

    // Append li to block
    block.appendChild(li);
}

function delete_task(num){

    var ele = document.getElementById(num);

    console.log("num : ", num);

    document.cookie = num + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    ele.remove();
}