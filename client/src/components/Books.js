import React, { useState, useEffect } from "react";
import axios from "axios";

function Books() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get("http://192.168.0.211:5000/api/books");
        console.log(data);

        setData(data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    getData();
  }, []);
  return (
    <>
      <center>
        <div className="card">
          <h2>Online Library</h2>
          <button>Add Book</button>

          {data.map((elem, index) => (
            <div key={index} className="box">
              <h2>
                {elem.title} - {elem.id}
              </h2>
              <h5>{elem.author}</h5>
              <img style={{ height: "250px" }} src={elem.coverImageUrl}></img>
              <h6>{elem.pageCount}</h6>
              <h5>{elem.publisher}</h5>
              <p>{elem.synopsis}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      </center>
    </>
  );
}

export default Books;
