import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton, Badge} from '@material-ui/core'


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      
      <IconButton
        color="inherit"
        onClick={() => loginWithRedirect()}
      >
        <Badge color="secondary">
        <div>
          <AccountCircleIcon />
          <div style={{fontSize:'12px'}}>Log in</div>
          </div>
        </Badge>
      </IconButton>
    </div>
  );
};

export default Login;
