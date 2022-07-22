import React, { useReducer, createContext, useEffect } from "react";
import { useRouter } from "next/router";
import FeedbackListAdminReducer from "../../reducers/admin/FeedbackListAdminReducer";
import {
  setLoadingAction,
  setErrorAction,
  setConditionsAction,
  loadFeedbacksAction,
  setSelectedAction,
  deleteFeedbacksAction,
  setActionAction,
  setReplyAction,
  sendEmailAction
} from "../../actions/admin/FeedbackListAdminAction";

const initState = {
  conditions: {
    search: "",
    filters: {},
    page: 0,
    size: 10,
    sort: "",
  },
  selects: [],
  action: 'nothing',
  feedbacks: null,
  isLoading: true,
  error: null,
  reply: null
};

export const FeedbackListAdminContext = createContext();

const FeedbackListAdminProvider = (props) => {
  const router = useRouter();
  const [feedbackListAdminState, dispatch] = useReducer(
    FeedbackListAdminReducer,
    initState
  );

  useEffect(() => {
    loadData();
  }, [router.query]);

  useEffect(() => {
    console.log(feedbackListAdminState);
  }, [feedbackListAdminState]);

  const loadData = async () => {
    if (!router.isReady) return;
    const query = {
      ...router.query,
    };
    let search = "";
    let page = 0;
    let size = 10;
    let sort = "id__ASC";
    let filters = {};

    if (query.search != null) search = query.search;
    delete query.search;
    if (query.page != null) page = query.page;
    delete query.page;
    if (query.size != null) size = query.size;
    delete query.size;
    if (query.sort != null) sort = query.sort;
    delete query.sort;

    filters = { ...query };
    const conditions = {
      search,
      page,
      size,
      sort,
      filters,
    };
    setConditions(conditions);

    setLoading(true);
    await loadFeedbacks(conditions);
    setLoading(false);
  };

  const loadFeedbacks = async (conditions) => {
    await loadFeedbacksAction(conditions)(dispatch);
  };

  const setConditions = (conditions) => {
    setConditionsAction(conditions)(dispatch);
  };

  const setLoading = (isLoading) => {
    setLoadingAction(isLoading)(dispatch);
  };

  const setError = (error) => {
    setErrorAction(error)(dispatch);
  };

  const setPage = (newPage) => {
    router.push({
      pathname: "/admin/feedbacks",
      query: {
        ...router.query,
        page: newPage + 1,
      },
    });
  };

  const setSort = (sortModel) => {
    let sort = "id__ASC";
    if (sortModel.length > 0)
      sort = `${sortModel[0].field}__${sortModel[0].sort.toUpperCase()}`;
    router.push({
      pathname: "/admin/feedbacks",
      query: {
        ...router.query,
        sort,
      },
    });
  };

  const setSelected = (newSelected) => {
    setSelectedAction(newSelected)(dispatch);
  };

  const submit = () => {
    const { conditions } = feedbackListAdminState;
    router.push({
      pathname: "/admin/feedbacks",
      query: {
        search: conditions.search,
        page: 1,
        size: conditions.size,
        sort: conditions.sort,
        ...conditions.filters,
      },
    });
  };

  const setAction = (e) => {
    setActionAction(e.target.value)(dispatch);
  }

  const setReply = (reply) => {
    setReplyAction(reply)(dispatch);
  }

  const deleteFeedbacks = async (selected) => {
    await deleteFeedbacksAction(selected)(dispatch);
    router.reload();
  };

  const onAction = () => {
    switch(feedbackListAdminState.action){
      case 'delete':
        deleteFeedbacks(feedbackListAdminState.selects);
        break;
      default: break;
    }
  };

  const reply = async () => {
    if(validate()) {
      setLoading(true);
      await sendEmailAction(feedbackListAdminState.reply)(dispatch);
      setLoading(false);  
    }
  }

  const validate = () => {
    const subjectEle = document.getElementById("subject");
    const contentEle = document.getElementById("content");

    if(!feedbackListAdminState.reply.subject || feedbackListAdminState.reply.subject == '') {
      subjectEle.reportValidity();
      return false;
    }

    if(!feedbackListAdminState.reply.content || feedbackListAdminState.reply.content == '') {
      contentEle.reportValidity();
      return false;
    }

    if(!feedbackListAdminState.reply.feedbackId) {
      setError('Your feedback is invalid');
      return false;
    }

    return true;
  }

  const value = {
    router,
    feedbackListAdminState,
    setConditions,
    setError,
    submit,
    setPage,
    setSort,
    setSelected,
    deleteFeedbacks,
    onAction,
    setAction,
    setReply,
    reply
  };

  return (
    <FeedbackListAdminContext.Provider value={value}>
      {props.children}
    </FeedbackListAdminContext.Provider>
  );
};

export default FeedbackListAdminProvider;
