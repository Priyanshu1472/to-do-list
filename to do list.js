function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value;
  
  if (task === '') {
    alert("Please enter a task!");
    return;
  }
  
  var ul = document.getElementById("taskList");
  var li = document.createElement("li");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkbox";
  checkbox.onclick = function() {
    if (checkbox.checked) {
      li.style.opacity = 0.5;
    } else {
      li.style.opacity = 1;
    }
  };

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(task));
  ul.appendChild(li);
  
  input.value = '';
}
