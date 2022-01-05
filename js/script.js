var btn = document.querySelector(".btn-slide");

btn.addEventListener("click", function () {
  document.querySelector(".side-nav").classList.toggle("slide");
  document.querySelector(".open").classList.toggle("d-none");
  document.querySelector(".close").classList.toggle("d-none");
});

//chart 1
var chart1 = document.getElementById("myChart1").getContext("2d");

var myChart = new Chart(chart1, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [12, 19, 3, 6, 2, 8],
        backgroundColor: [
          "rgba(255,99,132,0.9)",
          "rgba(54,162,235,0.9)",
          "rgba(255,206,86,0.9)",
          "rgba(75,192,192,0.9)",
          "rgba(153,102,255,0.9)",
          "rgba(255,1559,64,0.9)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "rgba(255,1559,64,1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});

//chart 2
var chart2 = document.getElementById("myChart2").getContext("2d");

var myChart2 = new Chart(chart2, {
  type: "polarArea",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [15, 16, 3, 3, 5, 8],
        backgroundColor: [
          "rgba(255,99,132,0.3)",
          "rgba(54,162,235,0.3)",
          "rgba(255,206,86,0.3)",
          "rgba(75,192,192,0.3)",
          "rgba(153,102,255,0.3)",
          "rgba(255,1559,64,0.3)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "rgba(255,1559,64,1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});

//chart 3
var chart3 = document.getElementById("myChart3").getContext("2d");

var myChart3 = new Chart(chart3, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Orange"],
    datasets: [
      {
        label: "# of votes",
        data: [15, 16, 3, 3, 5, 8],
        backgroundColor: [
          "rgba(255,99,132,0.3)",
          "rgba(54,162,235,0.3)",
          "rgba(255,206,86,0.3)",
          "rgba(75,192,192,0.3)",
          "rgba(153,102,255,0.3)",
          "rgba(255,1559,64,0.3)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(54,162,235,1)",
          "rgba(255,206,86,1)",
          "rgba(75,192,192,1)",
          "rgba(153,102,255,1)",
          "rgba(255,1559,64,1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});
