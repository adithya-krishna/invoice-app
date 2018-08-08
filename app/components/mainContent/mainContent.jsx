import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { Card, CardText } from 'react-toolbox/lib/card';

import defaultTheme from './mainContent.scss';

import CardHeader from 'components/headers/cardHeader';

class AppMainContent extends Component {
	render() {
		const { theme } = this.props;

		return (
			<article className={classnames(theme.contentWrapper)}>
				<Card className={theme.mainCardWrapper}>
					<CardHeader theme={theme} />
				</Card>
			</article>
		);
	}
}

const ThemedAppMainContent = themr('AppMainContent', defaultTheme)(
	AppMainContent
);
export default ThemedAppMainContent;
