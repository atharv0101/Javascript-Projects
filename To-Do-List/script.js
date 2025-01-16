let task_textis = document.getElementById('task_text').value;

let addtask = document.getElementById("add_task");
addtask.onclick = () => {
    let task_textis = document.getElementById('task_text').value;
    let div = document.createElement("div");
    document.body.appendChild(div);
    div.innerText = task_textis;
    document.getElementById('task_text').value = "";

    // Attach the onclick event to remove the div when clicked
    div.onclick = () => {
        div.remove();

    }
}


