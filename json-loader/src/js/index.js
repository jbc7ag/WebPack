import 'babel-polyfill';
import '../css/styles.css';
import Message from './message.js';
import PlatziLogo from '../images/platzi-logo.jpg';
import data from '../js/teachers.json';
import RenderToDom from '../js/render-to-dom'


console.log(data.teachers);
const tea=data.teachers;

console.log(tea);

tea.forEach(teachers => {

    const element=document.createElement("li");
    element.textContent=teachers.name;
    RenderToDom(element);
    
});


document.write(Message.firstMessage);
Message.delayedMessage();

const img= document.createElement('img');
img.setAttribute('src',PlatziLogo);
document.body.append(img);
  

