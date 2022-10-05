import React from "react";
import withAuthGuard from "../../components/auth/withAuthGuard";

const HomePage: React.FC = () => {
  return <div>Liste pokemon</div>;
};

export default withAuthGuard(HomePage);
