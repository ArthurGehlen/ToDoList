const input_task = document.getElementById('input_task');
const add_task_btn = document.getElementById('input_task_btn');
const task_area = document.getElementById('task_area');

add_task_btn.addEventListener('click', () => {
    const input_task_value = input_task.value;

    if (input_task_value != "") {
        let task = document.createElement("div");
        let task_title = document.createElement("p");
        task_title.textContent = input_task_value;

        task.classList.add("uncompleted_task");
        task.appendChild(task_title);

        task_area.appendChild(task);

        input_task.value = "";

        task.addEventListener('click', () => {
            task.classList.add("completed_task");

            setTimeout(() => {
                task.style.display = "none";
            }, 2000);
        });
    }
    else {
        alert("Você deve digitar a tarefa para adicionar!");
        return;
    }
})

input_task.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        const input_task_value = input_task.value;

        if (input_task_value != "") {   
            let task = document.createElement("div");
            let task_title = document.createElement("p");
            task_title.textContent = input_task_value;

            task.classList.add("uncompleted_task");
            task.appendChild(task_title);

            task_area.appendChild(task);

            input_task.value = "";

            task.addEventListener('click', () => {
                task.classList.add("completed_task");

                setTimeout(() => {
                    task.style.display = "none";
                }, 2000);
            });
        }
        else {
            alert("Você deve digitar a tarefa para adicionar!");
            return;
        }
    }
})