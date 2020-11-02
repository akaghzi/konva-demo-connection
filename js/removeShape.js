const removeShape = (shape) => {
  const connections = shape.getAttr('connections')
  if (connections.length > 0) {
    connections.forEach((connection) => {
      const conn = stage.findOne(`#${connection}`)
      const source = stage.findOne(`#${connection.split('-')[0]}`)
      const sourceConnections = source.getAttr('connections')
      source.setAttr('connections', sourceConnections.filter((c) => c !== connection))
      const target = stage.findOne(`#${connection.split('-')[1]}`)
      const targetConnections = target.getAttr('connections')
      target.setAttr('connections', targetConnections.filter((c) => c !== connection))
      conn.destroy()
    })
  }
  shape.destroy();
  layer.draw();
}
