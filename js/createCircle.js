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
  layer.add(circle)
  layer.draw()
  return circle
}
