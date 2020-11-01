const addFlashDrum = ({x=100, y=100, id, name='process'}) => {
  const flashdrum = new Konva.Group( {
    x: x - 650,
    y: y - 300,
    draggable: true,
    id ,
    name,
    connections: []
  });
  const columnNameText = new Konva.Text({
    fill: 'black',
    id: 'P1',
    x: 100,
    y: 100,
    text: id,
    fontSize: 10,
    draggable: false,
  });
  flashdrum.add(columnNameText);

  const circle1 = new Konva.Circle( {
    x: 200,
    y: 125,
    radius : 25,
    fill : 'lightblue',
    stroke: 'lightblue',
    strokeWidth: 2
  });

  flashdrum.add(circle1);

  const rect = new Konva.Rect( {
    x: 175,
    y: 125,
    width : 50,
    height : 110,
    fill : 'lightblue',
    stroke: 'lightblue',
    strokeWidth: 2
  });

  flashdrum.add(rect);

  const circle2 = new Konva.Circle( {
    x: 200,
    y: 235,
    radius : 25,
    fill : 'lightblue',
    stroke: 'lightblue',
    strokeWidth: 2
  });

  flashdrum.add(circle2);
  // circle2.zIndex(0);
  layer.add(flashdrum);
  layer.draw();
  console.log('flash drum added..');
}
