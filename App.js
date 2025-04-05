import React, { useState } from "react";

function App() {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (!itemName || !quantity || !cost) return alert("Fill all fields");
    const newItem = {
      name: itemName,
      quantity: parseInt(quantity),
      cost: parseFloat(cost),
    };
    setList([...list, newItem]);
    setItemName("");
    setQuantity("");
    setCost("");
  };

  const deleteItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const clearAll = () => {
    setList([]); 
  };

  const getTotal = () => {
    return list.reduce((sum, item) => sum + item.quantity * item.cost, 0).toFixed(2);
  };

  return (
    <div style={styles.container}>
      <h1>🛒 Grocery List</h1>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ ...styles.input, width: "80px" }}
        />
        <input
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          style={{ ...styles.input, width: "80px" }}
        />
        <button onClick={addItem} style={styles.addButton}>Add</button>
      </div>

      <div style={styles.card}>
        <h2>Your Items</h2>
        {list.length === 0 ? (
          <p style={{ color: "#777" }}>No items added</p>
        ) : (
          <ul style={styles.list}>
            {list.map((item, index) => (
              <li key={index} style={styles.listItem}>
                <div>
                  <strong>{item.name}</strong><br />
                  Quantity: {item.quantity}, Cost: ₹{item.cost} each<br />
                  Total: ₹{(item.quantity * item.cost).toFixed(2)}
                </div>
                <button onClick={() => deleteItem(index)} style={styles.deleteButton}>Delete</button>
              </li>
            ))}
          </ul>
        )}
        {list.length > 0 && (
          <>
            <h3 style={{ textAlign: "right", marginTop: "10px" }}>
              Grand Total: ₹{getTotal()}
            </h3>
            <button onClick={clearAll} style={styles.clearButton}>Clear All</button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#e9f5f9", // light blueish tone
    minHeight: "100vh",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  input: {
    padding: "10px",
    width: "150px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 15px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  card: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#ffffff", // pure white card
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    textAlign: "left",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#f8f9fa", // very light gray
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  clearButton: {
    display: "block",
    margin: "20px auto 0",
    padding: "10px 15px",
    backgroundColor: "#d9534f",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};


export default App;
