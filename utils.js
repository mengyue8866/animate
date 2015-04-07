(function drawFrame(element){
  var callback = arguments.callee;
  if(!window.requestAnimationFrame){
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
                                    function(callback){
                                      return window.setTimeout(callback,1000/60);
                                    });
  }else{
    window.requestAnimationFrame(callback,element);
  }
}());