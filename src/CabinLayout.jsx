import React, { useState, useEffect } from "react";
import supabase from "./supabase";
import { Box, Typography } from "@mui/material";

const CabinLayout = ({ hall_id }) => {
  const [layout, setLayout] = useState([]);
  const [cabinsStatus, setCabinsStatus] = useState({});

  // The initial layout with cabin IDs
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
      setLayout(initialLayout); // You can fetch or hardcode the initial layout
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

  // Handle cabin selection (toggle status in backend)
  function handleCabinSelection(cabinId, currentStatus) {
    // const newStatus = currentStatus === 'available' ? 'occupied' : 'available';
    // axios.post('http://localhost:5000/api/cabins/update', { cabinId, status: newStatus })
    //   .then(response => {
    //     // Update the local status of the cabin in the frontend
    //     setCabinsStatus(prevState => ({
    //       ...prevState,
    //       [cabinId]: newStatus
    //     }));
    //   })
    //   .catch(error => {
    //     console.error('Error updating cabin status:', error);
    //   });
  }
};

export default CabinLayout;
