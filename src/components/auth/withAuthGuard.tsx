import React from "react";

export default function withAuthGuard<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T) => {
    return <WrappedComponent {...props} />;
  };
}
