let ispendown = false;
let points = [];
let undoPoints = [];
board.addEventListener("mousedown", function(e){
    let x = e.clientX;
    let y = e.clientY;
    ctx.beginPath(0,0);
    let top =  getPosition();
    y = y - top; 
    ctx.moveTo(x,y);
    ispendown = true;

    let mdp = {
        x: x,
        y: y,
        id: "md",
        color: ctx.strokeStyle,
        width: ctx.linewidth
    }
    points.push(mdp);
});
board.addEventListener("mousemove", function(e){
    let x = e.clientX;
    let y = e.clientY;
    let top =  getPosition();
    y = y - top; 
    if(ispendown == true){
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    let mp = {
        x: x,
        y: y,
        id: "mm",
        color: ctx.strokeStyle,
        width: ctx.linewidth
    }
    points.push(mp);
});
board.addEventListener("mouseup",function(){
    ispendown = false;
});

function getPosition(){
    let { top } = board.getBoundingClientRect();
    return top;
}

function redraw(){
    for(let i=0; i<points.length; i++){
        let { x, y, id, color, width } = points[i];
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        if(id == "md"){
            ctx.beginPath();
            ctx.moveTo(x,y);
        } else if(id == "mm"){
            ctx.lineTo(x,y);
            ctx.stroke();
        }
    }
}

function underMaker() {
    // addFirst => unshift,
    // removeFirst => shift,
    // addLast => push
    // removeLast => pop
    
    if(points.length >= 2){
        // pop last line
        for(let i=points.length-1;i>=0;i--){
            let { id } = points[i];
            if(id == "md"){
                points.pop();
                break;
            }
            points.pop();
        }
        // clear Rect
        ctx.clientReact(0,0,board.width,board.height);
        //call redraw
        redraw();
    }
}