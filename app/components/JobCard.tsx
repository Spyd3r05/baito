import { MapPin, Clock, Briefcase } from "lucide-react";
import { Opportunity } from "../types";
import { getJobType, getLevel } from "../utils";

interface JobCardProps {
  opportunity: Opportunity;
}

export default function JobCard({ opportunity }: JobCardProps) {
  const jobType = getJobType(opportunity);
  const level = getLevel(opportunity);
  const jobTypeDisplay =
    jobType === "intern"
      ? "Intern"
      : jobType === "fulltime"
        ? "Full-time"
        : jobType === "parttime"
          ? "Part-time"
          : "Freelance";

  // Create a short description from the first tag
  const description = opportunity.tags.length
    ? `• ${opportunity.tags[0]} opportunity`
    : "• Exciting opportunity to grow your skills";

  return (
    <div className="bg-white border-2 border-black p-6 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 font-medium mt-1">
                {opportunity.company}
              </p>
            </div>
            {opportunity.isNew && (
              <span className="bg-black text-white text-xs px-2 py-1 font-bold uppercase tracking-wider">
                New
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Briefcase size={14} />
              {jobTypeDisplay}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {opportunity.location}
            </span>
            {opportunity.time && (
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {opportunity.time}
              </span>
            )}
            <span className="font-medium text-gray-800">{level}</span>
          </div>
          <div className="mt-4 text-gray-700">
            <p className="text-sm">{description}</p>
          </div>
        </div>
        <div className="flex items-center md:items-end">
          <a
            href={opportunity.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white font-bold px-6 py-2.5 hover:bg-gray-800 transition-colors border-2 border-black"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
}
