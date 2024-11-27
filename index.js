document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const pendingList = document.getElementById("pendingList");
    const completedList = document.getElementById("completedList");

    // Función para añadir una nueva tarea
    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText, false); // Se añade como pendiente
            taskInput.value = ""; // Limpiar el input
        }
    });

    // Función para crear una tarea
    function addTask(text, completed) {
        const task = document.createElement("div");
        task.classList.add("task");
        task.innerHTML = `
            <span class="txt">${text}</span>
            <div>
                <button class="toggle">${completed ? "Pendiente" : "Hecha"}</button>
                <button class="delete">Eliminar</button>
            </div>
        `;

        // Añadir eventos a los botones
        const toggleButton = task.querySelector(".toggle");
        const deleteButton = task.querySelector(".delete");

        toggleButton.addEventListener("click", () => {
            if (completed) {
                completedList.removeChild(task);
                addTask(text, false);
            } else {
                pendingList.removeChild(task);
                addTask(text, true);
            }
        });

        deleteButton.addEventListener("click", () => {
            if (completed) {
                completedList.removeChild(task);
            } else {
                pendingList.removeChild(task);
            }
        });

        // Añadir la tarea a la lista correspondiente
        if (completed) {
            completedList.appendChild(task);
        } else {
            pendingList.appendChild(task);
        }
    }
});