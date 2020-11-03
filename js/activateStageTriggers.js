let initConnection = 0
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
          const existing = t.getAttr('connections').filter((econn) => {
            return (conn.source.name === econn.split('-')[0] && conn.target.name === econn.split('-')[1])// ||
                // (conn.target.name === econn.split('-')[0] && conn.source.name === econn.split('-')[1])
          })
          if (existing.length > 0) {
            console.log('connection between source and target exists')
            return
          }
        }

        console.log('adding connection')
        addConnection(conn)
      }
    }
  })
}
