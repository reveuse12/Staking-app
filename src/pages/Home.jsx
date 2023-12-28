const Home = () => {
  return (
    <div id="container" className="">
      {/* hero-section */}
      <header>
        {/* <!-- Hero Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Component --> */}
          <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
            {/* <!-- Hero Content --> */}
            <div className="flex max-w-2xl flex-col items-start">
              {/* <!-- Hero Title --> */}
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                The Website You Want Without The Dev Time.
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
                    className="mb-5 mr-6 h-9 w-full bg-[#f2f2f7] px-6 py-7 text-sm text-[#333333] focus:border-[#3898ec]"
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
            <img src="" />
          </div>
        </div>
      </header>

      {/* feature section */}

      <section className="relative">
        {/* <!-- Container --> */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Heading Div --> */}
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="uppercase text-[#1353fe]">3 easy steps</p>
            <h2 className="text-3xl mt-6 font-semibold md:text-5xl">
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
              <p className="text-xl font-semibold">Find Component</p>
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
              <p className="text-xl font-semibold">Copy and Paste</p>
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
              <p className="text-xl font-semibold">Done</p>
              <p className="text-sm text-[#636262]">
                Lorem ipsum dolor sit amet consectetur adipiscing elit ut
                aliquam, purus sit.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- BG Image --> */}
        <img
          src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639832e3e7aba393eeeba215_plain6.svg"
          alt=""
          className="absolute bottom-auto left-0 right-auto top-0 inline-block sm:bottom-auto sm:left-4 sm:right-auto sm:top-8 md:left-20 md:top-16"
        />
      </section>
    </div>
  );
};

export default Home;
