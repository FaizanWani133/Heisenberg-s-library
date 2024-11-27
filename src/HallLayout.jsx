import React, { useState } from "react";
import "./HallLayout.css";

const HallLayout = ({ hallName, totalCabins, doorPosition }) => {
  const [cabins, setCabins] = useState(
    Array.from({ length: totalCabins }, (_, index) => ({
      id: index + 1,
      status: "Available",
      occupant: null,
    }))
  );

  const toggleCabinStatus = (id) => {
    setCabins((prev) =>
      prev.map((cabin) =>
        cabin.id === id
          ? {
              ...cabin,
              status: cabin.status === "Available" ? "Occupied" : "Available",
            }
          : cabin
      )
    );
  };

  // Define cabin groups
  const perimeterCount = Math.ceil((totalCabins * 2) / 3);
  const centerCount = totalCabins - perimeterCount;

  const perimeterCabins = cabins.slice(0, perimeterCount);
  const centerCabins = cabins.slice(perimeterCount);

  // Calculate rows and columns for layout
  const sideRows = Math.floor(perimeterCount / 4);
  const topAndBottomCabins = Math.ceil((perimeterCount - sideRows * 2) / 2);
  const centerRowCabins = Math.ceil(centerCount / 4);

  return (
    <div className="hall-layout">
      <h2>{hallName}</h2>

      {/* Layout */}
      <div className="layout-container">
        {/* Top Wall */}
        <div className="wall top-wall">
          {perimeterCabins.slice(0, topAndBottomCabins).map((cabin) => (
            <div
              key={cabin.id}
              className={`cabin ${cabin.status.toLowerCase()}`}
              onClick={() => toggleCabinStatus(cabin.id)}
            >
              {`C${cabin.id}`}
            </div>
          ))}
        </div>

        {/* Side Walls and Center Rows */}
        <div className="middle-section">
          {/* Left Wall */}
          <div className="wall left-wall">
            {perimeterCabins
              .slice(topAndBottomCabins, topAndBottomCabins + sideRows)
              .map((cabin) => (
                <div
                  key={cabin.id}
                  className={`cabin ${cabin.status.toLowerCase()}`}
                  onClick={() => toggleCabinStatus(cabin.id)}
                >
                  {`C${cabin.id}`}
                </div>
              ))}
          </div>

          {/* Center Rows */}
          <div className="center-rows">
            {[...Array(2)].map((_, rowIndex) => (
              <div key={rowIndex} className="center-row">
                {centerCabins
                  .slice(
                    rowIndex * centerRowCabins,
                    (rowIndex + 1) * centerRowCabins
                  )
                  .map((cabin, index) => (
                    <>
                      <div
                        key={cabin.id}
                        className={`cabin ${cabin.status.toLowerCase()}`}
                        onClick={() => toggleCabinStatus(cabin.id)}
                      >
                        {`C${cabin.id}`}
                      </div>
                      {index < centerRowCabins - 1 && (
                        <div className="gap"></div>
                      )}
                    </>
                  ))}
              </div>
            ))}
          </div>

          {/* Right Wall */}
          <div className="wall right-wall">
            {perimeterCabins
              .slice(
                topAndBottomCabins + sideRows,
                topAndBottomCabins + sideRows * 2
              )
              .map((cabin) => (
                <div
                  key={cabin.id}
                  className={`cabin ${cabin.status.toLowerCase()}`}
                  onClick={() => toggleCabinStatus(cabin.id)}
                >
                  {`C${cabin.id}`}
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Wall */}
        <div className="wall bottom-wall">
          {perimeterCabins
            .slice(topAndBottomCabins + sideRows * 2, perimeterCount)
            .map((cabin) => (
              <div
                key={cabin.id}
                className={`cabin ${cabin.status.toLowerCase()}`}
                onClick={() => toggleCabinStatus(cabin.id)}
              >
                {`C${cabin.id}`}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HallLayout;
