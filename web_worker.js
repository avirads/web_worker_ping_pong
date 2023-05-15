onmessage = (message) =>{
    console.log(`got ${message.data} from html into web worker`)
    postMessage('pong')
}