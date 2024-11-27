import { useState, useEffect } from "react";
import supabase from "../supabase";
import { Box, Typography } from "@mui/material";

const CabinLayout = ({ hall_id,hall_layout}) => {
  const [layout, setLayout] = useState([]);
  const [cabinsStatus, setCabinsStatus] = useState({});

  // The initial layout with cabin IDs
 
  const fetchCabins = async () => {
    try {
      let { data, error } = await supabase
        .from("cabin") // 'cabins' is the name of the table in your Supabase project
        .select("*,student(*)")
        .eq("hall_id", hall_id);

      if (error) {
        throw error;
      }
      console.log({ data });
      const statusData = data.reduce((acc, cabin) => {
        acc[cabin.id] = cabin.status;
        return acc;
      }, {});
      setCabinsStatus(statusData); // Store status data in state
      setLayout(hall_layout); // You can fetch or hardcode the initial layout
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Fetch cabin statuses from the backend
  useEffect(() => {
    if (hall_id) {
      fetchCabins();
    }
  }, [hall_id]);

  async function bookCabin(id) {
    try {
      const { data, error } = await supabase
        .from("cabin")
        .update({ status: "OCCUPIED" })
        .eq("id", id)
        .select();
      await fetchCabins();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
