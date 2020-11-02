const processAddForm = (form)=>{
  const tagName = form.elements.namedItem('id').value
  console.log(tagName)
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
    default:
      console.log('info required')
      form.reset()
  }
  // const pNode = document.createElement('p')
  // const textNode = document.createTextNode('Error occured')
  // pNode.appendChild(textNode)
  // const errmsg = document.getElementById('error-messages')
  // const msg = errmsg.appendChild(pNode)
  // console.log(msg.innerText)
  // document.getElementById('contextMenu').style.display = 'block'
}
