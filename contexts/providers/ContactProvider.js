import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";

import ContactReducer from "../reducers/ContactReducer";
import {
  setLoadingAction,
  setErrorAction,
  sendFeedbackAction,
  setFeedbackAction
} from "../actions/ContactAction";
import { validateEmail } from "../../utils/validate";

const initState = {
  isLoading: false,
  feedback: {},
  error: null
};

export const ContactContext = createContext();

const ContactProvider = (props) => {
  const router = useRouter();
  const [contactState, dispatch] = useReducer(ContactReducer, initState);

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  }

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  }

  const sendFeedback = async () => {
    await sendFeedbackAction(contactState.feedback)(dispatch);
  }

  const submitForm = async () => {
    setLoading(true);
    if(validateForm()) {
      await sendFeedback();
    }
    setLoading(false);
  }

  const validateForm = () => {
    const fullname = document.getElementById("fullname");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const email = document.getElementById("email");

    if(!contactState.feedback.fullname || contactState.feedback.fullname == '') {
      fullname.reportValidity();
      return false;
    }

    if(!contactState.feedback.email  || contactState.feedback.email == '' || !validateEmail(contactState.feedback.email)) {
      email.reportValidity();
      return false;
    }

    if(!contactState.feedback.subject || contactState.feedback.subject == '') {
      subject.reportValidity();
      return false;
    }

    if(!contactState.feedback.message || contactState.feedback.message == '') {
      message.reportValidity();
      return false;
    }

    return true;
  }

  const onChange = (e) => {
    const { name , value } = e.target;
    setFeedbackAction({
      ...contactState.feedback,
      [name]: value
    })(dispatch);
  }

  const value = {
    contactState,
    router,
    setLoading,
    setError,
    sendFeedback,
    onChange,
    submitForm
  };

  return (
    <ContactContext.Provider value={value}>{props.children}</ContactContext.Provider>
  );
};

export default ContactProvider;
