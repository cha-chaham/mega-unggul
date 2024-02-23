import React from "react";

export default function FlagButton(props) {
  const { title, url, img, flexRow, subTitle } = props;

  return (
    <>
      <a href={url} className="w-full">
        <div
          className={`bg-[#961d1e] rounded-full hover:bg-[#861818] ease-in transition-all hover:scale-105 active:scale-110 flex ${
            flexRow ? "flex-col" : "flex-row"
          } text-center items-center py-3 px-8`}
        >
          <img src={img} alt={title} className="p-2 w-20 rounded-xl" />
          <div className="text-white w-full">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm px-8">{subTitle}</p>
          </div>
        </div>
      </a>
    </>
  );
}
