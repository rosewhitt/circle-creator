var circleContainer = $(".circle-container");
var submit = $(".make");
submit.on("click", createCircle);

function createCircle() {
  var color = $('.color-picker').val();
  appendNewCircle(color);
}

function appendNewCircle(color) {
  var size = Math.floor(Math.random() * 500);
  // var mar-left = Math.floor(Math.random() * 500);
  // var mar-top = Math.floor(Math.random() * 600);
  circleContainer.append(`
    <div class="circle" style=" height: ${size}px; width:${size}px; background-color: ${color}; border-radius: 50%;"></div>
  `);
}
