function Pricing() {
  return (
    <div className="pt-5">
      <div className="relative hidden pb-3 pl-75 md:flex">
        <span className="bg-color inline-block rounded-md px-3 py-0.5 text-sm text-white">
          <p> Exclusive</p>
        </span>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <h3 className="text-brandRed text-4xl font-bold tracking-wide">134$</h3>

        <div className="flex flex-col uppercase">
          <h3 className="text-2xl font-black">Jordan</h3>
          <h3 className="text-lg font-light tracking-[0.3rem]">
            Jumpman 2025 pf
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
