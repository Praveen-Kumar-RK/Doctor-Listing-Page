import React, { useState, useEffect } from "react";
import Search from "./search";
import FilterOptions from "./filter";
import Doclist from "./doclist";

export default function App() {
  const [doctorsData, setDoctorsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMode, setSelectedMode] = useState("All");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await fetch("https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json");
        const data = await response.json();
        setDoctorsData(data);
      } catch (error) {
        console.error("Error fetching doctors data:", error);
      }
    };
    fetchDoctorsData();
  }, []);

  const filteredDoctors = doctorsData.filter((doc) => {
    const isInSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const isInMode =
      selectedMode === "All" ||
      (selectedMode === "Video Consult" && doc.mode === "Video Consult") ||
      (selectedMode === "In Clinic" && doc.mode === "In Clinic");
    const isInSpecialties =
      selectedSpecialties.length === 0 ||
      selectedSpecialties.includes(doc.specialization);

    return isInSearch && isInMode && isInSpecialties;
  });

  return (
    <div style={{ display: "flex", flexDirection: "row", padding: "20px" }}>
      <div style={{ width: "250px" }}>
        <FilterOptions
          selectedMode={selectedMode}
          setSelectedMode={setSelectedMode}
          selectedSpecialties={selectedSpecialties}
          setSelectedSpecialties={setSelectedSpecialties}
        />
      </div>

      <div style={{ marginLeft: "20px", width: "100%" }}>
        <div style={{ marginBottom: "20px" }}>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            doctorList={doctorsData}
          />
        </div>
        <Doclist doctors={filteredDoctors} />
      </div>
    </div>
  );
}
