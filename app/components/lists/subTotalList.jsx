import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './navList.scss';
import SubTotalListItem from './subTotalListItem';

class SubTotalList extends Component {
	render() {
		const { theme } = this.props;
		return (
			<div className={theme.subTotalListWrapper}>
				<SubTotalListItem />
				<SubTotalListItem grandTotal />
			</div>
		);
	}
}

const ThemedSubTotalList = themr('SubTotalList', defaultTheme)(SubTotalList);
export default ThemedSubTotalList;
