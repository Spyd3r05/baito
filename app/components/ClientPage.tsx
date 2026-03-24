"use client";

import { MyComponentProps } from "../types";
import NavBar from "./NavBar";

const ClientPage: React.FC<MyComponentProps> = ({ initialOpportunities }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <NavBar />
      </div>
    </>
  );
};

export default ClientPage;
