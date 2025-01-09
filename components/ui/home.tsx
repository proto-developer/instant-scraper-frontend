import { Input } from '@mantine/core';
import ScrapperComponent from "./ScrapperComponents";
import Image from 'next/image';
import StartNewScrapBtn from './startScrappingButton';

const Home = () => {

    return (
        <>
            <div className="w-full h-[90%] md:h-full flex flex-col justify-between px-4 sm:px-8">
                {/* Main Content */}
                <div className="text-center flex-grow flex flex-col justify-center">
                    <h1 className="text-[44px] md:text-3xl font-semibold flex items-center justify-center flex-col sm:flex-row">
                        Welcome to&nbsp;
                        <Image src="/ScraperLogo.png" alt="scraperLogo" width={170} height={40} className="w-[200px] md:w-[170px]"/>
                    </h1>
                    
                    <p className="text-xl md:text-base font-normal mt-6 md:mt-4 mb-8">Unleash AI to Fetch the Data You Need</p>

                    <div className="w-full md:w-[90%] mx-auto">


                    <input  placeholder="Enter the target website URL here..."
                    className="bg-[#282829] border text-[16px] md:text-[14px] text-white mb-4 md:mb-3 rounded-lg p-4 md:p-2.5 md:px-4 w-full focus:border-blue-500 focus:outline-none"
                    />

                    <input  placeholder="I want to scrape... (e.g., Product Name, Price)"
                    className="bg-[#282829] border text-[16px] md:text-[14px] text-white mb-4 md:mb-3 rounded-lg p-4 md:p-2.5 md:px-4 w-full focus:border-blue-500 focus:outline-none"
                    />

                    <input  placeholder="Enter the number of entries to extract (1 - 100 Limit)"
                    className="bg-[#282829] border text-[16px] md:text-[14px] text-white  rounded-lg p-4 md:p-2.5 md:px-4 w-full focus:border-blue-500 focus:outline-none"
                    />

                        <div className="w-full flex justify-end ">
                            <StartNewScrapBtn />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-full text-center mt-0 md:mt-8">
                    <ScrapperComponent.FooterNote />
                </div>
            </div>
        </>
    );
};

export default Home;
