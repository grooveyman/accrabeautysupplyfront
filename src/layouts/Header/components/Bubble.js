import React from "react";

const formatNumber = (num) => {
  if (num > 999) return `${(num / 1000).toFixed(1)}K`; // e.g., 1.2K
  if (num > 99) return "99+";
  return num;
};

const Bubble = () => {
  return (
    <div className="absolute -top-2 -right-3 bg-slate-950 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[1.5rem] flex items-center justify-center">
      {formatNumber(4)}
    </div>
  );
};

export default Bubble;
