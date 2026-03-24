"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string, location: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto bg-white border-2 border-black p-2"
    >
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 flex items-center px-3 text-gray-600">
          <Search size={20} className="mr-2" />
          <input
            type="text"
            placeholder="Search Job title or Keyword"
            className="w-full bg-transparent border-none outline-none text-gray-800 px-3 py-2 text-base"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex-1 flex items-center px-3 text-gray-600 border-t md:border-t-0 md:border-l border-black">
          <MapPin size={20} className="mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent border-none outline-none text-gray-800 px-3 py-2 text-base"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-black cursor-pointer text-white font-bold px-8 py-3 hover:bg-gray-800 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
}
