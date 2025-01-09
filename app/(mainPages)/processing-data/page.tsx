import ProcessingLogos from "@/components/ui/processingData";
import Image from "next/image";
import InstructionInput from "@/components/ui/instructionInput";
import ScrapperComponent from "@/components/ui/ScrapperComponents";
export default function RootLayout({
}) {
  return (
    <>
        <div className="prcoessing w-[90%] md:w-[75%] max-h-full flex justify-self-center mt-[14%] md:mt-[7%]">
            
            <div className="mainLogo flex  h-8 mr-5">
                <Image src="/logo2.svg" alt="logo" width={32} height={5} className="sm:w-[32px]"/>
            </div>

            <div className="logos mt-1">

            <ProcessingLogos.ScrappingData data="tick"/>
            <ProcessingLogos.Analyzing data="caution"/>
            <ProcessingLogos.GeneratingOutput data="processing"/>
            </div>
            
            

        </div>

        <div className="input w-[90%] md:w-[75%] h-[72%] flex flex-col align-bottom justify-end justify-self-center text-center">
        <InstructionInput/>    
        <ScrapperComponent.FooterNote />
        </div>
        
    </>
  );
}
