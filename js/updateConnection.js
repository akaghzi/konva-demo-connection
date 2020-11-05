const updateConnection = (names) =>{
  names.forEach((name)=>{
    // console.log(name)
    const connection = stage.findOne(`#${name}`)
    // console.log('connection',connection)
    // console.log(connection.getAttr('endOffset'))
    const points = connection.getAttr('points')
    const from = stage.findOne(`#${name.split('-')[0]}`)
    // console.log('from',from.getAttr('id'))
    const to = stage.findOne(`#${name.split('-')[1]}`)
    // console.log('to', to.getAttr('id'))
    const startX = from.x() + connection.getAttr('startOffset').x
    const startY = from.y() + connection.getAttr('startOffset').y
    const endX = to.x() + connection.getAttr('endOffset').x
    const endY = to.y() + connection.getAttr('endOffset').y
    const midX = startX + Math.floor((endX - startX)/2)
    points[0] = startX
    points[1] = startY
    // points[2] = midX
    // points[3] = startY
    // points[4] = midX
    // points[5] = endY
    points[points.length-2] = endX
    points[points.length-1] = endY
    // layer.draw()
  })
  layer.batchDraw()
}
