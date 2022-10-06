import React, { useState } from "react";
import { Navigate } from "react-router-dom";

//TODO: user/connexion manager
export default function withAuthGuard<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T) => {
    const [userData, setUserData] = useState({});

    return userData ? (
      <WrappedComponent {...userData} {...props} />
    ) : (
      <Navigate to="/login" replace />
    );
  };
}
