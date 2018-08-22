import React from 'react';
import { themr } from 'react-css-themr';

import { FontIcon } from 'react-toolbox/lib/font_icon';

import defaultTheme from './dialogHeader.scss';

const DialogHeader = props => {
	const { title, subtitle, closeIcon, onCloseClick, theme } = props;
	return (
		<div className={theme.wrapper}>
			<div className={theme.text}>
				<div className={theme.title}>{title}</div>
				<div className={theme.subtitle}>{subtitle}</div>
			</div>

			{closeIcon ? (
				<div className={theme.closeIcon}>
					<FontIcon value={'close'} onClick={onCloseClick} />
				</div>
			) : null}
		</div>
	);
};

export default themr('DialogHeader', defaultTheme)(DialogHeader);
