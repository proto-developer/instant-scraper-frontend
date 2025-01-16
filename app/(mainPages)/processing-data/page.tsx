import ProcessingLogos from "@/components/ui/processingData";
import Image from "next/image";
import InstructionInput from "@/components/ui/instructionInput";
import ScrapperComponent from "@/components/ui/ScrapperComponents";

export default function RootLayout() {
  return (
    <>
      <div className="w-[100%] min-h-[90%] md:min-h-[100%] max-h-screen flex flex-col py-4 justify-between">
        {/* Top Content */}
        <div className="processing w-[90%] md:w-[62%] 2xl:w-[50%] flex justify-center mt-5 md:mt-10">
          <div className="mainLogo flex h-8 mr-5">
            <Image src="/logo2.svg" alt="logo" width={32} height={5} className="sm:w-[32px]" />
          </div>

          <div className="logos mt-1">
            <ProcessingLogos.ScrappingData data="tick" />
            <ProcessingLogos.Analyzing data="caution" />
            <ProcessingLogos.GeneratingOutput data="processing" />

            <p className="text-[16px] md:text-[16px] my-3">Your Data is ready to download</p>

            <ProcessingLogos.downloadDataButton />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="input w-[90%] md:w-[75%] mx-auto text-center">
          <InstructionInput />
          <ScrapperComponent.FooterNote />
        </div>
      </div>
    </>
  );
}
