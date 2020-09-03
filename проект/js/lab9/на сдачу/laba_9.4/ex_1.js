

function graphic1() {
  let graphicColor = document.getElementById("color").value
  let canvas = document.getElementById("c1")
  let ctx = canvas.getContext("2d")

  ctx.clearRect(0, 0, 400, 400)
  ctx.beginPath()
  ctx.strokeStyle = graphicColor
  ctx.lineWidth = 2

  ctx.moveTo(200, 200)
  ctx.quadraticCurveTo(150, 190, 100, 0)
  ctx.moveTo(200, 200)
  ctx.quadraticCurveTo(250, 190, 300, 0)

  ctx.moveTo(0, 200)
  ctx.quadraticCurveTo(200, 200, 400, 200)
  ctx.moveTo(200, 0)
  ctx.quadraticCurveTo(200, 200, 200, 400)

  ctx.stroke()
  ctx.closePath()
} 

function graphic2() {
  let graphicColor = document.getElementById("color").value
  let canvas = document.getElementById("c1")
  let ctx = canvas.getContext("2d")

  ctx.clearRect(0, 0, 400, 400)
  ctx.beginPath()
  ctx.strokeStyle = graphicColor
  ctx.lineWidth = 2

  ctx.moveTo(200, 200)
  ctx.quadraticCurveTo(140, 210, 140, 400)
  ctx.moveTo(200, 200)
  ctx.quadraticCurveTo(260, 190, 260, 0)

  ctx.moveTo(0, 200)
  ctx.quadraticCurveTo(200, 200, 400, 200)
  ctx.moveTo(200, 0)
  ctx.quadraticCurveTo(200, 200, 200, 400)

  ctx.stroke()
  ctx.closePath()
} 

function graphic3() {
  let graphicColor = document.getElementById("color").value
  let canvas = document.getElementById("c1")
  let ctx = canvas.getContext("2d")
  
  ctx.clearRect(0, 0, 400, 400)
  ctx.beginPath()
  ctx.strokeStyle = graphicColor
  ctx.lineWidth = 2

  ctx.moveTo(200, 200)
  ctx.quadraticCurveTo(150, 270, 100, 200)
  ctx.quadraticCurveTo(50, 130, 0, 200)
  ctx.moveTo(200, 200)
  ctx.quadraticCurveTo(250, 130, 300, 200)
  ctx.quadraticCurveTo(350, 270, 400, 200)

  ctx.moveTo(0, 200)
  ctx.quadraticCurveTo(200, 200, 400, 200)
  ctx.moveTo(200, 0)
  ctx.quadraticCurveTo(200, 200, 200, 400)

  ctx.stroke()
  ctx.closePath()
} 

function graphic4() {
  let graphicColor = document.getElementById("color").value
  let canvas = document.getElementById("c1")
  let ctx = canvas.getContext("2d")

  ctx.clearRect(0, 0, 400, 400)
  ctx.beginPath()
  ctx.strokeStyle = graphicColor
  ctx.lineWidth = 2

  ctx.moveTo(150, 200)
  ctx.quadraticCurveTo(200, 130, 250, 200)
  ctx.moveTo(150, 200)
  ctx.quadraticCurveTo(100, 270, 50, 200)
  ctx.moveTo(50, 200)
  ctx.quadraticCurveTo(0, 130, -100, 200)
  ctx.moveTo(250, 200)
  ctx.quadraticCurveTo(300, 270, 350, 200)
  ctx.moveTo(350, 200)
  ctx.quadraticCurveTo(400, 130, 500, 200)



  ctx.moveTo(0, 200)
  ctx.quadraticCurveTo(200, 200, 400, 200)
  ctx.moveTo(200, 0)
  ctx.quadraticCurveTo(200, 200, 200, 400)

  ctx.stroke()
  ctx.closePath()
}