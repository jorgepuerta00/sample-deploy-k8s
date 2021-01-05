import React, { FC, ComponentType } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { getToken } from './Common';

interface PublicRouteProps extends RouteProps {
  component: ComponentType<any>;
  forceRedirect?: boolean;
  redirectTo?: string;
  path: string;
}

const PublicRoute: FC<PublicRouteProps> = ({
  component: Component,
  forceRedirect,
  redirectTo,
  path,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/dashboard' }} />}
    />
  )
};

export default PublicRoute;