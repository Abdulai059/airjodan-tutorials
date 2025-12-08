function Shoes() {
  return (
    <div className="mt-4">
      <h3 className="font-[Monument Extended] mb-4 text-center text-sm font-bold uppercase md:text-center">
        Choose color:
      </h3>

      <div className="flex items-center justify-center gap-4 md:gap-8">
        <img
          src="/shoe/neon green.png"
          alt="shoe"
          className="h-24 w-auto md:h-32"
        />

        <img
          src="/shoe/purple.png"
          alt="shoe"
          className="absolute top-9 h-28 w-auto md:top-10 md:h-36"
        />

        <img src="/shoe/red.png" alt="shoe" className="h-24 w-auto md:h-32" />
      </div>
    </div>
  );
}

export default Shoes;
