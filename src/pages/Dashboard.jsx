import React, { useEffect, useState } from "react";
import supabase from "../supabase";
import CabinLayout from "../CabinLayout";

function Dashboard() {
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
        console.log(data);
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
    <div>
      <div class="container">
        <div class="panel">
          <ul>
            <li>Dashboard</li>
            <li>Students</li>
            <li>Inquiries</li>
            <li>Hall Management</li>
          </ul>
          <h3>Halls </h3>
          {halls.map((el) => (
            <div
              style={{
                width: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: selectedHall?.id === el.id ? "green" : "red",
                margin: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                handleSelectHall(el);
              }}
            >
              <p>{el.name}</p>
            </div>
          ))}
        </div>
        <div class="content">
          {selectedHall && (
            <div>
              <h2>{selectedHall.name}</h2>
              <CabinLayout hall_id={selectedHall.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
