import { Container, Grid, Modal } from "@mui/material";
import React, { useContext } from "react";

import Breadcrumb from "../../../common/Breadcrumb";
import Loading from "../../../common/Loading";
import Comment from "./Comment";
import DetailBlog from "./DetailBlog";
import Sidebar from "./Sidebar";
import FormComment from "./FormComment";
import { BlogDetailContext } from "../../../../contexts/providers/BlogDetailProvider";


const Index = (props) => {
  const { blogState } = useContext(BlogDetailContext);

  return (
    <main>
      <Loading isLoading={blogState.isLoading} />
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
    </main>
  );
};

export default Index;
