/* eslint-disable react/no-unescaped-entities */
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
                Unlock the full potential of your digital assets with BlockEarn.
              </h1>
              <p className="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">
                Earn up to 50% more value on your web3 tokens with BlockEarn!
                Our innovative staking platform allows you to stake your tokens
                and earn rewards in the form of web3 reward tokens. These tokens
                have 50% more value than regular web3 tokens and can be used for
                online purchases, making them a smart investment for your
                digital assets.
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
                  <h3 className="text-2xl font-bold text-sky-600 md:text-3xl">
                    10K+
                  </h3>
                  <p className="text-sm text-[#636262]">Customers</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-600 md:text-3xl">
                    200K+
                  </h3>
                  <p className="text-sm text-[#636262]">Emails</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-600 md:text-3xl">
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
          <div className="mx-auto w-full max-w-3xl text-center">
            <p className="uppercase text-sky-600 font-semibold underline decoration-pink-500">
              3 simple steps to earn rewards in crypto
            </p>
            <h2 className="text-3xl text-slate-600 mt-6 font-semibold md:text-5xl">
              How it <span className="text-pink-500">works</span>
            </h2>
            <p className="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16">
              Staking with BlockEarn is easy and secure. Follow these three
              simple steps to start earning rewards on your web3 tokens:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8 lg:gap-12">
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">1</p>
              </div>
              <p className="text-xl font-semibold">Get Your Web3 Tokens</p>
              <p className="text-sm text-[#636262]">
                Purchase web3 tokens from a trusted exchange or transfer them
                from your existing wallet to your BlockEarn account.
              </p>
            </div>
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">2</p>
              </div>
              <p className="text-xl font-semibold">Stake and Earn</p>
              <p className="text-sm text-[#636262]">
                Choose the amount and duration of your stake, and our platform
                will use advanced algorithms to calculate your rewards based on
                the amount of tokens staked and the length of time they are
                staked.
              </p>
            </div>
            <div className="relative grid gap-4 rounded-[30px] border border-solid border-[#636262] px-8 pb-8 pt-16 md:px-10 md:pt-20">
              <div className="absolute -top-8 left-10 flex flex-col items-center justify-center rounded-xl border border-solid border-[#5481fb] bg-white px-8 py-5 [box-shadow:rgb(0,_0,_0)_4px_4px]">
                <p className="text-xl font-bold md:text-2xl">3</p>
              </div>
              <p className="text-xl font-semibold">Get Your Rewards</p>
              <p className="text-sm text-[#636262]">
                Once your staking period is complete, you will receive your
                rewards in the form of web3 reward tokens. These tokens have 50%
                more value than regular web3 tokens and can be used for online
                purchases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <section id="about">
        {/* <!-- Container --> */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <h2 className="mb-8 text-3xl font-bold md:text-5xl lg:mb-14">
            About Us
          </h2>
          <p className="mb-8 max-w-lg text-sm text-[#808080] sm:text-base lg:mb-24">
            Welcome to BlockEarn, the revolutionary blockchain staking app that
            empowers you to earn rewards on your web3 tokens. Our platform is
            designed to be user-friendly, secure, and transparent, allowing you
            to stake your tokens and earn rewards based on the amount of tokens
            and the time they are staked.
          </p>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <img
              src="/aboutus.jpeg"
              alt=""
              className="inline-block h-full w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-5 rounded-2xl border border-solid border-black p-10 sm:p-20">
              <h2 className="text-3xl font-bold md:text-5xl">Our Mission</h2>
              <p className="text-sm text-[#808080] sm:text-base">
                At StakeEarn, our mission is to empower individuals and
                businesses to maximize the value of their web3 tokens through
                secure and transparent staking. We believe that everyone should
                have access to the benefits of blockchain technology, and we're
                dedicated to making it as easy and rewarding as possible. We
                understand that staking can be intimidating, especially for
                those new to the world of crypto. That's why we've built a
                platform that's user-friendly, secure, and transparent. Our
                advanced algorithms calculate your rewards based on the amount
                of tokens staked and the length of time they're staked, and our
                real-time reporting system allows you to track your rewards with
                ease. But we're not just about maximizing rewards.
                <br />
                <br />
                We're also committed to promoting the adoption of blockchain
                technology and its potential to transform industries. By
                providing a seamless and secure staking experience, we hope to
                help more people and businesses discover the benefits of
                decentralized finance and contribute to the growth of the
                blockchain ecosystem. At StakeEarn, we're passionate about what
                we do, and we're dedicated to delivering the best possible
                experience for our users. Join us on our mission to unlock the
                full potential of web3 tokens and contribute to a more
                decentralized and equitable financial system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
