import { RefreshCw } from "lucide-react";

interface ScrapeButtonProps {
  handleScrape: () => void;
  isScraping: boolean;
}
const ScrapeButton = ({ handleScrape, isScraping }: ScrapeButtonProps) => {
  return (
    <button
      onClick={handleScrape}
      disabled={isScraping}
      className={`fixed bottom-8 right-8 bg-black hover:bg-gray-800 text-white px-5 py-3.5 rounded-none flex items-center space-x-2 font-bold transition-transform z-20 ${
        isScraping
          ? "opacity-75 cursor-not-allowed scale-95"
          : "hover:scale-105"
      }`}
    >
      <RefreshCw
        size={18}
        className={`text-white ${isScraping ? "animate-spin" : ""}`}
      />
      <span>{isScraping ? "Scraping..." : "Scrape Now"}</span>
    </button>
  );
};

export default ScrapeButton;
