const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', () => {
    if (input.value.length > 0) {

        const listElement = document.createElement("li");
        const deleteButton = document.createElement("button");
        const inputHolder = input.value;
        
        input.value = "";
        listElement.textContent = inputHolder;
        deleteButton.textContent = 	"❌";

        listElement.appendChild(deleteButton);
        list.appendChild(listElement);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listElement);
            input.focus();
        })

        input.focus();
    }
})