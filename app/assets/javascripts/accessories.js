window.freckles = function(container){
  group = d3.select(container).append("g").attr("data-part", "freckles").attr("data-name", "freckles");

  group.append("ellipse")
    .attr("cx", 108.9)
    .attr("cy", 147.8)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles");
  group.append("ellipse")
    .attr("cx", 117.2)
    .attr("cy", 146.5)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles");
  group.append("ellipse")
    .attr("cx", 115)
    .attr("cy", 151.5)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles");
  group.append("ellipse")
    .attr("cx", 177)
    .attr("cy", 147.2)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles");
  group.append("ellipse")
    .attr("cx", 175)
    .attr("cy", 151.8)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles")
  group.append("ellipse")
    .attr("cx", 181.2)
    .attr("cy", 151.2)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles");
  group.append("ellipse")
    .attr("cx", 109.2)
    .attr("cy", 153.5)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles");
  group.append("ellipse")
    .attr("cx", 183.9)
    .attr("cy", 145.5)
    .attr("rx", 1.4)
    .attr("ry", 1.2)
    .attr("class", "freckles");
};


window.mustache = function(container){
  group = d3.select(container).append("g").attr("data-part", "mustache").attr("data-name", "mustache");

  group.append("path")
    .attr("d", "M188.9 143.6c-1.7 3-3.5 6-5.2 8.9c-3.3 5.4-9 5.8-14.8 5.8 c-6 0.1-9.1-2.7-14-5.4c-4.4-2.5-6.5-8.6-0.5-10.6c3.7-1.3 8.8 0.6 11.8 2.8c2.8 2 4.5 4.6 7.9 5.6c2.5 0.7 5.7 1.3 8.1 0.1 c2.5-1.2 4.4-4.7 6.2-6.5")
    .attr("class", "mustache");
  group.append("path")
    .attr("d", "M112.4 143.4c1.7 3 3.5 6 5.2 8.9c3.3 5.4 9 5.8 14.8 5.8 c6 0.1 9.1-2.7 14-5.4c4.4-2.5 6.5-8.6 0.5-10.6c-3.7-1.3-8.8 0.6-11.8 2.8c-2.8 2-4.5 4.6-7.9 5.6c-2.5 0.7-5.7 1.3-8.1 0.1 c-2.5-1.2-4.4-4.7-6.2-6.5")
    .attr("class", "mustache");
};


window.mustache_two = function(container){
  group = d3.select(container).append("g").attr("data-part", "mustache").attr("data-name", "mustache_two");

  group.append("path")
    .attr("d", "M157.9 179.5c0 3-3 9.4-6.9 9.4h-0.9c-3.9 0-6.5-6.4-6.5-9.4v-2.7 c0-3 3.2-5.4 7.1-5.4l0 0c3.9 0 7.1 2.4 7.1 5.4V179.5z")
    .attr("class", "mustache");
  group.append("path")
    .attr("d", "M149.7 145.2c-2.2 1.3-9.1 0-12.3 0.4c-4.6 0.5-6.8-0.9-8.8 3.6 c-2.2 4.9-1.7 10.2-2.3 15.3c5.7-5.1 8.8-10.4 15.7-11.1c2-0.2 7.5 0.9 8.9-0.5c1.5-1.5 0.3-5.6-0.9-6.9")
    .attr("class", "mustache");
  group.append("path")
    .attr("d", "M153.5 145.2c2.2 1.3 9.2 0 12.3 0.3c4.6 0.5 6.8-0.9 8.8 3.6 c2.2 4.9 1.7 10.2 2.3 15.3c-5.7-5.1-8.8-10.4-15.7-11.1c-2-0.2-7.5 0.9-8.9-0.5c-1.5-1.5-0.3-5.6 0.9-6.9")
    .attr("class", "mustache");
};


window.blush = function(container){
  group = d3.select(container).append("g").attr("data-part", "freckles").attr("data-name", "blush");

  group.append("ellipse")
    .attr("cx", 115.8)
    .attr("cy", 150)
    .attr("rx", 10.4)
    .attr("ry", 10)
    .attr("class", "blush");
  group.append("ellipse")
    .attr("cx", 186.2)
    .attr("cy", 150)
    .attr("rx", 10.4)
    .attr("ry", 10)
    .attr("class", "blush");  
};

