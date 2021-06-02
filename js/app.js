var cnt_tasks = 0;

// window.onload = load_tasks();

// To get the list of all cookies
// function getCookie(task_name){

// /*
window.onload = function(){ // function load_tasks(){

    // var t_name =  task_name + "=";

    // var decode_tname = decodeURIComponent(t_name);

    // var t_list = decode_tname.split(";");

    var t_list = document.cookie.split(';');

    cnt_tasks = t_list.length;

    var block = document.getElementById("task_list");

    console.log(t_list.length);

    for(var i=0;i<t_list.length;i++){
        // console.log(t_list[i]);

        var c = t_list[i];

        console.log(t_list[i]);

        while(c[0] == ' '){
            c = c.substring(1);
            // console.log(c);
        }

        console.log(c);

        var task_arr = c.split("=");

        if((task_arr[1] != "") && (task_arr[0] != "") && (task_arr[1] != "undefined") && (task_arr[0] != "undefined")){
            create_task(task_arr[0], task_arr[1], block);
        }
    }
}
// */

function add_new_task(task_content){

    // var task_id = "task" + cnt_tasks;
    // cnt_tasks++;

    var block = document.getElementById("task_list");

    // create_task(task_content, task_id, block);

    // /*
    var block = document.getElementById("task_list");

    // Create a <li> list item
    var li = document.createElement("li");
    li.id = "task" + cnt_tasks;
    li.type = "None";

    // */

    /************ COOKIE STUFF ***********/
    // Create the Cookie
    // document.cookie = li.id + "=" + task_content;
    /*************************************/

    // /*
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
    // */
}

function create_task(task_id,task_name, block){

    console.log("task_id :", task_id);
    console.log("task_name :", task_name);

    // var block = document.getElementById("task_list");
    // console.log(block);

    // Create a <li> list item
    var li = document.createElement("li");
    li.id = task_id;
    li.type = "None";

    console.log("task_id :",task_id);
    console.log("li.id:",li.id);

    // console.log(li);

    /************ COOKIE STUFF ***********/
    // Create the Cookie
    // document.cookie = li.id + "=" + task_name;
    /*************************************/

    // Create task div & define attributes
    var t = document.createElement("div");

    // increase the counter
    // cnt_tasks = cnt_tasks+1;

    // Create p & define attributes
    var p1 = document.createElement("p");
    p1.innerHTML = task_name;

    // Create delete button & define attributes
    var del = document.createElement("button");
    del.innerHTML = "Delete";
    // console.log(li.id);
    var li_id = li.id;

    // console.log(li_id);
    var dele_attribute = "delete_task('" + li_id + "');";
    // console.log("dele_attribute : ", dele_attribute);
    del.setAttribute("onclick",dele_attribute);

    // Append p1 & del to t
    t.appendChild(p1);
    t.appendChild(del);

    // Append t to li
    li.appendChild(t);
    var br = document.createElement("br");
    li.appendChild(br);

    // console.log(li);

    // Append li to block
    block.appendChild(li);

    // var br = document.createElement("br");
    // block.appendChild(br);
}

function delete_task(num){
    var ele = document.getElementById(num);
    console.log("num : ", num);
    // ele.remove();

    /*
    var abcd = '"' + num + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;" + '"';
    console.log(abcd);
    */

    document.cookie = num + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    ele.remove();
}