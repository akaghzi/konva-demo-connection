const addMyShape = ({id, color}) => {
  const myShape = new Konva.Shape({
    sceneFunc: (context, shape) => {
      context.beginPath();
      context.moveTo(200, 50); //starting point
      context.lineTo(250, 50); //endpoint of line & starting point of following line
      context.lineTo(250, 120);//endpoint of line & starting point of following line
      context.lineTo(200, 120);//endpoint of line & starting point of following line
      context.lineTo(200, 50)//endpoint of line & starting point of following QC
      // QC top point of curve is first x,y & last x, y is end of curve
      context.quadraticCurveTo(225, 40, 250, 50)
      context.lineTo(250, 120);
      context.quadraticCurveTo(225, 130, 200, 120)
      context.closePath();
      // (!) Konva specific method, it is very important
      context.fillStrokeShape(shape);
    },
    id,
    fill: color,
    stroke: color,
    strokeWidth: 2,
    draggable: true,
    name: 'process',
    connections: []
  });
  addListeners(myShape)

  layer.add(myShape)
  layer.draw()
}

const addNewShape = ({id, color}) => {
  const newShape = new Konva.Shape({
    sceneFunc: (context, shape) => {
      context.beginPath();
      context.moveTo(350, 100); //starting point
      // QC top point of curve is first x,y & last x, y is end of curve
      context.quadraticCurveTo(400, 80, 450, 100)
      context.closePath();
      // (!) Konva specific method, it is very important
      context.fillStrokeShape(shape);
    },
    id,
    fill: color,
    stroke: color,
    strokeWidth: 2,
    draggable: true,
    name: 'process',
    connections: []
  });
  addListeners(newShape)

  layer.add(newShape)
  layer.draw()

}
