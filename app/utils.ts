//helper functions
import { Opportunity } from "./types";

export function getJobType(opp: Opportunity): string {
  const text = (opp.title + " " + opp.tags.join(" ")).toLowerCase();
  if (text.includes("intern") || text.includes("attachment")) return "intern";
  if (text.includes("part")) return "parttime";
  if (text.includes("freelance")) return "freelance";
  return "fulltime";
}

export function getLevel(opp: Opportunity): string {
  const text = (opp.title + " " + opp.tags.join(" ")).toLowerCase();
  if (text.includes("senior")) return "Senior";
  if (text.includes("mid") || text.includes("mid-level")) return "Mid Level";
  return "Entry";
}
