// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  var bodyRound = function(){
    return "<ellipse cx=\"151.7\" cy=\"120.3\" rx=\"69.7\" ry=\"67.3\" class=\"body-round\"/>";
  };
  $(".svg").append(bodyRound());


  var eyesOpen = function(){
    return "<circle cx=\"125.7\" cy=\"129\" r=\"12\" class=\"open-eye-lg\"/><circle cx=\"173\" cy=\"128\" r=\"12\" class=\"open-eye-lg\"/><ellipse cx=\"119.7\" cy=\"130.7\" rx=\"5.7\" ry=\"5.3\" class=\"open-eye-md\"/><ellipse cx=\"166.7\" cy=\"129.8\" rx=\"5.7\" ry=\"5.3\" class=\"open-eye-md\"/><ellipse cx=\"115.7\" cy=\"130.4\" rx=\"1.8\" ry=\"3.2\" class=\"open-eye-sm\"/><ellipse cx=\"162.8\" cy=\"128.9\" rx=\"1.8\" ry=\"3.2\" class=\"open-eye-sm\"/>"
  };
  $(".svg").append(eyesOpen());


  var eyesClosed = function(){
    return "<path d=\"M113.3 135.3c1-2.3 0.7-3.4 3.2-4.9c2.2-1.3 5.3-2.1 7.8-2.4 c5-0.6 11.7 3.3 11.6 9\" class=\"closed-eye\"/><path d=\"M161 134.7c1-2.3 0.7-3.4 3.2-4.9c2.2-1.3 5.3-2.1 7.8-2.4 c5-0.6 11.7 3.3 11.6 9\" class=\"closed-eye\"/><path d=\"M113.2 135.2c-3.3 0.5-5.3-4.5-6-6.8\" class=\"closed-eye\"/><path d=\"M110.5 127.2c0.2 2.1 2 3.9 3.8 4.5\" class=\"closed-eye\"/><path d=\"M183.5 135.8c3.3 1 5.9-1.7 6.8-4.8\" class=\"closed-eye\"/><path d=\"M187.5 129.5c0.3 1.6-2.7 3.8-4.5 3.5\" class=\"closed-eye\"/>"
  };
  $(".svg").append(eyesClosed());


  var freckles = function(){
    return "<ellipse cx=\"108.9\" cy=\"147.8\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/><ellipse cx=\"117.2\" cy=\"146.5\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/><ellipse cx=\"115\" cy=\"151.5\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/><ellipse cx=\"177\" cy=\"147.2\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/><ellipse cx=\"175\" cy=\"151.8\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/><ellipse cx=\"181.2\" cy=\"151.2\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/><ellipse cx=\"109.2\" cy=\"153.5\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/><ellipse cx=\"183.9\" cy=\"145.5\" rx=\"1.4\" ry=\"1.2\" class=\"freckles\"/>"
  };
  $(".svg").append(freckles());


  var hairLeaf = function(){
    return "<path d=\"M153.2 32.1c0-1.2-1-2.1-2.1-2.1l0 0c-1.3 0-1.4 0.6-3.3 1.8 l3.2 20.5c-1.9 1.4-1 2.3 0.2 2.3l0 0c1.2 0 2.1-1 2.1-2.1V32.1z\" class=\"hair-leaf\"/><path d=\"M188.6 15.8c0 0-13.2-4.3-24.3 3.7s-11.6 25.8-11.6 25.8 s1.3-2.4 2.6-3.2s7.1-1 7.1-1s9 0.1 13.2-3.7s5.9-10.8 6.5-15.4S188.6 15.8 188.6 15.8z\" class=\"hair-leaf\"/>"  
  };
  $(".svg").append(hairLeaf());


  var legs = function(){
    return "<path d=\"M172.3 235.8c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.4 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235.8z\" class=\"legs\"/><path d=\"M135 235c0 2.2-1.6 4-3.5 4l0 0c-1.9 0-3.5-1.8-3.5-4v-54.5 c0-2.2 1.6-4 3.5-4l0 0c1.9 0 3.5 1.8 3.5 4V235z\" class=\"legs\"/>"
  };
  $(".svg").append(legs());


  var arms = function(){
    return "<path d=\"M242 140c0 1.6-1.3 2.8-2.8 2.8h-22.3c-1.6 0-2.8-1.3-2.8-2.8l0 0 c0-1.6 1.3-2.8 2.8-2.8h22.3C240.7 137.2 242 138.4 242 140L242 140z\" class=\"arms\"/><path d=\"M89.6 137.2c0 1.6-1.3 2.8-2.8 2.8H64.4c-1.6 0-2.8-1.3-2.8-2.8 l0 0c0-1.6 1.3-2.8 2.8-2.8h22.3C88.3 134.3 89.6 135.6 89.6 137.2L89.6 137.2z\" class=\"arm\"/>"
  };
  $(".svg").append(arms());

  var mouthSad = function(){
    return "<path d=\"M141.5 161.6c0-4.8 4-8.6 9-8.6s9 3.9 9 8.6\" class=\"mouth-sad\"/>"
  }
  $(".svg").append(mouthSad());


  var mouthHappy = function(){
    return "<g><path d=\"M167 155.2l-1.8-0.5c0 6.7-6.6 12.2-14.8 12.2 c-8.2 0-14.8-5.5-14.8-12.2l-2.5 0.5\" class=\"mouth-happy\"/></g><line x1=\"137.7\" y1=\"154\" x2=\"135.5\" y2=\"154.8\" class=\"mouth-happy\"/><line x1=\"163.2\" y1=\"154\" x2=\"165.3\" y2=\"154.8\" class=\"mouth-happy\"/>"
  };
  $(".svg").append(mouthHappy());


  var mouthOpen = function(){
    return "<g><g><path d=\"M150 172c8.4 0 15.5-7.5 15.2-14.1c0-0.9-0.4-2.2-0.4-2.2s-0.8-2.3-1.8-0.1c-1.8 3.9-5.8 3.8-13 3.8s-11.3 0.1-13-3.8 c-1-2.2-1.8 0.1-1.8 0.1s-0.3 1.3-0.4 2.2C134.5 164.5 141.6 172 150 172z\"/></g><path d=\"M159.5 167.9c-3.2-4.3-4-4.9-10.2-4.9s-5.8 0-9.7 4.1c0 0 2.7 2.4 4.3 3c1.6 0.6 4.5 1.3 5.9 1.3 c1.3 0 4.5-0.5 6-1.1C157.2 169.7 159.5 167.9 159.5 167.9z\" class=\"mouth-open\"/></g>"
  };
  $(".svg").append(mouthOpen());

});



