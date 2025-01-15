import React from "react";

const ProductColors = ({ color, selected, selecthandler }) => {
//   const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div>

        <label
        //   key={color.name}
          className={`relative flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
            selected === color
              ? "ring-2 ring-offset-1 ring-black"
              : "border border-black/10"
          }`}
          style={{ padding: "0.5rem" }}
          title={color}
        >
          <input
            type="radio"
            name="color"
            value={color}
            checked={selected === color}
            onChange={() => selecthandler(color)}
            className="hidden"
          />
          <span
            aria-hidden="true"
            className={`size-8 rounded-full border border-gray-400`}
            style={{
              display: "block",
              width: "2.5rem",
              height: "2.5rem",
              backgroundColor: color,
              borderRadius: "50%",
            }}
          ></span>
        </label>

    </div>
  );
};

export default ProductColors;
