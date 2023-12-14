"use client";

import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { fetchBooks, searchBook } from "../feature/book/bookSlice";
import { useAppDispatch } from "@/store/hooks";

const Section = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    dispatch(searchBook(search));
  };

  useEffect(() => {
    if (search === "") {
      dispatch(fetchBooks());
    }
  }, [search]);
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mx-auto max-w-xl text-center text-4xl font-black capitalize font-roboto">
          Search among <span className="text-purple-700">58340</span> courses
          and find your favorite course
        </h1>
      </div>
      <div className="xl:flex space-y-4 xl:space-y-0 items-center gap-6">
        {/* input */}
        <div className="xl:w-[744px] w-full flex items-center justify-start bg-[#FAFAFA] py-2 px-4 rounded-xl gap-4">
          <button className="bg-black flex rounded-md py-4 text-white px-8 text-[14px] items-center justify-center">
            Categories
          </button>
          <input
            type="text"
            className="border-0 outline-none bg-[#FAFAFA] w-full focus:ring-0"
            placeholder="Search Anything"
            onChange={(e) => setSearch(e.target.value)}
          />
          <MagnifyingGlassIcon
            className="w-8 h-8 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <p className="text-[##3E3232BF]">Or View The Following Courses...</p>
      </div>
    </div>
  );
};

export default Section;
