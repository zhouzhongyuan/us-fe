"use client";
import React, { useState } from "react";
import data from "./data";

export default function Home() {
  // get all types;
  const typeMap = new Set();
  data.forEach((item) => {
    typeMap.add(item.type);
  });
  const typeList = Array.from(typeMap);
  const [filterType, setFilterType] = useState("");

  const filteredData = filterType
    ? data.filter((item) => item.type === filterType)
    : data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <label>
          Filter by type:
          <select
            name="pets"
            id="pet-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {typeList.map((type) => (
              <option value={type as string} key={type as string}>
                {type as string}
              </option>
            ))}
            <option value="">--Please choose an option--</option>
          </select>
        </label>
      </div>
      {filteredData.length}
      {/* <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0"> */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-1 lg:text-left">
        {filteredData?.map((item) => {
          return (
            <a
              key={item.order}
              href="/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
                {item.order}
                {". "}
                {item.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
            </a>
          );
        })}
      </div>
    </main>
  );
}
