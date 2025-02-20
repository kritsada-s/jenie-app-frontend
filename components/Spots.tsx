function Spots() {
  return (
    <div id="spots" className="w-[100px] lg:w-40 h-auto hidden md:grid grid-cols-6 gap-1 lg:gap-4 absolute top-0 left-14 lg:left-[17%]">
      {[...Array(150)].map((_, index) => (
        <span key={index} className="text-white/40 text-sm lg:text-lg leading-none flex items-center justify-center">•</span>
      ))}
    </div>
  );
}

export default Spots;