"use client";

import { Clock, Briefcase } from "lucide-react";

interface FilterSidebarProps {
  dateFilter: "all" | "24h" | "week" | "month";
  onDateFilterChange: (filter: "all" | "24h" | "week" | "month") => void;
  jobTypeFilters: Record<string, boolean>;
  onJobTypeChange: (type: string, enabled: boolean) => void;
}

export default function FilterSidebar({
  dateFilter,
  onDateFilterChange,
  jobTypeFilters,
  onJobTypeChange,
}: FilterSidebarProps) {
  const dateOptions = [
    { label: "Last Week", value: "week" },
    { label: "Last Month", value: "month" },
  ];

  const jobTypeOptions = [
    { label: "Full-time", value: "fulltime" },
    { label: "Part-time", value: "parttime" },
    { label: "Intern", value: "intern" },
    { label: "Freelance", value: "freelance" },
  ];

  return (
    <div className="bg-white border-2 border-black p-5 sticky top-28">
      <h3 className="font-bold text-xl mb-4">Filters</h3>

      {/* Date posted */}
      <div className="mb-6">
        <div className="flex items-center gap-2 font-bold text-gray-800 mb-3">
          <Clock size={16} />
          <span>Date posted</span>
        </div>
        <div className="space-y-2">
          {dateOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                name="dateFilter"
                value={option.value}
                checked={dateFilter === option.value}
                onChange={() => onDateFilterChange(option.value as any)}
                className="accent-black"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Job type */}
      <div className="mb-6">
        <div className="flex items-center gap-2 font-bold text-gray-800 mb-3">
          <Briefcase size={16} />
          <span>Job type</span>
        </div>
        <div className="space-y-2">
          {jobTypeOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={jobTypeFilters[option.value]}
                onChange={(e) =>
                  onJobTypeChange(option.value, e.target.checked)
                }
                className="accent-black"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
