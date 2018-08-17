import React, { Component } from 'react';
import { themr } from 'react-css-themr';
import classnames from 'classnames';

import { InputField, InputTextArea } from 'components/forms/field';
import gridTheme from 'styles/grid.scss';
import defaultTheme from './userForm.scss';

class UserForm extends Component {
	render() {
		const {
			theme,
			data: { name, phone, address, email, pincode },
			onFieldChange
		} = this.props;

		return (
			<form className={theme.formWrapper}>
				<div className={theme.row}>
					<div className={classnames(theme.col, theme.col__1_of_2)}>
						<InputField
							id={'name'}
							name={'name'}
							placeholder={'Customer Name'}
							label={'Full Name'}
							value={name}
							required
							onFieldChange={onFieldChange}
						/>
					</div>
					<div className={classnames(theme.col, theme.col__1_of_2)}>
						<InputField
							id={'phone'}
							name={'phone'}
							label={'Phone Number'}
							value={phone}
							required
							onFieldChange={onFieldChange}
						/>
					</div>
				</div>
				<div className={theme.row}>
					<div className={classnames(theme.col, theme.col__1_of_2)}>
						<InputTextArea
							id={'address'}
							name={'address'}
							label={'Address'}
							rows={5}
							value={address}
							onFieldChange={onFieldChange}
						/>
					</div>
					<div className={classnames(theme.col, theme.col__1_of_2)}>
						<InputField
							id={'email'}
							name={'email'}
							placeholder={'Customer Email ID'}
							label={'Email ID'}
							value={email}
							required
							onFieldChange={onFieldChange}
						/>
						<InputField
							id={'pincode'}
							name={'pincode'}
							placeholder={'560022'}
							label={'Pincode'}
							value={pincode}
							onFieldChange={onFieldChange}
						/>
					</div>
				</div>
			</form>
		);
	}
}

export default themr('UserForm', { ...defaultTheme, ...gridTheme })(UserForm);
