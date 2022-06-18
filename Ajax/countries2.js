"use strict";

const { json } = require("stream/consumers");
var XMLHttpRequest = require("xhr2");

// this is Main country//

// const countriesContainer = document.querySelector(".countries");
const getCounAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    // console.log(data);
    console.log(" ");
    console.log(" ");
    console.log(
      `---------------Information of ${data.name.common} Country----------------------`
    );
    console.log(" ");
    console.log("Country Name:" + data.name.common);
    console.log("Region:" + data.region);
    console.log("Popullation:" + data.population);
    console.log(data.languages);
    console.log(data.currencies);

    // this is neighbour country data
    if (data.borders == undefined) return;
    const [neighbour] = data.borders;
    // console.log(neighbour);

    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      // console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2);
      console.log(" ");
      console.log(" ");
      console.log(
        `---------------Information of Neighbour Country:-${data2.name.common} ----------------`
      );
      console.log(" ");
      console.log(`Country Name: ${data2.name.common}`);
      console.log(`Region: ${data2.region}`);
      console.log(`Popullation: ${data2.population}`);
      console.log(data2.languages);
      console.log(data2.currencies);
      console.log(" ");
      console.log(" ");
    });
  });
};
getCounAndNeighbour("russia");
