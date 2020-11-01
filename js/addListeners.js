const addListeners = (newShape) => {
  newShape.on('dragmove', (e) => {
    const ct = e.currentTarget
    if (ct.getAttr('connections').length > 0) {
      // console.log('update connection')
      updateConnection(ct.getAttr('connections'))
    }
  })
  newShape.on('mouseover', () => {
    document.body.style.cursor = 'pointer';
  })
  newShape.on('mouseout', () => {
    document.body.style.cursor = 'default';
  })
}
