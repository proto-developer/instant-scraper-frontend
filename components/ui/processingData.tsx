import Image from "next/image";



function Analyzing (props: {data: string}) {
    const icon_name = props.data;

    return (
        <>
        <p className="flex items-center text-[18px] md:text-[16px] text-[#717171]">
                    <Image
                    className="mr-3"
                    alt={`${icon_name}_icon`}
                    src={`/${icon_name}.png`} // Construct the src dynamically
                    width={18}
                    height={18}
                /> 
                        Analyzing the Base URL ...
                    </p>
        </>
    )
}


function ScrappingData(props: { data: string }) {
    const icon_name = props.data;

    return (
        <>
            <p className="flex items-center text-[18px] md:text-[16px] text-[#717171]">
                <Image
                    className="mr-3"
                    alt={`${icon_name}_icon`}
                    src={`/${icon_name}.png`} // Construct the src dynamically
                    width={18}
                    height={18}
                />
                Scraping Data from the URL ...
            </p>
        </>
    );
}


function GeneratingOutput (props : {data: string}) {
    const icon_name = props.data;

    return (
        <>
        <p className="flex items-center text-[18px] md:text-[16px] text-[#717171]">
                <Image
                className="mr-3"
                alt={`${icon_name}_icon`}
                src={`/${icon_name}.png`} // Construct the src dynamically
                width={18}
                height={18}
                /> 
                Generating Your Output ...
        </p>
        </>
    )
}

function downloadDataButton () {
    
    return (
        <>
        <button className="py-2 px-3 md:py-1.5 md:px-2.5 text-[17px] md:text-[13px] bg-[#5E5CE6] rounded-md">
            Download Data
        </button>
        </>
    )
}



const ProcessingLogos = {
    Analyzing,
    ScrappingData,
    GeneratingOutput,
    downloadDataButton
};

export default ProcessingLogos