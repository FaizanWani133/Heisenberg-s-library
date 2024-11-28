import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CircularProgress,
  FormHelperText,
  Badge,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  useFetchCabins,
  useFetchHalls,
  useInsertStudent,
  useUpdateCabin,
} from "../api";
import CabinLayout from "./CabinLayout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AddStudentModal = ({ open, handleClose }) => {
  const { data: halls, isLoading } = useFetchHalls();
  const [selectedHall, setSelectedHall] = useState(null);
  const [selectedCabin, setSelectedCabin] = useState(null);
  const { mutate: insertStudent } = useInsertStudent();
  const { mutate: updateCabin } = useUpdateCabin();

  const { data: cabins, isLoading: isCabinsLoading } = useFetchCabins(
    selectedHall?.id
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    aadhar_number: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      aadhar_number: "",
      phone: "",
    });
    insertStudent(formData, {
      onSuccess: (student) => {
        if (selectedCabin) {
          updateCabin({
            id: selectedCabin.id,
            status: "OCCUPIED",
            assigned_to: student.id,
          });
        }
        handleClose();
      },
    });
  };

  const handleHallChange = (event) => {
    setSelectedHall(halls?.find((hall) => hall.id === event.target.value));
  };

  const handleCabinChange = (event) => {
    setSelectedCabin(cabins?.find((cabin) => cabin.id === event.target.value));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-student-modal-title"
        aria-describedby="add-student-modal-description"
      >
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              id="add-student-modal-title"
              variant="h6"
              component="h2"
            >
              Add Student
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Aadhaar Number"
              name="aadhar_number"
              value={formData.aadhar_number}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <FormControl margin="normal" fullWidth>
              <InputLabel id="hall-label">Select Hall</InputLabel>
              <Select
                labelId="hall-label"
                value={selectedHall?.id || ""}
                onChange={handleHallChange}
                label="Select Hall"
                disabled={isLoading} // Disable while loading
              >
                {isLoading ? (
                  <MenuItem disabled>
                    <CircularProgress size={24} />
                  </MenuItem>
                ) : (
                  halls?.map((hall) => (
                    <MenuItem key={hall.id} value={hall.id}>
                      {hall.name}
                    </MenuItem>
                  ))
                )}
              </Select>
              {isLoading && <FormHelperText>Loading halls...</FormHelperText>}
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel id="cabin-label">Select Cabin</InputLabel>
              <Select
                labelId="cabin-label"
                value={selectedCabin?.id || ""}
                onChange={handleCabinChange}
                renderValue={(value) => <Typography>{value}</Typography>}
                label="Select Cabin"
                disabled={isCabinsLoading} // Disable while loading
              >
                {isCabinsLoading ? (
                  <MenuItem disabled>
                    <CircularProgress size={24} />
                  </MenuItem>
                ) : (
                  cabins?.map((cabin) => (
                    <MenuItem
                      disabled={
                        cabin.status === "OCCUPIED" ||
                        cabin.status === "RESERVED"
                      }
                      sx={{ justifyContent: "space-between" }}
                      key={cabin.id}
                      value={cabin.id}
                    >
                      {cabin.cabin_number}
                      <Chip
                        label={cabin.status}
                        color={
                          cabin.status === "AVAILABLE"
                            ? "success"
                            : cabin.status === "OCCUPIED"
                            ? "error"
                            : cabin.status === "RESERVED"
                            ? "warning"
                            : "primary"
                        }
                      />
                    </MenuItem>
                  ))
                )}
              </Select>
              {isCabinsLoading && (
                <FormHelperText>Loading cabins...</FormHelperText>
              )}
            </FormControl>
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button onClick={handleClose} sx={{ mr: 2 }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default AddStudentModal;
