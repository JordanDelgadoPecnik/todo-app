const button = document.getElementById("myButton");
const productInput = document.getElementById("productInput");
const productList = document.getElementById("productList");



button.addEventListener("click", function () {
    const productValue = productInput.value;
    if (productValue.trim() === "") {
        alert("Please enter a product name.");
        return;
    }
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        productList.removeChild(li);
    });
    const li = document.createElement("li");
    li.textContent = productValue;
    li.appendChild(deleteButton);
    productList.appendChild(li);
    productInput.value = "";
})  