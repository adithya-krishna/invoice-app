import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';
import { Card } from 'react-toolbox/lib/card';

import defaultTheme from './mainContent.scss';

import CardHeader from 'components/headers/cardHeader';
import InvoiceList from 'components/lists/invoiceList';
import SubTotalList from 'components/lists/subTotalList';

const AppMainContent = ({ theme }) => {
	return (
		<article className={classnames(theme.contentWrapper)}>
			<Card theme={theme}>
				<CardHeader theme={theme} />

				<InvoiceList />

				<SubTotalList />
			</Card>
		</article>
	);
};

const ThemedAppMainContent = themr('AppMainContent', defaultTheme)(
	AppMainContent
);
export default ThemedAppMainContent;
