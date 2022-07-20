import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";

import styles from "./index.module.css";
import Input from "../../common/Input";
import Breadscrum from "../../common/Breadcrumb";
import Loading from "../../common/Loading";
import { PostListAdminContext } from "../../../contexts/providers/admin/PostListAdminProvider";
import { AuthContext } from "../../../contexts/providers/AuthProvider";

const Posts = (props) => {
  const {
    postListAdminState,
    setConditions,
    submit,
    router,
    setPage,
    setSort,
    setSelected,
    onAction,
    setAction,
    deletePosts
  } = useContext(PostListAdminContext);
  const { authState } = useContext(AuthContext);

  if (postListAdminState.isLoading || authState.isLoading) {
    return <Loading isLoading={true} />;
  }

  if(!postListAdminState.isLoading && !authState.user) {
    router.push("/auth");
    return ;
  }

  const renderImage = (params) => {
    return <Image src={params.value} alt="Not found" width={100} height={100} />;
  };
  
  const renderAction = (params) => {
    return (
      <div className={styles.actions}>
        <Button variant="outlined" color="error" onClick={() => deletePosts([params.row.id])}>
          <span>
            <i className="fa-solid fa-trash-can"></i>
          </span>
        </Button>
        <span style={{ marginRight: 10 }}></span>
        <Button variant="contained" color="success">
          <span>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>
        </Button>
      </div>
    );
  };
  
  const renderLink = (params) => {
    return (
      <a className={styles["link-row"]} href={`/posts/${params.value}`}>
        {params.value}
      </a>
    );
  };
  
  const renderFullname = (params) => {
    return params.value.fullname;
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
      field: "thumbnail",
      headerName: "Thumbnail",
      flex: 2,
      minWidth: 150,
      editable: false,
      renderCell: renderImage,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 4,
      minWidth: 200,
      editable: false,
    },
    {
      field: "modifiedUser",
      headerName: "Author",
      flex: 2,
      minWidth: 100,
      editable: false,
      renderCell: renderFullname,
    },
    {
      field: "totalView",
      headerName: "View",
      flex: 2,
      minWidth: 100,
      editable: false,
    },
    {
      field: "totalComment",
      headerName: "Comment Count",
      flex: 2,
      minWidth: 100,
      editable: false,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      minWidth: 150,
      editable: false,
      sortable: false,
      filterable: false,
      renderCell: renderAction,
    },
  ];

  const changeRangeDate = (isStartDate, value) => {
    const { conditions } = postListAdminState;
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
      ...postListAdminState.conditions,
      filters: {
        ...postListAdminState.conditions.filters,
        BT_modifiedTime: `${startDate}%2C${endDate}`,
      },
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Breadscrum links={["Home", "Posts"]} />
        <Button variant="contained" color="warning" onClick={() => {
          router.push("/admin/posts/add-new")
        }}>
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
          &nbsp;<span>Add New</span>
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
                      placeholder="Bulk actions"
                      name="select-bulk-action"
                      arrayObj={[
                        {
                          name: "edit",
                          innerText: "Edit",
                        },
                        {
                          name: "delete",
                          innerText: "Move to trash",
                        },
                      ]}
                      valueObj="name"
                      textInnerObj="innerText"
                      type="select"
                      onChange={setAction}
                    />
                  </Grid>
                  <Grid item xs={3} md={5}>
                    <button onClick={onAction}>Apply</button>
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
                  <Grid item xs={5}>
                    <Input
                      placeholder="Choose date"
                      type="date"
                      defaultValue={`${
                        postListAdminState.conditions.filters.BT_modifiedTime
                          ? postListAdminState.conditions.filters.BT_modifiedTime.split(
                              "%2C"
                            )[0]
                          : ""
                      }`}
                      onChange={(e) => changeRangeDate(true, e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    to
                  </Grid>
                  <Grid item xs={5}>
                    <Input
                      placeholder="Choose date"
                      type="date"
                      defaultValue={`${
                        postListAdminState.conditions.filters.BT_modifiedTime
                          ? postListAdminState.conditions.filters.BT_modifiedTime.split(
                              "%2C"
                            )[1]
                          : ""
                      }`}
                      onChange={(e) => changeRangeDate(false, e.target.value)}
                    />
                  </Grid>
                  {/* <Grid item xs={2}>
                    <button>
                      <i className="fa-solid fa-filter"></i>
                    </button>
                  </Grid> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={5} xs={12}>
            <Grid container columnSpacing={2} columns={12} alignItems="center">
              <Grid item xs={10}>
                <Input
                  name="search"
                  placeholder="Search by title"
                  defaultValue={postListAdminState.conditions.search}
                  onChange={(e) => {
                    setConditions({
                      ...postListAdminState.conditions,
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
          rowCount={postListAdminState.posts.data.totalElements}
          pageSize={postListAdminState.posts.data.size}
          rows={postListAdminState.posts.data.content}
          page={postListAdminState.posts.data.number}
          onPageChange={setPage}
          paginationMode="server"
          sortingMode="server"
          sortModel={[
            {
              field: postListAdminState.conditions.sort.split("__")[0],
              sort: postListAdminState.conditions.sort
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

export default Posts;
