window.hairLeaf = function(container){
  group = d3.select(container).append("g").attr("data-part", "hair").attr("data-name", "hairLeaf");

  group.append("path")
    .attr("d", "M153.2 32.1c0-1.2-1-2.1-2.1-2.1l0 0c-1.3 0-1.4 0.6-3.3 1.8 l3.2 20.5c-1.9 1.4-1 2.3 0.2 2.3l0 0c1.2 0 2.1-1 2.1-2.1V32.1z")
    .attr("class", "hair-leaf");
  group.append("path")
    .attr("d", "M188.6 15.8c0 0-13.2-4.3-24.3 3.7s-11.6 25.8-11.6 25.8 s1.3-2.4 2.6-3.2s7.1-1 7.1-1s9 0.1 13.2-3.7s5.9-10.8 6.5-15.4S188.6 15.8 188.6 15.8z")
    .attr("class", "hair-leaf");
};


window.hairDoubleLeaf = function(container){
  group = d3.select(container).append("g").attr("data-part", "hair").attr("data-name", "hairDoubleLeaf");

  group.append("g").append("path")
    .attr("d", "M153.2 32.1c0-1.2-1-2.1-2.1-2.1l0 0c-1.3 0-1.4 0.6-3.3 1.8 l3.2 20.5c-1.9 1.4-1 2.3 0.2 2.3l0 0c1.2 0 2.1-1 2.1-2.1V32.1z")
    .attr("class", "hair-double-leaf");
  group.append("path")
    .attr("d", "M188.6 15.8c0 0-13.2-4.3-24.3 3.7s-11.6 25.8-11.6 25.8 s1.3-2.4 2.6-3.2s7.1-1 7.1-1s9 0.1 13.2-3.7s5.9-10.8 6.5-15.4S188.6 15.8 188.6 15.8z")
    .attr("class", "hair-double-leaf");
  group.append("g").append("path")
    .attr("d", "M55.3-14")
    .attr("class", "hair-double-leaf");
  group.append("path")
    .attr("d", "M148 37.7c-0.9-10.4-12.7-16.4-21.2-10.3 c-4.6 3.3-7 8.4-10.4 12.7c-1.6 2.1-5.6 6.1-6 8.6c3.3 0.2 7 0.8 10.3 0.4c4.3-0.5 8-2.6 11.7-4.5c6-3.1 8.8-7.2 15.9-7.5 c0.1-0.5 0.1-1.1 0.1-1.6")
    .attr("class", "hair-double-leaf");
};


window.hairShaggy = function(container){
  group = d3.select(container).append("g").attr("data-part", "hair").attr("data-name", "hairShaggy");

  group.append("g").append("g").append("path")
    .attr("d", "M151.8 48.5l1.9-0.2c7-0.8 16.7 2.4 20.6 8.6 c-4.8-2.6-10.4-1.2-15.5-1.3c5.2 2.3 14 3.1 15.2 10c-6.2-4-13-4.8-20.2-5c5.1 4.7 9.1 10.4 13.2 16c-7.5-1.5-13.7-9.9-19.7-14.2 C150 69 146 76 146.7 82.7c-4.3-7-6.7-14.9-10-22.3c-1.2 6.9-7.4 11.7-9 18.5c0-7.4-0.8-17 4.7-22.9")
    .attr("class", "hair-shaggy");
  group.append("g").append("path")
    .attr("d", "M151.4 49.1c-0.6-4.7-0.7-9.8-2.8-14 c-2.2-4.4-7.3-2.5-11.3-1.7c-3.9 0.8-8.8 2.1-9.2 6.6c-0.4 3.9 2.7 8.1 4.6 11.4l-1 1.1c-5.6 1.6-10.2 8.3-12.3 13.4 c3.7-2.4 7.2-5.2 11-7.5l0.1 0.3")
    .attr("class", "hair-shaggy");
  group.append("path")
    .attr("d", "M128.6 38c5.3 1.9 15.3 0 18-5.2")
    .attr("class", "hair-shaggy-outline");
  group.append("path")
    .attr("d", "M129.6 36.6c5.6 0 10.3 1 13.2-4.2")
    .attr("class", "hair-shaggy-outline");
};