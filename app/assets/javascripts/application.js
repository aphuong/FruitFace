//= require jquery
//= require jquery_ujs
//= require d3
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  window.bodyRound = function(){
    d3.select("svg").append("ellipse")
                    .attr("cx", 151.7)
                    .attr("cy", 120.3)
                    .attr("rx", 69.7)
                    .attr("ry", 67.3)
                    .attr("class", "body-round");
  };
  bodyRound();

  window.eyesOpen = function(){
    d3.select("svg").append("circle")
                    .attr("cx", 125.7)
                    .attr("cy", 129)
                    .attr("r", 12)
                    .attr("class", "open-eye-lg");
    d3.select("svg").append("circle")
                    .attr("cx", 173)
                    .attr("cy", 128)
                    .attr("r", 12)
                    .attr("class", "open-eye-lg");
    d3.select("svg").append("ellipse")
                    .attr("cx", 119.7)
                    .attr("cy", 130.7)
                    .attr("rx", 5.7)
                    .attr("ry", 5.3)
                    .attr("class", "open-eye-md");
    d3.select("svg").append("ellipse")
                    .attr("cx", 166.7)
                    .attr("cy", 129.8)
                    .attr("rx", 5.7)
                    .attr("ry", 5.3)
                    .attr("class", "open-eye-md");
    d3.select("svg").append("ellipse")
                    .attr("cx", 115.7)
                    .attr("cy", 130.4)
                    .attr("rx", 1.8)
                    .attr("ry", 3.2)
                    .attr("class", "open-eye-sm");
    d3.select("svg").append("ellipse")
                    .attr("cx", 162.8)
                    .attr("cy", 128.9)
                    .attr("rx", 1.8)
                    .attr("ry", 3.2)
                    .attr("class", "open-eye-sm");
  };
  // eyesOpen();


  window.eyesClosed = function(){
    d3.select("svg").append("path")
                    .attr("d", "M113.3 135.3c1-2.3 0.7-3.4 3.2-4.9c2.2-1.3 5.3-2.1 7.8-2.4 c5-0.6 11.7 3.3 11.6 9")
                    .attr("class", "closed-eye");
    d3.select("svg").append("path")
                    .attr("d", "M161 134.7c1-2.3 0.7-3.4 3.2-4.9c2.2-1.3 5.3-2.1 7.8-2.4 c5-0.6 11.7 3.3 11.6 9")
                    .attr("class", "closed-eye");
    d3.select("svg").append("path")
                    .attr("d", "M113.2 135.2c-3.3 0.5-5.3-4.5-6-6.8")
                    .attr("class", "closed-eye");
    d3.select("svg").append("path")
                    .attr("d", "M110.5 127.2c0.2 2.1 2 3.9 3.8 4.5")
                    .attr("class", "closed-eye");
    d3.select("svg").append("path")
                    .attr("d", "M183.5 135.8c3.3 1 5.9-1.7 6.8-4.8")
                    .attr("class", "closed-eye");
    d3.select("svg").append("path")
                    .attr("d", "M187.5 129.5c0.3 1.6-2.7 3.8-4.5 3.5")
                    .attr("class", "closed-eye");
  };
  eyesClosed();


  window.freckles = function(){
    d3.select("svg").append("ellipse")
                    .attr("cx", 108.9)
                    .attr("cy", 147.8)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles");
    d3.select("svg").append("ellipse")
                    .attr("cx", 117.2)
                    .attr("cy", 146.5)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles");
    d3.select("svg").append("ellipse")
                    .attr("cx", 115)
                    .attr("cy", 151.5)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles");
    d3.select("svg").append("ellipse")
                    .attr("cx", 177)
                    .attr("cy", 147.2)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles");
    d3.select("svg").append("ellipse")
                    .attr("cx", 175)
                    .attr("cy", 151.8)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles")
    d3.select("svg").append("ellipse")
                    .attr("cx", 181.2)
                    .attr("cy", 151.2)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles");
    d3.select("svg").append("ellipse")
                    .attr("cx", 109.2)
                    .attr("cy", 153.5)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles");
    d3.select("svg").append("ellipse")
                    .attr("cx", 183.9)
                    .attr("cy", 145.5)
                    .attr("rx", 1.4)
                    .attr("ry", 1.2)
                    .attr("class", "freckles");
  };
  freckles();


  window.hairLeaf = function(){
    d3.select("svg").append("path")
                    .attr("d", "M153.2 32.1c0-1.2-1-2.1-2.1-2.1l0 0c-1.3 0-1.4 0.6-3.3 1.8 l3.2 20.5c-1.9 1.4-1 2.3 0.2 2.3l0 0c1.2 0 2.1-1 2.1-2.1V32.1z")
                    .attr("class", "hair-leaf")
    d3.select("svg").append("path")
                    .attr("d", "M188.6 15.8c0 0-13.2-4.3-24.3 3.7s-11.6 25.8-11.6 25.8 s1.3-2.4 2.6-3.2s7.1-1 7.1-1s9 0.1 13.2-3.7s5.9-10.8 6.5-15.4S188.6 15.8 188.6 15.8z")
                    .attr("class", "hair-leaf")  
  };
  hairLeaf();


  window.legs = function(){
    d3.select("svg").append("path")
                    .attr("d", "M172.3 235.8c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.4 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235.8z")
                    .attr("class", "legs");
    d3.select("svg").append("path")
                    .attr("d", "M135 235c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.5 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235z")
                    .attr("class", "legs");
  };
  legs();


  window.arms = function(){
    d3.select("svg").append("path")
                    .attr("d", "M242 140c0 1.6-1.3 2.8-2.8 2.8h-22.3c-1.6 0-2.8-1.3-2.8-2.8l0 0 c0-1.6 1.3-2.8 2.8-2.8h22.3C240.7 137.2 242 138.4 242 140L242 140z")
                    .attr("class", "arms");
    d3.select("svg").append("path")
                    .attr("d", "M89.6 137.2c0 1.6-1.3 2.8-2.8 2.8H64.4c-1.6 0-2.8-1.3-2.8-2.8 l0 0c0-1.6 1.3-2.8 2.8-2.8h22.3C88.3 134.3 89.6 135.6 89.6 137.2L89.6 137.2z")
                    .attr("class", "arms");
  };
  arms();

  window.mouthSad = function(){
    d3.select("svg").append("path")
                    .attr("d", "M141.5 161.6c0-4.8 4-8.6 9-8.6s9 3.9 9 8.6")
                    .attr("class", "mouth-sad");
  }
  // mouthSad();

  window.mouthHappy = function(){
    d3.select("svg").append("g").append("path")
                    .attr("d", "M167 155.2l-1.8-0.5c0 6.7-6.6 12.2-14.8 12.2 c-8.2 0-14.8-5.5-14.8-12.2l-2.5 0.5")
                    .attr("class", "mouth-happy");
    d3.select("svg").append("line")
                    .attr("x1", 137.7)
                    .attr("y1", 154)
                    .attr("x2", 135.5)
                    .attr("y2", 154.8)
                    .attr("class", "mouth-happy")
    d3.select("svg").append("line")
                    .attr("x1", 163.2)
                    .attr("y1", 154)
                    .attr("x2", 165.3)
                    .attr("y2", 154.8)
                    .attr("class", "mouth-happy");
  };
  mouthHappy();


  window.mouthOpen = function(){
    d3.select("svg").append("g").append("path")
                    .attr("d", "M150 172c8.4 0 15.5-7.5 15.2-14.1c0-0.9-0.4-2.2-0.4-2.2s-0.8-2.3-1.8-0.1c-1.8 3.9-5.8 3.8-13 3.8s-11.3 0.1-13-3.8 c-1-2.2-1.8 0.1-1.8 0.1s-0.3 1.3-0.4 2.2C134.5 164.5 141.6 172 150 172z");
    d3.select("svg").append("path")
                    .attr("d", "M159.5 167.9c-3.2-4.3-4-4.9-10.2-4.9s-5.8 0-9.7 4.1c0 0 2.7 2.4 4.3 3c1.6 0.6 4.5 1.3 5.9 1.3 c1.3 0 4.5-0.5 6-1.1C157.2 169.7 159.5 167.9 159.5 167.9z")
                    .attr("class", "mouth-open");
  };
  // mouthOpen();

});



