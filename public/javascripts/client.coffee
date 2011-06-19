socket = null

processData = (data) ->
  switch(data.type)
    when "ping" then alert(data.payload)
    else console.log("Unknown message type: " + data.type)

connect = () ->
  socket = new io.Socket()
  socket.on('connect', () -> null)
  socket.on('message', (data) -> processData(JSON.parse(data)))
  socket.connect()

initializeUI = () ->
  $('button').click (e) ->
    msg =
      type: "ping"
      payload: "Hello"
    socket.send(JSON.stringify(msg))

$(document).ready ->
  connect()
  initializeUI()

