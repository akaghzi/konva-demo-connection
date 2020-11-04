const createCircle = ({tagName, x=250, y=100, radius=40, color, draggable=true}) => {
  const circle = new Konva.Circle({
    id: tagName,
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
