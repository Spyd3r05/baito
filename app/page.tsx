import { getCachedAttachments } from "./action";
import ClientPage from "./components/ClientPage";

const Page = async () => {
  const attachments = await getCachedAttachments();
  return <ClientPage initialOpportunities={attachments} />;
};

export default Page;
