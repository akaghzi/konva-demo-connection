const updateConnection = (names) => {
  names.forEach((name) => {
    // console.log(name)
    const connection = stage.findOne(`#${name}`)
    // console.log('connection',connection)
    const from = stage.findOne(`#${name.split('-')[0]}`)
    // console.log(from)
    const to = stage.findOne(`#${name.split('-')[1]}`)
    // console.log(to)
    const startOffset = connection.attrs.startOffset
    const endOffset = connection.attrs.endOffset
    const sTurnOffset = connection.attrs.sTurnOffset
    const eTurnOffset = connection.attrs.eTurnOffset
    const points = connection.attrs.points
    const start = {x: points[0], y: points[1]}
    const sTurn = {x: points[2], y: points[3]}
    const eTurn = {x: points[points.length - 4], y: points[points.length - 3], connectingFrom: eTurnOffset.connectingFrom}
    const end = {x: points[points.length - 2], y: points[points.length - 1]}
    // adjust starting point after the move
    start.x = from.x() + startOffset.x
    start.y = from.y() + startOffset.y
    // adjust starting turn after the move
    sTurn.x = start.x + sTurnOffset.x
    sTurn.y = start.y + sTurnOffset.y
    // console.log('sTurn',sTurn)

    // adjust ending point after the move
    end.x = to.x() + endOffset.x
    end.y = to.y() + endOffset.y
    // adjust end turn after the move
    eTurn.x = end.x + eTurnOffset.x
    eTurn.y = end.y + eTurnOffset.y
    // console.log('eTurn',eTurn)

    const eExtraTurn = {x: eTurn.x, y: eTurn.y}

    if (eTurn.connectingFrom === 'left' && eTurn.x < sTurn.x) {
      // console.log('special case connectionFrom left')
      // console.log('eExtraTurn',eExtraTurn)
      eExtraTurn.y = to.attrs.boundary.y - fixedBreak -10
    }

    const midX = eExtraTurn.x - sTurn.x <= 0 ? sTurn.x : sTurn.x + Math.floor((eTurn.x - sTurn.x) / 2)
    // const points = [startX, startY,
    //   sTurn.x, sTurn.y,
    //   midX, sTurn.y,
    //   midX, eExtraTurn.y,
    //   eExtraTurn.x, eExtraTurn.y,
    //   eTurn.x, eExtraTurn.y,
    //   eTurn.x, eTurn.y,
    //   endX, endY]

    points[0] = start.x
    points[1] = start.y
    points[2] = sTurn.x
    points[3] = sTurn.y
    points[4] = midX
    points[5] = sTurn.y
    points[6] = midX
    points[7] = eExtraTurn.y
    points[points.length - 8] = eExtraTurn.x
    points[points.length - 7] = eExtraTurn.y
    points[points.length - 6] = eTurn.x
    points[points.length - 5] = eExtraTurn.y
    points[points.length - 4] = eTurn.x
    points[points.length - 3] = eTurn.y
    points[points.length - 2] = end.x
    points[points.length - 1] = end.y

    // layer.draw()
  })
  layer.batchDraw()
}
