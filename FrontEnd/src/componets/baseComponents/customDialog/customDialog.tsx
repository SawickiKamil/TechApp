import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { theme } from '../../../theme';

interface ICustomDialogProps {
  onClose: () => void;
  open: boolean;
}

const CustomDialog: React.FC<ICustomDialogProps> = ({
  children,
  onClose,
  open,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: theme.customPalette.tuna,
        },
      }}
    >
      {children}
    </Dialog>
  );
};

export default CustomDialog;
