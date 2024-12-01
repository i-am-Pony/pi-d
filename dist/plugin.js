penpot.ui.open("Plugin name","",{width:500,height:600});penpot.ui.sendMessage(message);window.addEventListener("message",e=>{console.log(e.data)});parent.postMessage(responseMessage,targetOrigin);
