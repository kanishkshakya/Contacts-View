import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
const ContactCards = ({ contact }) => {
  return (
    <div
      key={contact.id}
      className=" bg-yellow rounded-lg  justify-between flex items-center p-2 "
    >
      <div className="flex gap-2 items-center">
        <HiOutlineUserCircle className=" text-orange text-4xl" />
        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm ">{contact.email}</p>
        </div>
      </div>
      <div className="flex text-3xl">
        <RiEditCircleLine className=" " />
        <IoMdTrash className="text-orange" />
      </div>
    </div>
  );
};

export default ContactCards;
