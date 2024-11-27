import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import CabinLayout from "../CabinLayout";
import { Box, Typography } from "@mui/material";

function HallManagement() {
  const [halls, setHalls] = useState([]);
  const [cabins, setCabins] = useState([]);
  const [selectedHall, setSelectedHall] = useState(null);

  useEffect(() => {
    const fetchHalls = async () => {
      try {
        let { data, error } = await supabase
          .from("hall") //
          .select("*");

        if (error) {
          throw error;
        }

        setHalls(data);
        setSelectedHall(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchHalls();
  }, []);

  useEffect(() => {
    const fetchCabins = async () => {
      try {
        let { data, error } = await supabase
          .from("cabin") // 'cabins' is the name of the table in your Supabase project
          .select("*")
          .eq("hall_id", selectedHall.id);

        if (error) {
          throw error;
        }
        setCabins(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (selectedHall) {
      fetchCabins();
    }
  }, []);

  function handleSelectHall(hall) {
    setSelectedHall(hall);
  }

  return (
    <Box>
      {selectedHall && (
        <Box>
          <Typography>{selectedHall.name}</Typography>
          <CabinLayout hall_id={selectedHall.id} />
        </Box>
      )}
    </Box>
  );
}

export default HallManagement;
