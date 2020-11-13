const createRect = ({tagName, x=250, y=250, height=30, width=40, color }) => {
  const rect = new Konva.Rect({
    id: tagName,
    x,
    y,
    height,
    width,
    fill: color,
    connections: [],
    draggable: true,
    name: 'process',
    opacity: 0.7
  })
  addListeners(rect)
  layer.add(rect)
  layer.draw()
  return rect
}
