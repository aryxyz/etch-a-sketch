



document.querySelector("button").addEventListener('click',()=>{
    let squareCount = 0;
    do{
        squareCount = prompt("Enter Number ");

    }while(squareCount>100);

    makeGrid(squareCount)

})



function makeGrid(squareCount){
    let grid = "";
    for(let i = 0 ;  i < squareCount ; i++){
        grid+="<div class='square'></div>";
    }

    console.log(grid)

    document.querySelector("#container").innerHTML = grid;

}