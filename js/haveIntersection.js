const drawIntersection = (segment) => {
  const intersectLine = new Konva.Line({
    points: [segment.x1, segment.y1, segment.x2, segment.y2],
    stroke: 'red',
    strokeWidth: 4
  })
  layer.add(intersectLine)
  layer.draw()
}

const haveIntersection = (from, to, points) => {
  const unitOperations = stage.find('.process').filter((unitOperation) => {
    return (unitOperation.attrs.shapeType === 'unitOperation' &&
        unitOperation.id() !== from.id() &&
        unitOperation.id() !== to.id()
    )
  })
  let segments = []
  for (let i = 2; i < points.length - 4; i = i + 2) {
    segments.push({x1: points[i], y1: points[i + 1], x2: points[i + 2], y2: points[i + 3]})
  }
  // console.log(segments)
  unitOperations.forEach((unitOperation) => {
    const boundary = unitOperation.attrs.boundary
    segments.forEach((segment) => {
      if (
          segment.x2 - segment.x1 === 0 &&
          (segment.x1 >= boundary.x && segment.x1 <= boundary.x + boundary.w) &&
          (segment.y1 <= boundary.y && boundary.y <= segment.y2)
      ) {
        console.log('vertical intersection')
        console.log(segment,
            ' intersected with ',
            unitOperation.id(),
            ' boundary',
            boundary)
        const shiftX = boundary.x - (boundary.x + boundary.w / 2)
        console.log(shiftX)
        segment.x1 = segment.x1 + shiftX
        segment.x2 = segment.x2 + shiftX
        console.log(segment)
        drawIntersection(segment)
      } else if (
          (segment.y2 - segment.y1 === 0) &&
          (segment.y1 >= boundary.y && segment.y1 <= boundary.y + boundary.h) &&
          (segment.x1 < boundary.x && boundary.x <= segment.x2)
      ) {
        console.log('horizontal intersection')
        console.log(segment,
            ' intersected with ',
            unitOperation.id(),
            ' boundary',
            boundary)
        // drawIntersection(segment)
      }
    })
  })
}
