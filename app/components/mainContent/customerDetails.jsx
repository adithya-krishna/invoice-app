import React, { Fragment } from 'react';

import UserForm from 'components/forms/userForm';
import FormHeader from 'components/headers/formHeader';

const CustomerDetails = ({ userFormData, onFieldChange }) => {
	return (
		<Fragment>
			<FormHeader title={'Customer Details'} />

			<UserForm onFieldChange={onFieldChange} data={userFormData} />
		</Fragment>
	);
};

export default CustomerDetails;
