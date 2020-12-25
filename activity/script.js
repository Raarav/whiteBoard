let ispendown = false;
board.addEventListener("mousedown", function(e){
    let x = e.clientX;
    let y = e.clientY;
    ctx.moveTo(x,y);
    ispendown = true;
});
board.addEventListener("mousemove", function(e){
    let x = e.clientX;
    let y = e.clientY;
    if(ispendown == true){
        ctx.lineTo(x,y);
        ctx.stroke();
    }
});
board.addEventListener("mouseup",function(){
    ispendown = false;
});