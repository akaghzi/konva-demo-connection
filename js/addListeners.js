const addListeners = (shape) => {
  shape.on('dragmove', (e) => {
    const ct = e.currentTarget
    if (ct.getAttr('connections').length > 0) {
      // console.log('update connection')
      updateConnection(ct.getAttr('connections'))
    }
  })
  shape.on('mouseover', (e) => {
    const ct = e.target
    document.body.style.cursor = 'pointer';
    // let shapeType;
    // if(e.target instanceof Konva.Line) {
    //   shapeType='line'
    // } else if(e.target instanceof Konva.Circle) {
    //   shapeType='circle'
    // } else if(e.target instanceof Konva.Rect) {
    //   shapeType='rect'
    // } else if(e.target instanceof Konva.Group) {
    //   shapeType='group'
    // } else if(e.target instanceof Konva.Shape) {
    //   shapeType='shape'
    //   // console.log(ct.getAttr('boundary'))
    // }
    // console.log(shapeType)
  })
  shape.on('mouseout', () => {
    document.body.style.cursor = 'default';
  })
  shape.on('click', (e) => {
    const ct = e.target
    if(ct instanceof Konva.Circle){
      return
    } else if(ct instanceof Konva.Shape) {
      console.log(getQuadrant(stage.getPointerPosition(),ct))
    }
  })
}
