function getRandomInt(max) {
    return Math.round(Math.random() * max);
}


function clearGrid() {
    // Acquire reference to container
    const containerDivs = document.querySelectorAll(".container div");
    containerDivs.forEach(div => {
        div.parentNode.removeChild(div);
    });
}


function createGrid(grid) {
    // Acquire reference to container
    const container = document.querySelector(".container");

    for (let i=0; i<grid; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "outer";

        for (let j=0; j<grid; j++) {
            const innerDiv = document.createElement("div");
            innerDiv.className = "inner square";

            newDiv.appendChild(innerDiv);
        }

        container.appendChild(newDiv);
    }
}


function hoverEffect() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            if (!("lightness" in square)){square.lightness = 50;}
            if (!("fixedColor" in square)) {
                square.fixedColor = `${getRandomInt(360)}`;
            }

            square.style.cssText = 
            `background: hsl(${square.fixedColor}, 50%, ${square.lightness}%)`;

            if (square.lightness !== 0) {square.lightness -= 5;}
        });
    });
}


// Create initial grid
createGrid(16);
hoverEffect();

// Event listener to reset grid
const button = document.querySelector("button");
button.addEventListener("click", () => {
    button.disabled = true;

    grid = +prompt("Please enter the number of squares per side for the new grid (max:100):");
    clearGrid();

    if (Number.isInteger(grid)) {

        if (grid > 100) {
            grid = 100;
            alert("Maximum number of squares is 100");
        }
        createGrid(grid);
        hoverEffect();
    } 
    else {
        alert("Error, enter only numbers!!");
    }

    button.disabled = false;

})
