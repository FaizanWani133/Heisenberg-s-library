import {
  Box,
  Button,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "../components/StudentsTable";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";

const Students = () => {
  const [students, setStudents] = useState([]);
  const navigation = useNavigate();

  const handleRowPerPageChange = (page) => {};

  function calculateTotalPages(totalRows, rowsPerPage) {
    return Math.ceil(totalRows / rowsPerPage);
  }

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        let { data, error } = await supabase
          .from("student") //
          .select("*");

        if (error) {
          throw error;
        }

        setStudents(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);
  return (
    <Box>
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
          <Button variant="contained">Add New Student</Button>
        </Stack>
        <DataTable students={students} />
      </Stack>
    </Box>
  );
};

export default Students;
