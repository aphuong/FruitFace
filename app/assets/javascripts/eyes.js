window.eyesOpen = function(container){
  group = d3.select(container).append("g").attr("data-part", "eyes").attr("data-name", "eyesOpen");

  group.append("circle")
    .attr("cx", 125.7)
    .attr("cy", 129)
    .attr("r", 12)
    .attr("class", "open-eye-lg");
  group.append("circle")
    .attr("cx", 173)
    .attr("cy", 128)
    .attr("r", 12)
    .attr("class", "open-eye-lg");
  group.append("ellipse")
    .attr("cx", 119.7)
    .attr("cy", 130.7)
    .attr("rx", 5.7)
    .attr("ry", 5.3)
    .attr("class", "open-eye-md");
  group.append("ellipse")
    .attr("cx", 166.7)
    .attr("cy", 129.8)
    .attr("rx", 5.7)
    .attr("ry", 5.3)
    .attr("class", "open-eye-md");
  group.append("ellipse")
    .attr("cx", 115.7)
    .attr("cy", 130.4)
    .attr("rx", 1.8)
    .attr("ry", 3.2)
    .attr("class", "open-eye-sm");
  group.append("ellipse")
    .attr("cx", 162.8)
    .attr("cy", 128.9)
    .attr("rx", 1.8)
    .attr("ry", 3.2)
    .attr("class", "open-eye-sm");
};


window.eyesClosed = function(container){
  group = d3.select(container).append("g").attr("data-part", "eyes").attr("data-name", "eyesClosed");

  group.append("path")
    .attr("d", "M113.3 135.3c1-2.3 0.7-3.4 3.2-4.9c2.2-1.3 5.3-2.1 7.8-2.4 c5-0.6 11.7 3.3 11.6 9")
    .attr("class", "closed-eye");
  group.append("path")
    .attr("d", "M161 134.7c1-2.3 0.7-3.4 3.2-4.9c2.2-1.3 5.3-2.1 7.8-2.4 c5-0.6 11.7 3.3 11.6 9")
    .attr("class", "closed-eye");
  group.append("path")
    .attr("d", "M113.2 135.2c-3.3 0.5-5.3-4.5-6-6.8")
    .attr("class", "closed-eye");
  group.append("path")
    .attr("d", "M110.5 127.2c0.2 2.1 2 3.9 3.8 4.5")
    .attr("class", "closed-eye");
  group.append("path")
    .attr("d", "M183.5 135.8c3.3 1 5.9-1.7 6.8-4.8")
    .attr("class", "closed-eye");
  group.append("path")
    .attr("d", "M187.5 129.5c0.3 1.6-2.7 3.8-4.5 3.5")
    .attr("class", "closed-eye");
};