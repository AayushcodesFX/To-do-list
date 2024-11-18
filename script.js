let tasks = [];

const addTask = () => {
    const taskInput = document.getElementById('taskInput')
    const text = taskInput.value.trim()

    if(text){
        tasks.push({text: text, completed: false});

        updateTasksList();
    }
};

const updateTasksList = () => {
    const taskList = document.getElementById('task-list')
    taskList.innerHTML = "";

    tasks.foreach (task => {
        const listItem = document.createElement('li')

        listItem.innerHTML =`
        <div class="taskItem">
        <div class="task"> ${task.completed ? 'completed':''}>
                <input type="checkbox" class="checkbox" ${task.completed ? "checkbox": ""}/>
                <p> ${task.text}</p>
            </div>
            <div class="icons">
                    <img src="edit.png" onClick="editTask(${index})" />
                    <img src="bin.png" onClick="deleteTask(${index})"/>
                </div></>
    </div>
   `;

   listItem.adddEventListner("change", () => toggleTaskComplete(index));
   taskList.append(listItem);
    });
};

document.getElementById('newTask').addEventListener('click',function(e){
    e.preventDefault()

    addTask();
})