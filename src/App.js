import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [json, setJson] = useState({
    make_and_model: "default",
    car_options: [],
  });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://random-data-api.com/api/vehicle/random_vehicle"
      );
      setJson(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>{json.make_and_model}</p>
      <p>{json.color}</p>

      {json.car_options.map((e, i) => (
        <p key={i}>
          {i} {e}
        </p>
      ))}
    </div>
  );
}

export default App;
