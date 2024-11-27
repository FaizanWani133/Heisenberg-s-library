import  { useEffect, useState } from "react";
import supabase from "../supabase";
import CabinLayout from "../components/CabinLayout";
import { Box, Button, Stack, Typography } from "@mui/material";

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
        console.log(data)
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
          {halls.length > 0 && (
            <Stack sx={{ flexDirection: "row", gap: "20px",mb:4 }}>
              {halls.map((hall) => (
                <Button variant={selectedHall.id===hall.id?'contained':'outlined'} key={hall.id} onClick={() => handleSelectHall(hall)}>
                  {hall.name}
                </Button>
              ))}
            </Stack>
          )}
          {selectedHall && (
            <CabinLayout
              hall_id={selectedHall.id}
              hall_layout={selectedHall.hall_layout}
            />
          )}
        </Box>
      )}
    </Box>
  );
}

export default HallManagement;
