const form = document.getElementById("todo-form");
const ul = document.getElementById("todo-list");
const counterEl = document.getElementById("counter");
const smallEl = document.getElementById("error-message");

let counter = 0;

const todos = JSON.parse(localStorage.getItem("todos")) || [];
if (todos.length) {
    counter += todos.length;
    counterEl.textContent = `Counter: ${counter}`;
    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo;
        ul.appendChild(li);
    });
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = document.getElementById("todo-input").value.trim();
    if (inputText) {
        const li = document.createElement("li");
        li.textContent = inputText;
        ul.appendChild(li);
        counter++;
        counterEl.textContent = `Counter: ${counter}`;
        todos.push(inputText);
        localStorage.setItem("todos", JSON.stringify(todos));
        form.reset();
    } else {
        smallEl.classList.remove("hidden");
        setTimeout(() => {
            smallEl.classList.add("hidden");
        }, 3000);
    }
});