import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { List, ListItem, ListDivider } from 'react-toolbox/lib/list';

import defaultTheme from './appSideBar.scss';

const Test = () => <div>hello</div>;

class AppSideBar extends Component {
	render() {
		const { theme } = this.props;

		return (
			<aside className={classnames(theme.sideBarWrapper)}>
				<List selectable ripple>
					<ListItem itemContent={<Test />} />
					<ListDivider />
					<ListItem itemContent={<Test />} />
				</List>
			</aside>
		);
	}
}

const ThemedAppSideBar = themr('AppSideBar', defaultTheme)(AppSideBar);
export default ThemedAppSideBar;
