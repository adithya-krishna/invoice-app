import React from 'react';

import { Button } from 'react-toolbox/lib/button';

const CardHeader = ({ theme, invoiceID, customer }) => {
	return (
		<div className={theme.invoiceHeader}>
			<div className={theme.tableWrapper}>
				<table className={theme.table}>
					<tbody>
						<tr>
							<td className={theme.title}>Invoice</td>
							<td className={theme.details}>customer details</td>
						</tr>
						<tr>
							<td className={theme.invoiceNumber}>
								#{invoiceID}
							</td>
							<td className={theme.name}>{customer.name}</td>
						</tr>
						<tr>
							<td className={theme.time}>today</td>
							<td className={theme.email}>{customer.email}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={theme.buttonWrapper}>
				<Button
					theme={theme}
					label={'print'}
					icon={'print'}
					primary
					flat
				/>
			</div>
		</div>
	);
};

export default CardHeader;
