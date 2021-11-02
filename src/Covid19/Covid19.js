import React, { useState, useEffect } from "react";
import "./covid19.css";

let Covid19 = () => {
  let [data, setData] = useState([]);

  let getCovidData = async () => {
    let response = await fetch("https://api.covid19india.org/data.json");
    let jsonData = await response.json();
    let data = jsonData.statewise;
    // console.log(data);
    setData(data);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1>INDIA COVID-19 Dashboard</h1>
      <div className="table">
        <table>
          <thead>
            <tr className="main-tr">
              <th>State</th>
              <th>Confirmed</th>
              <th>Deaths</th>
              <th>Total Confirmed</th>
              <th>Total Recovered</th>
              <th>Delta Confirmed</th>
              <th>Last Updated</th>
            </tr>
          </thead>

          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={index}>
                  <th>{value.state}</th>
                  <td className="active">{value.active}</td>
                  <td>{value.deaths}</td>
                  <td>{value.confirmed}</td>
                  <td>{value.recovered}</td>
                  <td>{value.deltaconfirmed}</td>
                  <td>{value.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Covid19;
