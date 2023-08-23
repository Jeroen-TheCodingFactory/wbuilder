fetch("../data/cardsStructure.json").then(response => response.json()).then(data => render(data));

function renderCards(data){
    for(let i =0; i < data.length; i++){
        let article = document.createElement("article");
        article.classList += "card";

        let header = document.createElement("header");
        header.classList = "card__header";
        article.appendChild(header);

        let heading = document.createElement("h1");
        heading.classList = "card__heading";
        heading.innerText = data[i].title;
        header.appendChild(heading);

        let div = document.createElement("div");
        article.appendChild(div);

        let section = document.createElement("section");
        section.classList = "card__body";
        div.appendChild(section);

        let text = document.createElement("p");
        text.innerText = data[i].text;
        section.appendChild(text);

        let footer = document.createElement("footer");
        footer.classList = "card__footer";
        div.appendChild(footer);

        let button = document.createElement("button");
        button.classList = "card__action";
        button.innerText = data[i].action;
        footer.appendChild(button);

        document.querySelector("body").appendChild(article);
    }
}

function render(data,parent){
    let childElement;
    for(let i = 0; i < data.length; i++){
        childElement = document.createElement(data[i].tag);
        childElement.classList = data[i].classList;
        if(data[i].root === true){
            parent = document.querySelector("body");
        }

        if(data[i].text !== undefined){
            childElement.innerText = data[i].text;
        }
        if(data[i].children.length > 0){
            render(data[i].children, childElement);
        }
        parent.appendChild(childElement);
    }
}
