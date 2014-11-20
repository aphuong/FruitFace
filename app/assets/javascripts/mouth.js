window.mouthSad = function(container){
  group = d3.select(container).append("g").attr("data-part", "mouth").attr("data-name", "mouthSad");

  group.append("path")
    .attr("d", "M141.5 161.6c0-4.8 4-8.6 9-8.6s9 3.9 9 8.6")
    .attr("class", "mouth-sad");
};


window.mouthHappy = function(container){
  group = d3.select(container).append("g").attr("data-part", "mouth").attr("data-name", "mouthHappy");

  group.append("path")
    .attr("d", "M167 155.2l-1.8-0.5c0 6.7-6.6 12.2-14.8 12.2 c-8.2 0-14.8-5.5-14.8-12.2l-2.5 0.5")
    .attr("class", "mouth-happy");
  group.append("line")
    .attr("x1", 137.7)
    .attr("y1", 154)
    .attr("x2", 135.5)
    .attr("y2", 154.8)
    .attr("class", "mouth-happy")
  group.append("line")
    .attr("x1", 163.2)
    .attr("y1", 154)
    .attr("x2", 165.3)
    .attr("y2", 154.8)
    .attr("class", "mouth-happy");
};


window.mouthOpen = function(container){
  group = d3.select(container).append("g").attr("data-part", "mouth").attr("data-name", "mouthOpen");

  group.append("g").append("path")
    .attr("d", "M150 172c8.4 0 15.5-7.5 15.2-14.1c0-0.9-0.4-2.2-0.4-2.2s-0.8-2.3-1.8-0.1c-1.8 3.9-5.8 3.8-13 3.8s-11.3 0.1-13-3.8 c-1-2.2-1.8 0.1-1.8 0.1s-0.3 1.3-0.4 2.2C134.5 164.5 141.6 172 150 172z");
  group.append("path")
    .attr("d", "M159.5 167.9c-3.2-4.3-4-4.9-10.2-4.9s-5.8 0-9.7 4.1c0 0 2.7 2.4 4.3 3c1.6 0.6 4.5 1.3 5.9 1.3 c1.3 0 4.5-0.5 6-1.1C157.2 169.7 159.5 167.9 159.5 167.9z")
    .attr("class", "mouth-open");
};