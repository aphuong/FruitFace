window.legs = function(container){
  group = d3.select(container).append("g").attr("data-part", "legs").attr("data-name", "legs");

  group.append("path")
    .attr("d", "M172.3 235.8c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.4 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235.8z")
    .attr("class", "legs");
  group.append("path")
    .attr("d", "M135 235c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.5 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235z")
    .attr("class", "legs");
};


window.arms = function(container){
  group = d3.select(container).append("g").attr("data-part", "arms").attr("data-name", "arms");

  group.append("path")
    .attr("d", "M242 140c0 1.6-1.3 2.8-2.8 2.8h-22.3c-1.6 0-2.8-1.3-2.8-2.8l0 0 c0-1.6 1.3-2.8 2.8-2.8h22.3C240.7 137.2 242 138.4 242 140L242 140z")
    .attr("class", "arms");
  group.append("path")
    .attr("d", "M89.6 137.2c0 1.6-1.3 2.8-2.8 2.8H64.4c-1.6 0-2.8-1.3-2.8-2.8 l0 0c0-1.6 1.3-2.8 2.8-2.8h22.3C88.3 134.3 89.6 135.6 89.6 137.2L89.6 137.2z")
    .attr("class", "arms");
};