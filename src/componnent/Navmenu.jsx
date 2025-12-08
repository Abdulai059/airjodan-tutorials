function Navmenu() {
  const items = ["home", "man", "woman", "kids", "sales"];

  return (
    <div className="hidden h-[18px] w-[558.75px] items-center justify-center gap-[50.25px] font-bold uppercase md:flex">
      {items.map((item, index) => (
        <h3
          key={item}
          className={`relative cursor-pointer pb-1 text-sm tracking-[2px] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-600 after:transition-all after:duration-300 ${index === 0 ? "after:w-full" : "after:w-0 hover:after:w-full"} `}
        >
          {item}
        </h3>
      ))}
    </div>
  );
}

export default Navmenu;

export function MobileNavmenu({ isOpen }) {
  const items = ["home", "man", "woman", "kids", "sales"];

  if (!isOpen) return null;

  return (
    <div className="mt-2 flex flex-col gap-4 rounded-lg p-4 md:hidden">
      {items.map((item, index) => (
        <h3
          key={item}
          className="cursor-pointer text-sm font-bold tracking-[2px] text-gray-800 uppercase hover:text-red-600"
        >
          {item}
        </h3>
      ))}
    </div>
  );
}
