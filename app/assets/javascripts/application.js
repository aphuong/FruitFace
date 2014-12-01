//= require jquery
//= require jquery_ujs
//= require d3
//= require jquery.flexslider
//= require prism
//= require zeroclipboard
//= require_tree .

$(document).ready(function(){

  // To make sample FruitFace
  orange_container = ".sample-orange"
  bodyRound(orange_container);
  hairLeaf(orange_container);
  squareGlasses(orange_container);
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
  roundGlasses(grape_container);
  mustache(grape_container);

  slice_container = ".sample-slice"
  bodyPear(slice_container);
  hairDoubleLeaf(slice_container);
  eyesClosed(slice_container);
  roundGlasses(slice_container);
  mustache(slice_container);

  apple_container = ".sample-apple"
  bodyStrawberry(apple_container);
  hairDoubleLeaf(apple_container);
  eyesClosed(apple_container);
  roundGlasses(apple_container);
  mustache(apple_container);

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

    // function to add color picker
    $(".preview g").each(function(){
      if ($(this).data("part") == "body"){
        $(".color-picker").show();

        $(".color-picker").hover(function(){
          $(".color-picker-info").toggle();
        });

        $('#colorinput').on('input', function() {
          $('.preview .color-change').css('fill', $(this).val()); 
        });
      } else {
        console.log("not body");
      }
    });

    // function to hide and show instructions/finish button
    if ($(".preview").contents().length != 0) {
      $(".instructions").html("<button type='button' class='finish-btn'>FINISHED</button>" + "<button type='button' class='reset-btn'>RESET</button>");
     
      // show save content
      $(".finish-btn").click(function(){
        $(".shim").show();
        $(".save-content").show();
      });
      
      // reset preview
      $(".reset-btn").click(function(e){
        $(".preview").empty();
      });
    };

  });



  // function to get params for saving furuit
  var post_create_fruit = function(fruit_params){
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
    $.post( "/create", params, function(data) {
      $(".save-content").html("<h3>" + "SAVE WAS SUCCESFUL!" + "</h3>" + "<button type='button' class='code-redirect-btn'>" + "See the Code" + "</button>" + "<button type='button' class='gallery-redirect-btn'>" + "View in Gallery" + "</button>");
    
      $(".gallery-redirect-btn").click(function(){
        location = "/fruits";
      });

      $(".code-redirect-btn").click(function(){
        location = "/fruits/" + data.id;
      });
    })
    .fail(function() {
      alert( "Looks like something went wrong. Please try saving again!" );
    })
  }

  // Function to save fruit
  $("#saveFruit").click(function(){

    // get color of fruit
    var fruit_color = $(".preview .color-change").css("fill");
    
    // get name of fruit
    var fruit_name = $("#fruit_name").val();

    if (fruit_name.length == 0) {
      $(".save-content").append("<p class='validation-alert'>Please give your FruitFace a name.</p>");
    } else if (fruit_name.length > 15) {
      $(".save-content").append("<p class='validation-alert'>Sorry that name is too long, try again.</p>");
    } else {
      var fruit_params = {"name": fruit_name, "color": fruit_color};

      post_create_fruit(fruit_params);
    }
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

  $(".shim").click(function(){
    $(this).hide();
    $(".help-content").hide();
    $(".save-content").hide();
  });

// nav display
  var closeShim = function(){
    $(".menu-shim").hide();
    $(".close-menu").hide(); 
    $("#menu-list a").hide();
    $(".menu-logo").hide();
    $("footer").hide();
    $("body").css("overflow", "visible");
  };

  $(".close-menu").click(function(event){
    closeShim();
  });

  $(".menu-shim").click(function(){
    closeShim();
  });

  $(".menu").click(function(){
    $(".menu-shim").fadeIn();
    $(".menu-logo").show();
    $("#menu-list a").show();
    $("footer").show();
    $(".close-menu").show();
    $("body").css("overflow", "hidden");
    $("body").animate({ scrollTop: 0 }, 200);
  });

  $(".menu").click(function(){
    $("#menu-list").show();
    $("footer").show();
  });



  //scroll animation, homepage
  $(document).scroll(function(){
   
    var docScroll = $(document).scrollTop();
    var textContainer = $(".landing-text-wrapper").offset().top -400;
    
    if(docScroll >= textContainer ) {
      $(".col-6.left").show().addClass("slideLeft");
      $(".col-6.right").show().addClass("slideRight");
    } else {
      $(".col-6.left").fadeOut(1000);
      $(".col-6.right").fadeOut(1000);
    }
  });

});
  
  







