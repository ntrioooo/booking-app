import React from "react";
import Button from "../utils/Button";

function MostPicked(props) {
  return (
    <section className="container mx-auto mt-20 p-4" ref={props.refMostPicked}>
      <h4 className="mb-4 text-blue-800 font-semibold font-sans text-2xl">Most Picked</h4>
      <div className="grid grid-cols-3 gap-4">
        {props.data.map((item, index) => {
          return (
            <div
              className={`col-span-1 ${
                index === 0 ? "row-span-2" : "row-span-1"
              } h-full`}
              key={`most-picked-${index}`}
            >
              <div className="bg-white border border-gray-200 rounded-2xl h-full relative flex flex-col overflow-hidden cursor-pointer z-[1]">
                <div className="absolute bg-gradient-to-t from-black/50 to-transparent w-full h-1/2 z-[3] bottom-0 scale-110 transform transition hover:scale-100"></div>
                <div className="z-10 bg-pink-600 py-1 px-3 absolute text-white rounded-bl-2xl rounded-tr-2xl right-0">
                  ${item.price}
                  <span className="font-light"> per {item.unit}</span>
                </div>
                <figure className="h-full m-0 rounded-2xl overflow-hidden absolute z-[2] bottom-0 right-0 top-0 left-0 w-full scale-110 ease-in-out duration-300 transform transition relative hover:scale-100">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="bg-cover h-full w-full"
                  />
                </figure>
                <div className="mt-4 text-white z-[4] p-[20px] flex flex-col justify-end w-full top-0 bottom-0 absolute translate-y-0 ease-in-out duration-300 hover:translate-y-[-10px]">
                  <Button
                    type="link"
                    className="text-white text-lg mb-1"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span className="text-md">
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MostPicked;
