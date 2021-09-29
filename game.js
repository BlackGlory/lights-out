const matrix = [
  [1, 1, 1, 1, 1]
, [1, 1, 1, 1, 1]
, [1, 1, 1, 1, 1]
, [1, 1, 1, 1, 1]
, [1, 1, 1, 1, 1]
]

const win = [
  [5, 5, 5, 5, 5]
, [5, 5, 5, 5, 5]
, [5, 5, 5, 5, 5]
, [5, 5, 5, 5, 5]
, [5, 5, 5, 5, 5]
]

const padding = 50
const boxSize = 30
const boxBorder = 3
const leftTop = padding
const rightBottom = 4 * 40 + padding + boxSize

let x = 2
let y = 2

const Key = {
  Left: 37
, Up: 38
, Right: 39
, Down: 40
, Enter: 13
}

const Color = {
  Red: 1
, Blue: 2
, Green: 3
, Yellow: 4
, White: 5
, Box: {
    1: {
      Background: '#FCBCB5'
    , Border: '#C97769'
    },
    2: {
      Background: '#A7C6E8'
    , Border: '#7CABD5'
    },
    3: {
      Background: '#C4DEC1'
    , Border: '#96C369'
    },
    4: {
      Background: '#FCEB54'
    , Border: '#F7D310'
    },
    5: {
      Background: '#C3C3C3'
    , Border: '#F9F9F9'
    }
  }
, Selected: {
    Background: '#CCCDCE'
  , Border: '#E8E9E7'
  }
}

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
setTimeout(draw, 0)

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case Key.Left:
      if (x > 0) x--
      setTimeout(draw, 0)
      break
    case Key.Right:
      if (x < 4) x++
      setTimeout(draw, 0)
      break
    case Key.Up:
      if (y > 0) y--
      setTimeout(draw, 0)
      break
    case Key.Down:
      if (y < 4) y++
      setTimeout(draw, 0)
      break
    case Key.Enter:
      setTimeout(draw, 0)
      changeMatrix()
      checkMatrix()
      break
  }
})

canvas.addEventListener('click', (e) => {
  const o = {
    x: e.offsetX
  , y: e.offsetY
  }
  if (
    o.x >= leftTop &&
    o.x <= rightBottom &&
    o.y >= leftTop &&
    o.y <= rightBottom
  ) {
    const tx = getLocation(o.x)
    const ty = getLocation(o.y)
    if (tx && ty) {
      x = tx - 1
      y = ty - 1
      setTimeout(draw, 0)
      changeMatrix()
      checkMatrix()
    }
  }

  function getLocation(value) {
    if (value <= 0 * 40 + padding + boxSize) {
      return 1
    } else if (value >= 1 * 40 + padding && value <= 1 * 40 + padding + boxSize) {
      return 2
    } else if (value >= 2 * 40 + padding && value <= 2 * 40 + padding + boxSize) {
      return 3
    } else if (value >= 3 * 40 + padding && value <= 3 * 40 + padding + boxSize) {
      return 4
    } else if (value >= 4 * 40 + padding && value <= 4 * 40 + padding + boxSize) {
      return 5
    }
    return 0
  }
})

function changeMatrix() {
  const sx = x
  const sy = y
  matrix[sx][sy] = changeColor(matrix[sx][sy])
  if (sx > 0) {
    matrix[sx - 1][sy] = changeColor(matrix[sx - 1][sy])
  }
  if (sx < 4) {
    matrix[sx + 1][sy] = changeColor(matrix[sx + 1][sy])
  }
  if (sy > 0) {
    matrix[sx][sy - 1] = changeColor(matrix[sx][sy - 1])
  }
  if (sy < 4) {
    matrix[sx][sy + 1] = changeColor(matrix[sx][sy + 1])
  }

  function changeColor(c) {
    return c < Color.White
         ? c + 1
         : Color.Red
  }
}

function checkMatrix() {
  if (JSON.stringify(matrix) === JSON.stringify(win)) {
    draw()
    alert('恭喜您过关')
  }
}

function draw() {
  ctx.clearRect(0, 0, 300, 300)

  drawSelected()
  for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
      drawBox(matrix[x][y], x, y)
    }
  }

  function drawSelected() {
    const xLeft = padding + x * 40 - 3
    const xRight = padding + x * 40 + boxSize - 4

    const yTop = padding + y * 40 - 3
    const yBottom = padding + y * 40 + boxSize - 4
    const background = Color.Selected.Background
    const border = Color.Selected.Border

    ctx.fillStyle = border
    ctx.fillRect(xLeft, yTop, 7, 7)
    ctx.fillRect(xRight, yTop, 7, 7)
    ctx.fillRect(xLeft, yBottom, 7, 7)
    ctx.fillRect(xRight, yBottom, 7, 7)
    ctx.fillStyle = background
    ctx.fillRect(xLeft + 2, yTop + 2, 3, 3)
    ctx.fillRect(xRight + 2, yTop + 2, 3, 3)
    ctx.fillRect(xLeft + 2, yBottom + 2, 3, 3)
    ctx.fillRect(xRight + 2, yBottom + 2, 3, 3)
  }

  function drawBox(color, x, y) {
    const background = Color.Box[color].Background
    const border = Color.Box[color].Border
    x = x * 40 + padding
    y = y * 40 + padding
    ctx.shadowBlur = 10
    ctx.shadowColor = border
    ctx.fillStyle = background
    ctx.fillRect(x, y, boxSize, boxSize)
    ctx.fillStyle = border
    x += boxBorder
    y += boxBorder
    ctx.fillRect(x, y, boxSize - 2 * boxBorder, boxSize - 2 * boxBorder)
    ctx.fillStyle = background
    x += boxBorder
    y += boxBorder
    ctx.fillRect(x, y, boxSize - 4 * boxBorder, boxSize - 4 * boxBorder)
    ctx.shadowBlur = 0
  }
}
