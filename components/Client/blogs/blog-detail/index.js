import { Container, Grid } from "@mui/material";
import React from "react";

import Breadcrumb from "../../../common/Breadcrumb";
import Comment from "./Comment";
import DetailBlog from "./DetailBlog";
import Sidebar from "./Sidebar";
import FormComment from "./FormComment";

const Index = (props) => {
  return (
    <>
      <Container>
        <Breadcrumb links={["Home", "Blog"]} />
      </Container>
      <hr />
      <Container>
        <Grid
          container
          direction={{
            // xs: 'column-reverse',
            sm: "row",
            md: "row",
          }}
          spacing={5}
          columns={4}
        >
          <Grid item xs={4} md={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={4} md={3}>
            <DetailBlog />
            <Container>
              <Comment />
            </Container>
            <Container>
              <FormComment />
            </Container>
          </Grid>
        </Grid>
      </Container>
      <hr />
    </>
  );
};

export default Index;
