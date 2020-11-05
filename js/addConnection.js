const addConnection= (connection) => {
  // console.log(connection)
  const from = stage.findOne(`#${connection.source.name}`)
  const to = stage.findOne(`#${connection.target.name}`)
  const connName = `${connection.source.name}-${connection.target.name}-${Math.floor(Math.random()*100)}`
  const startX = connection.source.startPosition.x
  const startY = connection.source.startPosition.y
  const endX = connection.target.endPosition.x
  const endY = connection.target.endPosition.y
  const midX = startX + Math.floor((endX - startX)/2)
  const startXOffset = startX-from.x()
  const startYOffset = startY-from.y()
  const endXOffset = endX-to.x()
  const endYOffset = endY-to.y()
  const points = [startX, startY,
    // midX, startY,
    // midX, endY,
    endX, endY]

  const conn = new Konva.Arrow({
    id: connName,
    strokeWidth: 2,
    stroke: 'grey',
    points: points,
    startOffset: {x: startXOffset, y: startYOffset},
    endOffset: {x: endXOffset, y: endYOffset},
    pointerLength: 5,
    pointerWidth: 5,
    draggable: false,
    name: 'process',
    connections: [connName]
  })
  from.getAttr('connections').push(connName)
  to.getAttr('connections').push(connName)
  layer.add(conn)
  layer.draw()
}
