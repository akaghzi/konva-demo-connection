const createCustomShape = ({tagName, x=200, y=50, w=50, h=70, td=20, color}) => {
  if(stage.findOne(`#${tagName}`)){
    throw new Error('Unit operation with same tagname already exists')
    return
  }
  const CustomShape = new Konva.Shape({
    sceneFunc: (context, shape) => {
      context.beginPath();
      // context.moveTo(200, 50); //starting point
      context.rect(x, y, w, h) //startx,start y,width, height
      // context.lineTo(250, 50); //endpoint of line & starting point of following line
      // context.lineTo(250, 120);//endpoint of line & starting point of following line
      // context.lineTo(200, 120);//endpoint of line & starting point of following line
      // context.lineTo(200, 50)//endpoint of line & starting point of following QC
      // QC top point of curve is first x,y & last x, y is end of curve
      context.quadraticCurveTo(x+Math.floor(w/2), y-td, x+w, y)
      context.moveTo(x, y+h);
      context.quadraticCurveTo(x+Math.floor(w/2), y+h+td, x+w, y+h)
      context.moveTo(x+Math.floor(w/2), y+h)
      context.lineTo(x+Math.floor(w/2), y)
      // console.log(shape.getAttr('width'))
      context.closePath();
      // (!) Konva specific method, it is very important
      context.fillStrokeShape(shape);
      // console.log(shape.attrs.x)
    },
    // dragBoundFunc:  (pos) => {
    //   // var newY = pos.y < 50 ? 50 : pos.y;
    //   console.log(pos)
    //   return {
    //     x: pos.x,
    //     y: pos.y,
    //   };
    // },
    id: tagName,
    fill: color,
    stroke: 'black',
    strokeWidth: 1,
    draggable: true,
    name: 'process',
    connections: [],
    boundary: {x: x, y:y-td, w:w, h: h+(td*2)} //should be rectangle / square
  });
  // console.log(customShape.getAttr('boundary'))
  addListeners(CustomShape)
  layer.add(CustomShape)
  layer.draw()
  return CustomShape
}

// const addNewShape = ({id, color}) => {
//   const newShape = new Konva.Shape({
//     sceneFunc: (context, shape) => {
//       context.beginPath();
//       context.moveTo(350, 100); //starting point
//       // QC top point of curve is first x,y & last x, y is end of curve
//       context.quadraticCurveTo(400, 80, 450, 100)
//       context.closePath();
//       // (!) Konva specific method, it is very important
//       context.fillStrokeShape(shape);
//     },
//     id,
//     fill: color,
//     stroke: color,
//     strokeWidth: 2,
//     draggable: true,
//     name: 'process',
//     connections: []
//   });
//   addListeners(newShape)
//
//   layer.add(newShape)
//   layer.draw()
//   return newShape
// }
