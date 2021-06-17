import React, { useEffect, useState } from "react";
import './App.css'

function App() {

  const [data, setData] = useState([]); // All entries from the site
  const [num, setNum] = useState(0); // Number of entries from the site
  const [counted, setCount] = useState(0); // Number of entries with a birthdate
  const [totalAge, setTotalAge] = useState(0); // Total age of entries
  const [average, setAverage] = useState(0); // Average age of entries

  function update(accumulator, entry) { // Calculates the age of each entry
    var age = 0;
    var counted = 0;
    if ("birthDate" in entry.resource) { // Check if entry has a birthdate
      var byear = Number(entry.resource.birthDate.substring(0, 4));
      var bmonth = Number(entry.resource.birthDate.substring(5, 7)) - 1;
      var bday = Number(entry.resource.birthDate.substring(8, 10));
      var today = new Date();
      age = today.getFullYear() - byear - 1; // Check if most recent birthdate has passed
      if (today.getMonth() > bmonth || (today.getMonth() === bmonth && today.getDate() >= bday)) {
        age++;
      }
      counted++; // Increment the number of entries with a birthdate
    }
    return [accumulator[0] + age, accumulator[1] + counted]; // Returns [totalAge, counted]
  }

  function getName(resource) { // Retrieves a patient's name
    var n = "";
    if ("name" in resource) {
      var name = resource.name[0];
      if ("prefix" in name) { // Always adds prefix
        n += name.prefix[0] + " ";
      }
      if ("text" in name) { // Prioritizes text over given + family name
        n += name.text;
      }
      else {
        if ("given" in name) {
          n += name.given[0];
          if ("family" in name) {
            n += " ";
          }
        }
        if ("family" in name) {
          n += name.family;
        }
      }
      return n;
    }
    return "N/A"
  }

  useEffect(() => {
    fetch('https://hapi.fhir.org/baseR4/Patient?_pretty=true&_count=30')
      .then(response => response.json())
      .then(data => setData(data.entry))
  }, [])

  useEffect(() => {
    setNum(data.length);
    var t = data.reduce(update, [0, 0]);
    setTotalAge(t[0]);
    setCount(t[1])
  }, [data])

  useEffect(() => {
    setAverage((totalAge / counted).toFixed(2));
  }, [counted, totalAge])

  return (
    <div>
      <div>
      <h1 class="center">SeamlessMD Richard Huang Assignment</h1>
      </div>
      <div>
        <h3 class="center">Total Patients: {num}</h3>
        <h3 class="center">Average Age: {average}</h3>
      </div>
      <div>
        <table class="table">
          <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Gender</th>
          </tr>
          </thead>
          <tbody>
            {
            data.map((entry, i) => (
              <tr key = {i}>
                <td>{i + 1}</td>
                <td>{getName(entry.resource)}</td>
                <td>{"birthDate" in entry.resource ? entry.resource.birthDate : "N/A"}</td>
                <td>{"gender" in entry.resource ? entry.resource.gender : "N/A"}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;