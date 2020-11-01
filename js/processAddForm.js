const processAddForm = ()=>{
  // console.log()
  // console.log('processing addForm')
  // console.log(form.elements)
  const tagName = document.getElementById('id').value
  const color = document.getElementById('color').value
  const unitOp = document.getElementById('type').value
  const x = document.getElementById('x').value
  const y = document.getElementById('y').value
  switch(unitOp){
    case 'circle':
      createCircle({
        x,
        y,
        color,
        name: tagName
      })
    default:
      console.log('info required')
  }
  // const pNode = document.createElement('p')
  // const textNode = document.createTextNode('Error occured')
  // pNode.appendChild(textNode)
  // const errmsg = document.getElementById('error-messages')
  // const msg = errmsg.appendChild(pNode)
  // console.log(msg.innerText)
  // document.getElementById('contextMenu').style.display = 'block'
}
