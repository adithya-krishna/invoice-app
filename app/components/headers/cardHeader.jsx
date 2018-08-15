import React from 'react';

import { Button } from 'react-toolbox/lib/button';

const CardHeader = ({ theme }) => {
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
							<td className={theme.invoiceNumber}>#INV1122</td>
							<td className={theme.name}>John Doe</td>
						</tr>
						<tr>
							<td className={theme.time}>11:35 am - today</td>
							<td className={theme.email}>
								johndoe@serviceprovider.com
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={theme.buttonWrapper}>
				<Button label={'print'} icon={'print'} />
			</div>
		</div>
	);
};

export default CardHeader;
