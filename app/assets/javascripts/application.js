//= require jquery
//= require jquery_ujs
//= require d3
//= require jquery.flexslider
//= require_tree .

$(document).ready(function(){


  // To make sample FruitFace
  orange_container = ".sample-orange"
  bodyRound(orange_container);
  hairLeaf(orange_container);
  roundGlasses(orange_container);
  eyesClosed(orange_container);
  freckles(orange_container);
  mouthHappy(orange_container);

  pear_container = ".sample-pear"
  bodyPear(pear_container);
  hairDoubleLeaf(pear_container);
  eyesOpen(pear_container);
  freckles(pear_container);
  mouthOpen(pear_container);

  strawberry_container = ".sample-strawberry"
  bodyStrawberry(strawberry_container);
  hairShaggy(strawberry_container);
  eyesOpen(strawberry_container);
  freckles(strawberry_container);
  mouthSad(strawberry_container);

  grape_container = ".sample-grape"
  bodyGrape(grape_container);
  hairDoubleLeaf(grape_container);
  eyesClosed(grape_container);
  squareGlasses(grape_container);
  mustache(grape_container);

  // Function to append parts to svg
  // Make sure that the name of the function and the id of the element match
  $(".parts").each(function() {
    window[this.id]("#" + this.id);
  });


  // Add click event to each part that adds it to the preview
  $(".parts").click(function(){

      part_name = $(this).children('g').data('part');
      // Remove all similar parts from preview
      similar_parts = $(".preview [data-part=" + part_name + "]");
      similar_parts.remove();

      // Add the part to the preview
      window[this.id](".preview");
  });


  // Function to save fruit
  $("#saveFruit").click(function(){

    // get color of fruit
    var fruit_color = $(".preview .color-change").css("fill");
    
    // get name of fruit
    var fruit_name = $("#fruit_name").val();
    var fruit_params = {"name": fruit_name, "color": fruit_color};



    // put name of every identifier part from preview box in an array
    preview_all_groups = $(".preview > g");
    arr = $.makeArray(preview_all_groups);

    saved_parts = $.map(arr, function(p) {
      return $(p).data("name");
    });

    // turn saved_parts into a javascript object
    function toObject(saved_parts) {
      var params = {};
      for (var i = 0; i < saved_parts.length; ++i)
        params[i] = {"identifier": saved_parts[i]};
      return params;
    }
    var parts_params = toObject(saved_parts);
    

    // Save fruit_params and parts_params as params
    params = { 
      fruit_and_parts: {
        fruit: fruit_params,
        parts: parts_params
      }
    }


    // send params to rails using jquery ajax request
    $.post( "/create", params, function() {
      alert( "success" );
    })
    .done(function() {
      alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    })
  });


 
  // display flexslider
  $(".open-parts-slider").click(function(){
    flex_class = $(this).data("flexslider-class")
    $("." + flex_class).show();
    $(".done-btn").show();
    $(".open-parts-slider").hide();

    $(".done-btn").click(function(){
      $("." + flex_class).hide();
      $(".open-parts-slider").show();
    });

    $("." + flex_class).flexslider({
      animation: "slide",
      slideshow: false,
      touch: true
    });
  });

  // display help/save content
  $(".help-btn").click(function(){
    $(".shim").show();
    $(".help-content").show();
  });

  $(".finish-btn").click(function(){
    $(".shim").show();
    $(".save-content").show();
  })

  $(".shim").click(function(){
    $(this).hide();
    $(".help-content").hide();
    $(".save-content").hide();
  });

  // color picker
  $(".color-picker").hover(function(){
    $(".color-picker-info").toggle();
  })

  $('#colorinput').on('input', function() {
    $('.preview .color-change').css('fill', $(this).val()); 
  });

});



