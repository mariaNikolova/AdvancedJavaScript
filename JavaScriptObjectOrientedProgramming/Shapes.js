Object.prototype.extends = function (parent) {
  if (!Object.create) {
    Object.prototype.create = function (proto) {
      function F() {};
      F.prototype = proto;
      return new F;
    };
  };
  
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
}
var Shape = (function(){
		function Shape(x,y,color){
		this._x = x ;
		this._y = y ;
		this._color = color ;
	};
	Shape.prototype.toString = function(){
		return "X:"+ this._x +"; "+ "Y:" + this._y + "Color: " + this._color;
	};

	Shape.prototype.canvas = function(){
            var canvas = {
                element: document.getElementById("myCanvas").getContext("2d")
            };
            return canvas;
        }

	return Shape ;
}()) ;
var Circle = (function(){
 		function Circle(x,y,color,radius){
 		Shape.call(this,x,y,color);
		this._radius = radius ;
	}
	Circle.extends(Shape);
	Circle.prototype.toString = function(){
		return Shape.prototype.toString.call(this)+ "; " + "Radius: "+ this._radius ;
	}
	Circle.prototype.draw = function(){
		this.canvas().element.beginPath();
		this.canvas().element.fillStyle = this._color;
		this.canvas().element.arc(this._x, this._y, this._radius, 0 , 2*Math.PI);
		this.canvas().element.stroke();
	}

	return Circle ;
}());

var Rectangle = (function(){
	 function Rectangle(x,y,color,width,height){
	 	Shape.call(this,x,y,color) ;
		this._width = width ;
		this._height = height ;
	}
	Rectangle.extends(Shape) ;
	Rectangle.prototype.toString = function(){
		return Shape.prototype.toString.call(this)+ "; " + "Width: "+this._width + "; "+"Height: "+this._height;
	}
	Rectangle.prototype.draw = function(){
		//var c = document.getElementById('myCanvas') ;
		this.canvas().element.beginPath();
		this.canvas().element.fillStyle = this._color ;
		this.canvas().element.fillRect(this._x,this._y,this._width,this._height);
	}
	return Rectangle ;
}());

var Triangle = (function(){
		function Triangle(x,y,color,x2,y2,x3,y3){
		Shape.call(this,x,y,color) ;
		this._x2 = x2 ;
		this._y2 = y2;
		this._x3 = x3;
		this._y3 = y3;
	}
	Triangle.extends(Shape) ;

	Triangle.prototype.toString = function(){
		return Shape.prototype.toString.call(this) ;
	}
	Triangle.prototype.draw = function(){
		this.canvas().element.beginPath() ;
		this.canvas().element.fillStyle = this._color;
		this.canvas().element.moveTo(this._x, this._y);
		this.canvas().element.lineTo(this._x2 + this._x, this._y2 + this._y);
		this.canvas().element.lineTo(this._x3 + this._x, this._y3 + this._y);
		this.canvas().element.fill();

	};
	return Triangle ;
}());
var Segment = (function(){
		function Segment(x,y,color,x2,y2){
		Shape.call(this,x,y,color) ;
		this._x2 = x2 ;
		this._y2 = y2;
	}
	Segment.extends(Shape) ;
	Segment.prototype.toString= function(){
		return Shape.prototype.toString.call(this);
	};
	Segment.prototype.draw = function(){
		this.canvas().element.beginPath() ;
		this.canvas().element.fillStyle = this._color;
		this.canvas().element.moveTo(this._x, this._y);
		this.canvas().element.lineTo(this._x2+this._x, this._y2 + this._y);
		this.canvas().element.setLineWith(5);
		this.canvas().stroke();

	};
	return Segment;

}());
var Point = (function(){
		function Point(x,y,color){
		Shape.call(this,x,y,color) ;
	}
	Point.extends(Shape) ;
	Point.prototype.toString= function(){
		return Shape.prototype.toString.call(this);
	}
	Point.prototype.draw = function(){
		this.canvas().element.beginPath;
		this.canvas().element.fillStyle = this._color;
		this.canvas().element.fillRect(this._x, this._y,2,2);
	}
	return Point ;
}());

//var circle = new Circle(1,2,3) ;
//var rect = new Rectangle(1,2,2,3) ;
//var triangle = new Triangle(2,3) ;
//var segment = new Segment(1,2) ;
//var point = new Point(5,6) ;
//console.log(rect.toString());
//console.log(triangle.toString()) ;
//console.log(segment.toString());
//console.log(point.toString());
//rect.draw() ;
//console.log(triangle instanceof Shape);
//console.log(rect instanceof Shape) ;
//console.log(circle instanceof Shape) ;