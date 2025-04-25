import React from "react";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "16px",
    padding: "16px",
  },
  card: {
    display: "flex",
    flexDirection: "column",  // Stack the content vertically
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  cardImage: {
    width: "80px",  // Adjusting the size of the image
    height: "80px",
    borderRadius: "50%",  // Circular shape
    marginBottom: "16px",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  doctorName: {
    fontSize: "18px",  // Slightly larger for name
    fontWeight: "bold",
    marginBottom: "8px",
  },
  doctorInfo: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "4px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "12px",
  },
};

const Doclist = ({ doctors }) => {
  return (
    <div style={styles.container}>
      {doctors.map((doc, index) => (
        <div key={index} style={styles.card}>
          <img
            src={doc.photo}
            alt={doc.name}
            style={styles.cardImage}
          />
          <div style={styles.cardContent}>
            <div style={styles.doctorName}>{doc.name}</div>
            <div style={styles.specialties}>
              {doc.specialities.map((spec, idx) => (
                <span key={idx} style={styles.specialtyItem}>
                  {spec.name}
                </span>
              ))}
            </div> 
            <div style={styles.doctorInfo}>{doc.experience}</div><br></br>
            <div style={styles.doctorInfo}>{doc.clinic.name}</div>
            <div style={styles.doctorInfo}>{doc.clinic.address.locality}, {doc.clinic.address.city}</div><br></br>
            <div style={styles.doctorInfo}> {doc.fees}</div>
            <div style={styles.doctorInfo}>
              <strong>Consultation Mode:</strong> 
              {doc.video_consult ? " Video Consult" : ""}
              {doc.in_clinic ? " In Clinic" : ""}
            </div>
            <button style={styles.button}>Book Appointment</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doclist;
