"use client"

const startButton = (props: React.ComponentPropsWithoutRef<'button'>) => {
    return (
        <button 
              type="submit" 
              className='buttonHovered text-[18px] md:text-[15px] 2xl:text-[20px] font-semibold bg-primaryGradient p-[12px_16px] rounded-full flex items-center gap-[2px] justify-center mt-5 md:mt-10'
              {...props}
            >
              Start Scrapping
            </button>
    )

}

export default startButton