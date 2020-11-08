const addListeners = (shape) => {
  shape.on('dragend', (e) => {
    const ct = e.currentTarget
    // console.log('boundary old',ct.attrs.boundary)
    const boundary = ct.attrs.boundary || ct.getClientRect()
    const boundaryOffet = ct.attrs.boundaryOffset
    boundary.x=ct.x() + boundaryOffet.x
    boundary.y=ct.y() + boundaryOffet.y
    // console.log('boundary new',ct.attrs.boundary)
    const hitRegions = ct.getAttr('hitRegions')
    // fix this code to set the hitRegion boundaries properly
    hitRegions.forEach((hr)=>{
      hr.boundary.x = hr.boundaryOffset.x + ct.x()
      hr.boundary.y = hr.boundaryOffset.y + ct.y()
    })
    updateConnection(ct.getAttr('connections'))
  })
  shape.on('mouseover', () => {
    document.body.style.cursor = 'pointer';
  })
  shape.on('mouseout', () => {
    document.body.style.cursor = 'default';
  })
}
