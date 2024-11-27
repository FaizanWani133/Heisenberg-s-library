import React, { useState } from "react";
import "./SeatingLayout.css";

const SeatingLayout = () => {
  // Initial state of the layout
  const initialLayout = [
    ["14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
    [null, null, null, null, null, null, null, null, null, null, "25"],
    ["13", null, "49", "50", "51", "52", "53", "54", null, null, "26"],
    ["12", null, "48", "47", "46", "45", "44", "43", null, null, "27"],
    ["11", null, null, null, null, null, null, null, null, null, "28"],
    ["10", null, "37", "38", "39", "40", "41", "42", null, null, "29"],
    ["9", null, "36", "35", "34", "33", "32", "31", null, null, "30"],
    ["8", null, null, null, null, null, null, null, null, null, null],
    ["7", null, "6", "5", "4", "3", null, "2", "1", null, null],
  ];

  // State to track cabin statuses
  const [layout, setLayout] = useState(
    initialLayout.map((row) =>
      row.map((cabin) => (cabin ? { id: cabin, status: "available" } : null))
    )
  );

  // Function to toggle cabin status
  const toggleStatus = (rowIndex, cabinIndex) => {
    setLayout((prevLayout) =>
      prevLayout.map((row, rIndex) =>
        row.map((cabin, cIndex) => {
          if (rIndex === rowIndex && cIndex === cabinIndex && cabin) {
            const nextStatus =
              cabin.status === "available"
                ? "occupied"
                : cabin.status === "occupied"
                ? "reserved"
                : "available";
            return { ...cabin, status: nextStatus };
          }
          return cabin;
        })
      )
    );
  };

  return (
    <div className="layout-container">
      {layout.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cabin, cabinIndex) => (
            <div
              key={cabinIndex}
              className={`cabin ${cabin ? `status-${cabin.status}` : "empty"}`}
              onClick={() => toggleStatus(rowIndex, cabinIndex)}
            >
              {cabin?.id || ""}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatingLayout;
