function arrow(){
  this.x = 10;
  this.y = 10;
  this.rotation = 0;
  this.strokeColor = '#EEA200';
  this.fillcolor = '#202020';
}

arrow.prototype = {
  draw:function(context){
    context.save();
    context.translate(this.x,this.y);
    context.rotation(this.rotation);
    context.strokeStyle = this.strokeStyle;
    context.fillStyle = this.fillcolor;
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(30,10);
    context.lineTo(40,20);
    context.lineTo(30,30);
    context.lineTo(30,25);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }
}