//= require jquery
//= require jquery_ujs
//= require d3
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  // container to append svg
  var container

  window.bodyRound = function(container){
    group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyRound")

    group.append("ellipse")
      .attr("cx", 151.7)
      .attr("cy", 120.3)
      .attr("rx", 69.7)
      .attr("ry", 67.3)
      .attr("class", "body-round");
  };


  window.bodyPear = function(container){
    group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyPear")

    group.append("path")
      .attr("d", "M207.3 115.3c13.3 15.5 9.2 44.6 2.7 56 c-11.6 20.1-40.2 27.9-59.7 28c-27.3 0.1-65.5-11.1-66.2-59.7c-0.2-11.3 4.9-20.4 8.5-24.7c7.6-9 3.7-4 12.3-13.3 c0.4-0.4 4.3-2.7 8-12c3.3-8.3 10-40.7 39.3-40.7c32.7 0 27.2 17.9 39.7 46C194 99.4 202.3 109.4 207.3 115.3z")
      .attr("class", "body-pear");
  };


  window.bodyStrawberry = function(container) {
    group = d3.select(container).append("g").attr("data-part", "body").attr("data-name", "bodyStrawberry")

    group.append("g").append("path")
      .attr("d", "M220.3 112.3c2.7-46.7-48.1-60-70-60c-21.9 0-71.3 10.7-67.3 57.3 c4 47.3 44.8 104.7 66.7 104.7C171.6 214.3 217.7 159 220.3 112.3z")
      .attr("class", "body-strawberry");
  };


  window.eyesOpen = function(container){
    group = d3.select(container).append("g").attr("data-part", "eyes").attr("data-name", "eyesOpen")

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
    group = d3.select(container).append("g").attr("data-part", "eyes").attr("data-name", "eyesClosed")

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


  window.roundGlasses = function(container) {
    group = d3.select(container).append("g").attr("data-part", "glasses").attr("data-name", "roundGlasses")

    group.append("g").append("g").append("g").append("path")
      .attr("d", "M145.2 130.5c-0.4 12.8-11.5 20.9-23.8 20.6c-11.1-0.3-20.8-8.8-21.9-19.8c-1.3-13.3 11.9-22 23.8-21.7 c11.6 0.3 21.6 9.5 22 21.2c0 1 2.9 0.4 2.9-0.8c-1-29.6-50.6-28.6-51.6 0.6c-0.5 14.2 14.1 22.7 26.7 22.3 c12.5-0.3 24.4-9.7 24.9-22.7C148.2 128.9 145.2 129.5 145.2 130.5z");
    group.append("g").append("g").append("path")
      .attr("d", "M201.5 129.1c-0.9 27.2-44.8 26.5-45.7-0.3c-0.4-12.8 12.3-20.8 23.8-20.5C191 108.6 201.2 117.6 201.5 129.1 c0 1.4 3 0.9 2.9-0.3c-1-29.9-50.6-29.2-51.6 0.3c-0.5 13.4 13.3 22.8 25.6 22.5c13-0.3 25.5-9 25.9-22.8 C204.5 127.5 201.6 128 201.5 129.1z");
    group.append("g").append("g").append("path")
      .attr("d", "M146.1 131.1c2.7 0.1 5.3 0.2 8 0.3c1.1 0 3.1-1.5 1.1-1.6c-2.7-0.1-5.3-0.2-8-0.3C146.2 129.5 144.1 131 146.1 131.1 L146.1 131.1z");
    group.append("g").append("g").append("path")
      .attr("d", "M204.1 123.8c1.3-2.7 2.7-5.3 4-8c-0.9 0.2-1.9 0.5-2.8 0.7c2 1.3 4 2.7 6 4c0.8 0.5 3.4-0.6 2.7-1.1c-2-1.3-4-2.7-6-4 c-0.8-0.5-2.4-0.1-2.8 0.7c-1.3 2.7-2.7 5.3-4 8C200.9 124.9 203.7 124.6 204.1 123.8L204.1 123.8z");
    group.append("g").append("g").append("path")
      .attr("d", "M100.4 122.6c-1.3-2.7-2.7-5.3-4-8c-0.4-0.8-1.8-0.5-2.4-0.1c-2.1 1.4-4.2 2.9-6.3 4.3c-1.6 1.1 0.9 1.6 1.8 1 c2.1-1.4 4.2-2.9 6.3-4.3c-0.8 0-1.6-0.1-2.4-0.1c1.3 2.7 2.7 5.3 4 8C98.1 124.4 100.9 123.5 100.4 122.6L100.4 122.6z");
  };


  window.freckles = function(container){
    group = d3.select(container).append("g").attr("data-part", "freckles").attr("data-name", "freckles")

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


  window.hairLeaf = function(container){
    group = d3.select(container).append("g").attr("data-part", "hair").attr("data-name", "hairLeaf")

    group.append("path")
      .attr("d", "M153.2 32.1c0-1.2-1-2.1-2.1-2.1l0 0c-1.3 0-1.4 0.6-3.3 1.8 l3.2 20.5c-1.9 1.4-1 2.3 0.2 2.3l0 0c1.2 0 2.1-1 2.1-2.1V32.1z")
      .attr("class", "hair-leaf");
    group.append("path")
      .attr("d", "M188.6 15.8c0 0-13.2-4.3-24.3 3.7s-11.6 25.8-11.6 25.8 s1.3-2.4 2.6-3.2s7.1-1 7.1-1s9 0.1 13.2-3.7s5.9-10.8 6.5-15.4S188.6 15.8 188.6 15.8z")
      .attr("class", "hair-leaf");
  };


  window.hairDoubleLeaf = function(container){
    group = d3.select(container).append("g").attr("data-part", "hair").attr("data-name", "hairDoubleLeaf")

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
    group = d3.select(container).append("g").attr("data-part", "hair").attr("data-name", "hairShaggy")

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


  window.legs = function(container){
    group = d3.select(container).append("g").attr("data-part", "legs").attr("data-name", "legs")

    group.append("path")
      .attr("d", "M172.3 235.8c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.4 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235.8z")
      .attr("class", "legs");
    group.append("path")
      .attr("d", "M135 235c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.5 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235z")
      .attr("class", "legs");
  };


  window.arms = function(container){
    group = d3.select(container).append("g").attr("data-part", "arms").attr("data-name", "arms")

    group.append("path")
      .attr("d", "M242 140c0 1.6-1.3 2.8-2.8 2.8h-22.3c-1.6 0-2.8-1.3-2.8-2.8l0 0 c0-1.6 1.3-2.8 2.8-2.8h22.3C240.7 137.2 242 138.4 242 140L242 140z")
      .attr("class", "arms");
    group.append("path")
      .attr("d", "M89.6 137.2c0 1.6-1.3 2.8-2.8 2.8H64.4c-1.6 0-2.8-1.3-2.8-2.8 l0 0c0-1.6 1.3-2.8 2.8-2.8h22.3C88.3 134.3 89.6 135.6 89.6 137.2L89.6 137.2z")
      .attr("class", "arms");
  };


  window.mouthSad = function(container){
    group = d3.select(container).append("g").attr("data-part", "mouth").attr("data-name", "mouthSad")

    group.append("path")
      .attr("d", "M141.5 161.6c0-4.8 4-8.6 9-8.6s9 3.9 9 8.6")
      .attr("class", "mouth-sad");
  };


  window.mouthHappy = function(container){
    group = d3.select(container).append("g").attr("data-part", "mouth").attr("data-name", "mouthHappy")

    group.append("g").append("path")
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
    group = d3.select(container).append("g").attr("data-part", "mouth").attr("data-name", "mouthOpen")

    group.append("g").append("path")
      .attr("d", "M150 172c8.4 0 15.5-7.5 15.2-14.1c0-0.9-0.4-2.2-0.4-2.2s-0.8-2.3-1.8-0.1c-1.8 3.9-5.8 3.8-13 3.8s-11.3 0.1-13-3.8 c-1-2.2-1.8 0.1-1.8 0.1s-0.3 1.3-0.4 2.2C134.5 164.5 141.6 172 150 172z");
    group.append("path")
      .attr("d", "M159.5 167.9c-3.2-4.3-4-4.9-10.2-4.9s-5.8 0-9.7 4.1c0 0 2.7 2.4 4.3 3c1.6 0.6 4.5 1.3 5.9 1.3 c1.3 0 4.5-0.5 6-1.1C157.2 169.7 159.5 167.9 159.5 167.9z")
      .attr("class", "mouth-open");
  };


  // To make sample FruitFace
  orange_container = ".sample-orange"
  bodyRound(orange_container);
  hairLeaf(orange_container);
  roundGlasses(orange_container);
  eyesClosed(orange_container);
  arms(orange_container);
  legs(orange_container);
  freckles(orange_container);
  mouthHappy(orange_container);

  pear_container = ".sample-pear"
  legs(pear_container);
  bodyPear(pear_container);
  hairDoubleLeaf(pear_container);
  eyesOpen(pear_container);
  arms(pear_container);
  freckles(pear_container);
  mouthOpen(pear_container);

  strawberry_container = ".sample-strawberry"
  legs(strawberry_container);
  bodyStrawberry(strawberry_container);
  hairShaggy(strawberry_container);
  eyesOpen(strawberry_container);
  arms(strawberry_container);
  freckles(strawberry_container);
  mouthSad(strawberry_container);


  // Function to append parts to svg
  // Make sure that the name of the function and the id of the element match
  $(".parts").each(function() {
    window[this.id]("#" + this.id);
  });


  // Add click event to each part that adds it to the preview
  $(".parts").click(function(){

      part_name = $(this).children('g').data('part')
      // Remove all similar parts from preview
      similar_parts = $(".preview [data-part=" + part_name + "]")
      similar_parts.remove()

      // Add the part to the preview
      window[this.id](".preview");
  });


  // Function to save fruit
  $("#saveFruit").click(function(){

    // get name of every part in preview box
    saved_parts = $(".preview g").data("name"); 
    console.log(saved_parts);

   
     

    // send to rails using jquery ajax request
  });

});



