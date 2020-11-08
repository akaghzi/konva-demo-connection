const addListeners = (shape) => {
  shape.on('dragend', (e) => {
    const ct = e.currentTarget
    const boundary = ct.getAttr('boundary') || ct.getClientRect()
    // console.log('old:',boundary)
    boundary.x=boundary.x+ct.x()
    boundary.y=boundary.y+ct.y()
    const hitRegions = ct.getAttr('hitRegions')
    hitRegions.forEach((hr)=>{
      hr.boundary.x += ct.x()
      hr.boundary.y += ct.y()
    })
    // console.log('old:',boundary)
    updateConnection(ct.getAttr('connections'))
  })
  shape.on('mouseover', (e) => {
    const ct = e.target
    document.body.style.cursor = 'pointer';
  })
  shape.on('mouseout', () => {
    document.body.style.cursor = 'default';
  })
  shape.on('click', (e) => {
    const ct = e.target
    if(ct instanceof Konva.Circle){
      return
    } else if(ct instanceof Konva.Shape) {
      // console.log(stage.getPointerPosition())
    }
  })
}
