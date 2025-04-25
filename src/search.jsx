import React, { useState } from "react";

export default function Search({ searchTerm, setSearchTerm, doctorList }) {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.trim()) {
      const match = doctorList
        .filter((doc) => doc.name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 3);
      setSuggestions(match);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (name) => {
    setSearchTerm(name);
    setSuggestions([]);
  };

  const styles = {
    container: {
      width: "100%",
      padding: "16px",
      backgroundColor: "#f9f9f9",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    input: {
      width: "100%",
      padding: "10px 12px",
      fontSize: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    suggestionsBox: {
      listStyle: "none",
      padding: "0",
      margin: "4px 0 0",
      position: "absolute",
      width: "100%",
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderTop: "none",
      zIndex: 10,
    },
    suggestionItem: {
      padding: "8px 12px",
      cursor: "pointer",
      borderBottom: "1px solid #eee",
    },
  };

  return (
    <div style={styles.container}>
      <input
        data-testid="autocomplete-input"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search doctor by name..."
        onKeyDown={(e) => {
          if (e.key === "Enter" && suggestions.length > 0) {
            handleSelect(suggestions[0].name);
          }
        }}
        style={styles.input}
      />
      {suggestions.length > 0 && (
        <ul style={styles.suggestionsBox}>
          {suggestions.map((doc, index) => (
            <li
              key={index}
              data-testid="suggestion-item"
              onClick={() => handleSelect(doc.name)}
              style={styles.suggestionItem}
            >
              {doc.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
