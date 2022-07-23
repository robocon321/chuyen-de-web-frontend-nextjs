import React, { useContext, useState } from "react";
import { Container, Grid, Modal } from "@mui/material";

import styles from "./index.module.css";

import Breadcrumb from "../../../common/Breadcrumb";
import Sidebar from "../Sidebar";
import Address from "./Address";
import ModalAddress from "./ModalAddress";
import Loading from "../../../common/Loading";
import Notification from "../../../common/Notification";

import { AddressesContext } from "../../../../contexts/providers/AddressesProvider";
import { AuthContext } from "../../../../contexts/providers/AuthProvider";

const Index = (props) => {
  const { router, addressesState, user, setError } = useContext(AddressesContext);
  const { t } = useContext(AuthContext);

  if (addressesState.isLoading) {
    return <Loading isLoading={true} />;
  }

  if (!user && !addressesState.isLoading) {
    router.push("/auth");
    return <div></div>;
  }

  return (
    <div className={styles.contact}>
      <Notification
        title="Error"
        content={addressesState.error}
        open={addressesState.error != null}
        onClose={() => setError(null)}
      />

      <Container>
        <Breadcrumb links={[t('home_brum'), t('address_brum')]} />
      </Container>
      <hr />
      <Container>
        <Grid container spacing={5} columns={12}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Address />
            <ModalAddress />
          </Grid>
        </Grid>
      </Container>
      <hr />
    </div>
  );
};

export default Index;
