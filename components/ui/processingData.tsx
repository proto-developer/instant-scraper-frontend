import Image from "next/image";



function Analyzing (props: {data: string}) {
    const icon_name = props.data;

    return (
        <>
        <p className="flex items-center text-[#717171]">
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
            <p className="flex items-center text-[#717171]">
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
        <p className="flex items-center text-[#717171]">
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



const ProcessingLogos = {
    Analyzing,
    ScrappingData,
    GeneratingOutput
};

export default ProcessingLogos