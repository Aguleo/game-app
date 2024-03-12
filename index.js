
// const student = {};
// //const studentData = new Object();

// student['name'] = 'Chika';
// student.age = 34;
// student['department'] = 'Computer Engineering';
// console.log('The name of the student is ' + student.name);
// console.log(`The age of the student is ${student.age} \n the department is ${student.department}`);
// console.log(student);

//New line
window.addEventListener("DOMContentLoaded", (event) => {
  const taskName = document.getElementById("task-name");
  const taskDescription = document.getElementById("task-description");
  const addButton = document.getElementById("add-todo");
  const listContainer = document.getElementById("lists");

  const taskArray = [
    { nameOfTask: "fetch water", taskDescription: "Fetch it from the well" },
    { nameOfTask: "cook food", taskDescription: "try cook rice" },
    { nameOfTask: "cook meat", taskDescription: "make it spicy" },
  ];

  const addTodo = () => {
    if (taskName.value === "" || taskDescription.value === "") {
      alert("Please fill this form!");
      return;
    }
    const newTask = {
      nameOfTask: taskName.value,
      taskDescription: taskDescription.value,
    };

    taskArray.push(newTask);
    taskName.value = "";
    taskDescription.value = "";
    displayTodo();
  }

  const displayTodo = () => {
    listContainer.innerHTML = '';
    taskArray.forEach((task, index) => {
      const itemDiv = document.createElement("div");
      const li = document.createElement("li");
      const editBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      editBtn.className = "edit";
      editBtn.textContent = "Edit";
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete";
      itemDiv.className = "item";
      li.textContent = task.nameOfTask;

      deleteBtn.addEventListener("click", () => {
        deleteTask(index);
      });

      editBtn.addEventListener("click", () => {
        editTask(index);
      });

      itemDiv.appendChild(li);
      itemDiv.appendChild(editBtn);
      itemDiv.appendChild(deleteBtn);
      listContainer.appendChild(itemDiv);
    });
  }

  const deleteTask = (index) => {
    taskArray.splice(index, 1);
    displayTodo();
  }

  const editTask = (index) => {
    const newName = prompt("Enter the new name for the task:");
    if (newName !== null) {
      taskArray[index].nameOfTask = newName;
      displayTodo();
    }
  }

  addButton.addEventListener("click", addTodo);
  displayTodo();
});
