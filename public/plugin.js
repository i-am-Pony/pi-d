penpot.ui.open("Plugin name", "", {
    width: 500,
    height: 600,
  });

penpot.ui.sendMessage(message);

window.addEventListener("message", (event) => {
    // Handle the incoming message
    console.log(event.data);
  });
// Sending a message back to Penpot from your plugin
parent.postMessage(responseMessage, targetOrigin);  