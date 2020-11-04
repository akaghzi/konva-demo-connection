const processAddForm = (form)=>{
  const tagName = form.elements.namedItem('id').value
  console.log(tagName)
  const existing = stage.findOne(`#${tagName}`)
  if(existing){
    document.getElementById('error-messages')
    return
  }
  const color = form.elements.namedItem('color').value
  console.log(color)
  const unitOperation = form.elements.namedItem('type').value
  console.log(unitOperation)
  switch(unitOperation){
    case 'Circle':
      createCircle({x:100, y: 100, color, name: tagName})
      form.reset()
      return
    case 'Rect':
      createRect({x:100, y:100, name:tagName, color})
      form.reset()
      return
    case 'Custom':
      createCustomShape({x:100, y:100, tagName, color})
      form.reset()
      return
    default:
      console.log('info required')
      form.reset()
  }
}
