import React from "react";
import { Link } from "react-router-dom";
import PageLoading from "../../../Components/Shared/Loading/Loading";
import useRoom from "../../../Hooks/useRoom";


const B3Cards = () => {
  const [RoomsData, isLoading] = useRoom();
  const NewRoomsData = [...RoomsData?.slice(9, RoomsData?.length), ...RoomsData?.slice(0, 9)]
  if (isLoading) {
    return <PageLoading></PageLoading>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-3 lg:gap-x-7">
      {NewRoomsData?.map((room) => {
        const { _id, title, description, price, img } = room;
        return (
          <div className="relative shadow-lg p-4 rounded">
            <div className="md:flex justify-center items-center overflow-hidden">
              <img
                src={img}
                className="w-full h-[230px] cursor-pointer transform delay-100 duration-500 hover:scale-110"
                alt=""
              />
            </div>
            <div>
              <div className="space-y-4 mt-4 mb-10">
                <h2 className="font-diplayFair text-3xl">{title}</h2>
                <p className="font-openSans text-gray-700">
                  {description.slice(0, 130) + "...."} <br />
                  <Link to={`/rooms/${_id}`} className="text-green-500">
                    See more
                  </Link>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="">
                  <span className="font-diplayFair ">{price && price}</span>{" "}
                  <br />
                </div>
                <Link to={`/rooms/${_id}`} className="Btn-Primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default B3Cards;
