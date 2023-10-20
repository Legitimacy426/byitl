import Link from "next/link";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaBeer } from "react-icons/fa";
const GridCategories = () => {
  return (
    <main className="p-7">
      <div className="flex justify-between align-base">
        <h1 className="text-3xl font-extrabold">Browse Projects by category</h1>
        <button className="btn rounded-full">VIEW MORE</button>
      </div>
      {/* cards grid */}
      <div className="grid md:grid-cols-2 grid-col-1 gap-4 my-10">
        <Link
          href={"posts"}
          className=" border  p-4 bg-white hover:bg-slate-200 cursor-pointer"
        >
          <FaBeer className="text-2xl text-slate-600 " />
          <h1 className="text-l font-bold py-2">Web Applications</h1>

          <div className="flex justify-start">
            <div className="mr-5 flex align-baseline">
              <BsFillStarFill className="text-green-400" />
              4.6/7
            </div>
            <div>1637 projects</div>
          </div>
        </Link>
        <Link
          href={"posts"}
          className=" border  p-4 bg-white hover:bg-slate-200 cursor-pointer"
        >
          <FaBeer className="text-2xl text-slate-600 " />
          <h1 className="text-l font-bold py-2">Mobile Applications</h1>

          <div className="flex justify-start">
            <div className="mr-5 flex align-baseline">
              <BsFillStarFill className="text-green-400" />
              4.6/7
            </div>
            <div>1637 projects</div>
          </div>
        </Link>
        <Link
          href={"posts"}
          className=" border  p-4 bg-white hover:bg-slate-200 cursor-pointer"
        >
          <FaBeer className="text-2xl text-slate-600 " />
          <h1 className="text-l font-bold py-2">Android Applications</h1>

          <div className="flex justify-start">
            <div className="mr-5 flex align-baseline">
              <BsFillStarFill className="text-green-400" />
              4.6/7
            </div>
            <div>1637 projects</div>
          </div>
        </Link>
        <Link
          href={"posts"}
          className=" border  p-4 bg-white hover:bg-slate-200 cursor-pointer"
        >
          <FaBeer className="text-2xl text-slate-600 " />
          <h1 className="text-l font-bold py-2">Artificial Inteligence Applications</h1>

          <div className="flex justify-start">
            <div className="mr-5 flex align-baseline">
              <BsFillStarFill className="text-green-400" />
              4.6/7
            </div>
            <div>1637 projects</div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default GridCategories;
