var circle = new Object();
circle.color = "red";
circle.diameter = 100;
circle.radius = function () {
  var n = this.diameter / 2;
  return n;
};
console.log(`${circle.color}/${circle.diameter}/${circle.radius()}`);

circle.color = "blue";
circle.diameter = 200;
console.log(`${circle.color}/${circle.diameter}/${circle.radius()}`);

var str = "";
var circle = {
  color: "red",
  diameter: 100,
  radius: function () {
    var n = this.diameter / 2;
    return n;
  },
};

circle.color = "purple";
circle.diameter = 200;
str += "원의 색: " + circle.color;
str += ", 지름 :" + circle.diameter;
str += ", 반지름 :" + circle.radius();
console.log(str);

var time = new Date();
console.log(time);

alert;
