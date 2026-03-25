"use client";
import { useState, useMemo } from "react";
import { Opportunity } from "../types";
import { getJobType } from "../utils";

import { MyComponentProps } from "../types";
import FilterSidebar from "./FilterSidebar";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const ClientPage: React.FC<MyComponentProps> = ({ initialOpportunities }) => {
  const [allOpportunities, setAllOpportunities] =
    useState<Opportunity[]>(initialOpportunities);
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<
    "all" | "24h" | "week" | "month"
  >("all");
  const [jobTypeFilters, setJobTypeFilters] = useState<Record<string, boolean>>(
    {
      intern: true,
      fulltime: true,
      parttime: true,
      freelance: true,
    },
  );
  const [currentPage, setCurrentPage] = useState(0);

  const filteredOpportunities = useMemo(() => {
    let filtered = [...allOpportunities];

    // Search by title or company
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (opp) =>
          opp.title.toLowerCase().includes(query) ||
          opp.company.toLowerCase().includes(query),
      );
    }

    // Location filter
    if (locationQuery.trim()) {
      const loc = locationQuery.toLowerCase();
      filtered = filtered.filter((opp) =>
        opp.location.toLowerCase().includes(loc),
      );
    }

    // Date filter
    if (dateFilter !== "all") {
      const now = new Date();
      const cutoff = new Date();
      if (dateFilter === "24h") cutoff.setDate(now.getDate() - 1);
      else if (dateFilter === "week") cutoff.setDate(now.getDate() - 7);
      else if (dateFilter === "month") cutoff.setMonth(now.getMonth() - 1);

      filtered = filtered.filter((opp) => {
        if (!opp.time) return true;
        const timeStr = opp.time.toLowerCase();
        let diffDays = 0;
        const daysMatch = timeStr.match(/(\d+)\s+days? ago/);
        const hoursMatch = timeStr.match(/(\d+)\s+hours? ago/);
        const weeksMatch = timeStr.match(/(\d+)\s+weeks? ago/);
        const monthsMatch = timeStr.match(/(\d+)\s+months? ago/);
        if (daysMatch) diffDays = parseInt(daysMatch[1]);
        else if (hoursMatch) diffDays = parseInt(hoursMatch[1]) / 24;
        else if (weeksMatch) diffDays = parseInt(weeksMatch[1]) * 7;
        else if (monthsMatch) diffDays = parseInt(monthsMatch[1]) * 30;
        else return true;

        const oppDate = new Date(
          now.getTime() - diffDays * 24 * 60 * 60 * 1000,
        );
        return oppDate >= cutoff;
      });
    }

    // Job type filter
    const activeJobTypes = Object.entries(jobTypeFilters)
      .filter(([, enabled]) => enabled)
      .map(([type]) => type);
    if (activeJobTypes.length > 0) {
      filtered = filtered.filter((opp) => {
        const jobType = getJobType(opp);
        return activeJobTypes.includes(jobType);
      });
    }

    return filtered;
  }, [
    allOpportunities,
    searchQuery,
    locationQuery,
    dateFilter,
    jobTypeFilters,
  ]);

  const handleSearch = (query: string, location: string) => {
    setSearchQuery(query);
    setLocationQuery(location);
    setCurrentPage(0);
  };

  const totalJobs = filteredOpportunities.length;
  const handleDateFilterChange = (filter: "all" | "24h" | "week" | "month") => {
    setDateFilter(filter);
    setCurrentPage(0);
  };

  const handleJobTypeChange = (type: string, enabled: boolean) => {
    setJobTypeFilters((prev) => ({ ...prev, [type]: enabled }));
    setCurrentPage(0);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <NavBar />
        <main className="pt-28 px-4 max-w-7xl mx-auto">
          <HeroSection />
          <SearchBar onSearch={handleSearch} />
          {/* Total attachments scraped */}
          <div className="mt-6 mb-4 text-gray-700">
            Total Jobs <span className="font-bold text-black">{totalJobs}</span>{" "}
            job results
          </div>
          <FilterSidebar
            dateFilter={dateFilter}
            onDateFilterChange={handleDateFilterChange}
            jobTypeFilters={jobTypeFilters}
            onJobTypeChange={handleJobTypeChange}
          />
        </main>
      </div>
    </>
  );
};

export default ClientPage;
