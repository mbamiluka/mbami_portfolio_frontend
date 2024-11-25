import React from 'react';
import { ReactSVG } from 'react-svg';
import d from './path';

const textLightOn = '#ebd1a4';
const textLightOff = '#222';

const MainContent = (props) => {
  return (
    <div style={{ paddingTop: 270, width: '100%', height: '100%', paddingLeft: 30 }}>
      <ReactSVG src={d} beforeInjection={(svg) => {
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        const defs = svg.querySelector('defs') || svg.insertBefore(document.createElementNS('http://www.w3.org/2000/svg', 'defs'), svg.firstChild);
        const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
        style.textContent = `
          @keyframes main-gradient {
            0% { stop-color: ${props.on ? textLightOn : textLightOff}; stop-opacity: ${props.on ? '0.8' : '1'}; }
            50% { stop-color: ${props.on ? textLightOn : textLightOff}; stop-opacity: ${props.on ? '0.5' : '1'}; }
            100% { stop-color: ${props.on ? textLightOn : textLightOff}; stop-opacity: ${props.on ? '0.3' : '1'}; }
          }
        `;
        defs.appendChild(style);
        const linearGradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        linearGradient.id = 'Gradient';
        linearGradient.setAttribute('gradientUnits', 'userSpaceOnUse');
        linearGradient.setAttribute('x1', '230');
        linearGradient.setAttribute('y1', '650');
        linearGradient.setAttribute('x2', '0');
        linearGradient.setAttribute('y2', '0');
        defs.appendChild(linearGradient);
        const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop1.setAttribute('offset', '90%');
        stop1.style.animation = 'main-gradient 3s linear infinite';
        linearGradient.appendChild(stop1);
        const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop2.setAttribute('offset', '75%');
        stop2.style.animation = 'main-gradient 3s linear infinite';
        linearGradient.appendChild(stop2);
        const stop3 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
        stop3.setAttribute('offset', '50%');
        stop3.style.animation = 'main-gradient 3s linear infinite';
        linearGradient.appendChild(stop3);
        const mask = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
        mask.id = 'Mask';
        mask.setAttribute('maskUnits', 'userSpaceOnUse');
        mask.setAttribute('x', '0');
        mask.setAttribute('y', '0');
        mask.setAttribute('width', '400');
        mask.setAttribute('height', '500');
        defs.appendChild(mask);
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '50');
        circle.setAttribute('cy', '50');
        circle.setAttribute('r', '440');
        circle.setAttribute('fill', 'white');
        mask.appendChild(circle);
        const path = svg.querySelector('path');
        path.setAttribute('mask', 'url(#Mask)');
        path.setAttribute('fill', 'url(#Gradient)');
        path.setAttribute('x', '0');
        path.setAttribute('y', '0');
      }} />
    </div>
  );
};

export default MainContent;