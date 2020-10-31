const addConnection= (connection) => {
  // console.log(connection)
  const from = stage.findOne(`#${connection.source}`)
  const to = stage.findOne(`#${connection.target}`)
  const connName = `${connection.source}-${connection.target}-${Math.floor(Math.random()*100)}`
  const startX = connection.startPosition.x
  const startY = connection.startPosition.y
  const endX = connection.endPosition.x
  const endY = connection.endPosition.y
  const midX = startX + Math.floor((endX - startX)/2)
  const startXOffset = startX-from.x()
  const startYOffset = startY-from.y()
  const endXOffset = endX-to.x()
  const endYOffset = endY-to.y()
  const points = [startX, startY,
    midX, startY,
    midX, endY,
    endX, endY]

  const conn = new Konva.Line({
    id: connName,
    strokeWidth: 2,
    stroke: 'blue',
    points: points,
    startOffset: {x: startXOffset, y: startYOffset},
    endOffset: {x: endXOffset, y: endYOffset},
    draggable: false,
    name: 'process'
  })
  from.getAttr('connections').push(connName)
  to.getAttr('connections').push(connName)
  layer.add(conn)
  layer.draw()
}
