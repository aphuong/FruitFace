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

window.eyesBlack = function(container) {
  group = d3.select(container).append("g").attr("data-part", "eyes").attr("data-name", "eyesBlack");

  group.append("ellipse")
    .attr("cx", 176.8)
    .attr("cy", 125)
    .attr("rx", 6.8)
    .attr("ry", 9.7)
    .attr("class", "eyesBlack");
  group.append("ellipse")
    .attr("cx", 122.3)
    .attr("cy", 125.7)
    .attr("rx", 6.8)
    .attr("ry", 9.7)
    .attr("class", "eyesBlack");
};


window.eyesPirate = function(container) {
  group = d3.select(container).append("g").attr("data-part", "eyes").attr("data-name", "eyesPirate");

  group.append("path")
    .attr("d", "M195 113.062c0 13.37-5.429 24.209-12.125 24.2 s-12.125-10.839-12.125-24.209H195z")
    .attr("class", "eyesPirate");
  group.append("path")
    .attr("d", "M210.42 84.1")
    .attr("class", "eyesPirate");
  group.append("path")
    .attr("d", "M195 105.1")
    .attr("class", "eyesPirate");
  group.append("path")
    .attr("d", "M175 118.75c-19.702 6.077-19.752 5.637-38.417 9.2 c-18.083 3.5-52.97 6.781-52.97 6.8")
    .attr("class", "eyesPirate1");
  group.append("line")
    .attr("x1", 195)
    .attr("y1", 113.1)
    .attr("x2", 200)
    .attr("y2", 106.8)
    .attr("class", "eyesPirate");
  group.append("path")
    .attr("d", "M134.807 116.169c0 6.632-5.003 12.009-11.174 12 c-6.171 0-7.201-5.017-11.174-12.009C108.485 109.2 134.8 116.2 134.8 116.169z")
    .attr("class", "eyesPirate2");
  group.append("ellipse")
    .attr("cx", 124.8)
    .attr("cy", 122.1)
    .attr("rx", 3.5)
    .attr("ry", 6.1)
    .attr("class", "eyesPirate3");
};


window.eyesSurprise = function(container) {
  group = d3.select(container).append("g").attr("data-part", "eyes").attr("data-name", "eyesSurprise");

  group.append("circle")
    .attr("cx", 129.9)
    .attr("cy", 129)
    .attr("r", 11.9)
    .attr("class", "eyesSurprise");
  group.append("circle")
    .attr("cx", 129.9)
    .attr("cy", 129)
    .attr("r", 4.2)
    .attr("class", "eyesSurprise1");
  group.append("circle")
    .attr("cx", 173)
    .attr("cy", 127.8)
    .attr("r", 11.9)
    .attr("class", "eyesSurprise");
  group.append("circle")
    .attr("cx", 173)
    .attr("cy", 127.8)
    .attr("r", 4.2)
    .attr("class", "eyesSurprise1")
  group.append("path")
    .attr("d", "M116.731 103.469c-13.089 4.3 20.553-9.57 25 4.2")
    .attr("class", "eyesSurprise2");
  group.append("path")
    .attr("d", "M110.5 113.9")
    .attr("class", "eyesSurprise");
  group.append("path")
    .attr("d", "M187.225 103.469c13.09 4.264-20.553-9.57-25.037 4.2")
    .attr("class", "eyesSurprise2");
};


