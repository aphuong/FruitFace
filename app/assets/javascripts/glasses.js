window.roundGlasses = function(container) {
  group = d3.select(container).append("g").attr("data-part", "glasses").attr("data-name", "roundGlasses");

  group.append("path")
    .attr("d", "M145.2 130.5c-0.4 12.8-11.5 20.9-23.8 20.6c-11.1-0.3-20.8-8.8-21.9-19.8c-1.3-13.3 11.9-22 23.8-21.7 c11.6 0.3 21.6 9.5 22 21.2c0 1 2.9 0.4 2.9-0.8c-1-29.6-50.6-28.6-51.6 0.6c-0.5 14.2 14.1 22.7 26.7 22.3 c12.5-0.3 24.4-9.7 24.9-22.7C148.2 128.9 145.2 129.5 145.2 130.5z");
  group.append("path")
    .attr("d", "M201.5 129.1c-0.9 27.2-44.8 26.5-45.7-0.3c-0.4-12.8 12.3-20.8 23.8-20.5C191 108.6 201.2 117.6 201.5 129.1 c0 1.4 3 0.9 2.9-0.3c-1-29.9-50.6-29.2-51.6 0.3c-0.5 13.4 13.3 22.8 25.6 22.5c13-0.3 25.5-9 25.9-22.8 C204.5 127.5 201.6 128 201.5 129.1z");
  group.append("path")
    .attr("d", "M146.1 131.1c2.7 0.1 5.3 0.2 8 0.3c1.1 0 3.1-1.5 1.1-1.6c-2.7-0.1-5.3-0.2-8-0.3C146.2 129.5 144.1 131 146.1 131.1 L146.1 131.1z");
  group.append("path")
    .attr("d", "M204.1 123.8c1.3-2.7 2.7-5.3 4-8c-0.9 0.2-1.9 0.5-2.8 0.7c2 1.3 4 2.7 6 4c0.8 0.5 3.4-0.6 2.7-1.1c-2-1.3-4-2.7-6-4 c-0.8-0.5-2.4-0.1-2.8 0.7c-1.3 2.7-2.7 5.3-4 8C200.9 124.9 203.7 124.6 204.1 123.8L204.1 123.8z");
  group.append("path")
    .attr("d", "M100.4 122.6c-1.3-2.7-2.7-5.3-4-8c-0.4-0.8-1.8-0.5-2.4-0.1c-2.1 1.4-4.2 2.9-6.3 4.3c-1.6 1.1 0.9 1.6 1.8 1 c2.1-1.4 4.2-2.9 6.3-4.3c-0.8 0-1.6-0.1-2.4-0.1c1.3 2.7 2.7 5.3 4 8C98.1 124.4 100.9 123.5 100.4 122.6L100.4 122.6z");
};


window.squareGlasses = function(container) {
  group = d3.select(container).append("g").attr("data-part", "glasses").attr("data-name", "squareGlasses");

  group.append("path")
    .attr("d", "M149.3 128.5c-0.7 13.6-17.8 10.5-27.1 10.5c-3.8 0-7.7 0-11.5 0c-8.9 0-10.7-7.8-10.7-14.9c0-13.9 18.1-10.8 27.1-10.8 c3.8 0 7.7 0 11.5 0C147.7 113.3 149.3 121.3 149.3 128.5c0 1.9 3 1.9 3 0c0-6.7-0.7-14-8-17c-5-2-11-1.2-16.3-1.2 c-11.5 0-30.2-3.1-31.1 13.5c-0.4 6.8 1 14.3 8.1 17c4.9 1.9 10.9 1.1 16.1 1.1c11.5 0 30.2 3.1 31.1-13.5 C152.4 126.6 149.4 126.6 149.3 128.5z");
  group.append("path")
    .attr("d", "M203.3 127.5c-0.8 14-19.5 10.5-29 10.5c-3.3 0-6.5 0-9.8 0c-9.5 0-11.5-9.9-10.3-17.4c1.8-11.1 18-8.3 26.2-8.3 c4.1 0 8.2 0 12.3 0C201.8 112.3 203.3 120.4 203.3 127.5c0 1.9 3 1.9 3 0c0-6.8-0.8-14.2-8.1-17c-5.3-2.1-12.1-1.1-17.7-1.1 c-10.2 0-28.6-2.7-29.4 12.2c-0.4 7.4 0.4 14.4 7.7 18.2c4.3 2.2 10.8 1.3 15.5 1.3c11.7 0 31.1 3.4 32-13.5 C206.4 125.6 203.4 125.6 203.3 127.5z");
  group.append("path")
    .attr("d", "M216.8 109.3")
    .attr("class", "glasses");
  group.append("path")
    .attr("d", "M203.9 117.2")
    .attr("class", "glasses");
  group.append("path")
    .attr("d", "M205.1 119.3c3.4-2.1 6.7-4.2 10.1-6.3c-1.3-0.7-2.5-1.4-3.8-2.2c0.1 3 0.3 6 0.4 9c0.2 3.2 5.2 3.2 5 0 c-0.1-3-0.3-6-0.4-9c-0.1-1.8-2.1-3.2-3.8-2.2c-3.4 2.1-6.7 4.2-10.1 6.3C199.9 116.7 202.4 121 205.1 119.3L205.1 119.3z");
  group.append("path")
    .attr("d", "M99.8 115c-3.4-2.1-6.7-4.2-10.1-6.3c-1.7-1.1-3.7 0.3-3.8 2.2c-0.1 3-0.3 6-0.4 9c-0.2 3.2 4.8 3.2 5 0 c0.1-3 0.3-6 0.4-9c-1.3 0.7-2.5 1.4-3.8 2.2c3.4 2.1 6.7 4.2 10.1 6.3C100 121 102.5 116.7 99.8 115L99.8 115z");
};