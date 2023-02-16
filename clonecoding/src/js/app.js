const h1 = document.querySelector("div.hello:first-child h1") 

// function handleTitleClick() {
//     h1.className = "active";
// }

function handleTitleClick() { // 이전에 가지고 있었던 class를 전부 없앤다는 단점이 있음
    const activeClass = "active"
    if (h1.classList.contains(activeClass)){
        h1.classList.remove(activeClass)
    }
    else {
        h1.classList.add(activeClass)
    }
}

h1.addEventListener("click",handleTitleClick)  