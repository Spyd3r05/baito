"use client";

import { MyComponentProps } from "../types";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const ClientPage: React.FC<MyComponentProps> = ({ initialOpportunities }) => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <NavBar />
        <main className="pt-28 px-4 max-w-7xl mx-auto">
          <HeroSection />
          <SearchBar onSearch={(query, location) => {}} />
        </main>
      </div>
    </>
  );
};

export default ClientPage;
