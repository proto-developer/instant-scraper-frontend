import ProcessingLogos from "@/components/ui/processingData";
import Image from "next/image";
import InstructionInput from "@/components/ui/instructionInput";
import ScrapperComponent from "@/components/ui/ScrapperComponents";
export default function RootLayout({
}) {
  return (
    <>
        <div className="prcoessing w-[90%] md:w-[75%] h-[calc(100dvh-270px)] md:h-fit flex justify-self-center mt-[14%] md:mt-[7%]">
            
            <div className="mainLogo flex  h-8 mr-5">
                <Image src="/logo2.svg" alt="logo" width={32} height={5} className="sm:w-[32px]"/>
            </div>

            <div className="logos mt-1">

            <ProcessingLogos.ScrappingData data="tick"/>
            <ProcessingLogos.Analyzing data="caution"/>
            <ProcessingLogos.GeneratingOutput data="processing"/>

            <p className="text-[18px] md:text-[16px] my-3">Your Data is ready to download</p>

            <ProcessingLogos.downloadDataButton/>

            </div>
            
            

        </div>

        <div className="input w-[90%] md:w-[75%] h-[63%] md:h-[60%] flex flex-col align-bottom justify-end justify-self-center text-center">
        <InstructionInput/>    
        <ScrapperComponent.FooterNote />
        </div>
        
    </>
  );
}
