import React, { ReactElement, useContext } from 'react'
import {
  useLocation,
  Navigate,
} from "react-router-dom";
import AuthContext from 'context/auth/AuthContext';
import Core from 'components/Core';

const RequireAuth = ({ children, withSideMenu }: { children: JSX.Element, withSideMenu: boolean }): ReactElement => {
  const auth = React.useContext(AuthContext);
  const location = useLocation();

  if (!auth.IsUserAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if(withSideMenu) {
    return (<Core>{children}</Core>);
  }

  return children;
}

export default RequireAuth;