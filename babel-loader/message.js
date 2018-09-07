import RenderToDOM from './render-to-dom'
import MakeMessage from './make-message'

const waitTime = new Promise((todoOk,todoMal)=>{

    setTimeout( ()=>{ todoOk("han pasado 3 segundos")}, 3000);
   
})

const Message={

    firstMessage:"Hola mundo desde un modulo",
    
    delayedMessage:async()=>{
        const message= await waitTime;
        RenderToDOM(MakeMessage(message));

    }

}

export default Message;