import React from "react";
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import Review from "./OutletChild/Review";

const OutletPart = ({ matchedRoom }) => {
  const { _id } = matchedRoom;
  const params = useParams();

  return (
    <div>
      <div className="pt-16 flex font-openSans text-[11px] text-black mid-lg:text-[12px] border-b-2 pb-2 justify-around">
        <NavLink
          className="p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/description`}
        >
          Description
        </NavLink>
        <NavLink
          className="p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/addinformation`}
        >
          Additional Information
        </NavLink>
        <NavLink
          className="p-1 sm:p-2 uppercase"
          to={`/rooms/${_id}/reviews`}
        >
          Reviews
        </NavLink>
        <NavLink
          className={`p-1 sm:p-2 uppercase`}
          to={`/rooms/${_id}/price`}
        >
          Pricing Plans
        </NavLink>
      </div>
      <div className="mt-14 mid-lg:px-10">
        <Outlet></Outlet>
        {params.info ? "" : <Review></Review>}
      </div>
    </div>
  );
};

export default OutletPart;
