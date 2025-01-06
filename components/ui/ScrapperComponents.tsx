import Link from "next/link";

const Root = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-between gap-[24px] p-[14px] h-full">
      {children}
    </main>
  );
};

const ScraperSearch = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[calc(100%-75px)] w-full flex justify-center items-center">
      {children}
    </div>
  );
};

const FooterNote = () => {
  return (
    <p className="text-[12px] text-[#B4B4B4]">
      Data security comes first &ndash; We'll never sell or share your data. For
      more details, here's our&nbsp;
      <Link href="/privacy-policy" className="text-[#8793FF] hover:underline">
        Privacy Policy
      </Link>
    </p>
  );
};

const Scraper = {
  Root,
  ScraperSearch,
  FooterNote,
};

export default Scraper;
