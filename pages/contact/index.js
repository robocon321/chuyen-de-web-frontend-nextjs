import React from 'react';

import Contact from '../../components/Client/contact/index';
import ContactProvider from "../../contexts/providers/ContactProvider"


const ContactPage = props => {
  return (
    <ContactProvider>
      <Contact />
    </ContactProvider>
  )
}

export default ContactPage;