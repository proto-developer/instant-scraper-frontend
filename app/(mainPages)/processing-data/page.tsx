"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import ProcessingLogos from "@/components/ui/processingData";
import InstructionInput from "@/components/ui/instructionInput";
import ScrapperComponent from "@/components/ui/ScrapperComponents";

export default function ProcessingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [scrappingDataState, setScrappingDataState] = useState("processing"); // State for ScrappingData
  const [analyzingDataState, setAnalyzingDataState] = useState("caution"); // State for Analyzing
  const [generatingOutputState, setGeneratingOutputState] = useState("processing"); // State for GeneratingOutput
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [downloadLink, setDownloadLink] = useState<string | null>(null);

  const url = searchParams.get("url");
  const query = searchParams.get("query");

  useEffect(() => {
    if (!url || !query) {
      setError("Invalid inputs. Redirecting to home...");
      setTimeout(() => router.push("/"), 3000); // Redirect to home if inputs are missing
      return;
    }

    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      try {
        setLoading(true);

        // Step 1: Call the first API
        // const response1 = await fetch(
        //   `http://74.50.88.184:8000/get_answer?url=${encodeURIComponent(
        //     url
        //   )}&query=${encodeURIComponent(query)}&scraper=scraper1`,
        //   {
        //     method: "GET",
        //     headers: {
        //       Authorization: `Bearer ${token}`,
        //     },
        //   }
        // );


        const response1 = await fetch("http://74.50.88.184:8002/api/scraper/get_answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Ensures the payload is sent as JSON
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
          body: JSON.stringify({
            url: url, // Send the URL in the payload
            query: query, // Send the query in the payload
            scraper: "scraper1", // Send the scraper name in the payload
          }),
        });
        

        setScrappingDataState("tick");


        if (!response1.ok) {
          throw new Error("Failed to fetch data from the first API.");
        }


        const result1 = await response1.json();
        const result1Data = result1.message;

        console.log("Response1:", result1);
        console.log("Response1 Result:", result1Data);


        // Mark ScrappingData as complete

        // Step 2: Call the second API using the result from the first API
        // setAnalyzingDataState("processing"); // Set AnalyzingData to "processing"
        setAnalyzingDataState("tick");

        const response2 = await fetch(
          `http://74.50.88.184:8000/get_excel?output_response=${encodeURIComponent(
            JSON.stringify(result1Data)
          )}`,
          {
            method: "GET", // Use GET
            headers: {
              Accept: "text/csv", // Specify that the client expects a CSV file
            },
          }
        );

        if (!response2.ok) {
          throw new Error("Failed to fetch data from the second API.");
        }

        // Get the Excel file as a blob
        const blob = await response2.blob();
        const fileURL = URL.createObjectURL(blob);

        // Mark AnalyzingData as complete
        setGeneratingOutputState("tick"); // Mark GeneratingOutput as complete

        // Set the download link
        setDownloadLink(fileURL);
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, query, router]);

  if (error) {
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  }

  return (
    <>
      <div className="w-[100%] min-h-[90%] md:min-h-[100%] max-h-screen flex flex-col py-4">
        {/* Top Content */}
        <div className="flex h-[calc(100dvh-120px)] md:h-[calc(100dvh-50px)] flex-col justify-between">
          <div className="processing w-[90%] sm:w-[85%] md:w-[80%] lg:w-[62%] 2xl:w-[50%] flex justify-center mt-5 md:mt-10">
            <div className="mainLogo flex h-8 mr-5">
              <Image src="/logo2.svg" alt="logo" width={32} height={5} className="sm:w-[32px]" />
            </div>

            <div className="logos mt-1">
              <ProcessingLogos.ScrappingData data={scrappingDataState} />
              <ProcessingLogos.Analyzing data={analyzingDataState} />
              <ProcessingLogos.GeneratingOutput data={generatingOutputState} />

              {loading ? (
                <p className="text-[16px] md:text-[16px] my-3">Processing your data...</p>
              ) : downloadLink ? (
                <>
                  <p className="text-[16px] md:text-[16px] my-3">Your Data is ready to download!</p>
                  <a
                    href={downloadLink}
                    download="output.csv"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Download CSV File
                  </a>
                </>
              ) : (
                <p className="text-red-500 text-[16px] my-3">Failed to process your data. Try again.</p>
              )}
            </div>
          </div>

          {/* Bottom Content */}
          <div className="input w-[90%] md:w-[75%] mx-auto text-center">
            <InstructionInput />
            <ScrapperComponent.FooterNote />
          </div>
        </div>
      </div>
    </>
  );
}
