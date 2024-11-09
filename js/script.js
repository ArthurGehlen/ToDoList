const input_task = document.getElementById('input_task');
const add_task_btn = document.getElementById('input_task_btn');
const task_area = document.getElementById('task_area');
const switch_theme_btn = document.getElementById("switch_theme_btn");
const switch_theme_p = document.getElementById("switch_theme_p");
const body = document.body;

function add_task() {
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

add_task_btn.addEventListener('click', () => {
    add_task();
})

input_task.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        add_task();
    }
})

switch_theme_btn.addEventListener("click", () => {
    body.classList.toggle("dark_mode");

    body.classList.contains("dark_mode") ? switch_theme_p.textContent = "Light Mode" : switch_theme_p.textContent = "Dark Mode";
});