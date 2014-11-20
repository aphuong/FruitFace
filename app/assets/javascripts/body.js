window.bodyRound = function(container){
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyRound");

  group.append("ellipse")
    .attr("cx", 151.7)
    .attr("cy", 120.3)
    .attr("rx", 69.7)
    .attr("ry", 67.3)
    .attr("class", "body-round");
};


window.bodyPear = function(container){
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyPear");

  group.append("path")
    .attr("d", "M207.3 115.3c13.3 15.5 9.2 44.6 2.7 56 c-11.6 20.1-40.2 27.9-59.7 28c-27.3 0.1-65.5-11.1-66.2-59.7c-0.2-11.3 4.9-20.4 8.5-24.7c7.6-9 3.7-4 12.3-13.3 c0.4-0.4 4.3-2.7 8-12c3.3-8.3 10-40.7 39.3-40.7c32.7 0 27.2 17.9 39.7 46C194 99.4 202.3 109.4 207.3 115.3z")
    .attr("class", "body-pear");
};


window.bodyStrawberry = function(container) {
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyStrawberry");

  group.append("path")
    .attr("d", "M220.3 112.3c2.7-46.7-48.1-60-70-60c-21.9 0-71.3 10.7-67.3 57.3 c4 47.3 44.8 104.7 66.7 104.7C171.6 214.3 217.7 159 220.3 112.3z")
    .attr("class", "body-strawberry");
};


window.bodyGrape = function(container) {
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyGrape");

  group.append("g").append("path")
    .attr("d", "M105.9 166.7c-7.2 0.9-15.1-4-19-12.4 c-4.5-10-1.6-21.1 6.5-24.9l2.3 0.5c-7.4-1.2-12.2-9.5-10.7-18.5c1.5-9 10.8-16 16.1-14.1l0.6 0.7c-6.5-7.4-4.5-16 1.1-22.6 c6.7-8 15.1-7.6 22.5-2l0 0c-3.7-7.6-0.7-16.7 6.2-20.6c6.9-4 13.2-3.2 18.5 1.9l0 0c-1.4-1.2 3-5.6 7-7.4c4-1.8 10.8-0.6 15.4 3.1 c6.2 5 6.2 14.1 2.2 20.8l0 0c5.8-5.2 16.8-3.9 23.3 3.4c6.6 7.3 7.1 17.5 1.3 22.7l0 0c9.4-1.2 20.8 3.8 22 13.3 c1.2 9.5-5.5 18.2-14.9 19.4l0 0c10.7 4.2 15.2 12.6 11.1 22.9c-4.1 10.3-12.2 16.6-22.8 12.3l0 0c4.8 6.2 3.7 15.1-2.5 19.9 c-6.2 4.8-15.1 3.7-19.9-2.5l0 0c0 13.2-9.7 24.3-22 24.3c-12.3 0-22.2-10.7-22.2-23.9l0-2.8c-4.4 6.5-12.5 10.4-19.1 6 c-6.6-4.4-8.4-13.3-4-19.7")
    .attr("class", "body-grape");
};
