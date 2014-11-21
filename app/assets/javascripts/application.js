//= require jquery
//= require jquery_ujs
//= require d3
//= require turbolinks
//= require_tree .

$(document).ready(function(){

  // To make sample FruitFace
  orange_container = ".sample-orange"
  bodyRound(orange_container);
  hairLeaf(orange_container);
  roundGlasses(orange_container);
  eyesClosed(orange_container);
  // arms(orange_container);
  // legs(orange_container);
  freckles(orange_container);
  mouthHappy(orange_container);

  pear_container = ".sample-pear"
  // legs(pear_container);
  bodyPear(pear_container);
  hairDoubleLeaf(pear_container);
  eyesOpen(pear_container);
  // arms(pear_container);
  freckles(pear_container);
  mouthOpen(pear_container);

  strawberry_container = ".sample-strawberry"
  // legs(strawberry_container);
  bodyStrawberry(strawberry_container);
  hairShaggy(strawberry_container);
  eyesOpen(strawberry_container);
  // arms(strawberry_container);
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

    // get name of every part in preview box in an array
    preview_all_groups = $(".preview > g");
    arr = $.makeArray(preview_all_groups);

    saved_parts = $.map(arr, function(p) {
      return $(p).data("name");
    });
    console.log(saved_parts);

    // turn saved_parts into a javascript object
    function toObject(saved_parts) {
      var object = {};
      for (var i = 0; i < saved_parts.length; ++i)
        object[saved_parts[i]] = true;
      return object;
    }
    var params = toObject(saved_parts);

    console.log(params);
    // var params = {
    //   bodyPear: true,
    //   eyesOpen: true
    // }

    // send to rails using (jquery post)ajax request
    $.post( "/create", {fruit: params}, function() {
      alert( "success" );
    })
      .done(function() {
        alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        alert( "finished" );
    });

    
  });

});



