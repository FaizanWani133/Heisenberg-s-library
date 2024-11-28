import { useEffect, useState } from "react";

import CabinLayout from "../components/CabinLayout";
import { Box, Button, Stack } from "@mui/material";
import { useFetchHalls } from "../api";
import LoadingSpinner from "../components/LoadingSpinner";

function HallManagement() {
  const { data: halls, isLoading } = useFetchHalls();
  const [selectedHall, setSelectedHall] = useState(null);

  function handleSelectHall(hall) {
    setSelectedHall(hall);
  }

  useEffect(() => {
    if (halls && halls.length > 0) {
      setSelectedHall(halls[0]);
    }
  }, [halls]);

  if (isLoading || !selectedHall) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      {selectedHall && (
        <Box>
          {halls.length > 0 && (
            <Stack sx={{ flexDirection: "row", gap: "20px", mb: 4 }}>
              {halls.map((hall) => (
                <Button
                  variant={
                    selectedHall.id === hall.id ? "contained" : "outlined"
                  }
                  key={hall.id}
                  onClick={() => handleSelectHall(hall)}
                >
                  {hall.name}
                </Button>
              ))}
            </Stack>
          )}
          {selectedHall && selectedHall.id && (
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
