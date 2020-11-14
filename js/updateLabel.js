const updateLabel = (unitOperationId) => {
  const unitOperation = stage.findOne(`#${unitOperationId}`)
  const label = stage.findOne(`#label-${unitOperationId}`)
  label.setAttr('x', unitOperation.attrs.boundary.x + unitOperation.attrs.labelOffset.x)
  label.setAttr('y', unitOperation.attrs.boundary.y + unitOperation.attrs.labelOffset.y)
}
