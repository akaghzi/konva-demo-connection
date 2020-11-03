let initConnection = 0
const newConnection = {
  source: {
    name: '',
    startPosition: {
      x: undefined,
      y: undefined
    }
  },
  target: {
    name: '',
    endPosition: {
      x: undefined,
      y: undefined
    }
  }
}
// console.log(newConnection)
const conn = {}
const activateStageTriggers = () => {
  stage.on('dblclick', (e) => {
    // console.log(e.evt)
    const t = e.target
    if (t.getAttr('id')) {
      console.log('object clicked')
      if (initConnection === 0) {
        console.log('first clicked')
        conn.source = {
          name: t.getAttr('id'),
          startPosition: stage.getPointerPosition()
        }
        initConnection = 1
      } else {
        console.log('final click')
        conn.target = {
          name: t.getAttr('id'),
          endPosition: stage.getPointerPosition()
        }
        initConnection = 0
        if (conn.source.name === conn.target.name) {
          console.log('source & target can not be same, please redo')
          return
        } else if (t.getAttr('connections').length > 0) {
          // console.log(t.getAttr('connections'))
          const existing = t.getAttr('connections').filter((econn) => {
            // console.log(econn)
            // console.log(conn.source.name, econn.split('-')[0])
            // console.log(conn.target.name, econn.split('-')[1])
            return (conn.source.name === econn.split('-')[0] && conn.target.name === econn.split('-')[1]) ||
                (conn.target.name === econn.split('-')[0] && conn.source.name === econn.split('-')[1])
          })
          if (existing.length > 0) {
            // console.log(existing)
            console.log('connection between source and target exists')
            return
          }
        }

        console.log('adding connection')
        addConnection(conn)
      }
      // if(initConnection===0){
      //   // console.log(stage.pointerPos,t.getAttr('id'))
      //   // console.log(e.evt.pageX, e.evt.pageY)
      //   // console.log(stage.getPointerPosition())
      //   initConnection = 1
      //   newConnection.source.name = t.getAttr('id')
      //   newConnection.source.startPosition.x = stage.getPointerPosition().x
      //   newConnection.source.startPosition.y = stage.getPointerPosition().y
      //   // console.log(newConnection)
      // } else if(initConnection===1){
      //   // console.log(stage.pointerPos,t.getAttr('id'))
      //   initConnection = 0
      //   if(newConnection.source.name !== t.getAttr('id')) {
      //     newConnection.target.name = t.getAttr('id')
      //     newConnection.target.endPosition.x = stage.getPointerPosition().x
      //     newConnection.target.endPosition.y = stage.getPointerPosition().y
      //     // console.log(newConnection)
      //     const existingTargetConnections = t.getAttr('connections')
      //     if(existingTargetConnections.length>0){
      //       existingTargetConnections.forEach((connection)=>{
      //         if(connection.split('-')[0]!==newConnection.source.name){
      //           addConnection(newConnection)
      //         }
      //     })
      //     } else {
      //       addConnection(newConnection)
      //     }
      //   }
      // }
    }
  })
}
