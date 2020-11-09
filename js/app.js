let canvas_width = window.innerWidth
let canvas_height = window.innerHeight
const stage = new Konva.Stage({
  container: 'kroot',
  width: canvas_width,
  height: canvas_height
})
const layer = new Konva.Layer()
stage.add(layer)
layer.draw()

let currentShape;
const contextMenu = document.getElementById('contextMenu');
const addMenu = document.getElementById('addMenu');

document.getElementById('delete-button').addEventListener('click', () => {
  console.log('removing shape',currentShape)
  removeShape(currentShape)
});

document.getElementById('addForm').addEventListener('submit', (e) => {
  e.preventDefault()
  processAddForm(e.target)
})

window.addEventListener('click', () => {
  // hide menu
  contextMenu.style.display = 'none';
  // addMenu.style.display = 'none';
});

stage.on('contextmenu', function (e) {
  // prevent default behavior
  e.evt.preventDefault();
  if (e.target === stage) {
    // if we are on empty place of the stage we will do nothing
    // getContextMenu()
    return;
  }
  currentShape = e.target;
  // console.log(currentShape)
  // addMenu.style.display = 'none'
  // show menu
  contextMenu.style.display = 'initial';
  // const containerRect = stage.container().getBoundingClientRect();
  // console.log(containerRect)
  // console.log(stage.getPointerPosition())
  contextMenu.style.top =
      stage.getPointerPosition().y + 6 + 'px';
  contextMenu.style.left =
      stage.getPointerPosition().x + 12 + 'px';
});

// const greenCircle = createCircle({x: 50, y: 50, radius: 40, color: 'green', tagName: 'greenCircle'})

// const blueCircle = createCircle({x: 250, y: 250, radius: 50, color: 'blue', tagName: 'blueCircle'})

// const redCircle = createCircle({x: 300, y: 250, radius: 50, color: 'red', tagName: 'redCircle'})

const c1 = createCustomShape({tagName: 'cShape1', x:100, y:50, color: '#00D2FF'})
const c2 = createCustomShape({tagName: 'cShape2', x:400, y:50, color: 'orange'})
const c3 = createCustomShape({tagName: 'cShape3', x:250, y:175, color: 'lightgrey'})
const c4 = createCustomShape({tagName: 'cShape4', x:100, y:300, color: 'green'})
const c5 = createCustomShape({tagName: 'cShape5', x:400, y:300, color: 'red'})

addStageListeners(stage)

// const btn1 = document.querySelector("#btn-1")
// btn1.addEventListener('click', createConnection(circle0, circle1))
// const btn2 = document.querySelector("#btn-2")
// btn2.addEventListener('click', createConnection(circle1, circle2))
