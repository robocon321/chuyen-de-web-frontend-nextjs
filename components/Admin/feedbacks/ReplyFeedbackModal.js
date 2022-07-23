import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { FeedbackListAdminContext } from '../../../contexts/providers/admin/FeedbackListAdminProvider';
import { AuthContext } from '../../../contexts/providers/AuthProvider';

import Input from '../../common/Input';
import { Button, Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ReplyFeedbackModal = () => {
  const { feedbackListAdminState, setReply, reply } = useContext(FeedbackListAdminContext);
  const { t } = useContext(AuthContext);

  return (
    <div>
      <Modal
        open={feedbackListAdminState.reply != null}
        onClose={() => {
          setReply(null);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input 
            id="subject"
            title={t('subject_admin')}
            name='subject'
            defaultValue={feedbackListAdminState.reply ? feedbackListAdminState.reply.subject : ''}
            isRequire={'true'}
            onChange={(e) => {
              setReply({
                ...feedbackListAdminState.reply,
                [e.target.name]: e.target.value
              })
            }}
          />
          <Input 
            id="content"
            title={t('content_admin')}
            name='content'
            defaultValue={feedbackListAdminState.reply ? feedbackListAdminState.reply.content : ''}
            isRequire={'true'}
            type='textarea'
            onChange={(e) => {
              setReply({
                ...feedbackListAdminState.reply,
                [e.target.name]: e.target.value
              })
            }}
          />
          <Grid container justifyContent={'flex-end'}>
            <Button variant="contained" onClick={() => reply()}>{t('reply_admin')}</Button>
            <span style={{marginRight: '10px'}}></span>
            <Button variant="contained" color="error" onClick={() => {
              setReply(null);
            }}>{t('cancel_admin')}</Button>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}


export default ReplyFeedbackModal;