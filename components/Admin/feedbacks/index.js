import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Moment from 'react-moment';

import styles from "./index.module.css";
import Input from "../../common/Input";
import Breadscrum from "../../common/Breadcrumb";
import Loading from "../../common/Loading";
import Notification from "../../common/Notification";
import { FeedbackListAdminContext } from "../../../contexts/providers/admin/FeedbackListAdminProvider";
import { AuthContext } from "../../../contexts/providers/AuthProvider";
import ReplyFeedbackModal from "./ReplyFeedbackModal";

const Feedback = (props) => {
  const {
    feedbackListAdminState,
    setConditions,
    submit,
    router,
    setPage,
    setSort,
    setSelected,
    onAction,
    setAction,
    deleteFeedbacks,
    setReply
  } = useContext(FeedbackListAdminContext);
  const { authState, t } = useContext(AuthContext);

  if (feedbackListAdminState.isLoading || authState.isLoading) {
    return <Loading isLoading={true} />;
  }

  if (!feedbackListAdminState.isLoading && !authState.user) {
    router.push("/auth");
    return;
  }

  const renderAction = (params) => {
    return (
      <div className={styles.actions}>
        <Button variant="outlined" color="error" onClick={() => deleteFeedbacks([params.row.id])}>
          <span>
            <i className="fa-solid fa-trash-can"></i>
          </span>
        </Button>
        <span style={{ marginRight: 10 }}></span>
        <Button variant="contained" color="success" onClick={() => setReply({feedbackId: params.row.id})}>
          <span>
            {t('reply_admin')}
          </span>
        </Button>
      </div>
    );
  };
  
  const renderLink = (params) => {
    return (
      <a className={styles["link-row"]} href={`/feedbacks/${params.value}`}>
        {params.value}
      </a>
    );
  };
  
  const renderUser = (params) => {
    if (params.value) return <p>{params.value.fullname}</p>;
    else return <p></p>;
  };

  const renderTime = (params) => {
    return <Moment fromNow>{params.value}</Moment>   
  }
  
  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      minWidth: 50,
      editable: false,
      renderCell: renderLink,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 3,
      minWidth: 100,
      editable: false,
    },
    {
      field: "subject",
      headerName: t('subject_admin'),
      flex: 4,
      minWidth: 150,
      editable: false,
    },
    {
      field: "status",
      headerName: t('status_admin'),
      flex: 1,
      minWidth: 200,
      editable: false,
    },
    {
      field: "modifiedTime",
      headerName: t('time_admin'),
      flex: 1,
      minWidth: 200,
      editable: false,
      renderCell: renderTime
    },
    {
      field: "user",
      headerName: t('reply_by_admin'),
      flex: 3,
      minWidth: 100,
      editable: false,
      renderCell: renderUser,
    },
    {
      field: "action",
      headerName: t('action_admin'),
      flex: 3,
      minWidth: 150,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: renderAction,
    },
  ];

  return (
    <div className={styles.container}>
      <Notification
        title="Error"
        content={feedbackListAdminState.error}
        open={feedbackListAdminState.error != null}
        onClose={() => setError(null)}
      />    
      <ReplyFeedbackModal />
      <div className={styles.head}>
        <Breadscrum links={[t('home_brum_admin'), t('feedback_brum_admin')]} />
      </div>
      <div className={styles.controls}>
        <Grid container columnSpacing={2} columns={12} alignItems="center">
          <Grid item lg={7} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems="center">
              <Grid item xs={12} md={4}>
                <Grid
                  container
                  columnSpacing={2}
                  columns={12}
                  alignItems="center"
                >
                  <Grid item xs={9} md={7}>
                  <Input
                      placeholder={t('bulk_actions_admin')}
                      name="select-bulk-action"
                      arrayObj={[
                        {
                          name: "edit",
                          innerText: t('edit_admin'),
                        },
                        {
                          name: "delete",
                          innerText: t('remove_admin'),
                        },
                      ]}
                      valueObj="name"
                      textInnerObj="innerText"
                      type="select"
                      onChange={setAction}
                    />
                  </Grid>
                  <Grid item xs={3} md={5}>
                    <button onClick={onAction}>{t('apply_admin')}</button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid
                  container
                  columnSpacing={2}
                  columns={12}
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Input
                      placeholder={t('select_status_admin')}
                      name="status"
                      arrayObj={[
                        {
                          name: t('response_admin'),
                          value: 1,
                        },
                        {
                          name: t('no_response_admin'),
                          value: 0,
                        },
                      ]}
                      valueObj="value"
                      textInnerObj="name"
                      type="select"
                      onChange={(e) => {
                        setConditions({
                          ...feedbackListAdminState.conditions,
                          filters: {
                            ...feedbackListAdminState.conditions.filters,
                            AND_status: e.target.value
                          }
                        });
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems="center">
              <Grid item xs={10}>
                <Input
                  name="search"
                  placeholder={t('search_subject_admin')}
                  defaultValue={feedbackListAdminState.conditions.search}
                  onChange={(e) => {
                    setConditions({
                      ...feedbackListAdminState.conditions,
                      search: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <button onClick={() => submit()}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <DataGrid
          autoHeight
          rowCount={feedbackListAdminState.feedbacks.data.totalElements}
          pageSize={feedbackListAdminState.feedbacks.data.size}
          rows={feedbackListAdminState.feedbacks.data.content}
          page={feedbackListAdminState.feedbacks.data.number}
          onPageChange={setPage}
          paginationMode="server"
          sortingMode="server"
          sortModel={[
            {
              field: feedbackListAdminState.conditions.sort.split("__")[0],
              sort: feedbackListAdminState.conditions.sort
                .split("__")[1]
                .toLowerCase(),
            },
          ]}
          onSortModelChange={setSort}
          onSelectionModelChange={setSelected}
          columns={columns}
          checkboxSelection
          disableColumnSelector
          getRowHeight={(params) => {
            return 150;
          }}
          components={{ Toolbar: GridToolbar }}
        />
      </div>
    </div>
  );
};

export default Feedback;
