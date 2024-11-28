import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: false,
    label: "ID",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: false,
    label: "Email",
  },
  {
    id: "phone",
    numeric: false,
    disablePadding: false,
    label: "Phone",
  },
  {
    id: "aadhar_number",
    numeric: false,
    disablePadding: false,
    label: "Aadhar Number",
  },
  {
    id: "hall",
    numeric: false,
    disablePadding: false,
    label: "Hall",
  },
  {
    id: "cabin",
    numeric: false,
    disablePadding: false,
    label: "Cabin",
  },
];

function EnhancedTableHead(props) {
  return (
    <TableHead sx={{ bgcolor: "primary.main" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            <TableSortLabel
              sx={{
                color: "white",
                "&.Mui-active": { color: "white" },
                "&.Mui-active .MuiTableSortLabel-icon": {
                  color: "white",
                },
              }}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function StudentsDataTable({ students }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <EnhancedTableHead  />
            <TableBody>
              {students.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell component="th" id={row.id} scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">
                      <Link component={RouterLink}>{row.name}</Link>
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.aadhar_number}</TableCell>
                    <TableCell align="left">
                      {row?.cabin?.hall?.name || ""}
                    </TableCell>

                    <TableCell align="left">
                      {row?.cabin?.cabin_number || ""}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
