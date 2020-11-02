const createRect = ({name, x=250, y=250, height=30, width=40, color }) => {
  const rect = new Konva.Rect({
    id: name,
    x,
    y,
    height,
    width,
    fill: color,
    connections: [],
    draggable: true,
    name: 'process'
  })
  addListeners(rect)
  layer.add(rect)
  layer.draw()
  return rect
}
