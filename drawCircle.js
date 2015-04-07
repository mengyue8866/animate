function circle (argument) {
  this.x = 10;
  this.y = 10;
  this.strokeColor = '#EEA200';
  this.fillcolor = '#202020';
  this.radio = 4;
  this.rotation = 0;
}
circle.prototoype = {
  draw:function(context){
    context.save();
    context.translate(this.x,this.y);
    context.fillStyle = this.fillcolor;
    context.strokeStyle = this.strokeStyle;
    context.lineWidth = 4;
    context.beginPath();
    context.arc(this.x,this.y,this.radio,Math.PI*2,true);
    context.closePath();
    context.fill();
    context.stroke();
    context.restore();
  }
}