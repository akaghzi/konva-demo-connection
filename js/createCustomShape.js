const createCustomShape = ({tagName, x = 200, y = 50, w = 50, h = 70, td = 20, color}) => {
  if (stage.findOne(`#${tagName}`)) {
    throw new Error('Unit operation with same tagname already exists')
    return
  }
  const CustomShape = new Konva.Shape({
    sceneFunc: (context, shape) => {
      context.beginPath();
      context.rect(x, y, w, h) //startx,start y,width, height
      // QC top point of curve is first x,y & last x, y is end of curve
      context.quadraticCurveTo(x + Math.floor(w / 2), y - td, x + w, y)
      context.moveTo(x, y + h);
      context.quadraticCurveTo(x + Math.floor(w / 2), y + h + td, x + w, y + h)
      context.moveTo(x + Math.floor(w / 2), y + h)
      context.lineTo(x + Math.floor(w / 2), y)
      // console.log(shape.getAttr('width'))
      context.closePath();
      // (!) Konva specific method, it is very important
      context.fillStrokeShape(shape);
    },
    id: tagName,
    fill: color,
    stroke: 'black',
    strokeWidth: 1,
    draggable: true,
    name: 'process',
    connections: [],
    td,
    boundary: {x: x, y: y - Math.floor(td/2), w: w, h: h + td}, //should be rectangle / square
    hitRegions: [
      {name: 'top', boundary: {x, y: y - Math.floor(td/2), w, h: Math.floor(td/2)}},
      {name: 'left', boundary: {x, y, w: Math.floor(w / 2), h}},
      {name: 'right', boundary: {x: x + Math.floor(w / 2), y, w: Math.floor(w / 2), h}},
      {name: 'bottom', boundary: {x, y: y + h, w, h: Math.floor(td/2)}},
    ],
    opacity: 0.85
  });
  addListeners(CustomShape)
  layer.add(CustomShape)
  layer.draw()
  return CustomShape
}
