import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { Button } from 'react-toolbox/lib/button';

import { InputField } from 'components/forms/field';
import gridTheme from 'styles/grid.scss';
import defaultTheme from './invoiceItemForm.scss';

class InvoiceItemForm extends Component {
	render() {
		const {
			theme,
			data: { itemName, quantity, value },
			onFieldChange,
			onFormSubmit
		} = this.props;

		return (
			<form onSubmit={onFormSubmit} className={theme.formWrapper}>
				<div className={theme.row}>
					<div className={classnames(theme.col, theme.col__2_of_4)}>
						<InputField
							id={'itemName'}
							name={'itemName'}
							placeholder={'Please enter an item name'}
							value={itemName}
							onFieldChange={onFieldChange}
						/>
					</div>
					<div className={classnames(theme.col, theme.col__1_of_4)}>
						<InputField
							id={'quantity'}
							name={'quantity'}
							placeholder={'0.00'}
							value={quantity}
							onFieldChange={onFieldChange}
						/>
					</div>
					<div
						className={classnames(
							theme.col,
							theme.col__1_of_4,
							theme.inputGroup
						)}
					>
						<div className={theme.row}>
							<div
								className={classnames(
									theme.col,
									theme.col__2_of_3
								)}
							>
								<InputField
									id={'value'}
									name={'value'}
									placeholder={'0.00'}
									value={value}
									onFieldChange={onFieldChange}
								/>
							</div>
							<div
								className={classnames(
									theme.col,
									theme.col__1_of_3
								)}
							>
								<Button
									theme={theme}
									icon={'keyboard_return'}
									flat
									primary
									onClick={onFormSubmit}
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default themr('InvoiceItemForm', { ...gridTheme, ...defaultTheme })(
	InvoiceItemForm
);
