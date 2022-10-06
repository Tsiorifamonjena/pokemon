import React, { useState } from "react";

export default function withAuthGuard<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: React.ComponentType<T>
) {
  return (props: T) => {
    const [isUser, setIsUser] = useState(false);

    return <WrappedComponent {...props} />;
  };
}
