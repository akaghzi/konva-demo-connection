const createCircle = ({name, x=250, y=100, radius=40, color, draggable=true}) => {
  const circle = new Konva.Circle({
    id: name,
    x,
    y,
    radius,
    fill: color,
    connections: [],
    draggable: draggable,
    name: 'process'
  })
  addListeners(circle)

  // circle.on('dragend', (e) => {
  //   const ct = e.currentTarget
  //   if (ct.getAttr('connections').length > 0) {
  //     // console.log('update connection')
  //     updateConnection(ct.getAttr('connections'))
  //   }
  // })
  // circle.on('mouseover', () => {
  //   document.body.style.cursor = 'pointer';
  // })
  // circle.on('mouseout', () => {
  //   document.body.style.cursor = 'default';
  // })
  layer.add(circle)
  layer.draw()
}
