const Home = () => {
  return (
    <div id="container" className="">
      {/* hero-section */}
      <header>
        {/* <!-- Hero Container --> */}
        <div className="mx-auto w-full max-w-7xl  px-5 py-8 md:px-10 md:py-12 lg:py-18">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Hero Content --> */}
            <div className="flex max-w-2xl flex-col items-start">
              {/* <!-- Hero Title --> */}
              <h1 className="mb-4 text-4xl text-slate-600 capitalize font-bold md:text-6xl">
                The Website You need During your money making time.
              </h1>
              <p className="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
              {/* <!-- Hero Form --> */}
              <div className="mb-5 w-full pb-8 md:mb-6 lg:mb-4">
                <form
                  name="email-form"
                  method="get"
                  className="flex max-w-[90%] flex-col items-start sm:flex-row"
                >
                  <input
                    type="email"
                    className="mb-5 mr-6 h-9 w-full bg-slate-200 rounded-lg px-6 py-7 text-sm text-[#333333] focus:border-[#3898ec]"
                    maxLength="256"
                    name="email"
                    placeholder="Enter your email"
                    required=""
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="inline-block w-full cursor-pointer bg-pink-500 rounded-lg px-6 py-3 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] sm:w-36"
                  />
                </form>
              </div>
              {/* <!-- Hero Info --> */}
              <div className="grid w-full grid-flow-row grid-cols-3 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                    10K+
                  </h3>
                  <p className="text-sm text-[#636262]">Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                    200K+
                  </h3>
                  <p className="text-sm text-[#636262]">Emails</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#276ef1] md:text-3xl">
                    500+
                  </h3>
                  <p className="text-sm text-[#636262]">Projects</p>
                </div>
              </div>
            </div>
            {/* <!-- Hero Image --> */}
            <img src="./Hero1.jpeg" className=" rounded-lg" />
          </div>
        </div>
      </header>

      {/* feature section */}

      <section className="relative">
        {/* <!-- Container --> */}
        <div className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12 lg:py-18">
          {/* <!-- Heading Div --> */}
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="uppercase text-[#1353fe]">
              3 easy steps to earn money in Crypto
            </p>
            <h2 className="text-3xl text-slate-600 mt-6 font-semibold md:text-5xl">
              How it{" "}
              <span className="bg-[#1353fe] rounded-lg px-2 text-pink-500">
                works
              </span>
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>
          </div>
          {/* <!-- How it Works Div --> */}
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
            {/* <!-- Item --> */}
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">1</p>
              </div>
              <p className="text-xl font-semibold">Get Your Web3 Tokens</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* <!-- Item --> */}
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">2</p>
              </div>
              <p className="text-xl font-semibold">Stake and Earn</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
            {/* <!-- Item --> */}
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">3</p>
              </div>
              <p className="text-xl font-semibold">
                Get your reward in Reward Web3 Token
              </p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <section>
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
            Meet Flowspark
          </h2>
          <p className="mb-8 max-w-lg text-sm text-[#808080] sm:text-base lg:mb-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <img
              src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a30c42421ae3cbe5abb9_about%20image.svg"
              alt=""
              className="inline-block h-full w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
              <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
              <p className="text-sm text-[#808080] sm:text-base">
                {" "}
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique
                nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae
                elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
