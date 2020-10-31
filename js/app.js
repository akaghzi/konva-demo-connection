const stage = new Konva.Stage({
  container: 'kroot',
  width: 1080,
  height: 900
})
// stage.on('dblclick', () => {
//   console.log('stage double clicked')
// })
const layer = new Konva.Layer()
stage.add(layer)
layer.draw()

let currentShape;
const menu = document.getElementById('menu');

document.getElementById('delete-button').addEventListener('click', () => {
  console.log(currentShape)
  currentShape.destroy();
  layer.draw();
});

window.addEventListener('click', () => {
  // hide menu
  menu.style.display = 'none';
});

stage.on('contextmenu', function (e) {
  // prevent default behavior
  e.evt.preventDefault();
  if (e.target === stage) {
    // if we are on empty place of the stage we will do nothing
    return;
  }
  currentShape = e.target;
  // console.log(currentShape)
  // show menu
  menu.style.display = 'initial';
  const containerRect = stage.container().getBoundingClientRect();
  // console.log(containerRect)
  // console.log(stage.getPointerPosition())
  menu.style.top =
      containerRect.top + stage.getPointerPosition().y + 6 + 'px';
  menu.style.left =
      containerRect.left + stage.getPointerPosition().x + 4 + 'px';
});

createCircle({
  x: 50,
  y: 50,
  radius: 40,
  color: 'green',
  name: 'greenCircle'
})
const greenCircle = stage.findOne('#greenCircle')
// console.log(circle0)

createCircle({
  x: 250,
  y: 250,
  radius: 50,
  color: 'blue',
  name: 'blueCircle'
})
const blueCircle = stage.findOne('#blueCircle')

createCircle({
  x: 50,
  y: 250,
  radius: 50,
  color: 'red',
  name: 'redCircle'
})
const redCircle = stage.findOne('#redCircle')

createRect({
  name: 'rect0',
  x: 100,
  y: 300,
  color: 'pink'
})
const rect0 = stage.findOne('#rect0')

activateStageTriggers(stage)

// createConnection(greenCircle, blueCircle)

// const btn1 = document.querySelector("#btn-1")
// btn1.addEventListener('click', createConnection(circle0, circle1))
// const btn2 = document.querySelector("#btn-2")
// btn2.addEventListener('click', createConnection(circle1, circle2))
