import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton, Badge} from '@material-ui/core'


const Logout = () => {
  const { logout } = useAuth0();
  return (
    <div>
      
      <IconButton
        color="inherit"
        onClick={() => logout()}
      >
        <Badge color="secondary">
        <div>
          <ExitToAppIcon />
          <div style={{fontSize:'12px'}}>Sign out</div>
          </div>
        </Badge>
      </IconButton>
    </div>
  );
};

export default Logout;