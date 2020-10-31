let initConnection = 0
const newConnection = {
  source: '',
  startPosition: {
    x: undefined,
    y: undefined
  },
  target: '',
  endPosition: {
    x: undefined,
    y: undefined
  }
}
// console.log(newConnection)
const activateStageTriggers = () => {
  stage.on('dblclick', (e)=>{
    // console.log(e.evt)
    const t = e.target
    if(t.getAttr('id')){
      if(initConnection===0){
        // console.log(stage.pointerPos,t.getAttr('id'))
        initConnection = 1
        newConnection.source = t.getAttr('id')
        newConnection.startPosition.x = e.evt.pageX
        newConnection.startPosition.y = e.evt.pageY
        // console.log(newConnection)
      } else if(initConnection===1){
        // console.log(stage.pointerPos,t.getAttr('id'))
        initConnection = 0
        if(newConnection.source !== t.getAttr('id')) {
          newConnection.target = t.getAttr('id')
          newConnection.endPosition.x = stage.pointerPos.x
          newConnection.endPosition.y = stage.pointerPos.y
          // console.log(newConnection)
          addConnection(newConnection)
        }
      }
    }
  })
}
