import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import Modal from '@mui/material/Modal';

import Input from '../common/Input';
import Notification from '../common/Notification';
import Loading from '../common/Loading';
import { AuthContext } from '../../contexts/providers/AuthProvider';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ForgotPasswordModal() {
  const { authState, setForgotPass, submitForgotPass, setError, setMessage, t } = useContext(AuthContext);

  return (
    <div>
    {/* <Loading isLoading={authState.isLoading} /> */}
    <Notification 
      open={authState.error && authState.error != ''}
      title={t('error')}
      content={authState.error}
      onClose={() => setError('')}
    />
    <Notification 
      open={authState.message && authState.message != ''}
      title={t('success')}
      content={authState.message}
      onClose={() => setMessage('')}
    />
      <Modal
        open={authState.forgotPass.isShow}
        onClose={() => setForgotPass({
          ...authState.forgotPass,
          isShow: false
        })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input
            id='username'
            title='Username'
            placeholder='Nhập username'
            name='username'
            type='text'
            isRequire='true'
            defaultValue={authState.forgotPass.username}
            onChange={(e) => {
              setForgotPass({
                ...authState.forgotPass,
                username: e.target.value 
              })
            }}
          />
          <Grid container justifyContent={'flex-end'}>
            <Button variant="contained" onClick={submitForgotPass}>Hoàn tất</Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
