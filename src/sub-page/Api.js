import { useState, useEffect } from "react";

export default function Api() {
  const [getData, setUserData] = useState([]);

  const getRequest = async () => {
    try {
      const header = { "Content-Type": "application/json" };
      const page = document.getElementById('Unique').value;
      const req = await fetch("https://reqres.in/api/users?page=" + page, { method: "GET", headers: header });
      const response = await req.json();
      console.log("API Response:", response);
      console.log("Data:", response["data"]);
      setUserData(response["data"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <div class="active-data "
        style={{
          display: "flex",
          
        }}
      >
        {getData.map((element, index) => (
            
          <div 
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              margin: "10px",
              width: index < 4 ? "22%" : "22%", // Adjust width based on row
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              
            }}
          >
            <img
              src={element.avatar}
              alt={`${element.first_name} ${element.last_name}`}
              style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            />
            <h2>
              {element.first_name} {element.last_name}
            </h2>
            <p>{element.email}</p>
          </div>
        ))}
      </div>

      <div class="data-one" style={{display:"flex", justifyContent:"center"}}>
      <select
        id="Unique"
        onChange={getRequest}
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "6px",
          margin: "10px",
          width: "150px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          background: "aliceblue"
        }}
      >
        <option value="1">Page 1</option>
        <option value="2">Page 2</option>
        <option value="3">Page 3</option>
        <option value="4">Page 4</option>
      </select>
      </div>
    </>
  );
}
