import InitialPage from "@/components";
import Spinner from "@/components/shared/spinner";
import React, { Suspense } from "react";

const HomePage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <InitialPage />
    </Suspense>
  );
};

export default HomePage;
