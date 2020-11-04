const getQuadrant = (pos, obj) => {
  const boundary = obj.getAttr('boundary')
  console.log(boundary)
  let quadrant =''
  if(pos.y < (boundary.y + Math.floor(boundary.h/2))){
    quadrant = 'top'
  } else {
    quadrant = 'bottom'
  }
  if(pos.x < (boundary.x+ Math.floor(boundary.w/2))){
    return quadrant = quadrant + 'left'
  } else {
    return quadrant = quadrant + 'right'
  }
}
