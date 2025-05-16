



document.querySelector("button").addEventListener('click',()=>{
    let squareCount = 0;
    do{
        squareCount = prompt("Enter Number ");

    }while(squareCount>100);

    makeGrid(squareCount)

})

document.querySelector("#container").addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor = "darkslategray";
    console.log(e.target.opacity)
    e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
});



function makeGrid(squareCount){
    let grid = "";
    for(let i = 0 ;  i < squareCount ; i++){
        grid+="<div class='square-line'>";
        for(let j = 0 ; j < squareCount ; j++){
            grid+= "<div class='square'></div>";
        }
        grid += "</div>";
    }



    document.querySelector("#container").innerHTML = grid;

}

