const stage = new Konva.Stage({
  container: 'kroot',
  width: 1080,
  height: 900
})
const layer = new Konva.Layer()
stage.add(layer)
layer.draw()

let currentShape;
const contextMenu = document.getElementById('contextMenu');
const addMenu = document.getElementById('addMenu');

document.getElementById('delete-button').addEventListener('click', () => {
  console.log(currentShape)
  const connections = currentShape.getAttr('connections')
  if (connections.length > 0) {
    connections.forEach((connection) => {
      const conn = stage.findOne(`#${connection}`)
      const source = stage.findOne(`#${connection.split('-')[0]}`)
      const sourceConnections = source.getAttr('connections')
      source.setAttr('connections', sourceConnections.filter((c) => c !== connection))
      const target = stage.findOne(`#${connection.split('-')[1]}`)
      const targetConnections = target.getAttr('connections')
      target.setAttr('connections', targetConnections.filter((c) => c !== connection))
      conn.destroy()
    })
  }
  currentShape.destroy();
  layer.draw();
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

const greenCircle = createCircle({x: 50, y: 50, radius: 40, color: 'green', name: 'greenCircle'})
// createCircle({x: 50, y: 50, radius: 40, color: 'green', name: 'greenCircle'})
// const greenCircle = stage.findOne('#greenCircle')

const blueCircle = createCircle({x: 250, y: 250, radius: 50, color: 'blue', name: 'blueCircle'})
// const blueCircle = stage.findOne('#blueCircle')
//
const redCircle = createCircle({x: 300, y: 250, radius: 50, color: 'red', name: 'redCircle'})
// const redCircle = stage.findOne('#redCircle')

const myShape = addMyShape({id: 'myShape', color: '#00D2FF'})
// const myShape = stage.findOne('#myShape');

// const newShape = addNewShape({id: 'newShape', color: '#00D2FF'})
// const newShape = stage.findOne('#newShape');

activateStageTriggers(stage)

// const btn1 = document.querySelector("#btn-1")
// btn1.addEventListener('click', createConnection(circle0, circle1))
// const btn2 = document.querySelector("#btn-2")
// btn2.addEventListener('click', createConnection(circle1, circle2))
