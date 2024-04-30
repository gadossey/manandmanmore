import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../firebase/useAuth';

export default function AdminRoute({ children, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user && user.customClaims.admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
