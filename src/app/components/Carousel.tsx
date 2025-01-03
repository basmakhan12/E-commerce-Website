import React from "react";

function Carousel() {
  return (
    <div>
      <section className="bg-gradient-to-r from-white to-blue-300 ">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-white to-blue-300 h-auto md:h-full flex flex-col ">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="./image/pizza.jpg"
                  alt="Pizza 1"
                  className="absolute inset-0 h-full w-full  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-200/15"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Classic Bites{" "}
                </h3>
              </a>
            </div>

            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-white to-blue-300  h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqIrdhHaVLcJewuEgOIKvFyvtdTwfHymGPNY3oPMSM24w0sQzT7_2P_2U&s"
                  alt="Pizza 2"
                  className="absolute inset-0 h-full w-full  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-200/15"></div>
                <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Garlic Pizza{" "}
                </h3>
              </a>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="./image/pizza3.jpg"
                    alt="Pizza 3"
                    className="obsolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform  duration-500  ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-200/15"></div>
                  <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Tandoori Pizza
                  </h3>
                </a>
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://assets.tmecosys.com/image/upload/t_web600x528/img/recipe/ras/Assets/d6c392a84e4f665424d710649452e7f9/Derivates/a6bdb196bee23faef1d8020319c7c64750ef7686.jpg"
                    alt="Pizza 4"
                    className="obsolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform  duration-500  ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-200/15"></div>
                  <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Heart Shape Pizza
                  </h3>
                </a>
              </div>
            </div>

<div className="col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-white to-blue-300 h-auto md:h-full flex flex-col">
  <a href=""
     className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
     >
       <img
         src="https://hips.hearstapps.com/vidthumb/images/classic-cheese-pizza-recipe-1-644be15492a79.jpeg?crop=1.00xw:1.00xh;0,0&resize=640.jpg"
         alt="Pizza 5"
         className="obsolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform  duration-500  ease-in-out"
       />
       <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-200/15"></div>
       <h3 className="z-10 text-2xl font-medium text-black absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
         Cheese Pizza {" "}
       </h3>
     </a>

</div>


          </div>
        </div>
      </section>
    </div>
  );
}

export default Carousel;
