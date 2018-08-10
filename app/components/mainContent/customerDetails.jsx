import React, { Component, Fragment } from 'react';

import UserForm from 'components/forms/userForm';
import FormHeader from 'components/headers/formHeader';

class CustomerDetails extends Component {
	render() {
		const { userFormData, onFieldChange } = this.props;

		return (
			<Fragment>
				<FormHeader title={'Customer Details'} />

				<UserForm onFieldChange={onFieldChange} data={userFormData} />
			</Fragment>
		);
	}
}

export default CustomerDetails;
