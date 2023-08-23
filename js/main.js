function getData(url) {
    fetch(url).then(response => response.json()).then(data => render(data));
}

function render(data, parent) {
    let childElement;
    data.forEach(element => {
        childElement = document.createElement(element.tag);
        childElement.classList = element.classList;
        if (element.root === true) {
            parent = document.querySelector("body");
        }
        if (element.text !== undefined) {
            childElement.innerText = element.text;
        }
        if (element.children.length > 0) {
            render(element.children, childElement);
        }
        parent.appendChild(childElement);
    })
}

function init() {
    getData("../data/data.json");
}

init();