function startAnim() {
  let myPic = document.getElementById("pic")
  let X = 0
  let Y = 0
  let id = setInterval(anim, 4.5)

  function anim() {
    if(X == 200) {
      clearInterval(id)
      myPic.style.left = 0 + "px"
      myPic.style.top = 0 + "px"
    }
    else { 
      if(X >= 0 && X < 200) {
        X++
        Y = Math.pow(X,2) / 100
      }
    
        
      myPic.style.left = X + "px"
      myPic.style.top = Y + "px"

    }
  }
}
