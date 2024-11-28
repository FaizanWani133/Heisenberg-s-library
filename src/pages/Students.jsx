import { Box, Button, Stack, Typography } from "@mui/material";
import DataTable from "../components/StudentsTable";
import { useFetchStudents } from "../api";
import LoadingSpinner from "../components/LoadingSpinner";
import AddStudentModal from "../components/AddStudentModal";
import { useState } from "react";

const Students = () => {
  const { data: students, isLoading } = useFetchStudents();
  const [addStudent, setAddStudent] = useState(false);

  if (isLoading) return <LoadingSpinner />;
  return (
    <Box sx={{ height: "100%" }}>
      <Stack spacing={2}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Students
          </Typography>
          <Typography variant="caption">
            {/* Showing {rowsPerPage} of {total} restaurants */}
          </Typography>
        </Stack>

        {/* <TableFilters setFilters={setFilters} value={filters} /> */}
        <Stack justifyContent={"end"} alignItems={"end"}>
          <Button variant="contained" onClick={() => setAddStudent(true)}>
            Add New Student
          </Button>
        </Stack>
        <DataTable students={students} />
      </Stack>
      <AddStudentModal
        open={addStudent}
        handleClose={() => setAddStudent(false)}
        handleAddStudent={() => setAddStudent(false)}
      />
    </Box>
  );
};

export default Students;
