import React from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import defaultTheme from './lists.scss';

const SubTotalList = ({ theme, invoice }) => {
	return (
		<div className={theme.subTotalListWrapper}>
			<div className={theme.innerContent}>
				<div className={theme.entry}>
					<div className={theme.label}>Sub Total</div>
					<div className={theme.value}>
						&#8377; {invoice.subTotal}
					</div>
				</div>
				<div className={theme.entry}>
					<div className={theme.label}>
						Tax ({invoice.tax}
						%)
					</div>
					<div className={theme.value}>
						&#8377; {invoice.taxAmount}
					</div>
				</div>
				<div className={theme.entry}>
					<div className={theme.label}>
						Discount ({invoice.discount}
						%)
					</div>
					<div className={theme.value}>
						&#8377; {invoice.discountAmount}
					</div>
				</div>
				<div className={classnames(theme.entry, theme.grandTotal)}>
					<div className={theme.label}>Grand Total</div>
					<div className={theme.value}>
						&#8377; {invoice.grandTotal}
					</div>
				</div>
			</div>
		</div>
	);
};

const ThemedSubTotalList = themr('SubTotalList', defaultTheme)(SubTotalList);
export default ThemedSubTotalList;
