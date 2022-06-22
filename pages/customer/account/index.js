import React from 'react';

import Account from '../../../components/Client/customer/account/index';
import AccountDetailProvider from '../../../contexts/providers/AccountDetailProvider';

const AccountPage = props => {
  return (
    <AccountDetailProvider>
      <Account />
    </AccountDetailProvider>
  )
}

export default AccountPage;