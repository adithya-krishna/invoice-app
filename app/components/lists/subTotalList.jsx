import React from 'react';
import { themr } from 'react-css-themr';

import defaultTheme from './navList.scss';
import SubTotalListItem from './subTotalListItem';

const SubTotalList = ({ theme }) => {
	return (
		<div className={theme.subTotalListWrapper}>
			<SubTotalListItem />
			<SubTotalListItem grandTotal />
		</div>
	);
};

const ThemedSubTotalList = themr('SubTotalList', defaultTheme)(SubTotalList);
export default ThemedSubTotalList;
