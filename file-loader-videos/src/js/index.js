import 'babel-polyfill'
import '../css/styles.css'
import Message from './message.js'
import PlatziLogo from '../images/platzi-logo.jpg'
import PlatziVideo from '../video/que-es-core.mp4'


document.write(Message.firstMessage);
Message.delayedMessage();

const img= document.createElement('img');
img.setAttribute('src',PlatziLogo);
document.body.append(img);

// Put a video.

const video= document.createElement('video');
video.setAttribute('src',PlatziVideo);
video.setAttribute('width',480);
video.setAttribute('autoplay',true);
video.setAttribute('controls',true);
document.body.append(video);
  

