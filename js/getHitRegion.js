const getHitRegion = (pos, obj) => {
  // console.log(pos)
  const hitRegions = obj.getAttr('hitRegions')
  // console.log(hitRegions)
  // console.log(obj.id(), hitRegions[0])

  const hitRegion = hitRegions.filter((hr)=>{
    return (
    pos.x >= hr.boundary.x &&
    pos.x <= hr.boundary.x + hr.boundary.w &&
    pos.y >= hr.boundary.y &&
    pos.y <= hr.boundary.y + hr.boundary.h
    )
  })
  return hitRegion[0]
  // if(hitRegion.length > 0){
  //   return hitRegion
  // } else {
  //   console.log('count not find hit region')
  // }
}
