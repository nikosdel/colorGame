var colors=[];
var squares=document.querySelectorAll(".square");
var pickedColor;
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetBtn=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");
var numberOfSquares=6;

init();

function init() {

	setupModeButtons();
	setupSquares();


    reset();


}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            this.classList.add("selected");
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset();
        });
    }


}
function setupSquares(){
    for(var i=0; i<squares.length;i++){


        squares[i].addEventListener("click",function () {
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor){
                messageDisplay.textContent="correct!";
                resetBtn.textContent="Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;

            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again!";

            }
        });

    }

}


function reset(){
    colors=generateColors(numberOfSquares);
    resetBtn.textContent="New Colors";
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    h1.style.backgroundColor="steelblue";
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
        	squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
		}
    	else{
        	squares[i].style.display="none";
		}

    }

}


resetBtn.addEventListener("click",function () {
	reset();
});



function changeColors(color) {
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor() {
	 var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num){
	var arr=[];
	for(i=0;i<num;i++){
	arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";

}