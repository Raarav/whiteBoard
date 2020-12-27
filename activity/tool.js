let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let undo = document.querySelector("#undo");
ctx.lineWidth=25;
pencil.addEventListener("click", function(){
    ctx.strokeStyle = "black";
});
eraser.addEventListener("click", function(){
    ctx.strokeStyle = "white";
});
undo.addEventListener("click", function(){
    underMaker();
})