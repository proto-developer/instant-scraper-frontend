"use client"
import { useRouter } from 'next/navigation';


const startButton = () => {
  const router = useRouter();

  const handleClickStartScrapping = () => {
        router.push('/processing-data');
    }

    return (
        <button 
              type="submit" 
              className='buttonHovered text-[15px] font-semibold bg-primaryGradient p-[12px_16px] rounded-full flex items-center gap-[2px] justify-center mt-10'
              onClick={handleClickStartScrapping}
            >
              Start Scrapping
            </button>
    )

}

export default startButton