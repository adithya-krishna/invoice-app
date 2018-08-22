import React from 'react';
import { themr } from 'react-css-themr';

import defaultTheme from './formHeader.scss';

import { Button } from 'react-toolbox/lib/button';

const FormHeader = ({
	theme,
	title,
	rightButtonIcon = 'skip_next',
	rightButtonLabel = 'skip',
	customer,
	onRightButtonClick
}) => {
	const isCustomerPresent = !!customer;
	return (
		<div className={theme.wrapper}>
			<div className={theme.title}>{title}</div>
			{!isCustomerPresent ? (
				<div className={theme.rightButton}>
					<Button
						theme={theme}
						icon={rightButtonIcon}
						label={rightButtonLabel}
						flat
						primary
						onClick={onRightButtonClick}
					/>
				</div>
			) : (
				<div className={theme.rightCustomerDetails}>
					<div className={theme.details}>
						<div className={theme.header}>Customer Details</div>
						<div className={theme.name}>{customer.name}</div>
						<div className={theme.email}>{customer.email}</div>
					</div>
					<div className={theme.editButton}>
						<Button
							theme={theme}
							icon={'border_color'}
							flat
							primary
							onClick={onRightButtonClick}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

const ThemedFormHeader = themr('FormHeader', defaultTheme)(FormHeader);
export default ThemedFormHeader;
