import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useFetchCabins } from "../api";
import LoadingSpinner from "./LoadingSpinner";

const CabinLayout = ({ hall_id, hall_layout }) => {
  const [layout, setLayout] = useState([]);
  const [cabinsStatus, setCabinsStatus] = useState({});
  const { data: cabins ,isLoading} = useFetchCabins(hall_id);

  // The initial layout with cabin IDs

  const updateLayouts = (cabins) => {
    const statusData = cabins.reduce((acc, cabin) => {
      acc[cabin.cabin_number] = cabin.status;
      return acc;
    }, {});
    setCabinsStatus(statusData); // Store status data in state
    setLayout(hall_layout); // You can fetch or hardcode the initial layout
  };

  useEffect(() => {
    if(cabins && cabins.length>0){
      updateLayouts(cabins);
    }
  }, [hall_id]);

  if(isLoading){
    return <LoadingSpinner/>
  }

  // Render the layout with cabin status
  return (
    <Box>
      {layout.map((row, rowIndex) => (
        <Box key={rowIndex} sx={{ display: "flex", gap: "4px" }}>
          {row.map((cabinId, colIndex) => {
            if (!cabinId)
              return (
                <Box
                  key={colIndex}
                  sx={{
                    width: "40px",
                    height: "40px",
                    padding: "4px",
                    m: "4px",
                  }}
                ></Box>
              ); // Empty slot

            const cabinStatus = cabinsStatus[cabinId] || "available"; // Default to 'available' if not found

            return (
              <Box
                sx={{
                  textAlign: "center",
                  width: "40px",
                  margin: "4px",
                  height: "40px",
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    cabinStatus === "AVAILABLE"
                      ? "success.main"
                      : cabinStatus === "OCCUPIED"
                      ? "error.main"
                      : "warning.main",
                }}
                key={cabinId}
                onClick={() => {
                  if (cabinStatus === "AVAILABLE") {
                    bookCabin(cabinId);
                  }
                }}
              >
                <Typography
                  sx={{ textAlign: "center", fontSize: "12px", color: "white" }}
                >
                  {cabinId}
                </Typography>
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
};

export default CabinLayout;
