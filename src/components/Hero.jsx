import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-48 lg:h-64 bg-cover bg-center dark:bg-black" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
  <div className="absolute inset-0 bg-black opacity-50 dark:opacity-60"></div> {/* Dark overlay */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
    <h1 className="text-4xl lg:text-5xl font-bold text-white dark:text-gray-200">News Grid</h1>
    <div className="mt-2 text-sm text-gray-300 dark:text-gray-400">
      <a href="#" className="text-red-500 dark:text-red-400">Home</a> 
      <span className="mx-2">{'>'}</span>
      <span>News</span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero;
