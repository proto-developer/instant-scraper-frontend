import { Input } from '@mantine/core';
import ScrapperComponent from "./ScrapperComponents";
import Image from 'next/image';
import StartNewScrapBtn from './startScrappingButton';

const Home = () => {

    return (
        <>
            <div className="w-full h-[100dvh] flex flex-col px-4 sm:px-8 justify-between">
                {/* Main Content */}

                <div className='mt-auto mb-auto'>
                <div className="text-center h-auto md:h-[100%] flex flex-col md:justify-center">
               

                    <h1 className="text-[35px]  md:text-3xl 2xl:text-[40px] font-semibold flex items-center justify-center flex-col sm:flex-col lg:flex-row ">
                        Welcome to&nbsp;
                        <span className="gradient-background-box">Scraper</span>
                        
                    </h1>
                    
                    <p className="text-[17px] md:text-base 2xl:text-xl font-normal mt-4 mb-4 md:mb-8">Unleash AI to Fetch the Data You Need</p>

                    <div className="w-full md:w-[90%] mx-auto">


                    <input  placeholder="Enter the target website URL here..."
                    className="bg-[#282829] border text-[16px] md:text-[14px] text-white mb-3 md:mb-3 rounded-lg p-4 md:p-2.5 md:px-4 2xl:p-3 2xl:text-[18px] w-full focus:border-blue-500 focus:outline-none"
                    />

                    <input  placeholder="I want to scrape... (e.g., Product Name, Price)"
                    className="bg-[#282829] border text-[16px] md:text-[14px] text-white mb-3 md:mb-3 rounded-lg p-4 md:p-2.5 md:px-4 2xl:p-3 2xl:text-[18px] w-full focus:border-blue-500 focus:outline-none"
                    />

                    <input  placeholder="Enter the number of entries to extract (1 - 100 Limit)"
                    className="bg-[#282829] border text-[16px] md:text-[14px] text-white  rounded-lg p-4 md:p-2.5 md:px-4 2xl:p-3 2xl:text-[18px] w-full focus:border-blue-500 focus:outline-none"
                    />

                        <div className="w-full flex justify-end">
                            <StartNewScrapBtn />
                        </div>
                    </div>
                </div>
                </div>

                {/* Footer */}
                <div className="w-full text-center">
                    <ScrapperComponent.FooterNote />
                </div>
            </div>
        </>
    );
};

export default Home;
