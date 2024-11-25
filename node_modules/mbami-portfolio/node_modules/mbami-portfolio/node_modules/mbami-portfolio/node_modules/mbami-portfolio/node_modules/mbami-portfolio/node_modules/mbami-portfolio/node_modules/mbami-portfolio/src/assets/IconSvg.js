import React from 'react';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

const Colors = {
	lightOn: '#fff',
	lightOff: '#222222',
};

const IconSvg = (props) => {
	return (
		<StyledSVG
			src="path_to_your_svg_file"
			beforeInjection={(svg) => {
				svg.setAttribute('width', '50');
				svg.setAttribute('height', '60');
				svg.setAttribute('opacity', `${props.on ? 0.8 : 1}`);
				const pathElements = svg.querySelectorAll('path');
				pathElements.forEach((path) => {
					path.setAttribute('fill', `${props.on ? Colors.lightOn : Colors.lightOff}`);
				});
			}}
			{...props}
		/>
	);
};

export default IconSvg;

const StyledSVG = styled(ReactSVG)`
	position: absolute;
	bottom: 100px;
	right: 50px;
`;