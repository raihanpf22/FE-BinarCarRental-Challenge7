import React from "react";

export default function GettingstartedSection() {
  return (
    <div className="w-4/5 mx-auto rounded-md bg-dark-blue-04 mt-8 p-12 items-center">
      <p className="font-bold text-4xl text-white text-center">
        Sewa Mobil di Bekasi Sekarang
      </p>
      <p className="font-light text-sm mt-4 text-white text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div className="flex items-center mt-5">
        <button className="mx-auto font-bold text-sm text-white rounded-md bg-lime-green-04 px-5 py-2">
          Mulai Sewa Mobil
        </button>
      </div>
    </div>
  );
}
