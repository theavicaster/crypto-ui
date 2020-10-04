import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};
const WarningAlert = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={15000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="warning">
          Numeric data displayed is static. Please follow GitHub repository to set up server-side API for
          dynamic updates.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default WarningAlert;
