let initConnection = 0
const newConnection = {
  source: {
    name: '',
    startPosition: {
      x: undefined,
      y: undefined
    }
  },
  target : {
    name: '',
    endPosition: {
      x: undefined,
      y: undefined
    }
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
        // console.log(e.evt.pageX, e.evt.pageY)
        // console.log(stage.getPointerPosition())
        initConnection = 1
        newConnection.source.name = t.getAttr('id')
        newConnection.source.startPosition.x = stage.getPointerPosition().x
        newConnection.source.startPosition.y = stage.getPointerPosition().y
        // console.log(newConnection)
      } else if(initConnection===1){
        // console.log(stage.pointerPos,t.getAttr('id'))
        initConnection = 0
        if(newConnection.source.name !== t.getAttr('id')) {
          newConnection.target.name = t.getAttr('id')
          newConnection.target.endPosition.x = stage.getPointerPosition().x
          newConnection.target.endPosition.y = stage.getPointerPosition().y
          // console.log(newConnection)
          const existingTargetConnections = t.getAttr('connections')
          if(existingTargetConnections.length>0){
            existingTargetConnections.forEach((connection)=>{
              if(connection.split('-')[0]!==newConnection.source.name){
                addConnection(newConnection)
              }
          })
          } else {
            addConnection(newConnection)
          }
        }
      }
    }
  })
}
