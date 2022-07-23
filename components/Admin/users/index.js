import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";

import styles from "./index.module.css";
import Input from "../../common/Input";
import Breadscrum from "../../common/Breadcrumb";
import Loading from "../../common/Loading";
import { UserListAdminContext } from "../../../contexts/providers/admin/UserListAdminProvider";
import { AuthContext } from "../../../contexts/providers/AuthProvider";

const ListUser = () => {
  const {
    userListAdminState,
    setConditions,
    submit,
    router,
    setPage,
    setSort,
    setSelected,
    onAction,
    setAction,
    deleteUsers,
  } = useContext(UserListAdminContext);
  const { authState, t } = useContext(AuthContext);

  if (userListAdminState.isLoading || authState.isLoading) {
    return <Loading isLoading={true} />;
  }

  if (!userListAdminState.isLoading && !authState.user) {
    router.push("/auth");
    return;
  }

  const renderImage = (params) => {
    return <Image src={params.value} alt="Not found" width={100} height={100} />;
  };
  
  const renderAction = (params) => {
    return (
      <div className={styles.actions}>
        <Button variant="outlined" color="error" onClick={() => deleteUsers([params.row.id])}>
          <span>
            <i className="fa-solid fa-trash-can"></i>
          </span>
        </Button>
        <span style={{ marginRight: 10 }}></span>
        <Button variant="contained" color="success" onClick={() => router.push(`/admin/users/update/${params.row.id}`)}>
          <span>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </Button>
      </div>
    );
  };
  
  const renderLink = (params) => {
    return (
      <a className={styles["link-row"]} href={`/users/${params.value}`}>
        {params.value}
      </a>
    );
  };
  
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
      field: "avatar",
      headerName: t('avatar_admin'),
      flex: 2,
      minWidth: 150,
      editable: false,
      renderCell: renderImage,
    },
    {
      field: "fullname",
      headerName: t('fullname_admin'),
      flex: 2,
      minWidth: 100,
      editable: false,
    },
    {
      field: "email",
      headerName: t('email_admin'),
      flex: 2,
      minWidth: 100,
      editable: false,
    },
    {
      field: "phone",
      headerName: t('phone'),
      flex: 2,
      minWidth: 100,
      editable: false,
    },
    {
      field: "modifiedTime",
      headerName: t('modified_time_admin'),
      flex: 2,
      minWidth: 200,
      editable: false,
    },
    {
      field: "action",
      headerName: t('action_admin'),
      flex: 2,
      minWidth: 150,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: renderAction,
    },
  ];


  const changeRangeDate = (isStartDate, value) => {
    const { conditions } = userListAdminState;
    const BT_modifiedTime = conditions.filters.BT_modifiedTime
      ? conditions.filters.BT_modifiedTime
      : "";
    let startDate = "2010-01-01";
    let endDate = "2030-12-12";

    const splitBT_modfiedTime = BT_modifiedTime.split("%2C");

    if (isStartDate) {
      startDate = value;
      if (splitBT_modfiedTime.length == 2) {
        endDate = splitBT_modfiedTime[1];
      }
    } else {
      endDate = value;
      if (splitBT_modfiedTime.length >= 1) {
        startDate = splitBT_modfiedTime[0];
      }
    }

    setConditions({
      ...userListAdminState.conditions,
      filters: {
        ...userListAdminState.conditions.filters,
        BT_modifiedTime: `${startDate}%2C${endDate}`,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Breadscrum links={[t('home_brum_admin'), t('user_brum_admin')]} />

        <Button variant="contained" color="warning" onClick={() => router.push("/admin/users/add-new")}>
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          &nbsp;<span>{t('add_new_brum_admin')}</span>
        </Button>
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
                  <Grid item xs={3}>
                    <Input
                      placeholder={t('select_role_admin')}
                      name="OR_roles.id"
                      arrayObj={userListAdminState.roles.data}
                      valueObj="id"
                      textInnerObj="name"
                      type="select"
                      defaultValue={userListAdminState.conditions.filters['OR_roles.id']}
                      onChange={(e) => {
                        setConditions({
                          ...userListAdminState.conditions,
                          filters: {
                            ...userListAdminState.filters,
                            [e.target.name]: e.target.value
                          }
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Input
                      placeholder={t('choose_date')}
                      type="date"
                      defaultValue={`${
                        userListAdminState.conditions.filters.BT_modifiedTime
                          ? userListAdminState.conditions.filters.BT_modifiedTime.split(
                              "%2C"
                            )[0]
                          : ""
                      }`}
                      onChange={(e) => changeRangeDate(true, e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={1}>
                  {t('to')}
                  </Grid>
                  <Grid item xs={4}>
                    <Input
                      placeholder={t('choose_date')}
                      type="date"
                      defaultValue={`${
                        userListAdminState.conditions.filters.BT_modifiedTime
                          ? userListAdminState.conditions.filters.BT_modifiedTime.split(
                              "%2C"
                            )[1]
                          : ""
                      }`}
                      onChange={(e) => changeRangeDate(false, e.target.value)}
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
                  placeholder={t('search_fullname_admin')}
                  defaultValue={userListAdminState.conditions.search}
                  onChange={(e) => {
                    setConditions({
                      ...userListAdminState.conditions,
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
          rowCount={userListAdminState.users.data.totalElements}
          pageSize={userListAdminState.users.data.size}
          rows={userListAdminState.users.data.content}
          page={userListAdminState.users.data.number}
          onPageChange={setPage}
          paginationMode="server"
          sortingMode="server"
          sortModel={[
            {
              field: userListAdminState.conditions.sort.split("__")[0],
              sort: userListAdminState.conditions.sort
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

export default ListUser;
