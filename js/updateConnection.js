const updateConnection = (names) => {
  names.forEach((name) => {
    // console.log(name)
    const connection = stage.findOne(`#${name}`)
    // console.log('connection',connection)
    const from = stage.findOne(`#${name.split('-')[0]}`)
    // console.log(from)
    const to = stage.findOne(`#${name.split('-')[1]}`)
    // console.log(to)
    const points = connection.attrs.points
    const start = {x: points[0], y: points[1]}
    const sTurn = {x: points[2], y: points[3]}
    const eTurn = {x: points[points.length - 4], y: points[points.length - 3]}
    const startOffset = connection.attrs.startOffset
    const endOffset = connection.attrs.endOffset
    const sTurnOffset = connection.attrs.sTurnOffset
    // console.log(sTurnOffset)
    const eTurnOffset = connection.attrs.eTurnOffset
    const end = {x: points[points.length - 2], y: points[points.length - 1]}
    // adjust starting point after the move
    start.x = from.x() + startOffset.x
    start.y = from.y() + startOffset.y
    // adjust starting turn after the move
    sTurn.x = start.x + sTurnOffset.x
    sTurn.y = start.y + sTurnOffset.y

    // adjust ending point after the move
    end.x = to.x() + endOffset.x
    end.y = to.y() + endOffset.y
    // adjust end turn after the move
    eTurn.x = end.x + eTurnOffset.x
    eTurn.y = end.y + eTurnOffset.y

    // const midX = sTurn.x + Math.floor((eTurn.x - sTurn.x) / 2)
    const midX = eTurn.x - sTurn.x <=0 ? sTurn.x : sTurn.x + Math.floor((eTurn.x - sTurn.x)/2)

    points[0] = start.x
    points[1] = start.y
    points[2] = sTurn.x
    points[3] = sTurn.y
    points[4] = midX
    points[5] = sTurn.y
    points[6] = midX
    points[7] = eTurn.y
    points[points.length - 4] = eTurn.x
    points[points.length - 3] = eTurn.y
    points[points.length - 2] = end.x
    points[points.length - 1] = end.y

    // // console.log(connection.getAttr('endOffset'))
    // const points = connection.attrs.points
    // // const points = connection.getAttr('points')
    // const from = stage.findOne(`#${name.split('-')[0]}`)
    // // console.log('from',from.getAttr('id'))
    // const to = stage.findOne(`#${name.split('-')[1]}`)
    // // console.log('to', to.getAttr('id'))
    // // console.log(from.x() + connection.getAttr('startOffset').x)
    // const startX = from.x() + connection.getAttr('startOffset').x
    // const startY = from.y() + connection.getAttr('startOffset').y
    // const sTurn = connection.attrs.sTurn
    // const eTurn = connection.attrs.eTurn
    // const endX = to.x() + connection.getAttr('endOffset').x
    // const endY = to.y() + connection.getAttr('endOffset').y
    // points[0] = startX
    // points[1] = startY
    // points[2] = sTurn.x
    // points[3] = sTurn.y
    // points[points.length-4] = eTurn.x
    // points[points.length-3] = eTurn.y
    // points[points.length-2] = endX
    // points[points.length-1] = endY
    layer.draw()
  })
  layer.batchDraw()
}
