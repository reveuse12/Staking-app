/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Contact = () => {
  return (
    <div id="container" className="min-h-screen bg-gray-100">
      <section className="mx-auto w-full max-w-7xl  px-5 py-8 md:px-10 md:py-12 lg:py-18">
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="max-w-3xl">
            <h2 className="mb-2 text-3xl font-bold md:text-5xl text-[#333]">
              Let's build something exciting together!
            </h2>

            <div className="mb-4 flex items-center text-[#f6ad1b]">
              {[1, 2, 3, 4, 5].map((index) => (
                <svg
                  key={index}
                  className="h-8 w-8 fill-current text-[#f6ad1b]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.68L16.54 13.96L20.21 10.78C20.88 10.2 20.63 9.26 19.85 9.07L15.69 8.21L14.35 3.21C14.19 2.46 13.45 2 12.89 2.34L12 2.79L11.11 2.34C10.55 2 9.81 2.46 9.65 3.21L8.31 8.21L4.15 9.07C3.37 9.26 3.12 10.2 3.79 10.78L7.46 13.96L6.36 18.68C6.16 19.56 7.09 20.24 7.85 19.78L12 17.27z" />
                </svg>
              ))}
            </div>
            <p className="mb-8 max-w-lg text-sm text-[#636262] sm:text-base">
              Lorem ipsum dolor sit amet, elit ut aliquam, purus sit amet luctus
              venenatis elit ut aliquam, purus sit amet luctus venenatis
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="./me.jpg"
                alt=""
                className="h-16 w-16 object-cover rounded-full"
              />
              <div>
                <h6 className="text-base font-bold text-[#333]">
                  Prayag Bagthariya
                </h6>
                <p className="text-sm text-[#636262]">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl bg-white p-8 text-center rounded-md shadow-md">
            <h3 className="text-2xl font-bold md:text-3xl text-[#333]">
              Get a Free Quote
            </h3>
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-[#636262] lg:mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdxqSuzkPRh6tJofEHgK3lLLSi_l0DlnYFUOjnbvk-dmq57Xw/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
