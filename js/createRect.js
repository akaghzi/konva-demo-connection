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
  rect.on('dragend', (e) => {
    const ct = e.currentTarget
    if (ct.getAttr('connections').length > 0) {
      updateConnection(ct.getAttr('connections'))
    }
  })
  rect.on('mouseover', () => {
    document.body.style.cursor = 'pointer';
  })
  rect.on('mouseout', () => {
    document.body.style.cursor = 'default';
  })

  layer.add(rect)
  layer.draw()
}
