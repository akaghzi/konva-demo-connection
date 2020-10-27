const stage = new Konva.Stage({
  container: 'kroot',
  width: 1080,
  height: 900
})
const layer = new Konva.Layer()

const circle0 = new Konva.Circle({
  x: 50,
  y: 50,
  radius: 50,
  inputOffsets: {
    x: [],
    y: []
  },
  inputs: [],
  outputOffsets: {x: [50],
                y: [0]},
  outputs: [],
  fill: 'green',
  draggable: true
})
circle0.addName('circle0')
circle0.on('dragend', (e) => {
  const ct = e.currentTarget
  const oconnections = ct.getAttr('outputs')
  if(oconnections.length > 0){
    const X = ct.position().x + ct.getAttr('outputOffsets').x[0]
    console.log('x', X)
    const Y = ct.position().y + ct.getAttr('outputOffsets').y[0]
    console.log('y', Y)
    const conn0 = ct.getAttr('outputs')[0]
    const c1 = stage.find(`#${conn0}`)
    console.log('connection: ',c1)
    let points = c1[0].getAttr('points')
    console.log(points)
    points = [X, Y, points[2], points[3]]
    c1[0].setAttr('points', points)
    console.log(points)
    layer.draw()
    localStorage.setItem('layer',JSON.stringify(layer.toJSON()))
  }
})
circle0.on('mousemove', () => {
})
circle0.on('mouseover', () => {
  document.body.style.cursor = 'pointer';
})
circle0.on('mouseout', () => {
  document.body.style.cursor = 'default';
})
circle0.on('dblclick', (e)=>{
  // console.log()
})

const circle1 = new Konva.Circle({
  x: 350,
  y: 350,
  radius: 50,
  fill: 'blue',
  inputOffsets: {
    x: [-50],
    y: [0]
  },
  inputs: [],
  outputOffsets: {
    x: [],
    y: []
  },
  outputs: [],
  draggable: true
})
circle1.name('circle1')
circle1.on('dragend', (e) => {
  const ct = e.currentTarget
  const iconnections = ct.getAttr('inputs')
  if (iconnections.length > 0) {
    const X = ct.position().x + ct.getAttr('inputOffsets').x[0]
    console.log('x', X)
    const Y = ct.position().y + ct.getAttr('inputOffsets').y[0]
    console.log('y', Y)
    const conn0 = ct.getAttr('inputs')[0]
    const c1 = stage.find(`#${conn0}`)
    console.log('connection: ', c1[0].getAttr("id"))
    let points = c1[0].getAttr('points')
    console.log(points)
    points = [points[0], points[1], X, Y]
    c1[0].setAttr('points', points)
    console.log(points)
    layer.draw()
    localStorage.setItem('layer',JSON.stringify(layer.toJSON()))
  }
})
circle1.on('mouseover', () => {
  document.body.style.cursor = 'pointer';
})
circle1.on('mouseout', () => {
  document.body.style.cursor = 'default';
})
circle1.on('dblclick', (e)=>{
})

const createConnection = () => {
  const startX = circle0.position().x + circle0.getAttr('outputOffsets').x[0]
  const startY = circle0.position().y
  const endX = circle1.position().x + circle1.getAttr('inputOffsets').x[0]
  const endY = circle1.position().y
  const connName = `${circle0.name()}-${circle1.name()}-${Math.floor(Math.random()*100)}`
  const connection = new Konva.Line({
    strokeWidth: 2,
    stroke: 'blue',
    points: [startX, startY, endX, endY],
    draggable: true,
    id: connName
  })
  connection.addName('conn0')
  circle0.getAttr('outputs').push(connection.getAttr('id'))
  circle1.getAttr('inputs').push(connection.getAttr('id'))
  layer.add(connection)
  layer.show()
  localStorage.setItem('layer',JSON.stringify(layer.toJSON()))
}
const btn1 = document.querySelector("#btn-1")
btn1.addEventListener('click', createConnection)
layer.add(circle0)
layer.add(circle1)
stage.add(layer)
layer.draw()
