import InitialPage from "@/components";
import React, { Suspense } from "react";
import { Oval } from "react-loading-icons";

const HomePage = () => {
  return (
    <Suspense fallback={<Oval className="text-4xl h-20" />}>
      <InitialPage />
    </Suspense>
  );
};

export default HomePage;
