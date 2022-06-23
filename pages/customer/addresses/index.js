import React from 'react';

import Address from '../../../components/Client/customer/addresses/index';
import AddressesProvider from '../../../contexts/providers/AddressesProvider';

const AddressPage = props => {
  return (
    <AddressesProvider>
      <Address />
    </AddressesProvider>
  )
}

export default AddressPage;