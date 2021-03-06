const data = [
  {
    width: 200,
    height: 100,
    fill: "purple"
  },
  {
    width: 100,
    height: 60,
    fill: "pink"
  },
  {
    width: 50,
    height: 30,
    fill: "red"
  }
];

const svg = d3.select("svg");

// Join the data ot rects
const rects = svg.selectAll("rect").data(data);

// add attribures to rects already in the DOM
rects
  .attr("width", (d, i, n) => d.width)
  .attr("height", d => d.height)
  .attr("fill", d => d.fill);

// Append the enter selection to the DOM
rects
  .enter()
  .append("rect")
  .attr("width", (d, i, n) => d.width)
  .attr("height", d => d.height)
  .attr("fill", d => d.fill);
