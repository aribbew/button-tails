import React from "react";
import { type NextPage } from "next";
import Button from "../components/ButtonComponent";
import { HiOutlineArrowNarrowRight, HiCog } from "react-icons/hi"

const Home: NextPage = () => {

  return (
    <>

      <div className="flex justify-center align-middle
       pt-52  gap-1 pb-3 bg-slate-200" >
        <Button
          disabled={false}
          title="Register Now"
          onClick={() => console.log("You clicked the button")}
          textColor={"black"}
          bgColor={"white"}
          textSize="sm"
          border={"border-b"}
          iconRight={<HiOutlineArrowNarrowRight />}
          iconLeft={<HiCog />}
          boxSizeRL={'md'}
          boxSizeTB={'md'}
        />
      </div>
    </>
  );
};



export default Home;


