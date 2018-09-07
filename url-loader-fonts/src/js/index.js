import 'babel-polyfill'
import '../css/styles.css'
import Message from './message.js'
import PlatziLogo from '../images/platzi-logo.jpg'




document.write(Message.firstMessage);
Message.delayedMessage();

const img= document.createElement('img');
img.setAttribute('src',PlatziLogo);
document.body.append(img);
  

