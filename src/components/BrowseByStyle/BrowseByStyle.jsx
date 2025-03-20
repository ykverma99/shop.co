import React from "react";
import Container from "../common/Container";
import BrowseStyleImg from "../common/BrowseStyleImg";

const BrowseByStyle = () => {
  return (
    <Container
      childClassName={
        "bg-bg h-[55rem] rounded-xl flex flex-col justify-center items-center gap-10"
      }
    >
      <h2 className="uppercase text-5xl font-bold">Browse By Dress Style</h2>
      <div className="flex items-center gap-5">
        <BrowseStyleImg title={"Casual"} src={"/images/casual.png"} />
        <BrowseStyleImg
          className={"w-[42rem]"}
          title={"Formal"}
          src={"/images/formal.png"}
        />
      </div>
      <div className="flex items-center gap-5">
        <BrowseStyleImg
          className={"w-[42rem]"}
          title={"Party"}
          src={"/images/party.png"}
        />
        <BrowseStyleImg title={"Gym"} src={"/images/gym.png"} />
      </div>
    </Container>
  );
};

export default BrowseByStyle;
