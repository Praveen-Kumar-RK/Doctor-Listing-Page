import React from "react";

const specialtiesList = [
  "General Physician", "Dentist", "Dermatologist", "Paediatrician", "Gynaecologist",
  "ENT", "Diabetologist", "Cardiologist", "Physiotherapist", "Endocrinologist",
  "Orthopaedic", "Ophthalmologist", "Gastroenterologist", "Pulmonologist", "Psychiatrist",
  "Urologist", "Dietitian/Nutritionist", "Psychologist", "Sexologist", "Nephrologist",
  "Neurologist", "Oncologist", "Ayurveda", "Homeopath"
];

const FilterOptions = ({
  selectedMode,
  setSelectedMode,
  selectedSpecialties,
  setSelectedSpecialties
}) => {
  const handleSpecialtyClick = (spec) => {
    if (selectedSpecialties.includes(spec)) {
      const updated = selectedSpecialties.filter((s) => s !== spec);
      setSelectedSpecialties(updated);
    } else {
      setSelectedSpecialties([...selectedSpecialties, spec]);
    }
  };

  const styles = {
    card: {
      padding: "16px",
      borderRadius: "8px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      marginBottom: "20px",
    },
    section: { marginBottom: "20px" },
    header: { fontWeight: "bold", marginBottom: "8px" },
    option: { display: "block", margin: "6px 0" },
  };

  return (
    <div style={styles.card}>
      <div style={styles.section}>
        <div data-testid="filter-header-speciality" style={styles.header}>Speciality</div>
        {specialtiesList.map((spec) => (
          <label key={spec} style={styles.option}>
            <input
              type="checkbox"
              data-testid={`filter-specialty-${spec}`}
              checked={selectedSpecialties.includes(spec)}
              onChange={() => handleSpecialtyClick(spec)}
            />
            {spec}
          </label>
        ))}
      </div>

      <div style={styles.section}>
        <div data-testid="filter-header-moc" style={styles.header}>Consultation Mode</div>
        <label style={styles.option}>
          <input
            type="radio"
            name="consultation"
            data-testid="filter-video-consult"
            checked={selectedMode === "Video Consult"}
            onChange={() => setSelectedMode("Video Consult")}
          />
          Video Consult
        </label>
        <label style={styles.option}>
          <input
            type="radio"
            name="consultation"
            data-testid="filter-in-clinic"
            checked={selectedMode === "In Clinic"}
            onChange={() => setSelectedMode("In Clinic")}
          />
          In Clinic
        </label>
        <label style={styles.option}>
          <input
            type="radio"
            name="consultation"
            data-testid="filter-all"
            checked={selectedMode === "All"}
            onChange={() => setSelectedMode("All")}
          />
          All
        </label>
      </div>
    </div>
  );
};

export default FilterOptions;
