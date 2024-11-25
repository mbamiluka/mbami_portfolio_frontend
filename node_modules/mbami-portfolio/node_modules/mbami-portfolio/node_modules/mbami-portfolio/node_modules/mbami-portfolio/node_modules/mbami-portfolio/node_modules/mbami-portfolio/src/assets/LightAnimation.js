import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import BulbSvg from './BulbSvg';
import IconSvg from './IconSvg';
import MainContent from './MainContent';
import './fonts/LightAnimation.css';

const Colors = {
  light: '#ebd1a4',
  lightOn: '#fff',
  lightOff: '#222222',
};

export default function LightAnimation() {
  const [bulbOn, setBulbOn] = useState(false);

  const { rotationValue } = useSpring({
    from: { rotationValue: -1 },
    to: { rotationValue: 1 },
    loop: { reverse: true },
    config: { duration: 1500 },
  });

  const bulbRotationStyles = {
    transform: rotationValue.to((v) => `translateY(-90px) rotate(${v * 10}deg) translateY(90px)`),
  };

  const lightRotationStyles2 = {
    transform: rotationValue.to((v) => `translateX(${v * -35 + 50}px) translateY(-19px) translateY(19px)`),
  };

  const onBulbPress = () => setBulbOn(!bulbOn);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <animated.div style={bulbRotationStyles} className="bulbContainer">
        <div style={{ width: 2, height: 200, opacity: 0.3, backgroundColor: bulbOn ? Colors.lightOn : Colors.lightOff }} />
        <button onClick={onBulbPress} style={{ background: 'none', border: 'none' }}>
          <BulbSvg on={bulbOn} />
        </button>
      </animated.div>

      <MainContent on={bulbOn} />

      <animated.svg height='100vh' width='200vw' style={{ position: 'absolute', top: 0, right: 30 }}>
        <defs>
          <radialGradient id='grad2'>
            <stop offset='100%' stopColor={Colors.light} stopOpacity={`${bulbOn ? 0.03 : 0}`} />
            <stop offset='80%' stopColor={Colors.light} stopOpacity={`${bulbOn ? 0.15 : 0}`} />
            <stop offset='60%' stopColor={Colors.light} stopOpacity={`${bulbOn ? 0.29 : 0}`} />
            <stop offset='40%' stopColor={Colors.light} stopOpacity={`${bulbOn ? 0.45 : 0}`} />
            <stop offset='10%' stopColor={Colors.light} stopOpacity={`${bulbOn ? 0.72 : 0}`} />
          </radialGradient>
        </defs>
        <circle cx='475' cy='235' r='307' fill='url(#grad2)' />
      </animated.svg>

      <IconSvg on={bulbOn} />
    </div>
  );
}