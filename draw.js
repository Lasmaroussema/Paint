let can=document.getElementById("canvas");
let ctx=can.getContext("2d");
let canpos = can.getBoundingClientRect();
ctx.lineCap = 'round';
let drawing = false;




document.querySelectorAll("li").forEach(function(e)
    {
        console.log(e);
        e.style.color=e.innerText;
    })
let colors=["blue","yellow","red","green","orange","pink","purple","white","brown","aqua","chartreuse"];
let r;





    function init(event) {
        drawing = true;
        ctx.beginPath();
        ctx.moveTo(event.clientX - canpos.left, event.clientY - canpos.top);
    }
    function draw(event) {
        if (!drawing)
            return;
        ctx.lineWidth = 7;
        ctx.lineTo(event.clientX - canpos.left, event.clientY - canpos.top);
        ctx.moveTo(event.clientX - canpos.left, event.clientY - canpos.top);
        ctx.strokeStyle = colors[r];
        ctx.stroke();
    }
    function stop() {
        drawing = false;
        ctx.closePath();
    }





document.getElementById("draw").onclick=function()
{
    if(document.querySelector(".msg").innerText!="")
{
    return;
}
document.getElementById("clear").style.display="block";
    document.querySelector("ul").style.display="block";
    document.querySelector(".msg").appendChild(document.createTextNode(" choose color , click and drag to draw , relach to stop : "));
    document.querySelectorAll("li").forEach(function(e)
    {
        e.onclick=function()
        {
            r=e.getAttribute("id");
        }
    })
        can.addEventListener("mousedown", init);
        can.addEventListener("touchstart", init);
        can.addEventListener("mousemove", draw);
        can.addEventListener("touchmove", draw);
        can.addEventListener("mouseup", stop);
        can.addEventListener("touchend", stop);
};





document.getElementById("clear").onclick=function()
{
  ctx.clearRect(0,0,can.width,can.height);
}
