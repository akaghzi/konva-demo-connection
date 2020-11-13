const fixedBreak = 10
const addConnection = (connection) => {

  let sTurn = {}
  let eTurn = {}
  // console.log(connection)
  const from = stage.findOne(`#${connection.source.name}`)
  const to = stage.findOne(`#${connection.target.name}`)
  const connName = `${connection.source.name}-${connection.target.name}-${Math.floor(Math.random() * 100)}`
  // we need to adjust following according to hit region
  const startX = connection.source.startPosition.x
  const startY = connection.source.startPosition.y
  const sPos = {x: connection.source.startPosition.x, y: connection.source.startPosition.y}
  // console.log('start position', sPos)
  // console.log('sPos match', getHitRegion(sPos, from))

  switch (getHitRegion(sPos, from).name) {
    case 'top':
      sTurn = {x: sPos.x, y: sPos.y - fixedBreak}
      break
    case 'bottom':
      sTurn = {x: sPos.x, y: sPos.y + fixedBreak}
      break
    case 'left':
      sTurn = {x: sPos.x - fixedBreak, y: sPos.y}
      break
    default:
      sTurn = {x: sPos.x + fixedBreak, y: sPos.y}
  }
  // console.log('sTurn', sTurn)
  // we need to adjust following according to hit region
  const endX = connection.target.endPosition.x
  const endY = connection.target.endPosition.y
  const ePos = connection.target.endPosition
  // const ePos = {x: connection.target.endPosition.x, y: connection.target.endPosition.y}
  // console.log('end position', ePos)
  // console.log('ePos match', getHitRegion(ePos, to))
  switch (getHitRegion(ePos, to).name) {
    case 'top':
      eTurn = {x: ePos.x, y: ePos.y - fixedBreak, connectingFrom: 'top'}
      break
    case 'bottom':
      eTurn = {x: ePos.x, y: ePos.y + fixedBreak, connectingFrom: 'bottom'}
      break
    case 'left':
      eTurn = {x: ePos.x - fixedBreak, y: ePos.y, connectingFrom: 'left'}
      break
    default:
      eTurn = {x: ePos.x + fixedBreak, y: ePos.y, connectingFrom: 'right'}
  }
  const eExtraTurn = {x: eTurn.x, y: eTurn.y}
  if (eTurn.connectingFrom === 'left' && eTurn.x < sTurn.x) {
    // console.log('eExtraTurn',eExtraTurn)
    // console.log('special case connectionFrom left')
    eExtraTurn.y = to.attrs.boundary.y - fixedBreak
  }

  const midX = eExtraTurn.x - sTurn.x <= 0 ? sTurn.x : sTurn.x + Math.floor((eTurn.x - sTurn.x) / 5)
  const startXOffset = startX - from.x()
  const startYOffset = startY - from.y()
  // we need to adjust following according to hit region
  const endXOffset = endX - to.x()
  const endYOffset = endY - to.y()
  let points = [startX, startY,
    sTurn.x, sTurn.y,
    midX, sTurn.y,
    midX, eExtraTurn.y,
    eExtraTurn.x, eExtraTurn.y,
    eTurn.x, eExtraTurn.y,
    eTurn.x, eTurn.y,
    endX, endY]

  // WORK IN PROGRESS STARTS HERE
  points = haveIntersection(from, to, points)
  // WORK IN PROGRESS END HERE

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
    shapeType: 'normalStream',
    connections: [connName],
    sTurnOffset: {x: sTurn.x - startX, y: sTurn.y - startY},
    eTurnOffset: {x: eTurn.x - endX, y: eTurn.y - endY, connectingFrom: eTurn.connectingFrom}
  })
  from.getAttr('connections').push(connName)
  to.getAttr('connections').push(connName)
  layer.add(conn)
  layer.draw()
}
