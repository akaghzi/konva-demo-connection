const getContextMenu = () => {
  // console.log('context menu processing')
  const containerRect = stage.container().getBoundingClientRect();
  contextMenu.style.display = 'none'
  addMenu.style.display = 'initial'
  addMenu.style.top =
      containerRect.top + stage.getPointerPosition().y + 6 + 'px';
  addMenu.style.left =
      containerRect.left + stage.getPointerPosition().x + 4 + 'px';
  document.getElementById('x').value = stage.getPointerPosition().x
  document.getElementById('y').value = stage.getPointerPosition().y
  // return stage.getPointerPosition()
}
