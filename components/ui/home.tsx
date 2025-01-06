import { Button, Input } from '@mantine/core';
import ScrapperComponent from "./ScrapperComponents";

const Home = () => {
    return (
        <>
            <div className="w-[100%] h-full flex flex-col justify-between">
                {/* Main Content */}
                <div className="text-center flex-grow flex flex-col justify-center">
                    <h1 className="text-4xl font-semibold"> Welcome to Scraper </h1>
                    <p className="text-sm font-normal mt-4 mb-8">Unleash AI to Fetch the Data You Need</p>

                    <div className="w-[75%] ml-auto mr-auto">
                        <Input
                            placeholder="Enter the target website URL here..."
                            styles={{
                                input: {
                                    backgroundColor: "#282829",
                                    color: "#FFF",
                                    marginBottom: "2%",
                                    borderRadius: "0.5rem",
                                    padding: "3% 2%",
                                },
                            }}
                        />

                        <Input
                            placeholder="I want to scrape... (e.g., Product Name, Price)"
                            styles={{
                                input: {
                                    backgroundColor: "#282829",
                                    marginBottom: "2%",
                                    color: "#FFF",
                                    borderRadius: "0.5rem",
                                    padding: "3% 2%",
                                },
                            }}
                        />

                        <Input
                            placeholder="Enter the number of entries to extract (1 - 100 Limit)"
                            styles={{
                                input: {
                                    backgroundColor: "#282829",
                                    marginBottom: "2%",
                                    color: "#FFF",
                                    borderRadius: "0.5rem",
                                    padding: "3% 2%",
                                },
                            }}
                        />

                        <div className="w-[100%] flex justify-end">
                            <Button
                                type="submit"
                                radius="xl"
                                styles={{
                                    root: {
                                        padding: "1.5% 2%",
                                        width: "auto",
                                        height: "auto",
                                        background: 'linear-gradient(to right, #0A84FF, #5E5CE6)',
                                        color: '#fff',
                                        lineHeight: "normal",
                                        border: 'none',
                                        transition: 'background 0.3s ease',
                                        hover: {
                                            background: 'linear-gradient(to right, #5E5CE6, #0A84FF)',
                                        },
                                    },
                                }}
                            >
                                Start Scrapping
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="w-[100%] text-center">
                    <ScrapperComponent.FooterNote />
                </div>
            </div>
        </>
    );
};

export default Home;
