window.bodyRound = function(container){
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyRound");

  group.append("ellipse")
    .attr("cx", 151.7)
    .attr("cy", 120.3)
    .attr("rx", 69.7)
    .attr("ry", 67.3)
    .attr("class", "body-round color-change");
};


window.bodyPear = function(container){
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyPear");

  group.append("path")
    .attr("d", "M207.3 115.3c13.3 15.5 9.2 44.6 2.7 56 c-11.6 20.1-40.2 27.9-59.7 28c-27.3 0.1-65.5-11.1-66.2-59.7c-0.2-11.3 4.9-20.4 8.5-24.7c7.6-9 3.7-4 12.3-13.3 c0.4-0.4 4.3-2.7 8-12c3.3-8.3 10-40.7 39.3-40.7c32.7 0 27.2 17.9 39.7 46C194 99.4 202.3 109.4 207.3 115.3z")
    .attr("class", "body-pear color-change");
};


window.bodyStrawberry = function(container) {
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyStrawberry");

  group.append("path")
    .attr("d", "M220.3 112.3c2.7-46.7-48.1-60-70-60c-21.9 0-71.3 10.7-67.3 57.3 c4 47.3 44.8 104.7 66.7 104.7C171.6 214.3 217.7 159 220.3 112.3z")
    .attr("class", "body-strawberry color-change");
};


window.bodyGrape = function(container) {
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyGrape");

  group.append("g").append("path")
    .attr("d", "M105.9 166.7c-7.2 0.9-15.1-4-19-12.4 c-4.5-10-1.6-21.1 6.5-24.9l2.3 0.5c-7.4-1.2-12.2-9.5-10.7-18.5c1.5-9 10.8-16 16.1-14.1l0.6 0.7c-6.5-7.4-4.5-16 1.1-22.6 c6.7-8 15.1-7.6 22.5-2l0 0c-3.7-7.6-0.7-16.7 6.2-20.6c6.9-4 13.2-3.2 18.5 1.9l0 0c-1.4-1.2 3-5.6 7-7.4c4-1.8 10.8-0.6 15.4 3.1 c6.2 5 6.2 14.1 2.2 20.8l0 0c5.8-5.2 16.8-3.9 23.3 3.4c6.6 7.3 7.1 17.5 1.3 22.7l0 0c9.4-1.2 20.8 3.8 22 13.3 c1.2 9.5-5.5 18.2-14.9 19.4l0 0c10.7 4.2 15.2 12.6 11.1 22.9c-4.1 10.3-12.2 16.6-22.8 12.3l0 0c4.8 6.2 3.7 15.1-2.5 19.9 c-6.2 4.8-15.1 3.7-19.9-2.5l0 0c0 13.2-9.7 24.3-22 24.3c-12.3 0-22.2-10.7-22.2-23.9l0-2.8c-4.4 6.5-12.5 10.4-19.1 6 c-6.6-4.4-8.4-13.3-4-19.7")
    .attr("class", "body-grape color-change");
};

window.bodySlice = function(container) {
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodySlice");

  group.append("path")
    .attr("d", "M59.221 241.02l85.06-200.277c0 0 2.4 0.4 4.7 1.6 c2.101 1.2 14.4 8.6 19.3 12.309c4.893 3.7 14.1 14.4 16.4 17.114c2.315 2.8 7.6 12.2 9.5 15.8 c1.905 3.6 4.6 12.4 5.6 15.863c1.009 3.5 2.9 10.7 3.4 13.68c0.589 3 0.7 5.7 0.9 11.6 c0.202 5.586-0.184 17.199-0.507 20.33c-0.321 3.13-1.702 10.587-2.095 12.206c-0.394 1.617-2.993 9.765-5.022 15.2 c-2.028 5.469-5.258 12.295-7.116 15.172c-1.857 2.875-7.762 12.018-7.762 12.018l-6.941 8.854l-7.4 7 c0 0-4.664 5.43-8.817 8.168c-4.152 2.738-6.733 4.535-10.964 6.971c-4.235 2.432-11.282 6.766-14.959 7.8 c-3.676 1.082-17.715 5.465-26.281 5.846s-18.171 1.34-28.352-0.707C67.827 245.7 59.2 241 59.2 241.02z")
    .attr("class", "body-slice1");
  group.append("path")
    .attr("d", "M64.935 229.926c0 0 6.2 3.1 13.8 4.7 s16.496 2.4 22 2.314c4.539-0.607 4.119-0.541 4.119-0.541l11.888-1.836c0 0 9.275-2.068 13.623-4.414 c4.348-2.348 13.314-6.402 16.877-9.109c3.561-2.707 12.915-9.287 16.578-14.012c1.343-1.6 8.348-9.844 10.224-12.248 c1.874-2.404 5.668-9.877 8.471-15.678c2.802-5.799 7.312-19.971 8.716-25.723c0.719-4.966 1.346-8.037 1.25-11.888 c-0.102-3.853-0.387-19.42-1.443-23.382c-1.055-3.962-4.312-16.532-6.225-21.121c-1.916-4.59-10.976-18.413-13.922-22.094 c-2.941-3.683-13.638-12.399-17.841-15.685c-4.205-3.285-13.422-7.544-13.422-7.544")
    .attr("class", "body-slice color-change");
};


window.bodyApple = function(container) {
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyApple");

  group.append("path")
    .attr("d", "M152.049 55.281c-4.229-1.255-18.07-6.775-39.049-9.031 c-17.832-1.917-55.778 21.275-49.281 58.968c1.858 10.8 3.7 14.8 6 23.831c9.4 36.7 42.6 78.5 80.2 48.701h-0.606 h0.542h-0.606c37.596 29.8 70.844-11.979 80.243-48.701c2.303-8.997 4.18-13.049 6.038-23.831 C242.107 67.5 206.5 44 186.3 46.25c-20.97 2.339-38.984 9.031-38.984 9")
    .attr("class", "body-apple color-change");
  group.append("path")
    .attr("d", "M146.345 75.3")
    .attr("class", "body-apple color-change");
};

window.bodyOval = function(container) {
  group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyOval");

  group.append("ellipse")
    .attr("cx", 153.5)
    .attr("cy", 127.8)
    .attr("rx", 57.7)
    .attr("ry", 72.9)
    .attr("class", "body-oval color-change");
};
