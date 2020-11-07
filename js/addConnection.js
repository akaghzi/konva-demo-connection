const addConnection= (connection) => {
  const fixedBreak = 10
  let sTurn = {}
  let eTurn = {}
  // console.log(connection)
  const from = stage.findOne(`#${connection.source.name}`)
  const to = stage.findOne(`#${connection.target.name}`)
  const connName = `${connection.source.name}-${connection.target.name}-${Math.floor(Math.random()*100)}`
  // we need to adjust following according to hit region
  const startX = connection.source.startPosition.x
  const startY = connection.source.startPosition.y
  const sPos = {x: connection.source.startPosition.x, y: connection.source.startPosition.y}
  console.log(sPos)
  switch(getHitRegion(sPos, from).name){
    case 'top':
      sTurn = {x: sPos.x, y: sPos.y-fixedBreak }
      break
    case 'bottom':
      sTurn = {x: sPos.x, y: sPos.y+fixedBreak }
      break
    case 'left':
      sTurn = {x: sPos.x-fixedBreak, y: sPos.y}
      break
    default:
      sTurn = {x: sPos.x+fixedBreak, y: sPos.y}
  }
  // we need to adjust following according to hit region
  const endX = connection.target.endPosition.x
  const endY = connection.target.endPosition.y
  const ePos = {x: connection.target.endPosition.x, y: connection.target.endPosition.y}
  console.log(ePos)
  console.log(getHitRegion(ePos, to))
  switch(getHitRegion(ePos, to).name){
    case 'top':
      eTurn = {x: ePos.x, y: ePos.y-fixedBreak }
      break
    case 'bottom':
      eTurn = {x: ePos.x, y: ePos.y+fixedBreak }
      break
    case 'left':
      eTurn = {x: ePos.x-fixedBreak, y: ePos.y}
      break
    default:
      eTurn = {x: ePos.x+fixedBreak, y: ePos.y}
  }
  const midX = sTurn.x + Math.floor((eTurn.x - sTurn.x)/2)
  const startXOffset = startX-from.x()
  const startYOffset = startY-from.y()
  // we need to adjust following according to hit region
  const endXOffset = endX-to.x()
  const endYOffset = endY-to.y()
  const points = [startX, startY,
      sTurn.x, sTurn.y,
    midX, sTurn.y,
    midX, eTurn.y,
      eTurn.x, eTurn.y,
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
