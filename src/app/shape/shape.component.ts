import { Component, OnInit } from '@angular/core';
import {Shape} from '../models/Shape';
import {Circle} from '../models/Circle';
import {Triangle} from '../models/triangle';
import {Square} from '../models/square';
import {Rectangle} from '../models/Rectangle';


@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {
  display: boolean;
  circleImgUrl: string[];
  triangleImgUrl: string[];
  rectangleImgUrl: string[];
  squareImgUrl: string[];
  radius: number;
  base:number;
  height:number;
  length: number;
  rectLength: number;
  index: number;
  area : number;
  msg : string;
  perimeter: number;
  shapes: Shape[];
  width: number;
  currentShape: any;
  updatedDisplay: boolean;
  deleteDisplay: boolean;
  modal: boolean;



  constructor() {
    this.radius = 0;
    this.index = 0;
    this.shapes = [];
    this.circleImgUrl = ['circle1.jpg','circle2.png','circle3.jpg','circle4.jpg','circle5.jpg'];
    this.triangleImgUrl = ['triangle1.png','triangle2.jpg','triangle3.png'];
    this.rectangleImgUrl = ['rect1.jpg','rect2.png'];
    this.squareImgUrl = ['square1.png','square2.png','square3.png','square4.png'];
    this.display = false;
    this.area = 0;
    this.msg = '';
    this.perimeter = 0;
    this.base = 0;
    this.height = 0;
    this.length = 0;
    this.rectLength = 0;
    this.width = 0;
    this.updatedDisplay = true;
    this.deleteDisplay = true;
    this.modal = true;
  }

  showDialog()
  {
      this.radius = 0;
      this.length = 0;
      this.rectLength = 0;
      this.width = 0;
      this.base = 0;
      this.height = 0;
      this.display = true;

  }
  saveCircle()
  {
    if(this.index >= this.circleImgUrl.length)
    {
        this.index = 0;
    }
    if (this.radius)
    {
        let circle = new Circle(this.radius,this.circleImgUrl[this.index]);
        this.shapes.push(circle);
        this.currentShape = circle;
        this.drawCircle(circle.radius);
        this.area = circle.area();
        this.perimeter =  circle.perimeter();
        this.msg = "Area: "+circle.area()+" square units\n\nPerimeter: "+this.perimeter+" units";
        this.index++;
        this.display = false;
        this.updatedDisplay = true;
        this.deleteDisplay = true;
        console.log(this.display);
    }

    else
    {
      console.log("not specified");
    }
  }

  saveTriangle()
  {
    if(this.index >= this.triangleImgUrl.length)
    {
        this.index = 0;
    }
    if (this.base  && this.height)
    {
        var triangle = new Triangle(this.base, this.height, this.triangleImgUrl[this.index]);
        this.shapes.push(triangle);
        this.currentShape = triangle;
        this.drawTriangle(triangle.base,triangle.height);
        this.perimeter = triangle.perimeter();
        this.area = triangle.area();
        this.msg = "Area: "+triangle.area()+" square units\n\nPerimeter: "+ triangle.perimeter()+" units";
        this.index++;


    }
    this.display = false;
  }

  saveSquare()
  {
    if(this.index >= this.squareImgUrl.length)
    {
        this.index = 0;
    }

    if (this.length)
    {
      var square = new Square(this.length,this.squareImgUrl[this.index]);
      this.shapes.push(square);
      this.drawRectangle(square.length,square.length);
      this.currentShape = square;
      this.area = square.area();
      this.perimeter = square.perimeter();
      this.msg = "Area: "+square.area()+" square units\n\nPerimeter: "+ square.perimeter()+" units";
      this.index++;
      this.display = false;
      console.log(this.display);

    }

  }


  saveRectangle()
  {
    if(this.index >= this.rectangleImgUrl.length)
    {
        this.index = 0;
    }

    if (this.rectLength  && this.width  )
    {

      var rectangle = new Rectangle(this.rectLength,this.width,this.rectangleImgUrl[this.index]);
      this.shapes.push(rectangle);
      this.currentShape = rectangle;
      this.drawRectangle(rectangle.length,rectangle.width);
      this.area = rectangle.area();
      this.perimeter = rectangle.perimeter();
      this.msg = "Area: "+rectangle.area()+" square units\n\nPerimeter: "+ rectangle.perimeter()+" units";

      this.index++;
      this.display = false;
      console.log(this.display);

    }

  }

  selectShape(shape: any)
  {
    if(this.updatedDisplay == true || this.deleteDisplay == false)
    {
      this.updatedDisplay = false;
      this.deleteDisplay = true;
    }

    this.clearScreen();
    if (shape instanceof Circle)
    {
        this.currentShape = shape;
        this.drawCircle( this.currentShape.radius);
        this.radius = this.currentShape.radius;
        this.area =  this.currentShape.area();
        this.perimeter =  this.currentShape.perimeter();
        this.msg = "Area: "+ this.currentShape.area() + " square units\n\nPerimeter: "+  this.currentShape.perimeter()+" units";


    }
    else if (shape instanceof Triangle)
    {
        this.currentShape = shape;
        this.drawTriangle(this.currentShape.base,this.currentShape.height);
        this.base = this.currentShape.base;
        this.height = this.currentShape.height;
        this.area =  this.currentShape.area();
        this.perimeter = this.currentShape.perimeter();
        this.msg = "Area: "+this.currentShape.area()+" square units\n\nPerimeter: "+ this.currentShape.perimeter()+" units";

    }

    else if (shape instanceof Rectangle)
    {
        this.currentShape = shape;
        this.drawRectangle(this.currentShape.length,this.currentShape.width);
        this.rectLength = this.currentShape.length;
        this.width =  this.currentShape.width;
        this.area =  this.currentShape.area();
        this.perimeter = this.currentShape.perimeter();
        this.msg = "Area: "+this.currentShape.area() + " square units\n\nPerimeter: "+ this.currentShape.perimeter()+ " units";
    }

    else if (shape instanceof Square)
    {
        this.currentShape = shape;
        this.drawRectangle(this.currentShape.length, this.currentShape.length);
        this.length = this.currentShape.length;
        this.area = this.currentShape.area();
        this.perimeter = this.currentShape.perimeter();
        this.msg = "Area: "+this.currentShape.area()+" square units\n\nPerimeter: "+ this.currentShape.perimeter()+" units";
    }



  }

  edit()
  {

          if (this.currentShape instanceof Circle)
          {
            if (this.radius)
            {
              this.currentShape.radius = this.radius;
              this.clearScreen();
              this.updatedDisplay = false;
            }
          }
          else if ( this.currentShape instanceof Triangle)
          {
            if(this.base && this.height)
            {
              this.currentShape.base = this.base;
              this.currentShape.height = this.height;
              this.clearScreen();
              this.updatedDisplay = false;
            }
          }
          else if ( this.currentShape instanceof Rectangle)
          {
            if(this.rectLength && this.width)
            {
              this.currentShape.length = this.rectLength;
              this.currentShape.width = this.width;
              this.clearScreen();
              this.updatedDisplay = false;
            }
          }
          else if ( this.currentShape instanceof Square)
          {

            if (this.length)
            {
              this.currentShape.length = this.length;
              this.updatedDisplay = false;
              this.clearScreen();
            }

          }
          else
          {
            console.log("Unknown Shape");
          }

          if (this.updatedDisplay == false)
          {
            alert("Shape updated successfully!!!");
          }

  }

  clearScreen()
  {
      var canvas= <HTMLCanvasElement>document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.radius = 0;
      this.area = 0;
      this.perimeter = 0;
      this.length = 0;
      this.rectLength = 0;
      this.width = 0;
      this.base = 0;
      this.height = 0;
  }


  delete()
  {
    let userResponse = confirm("Are you sure you want to delete this shape? ");
    if (userResponse == true)
    {
      var count = 1;
      let index = this.shapes.indexOf(this.currentShape);
      this.shapes.splice(index,count);
      var canvas= <HTMLCanvasElement>document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.updatedDisplay = true;
      this.deleteDisplay = false;
      this.radius = 0;
      this.area = 0;
      this.perimeter = 0;
      this.length = 0;
      this.rectLength = 0;
      this.width = 0;
      this.base = 0;
      this.height = 0;
      if (this.deleteDisplay == false)
      {
        alert("Shape Deleted successfully!!!");
      }
    }


  }


  drawCircle(radius: number)
  {
    var canvas= <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(550, 120, radius, 0, 2*Math.PI,true);
    ctx.strokeStyle = 'green';
    ctx.stroke()
  }

  drawTriangle(base: number, height: number)
  {
    var canvas= <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    let startX = 550;
    let startY = 120;
    let vertex = Number(startY) + Number(height);
    let basePoint = Number(startX) + Number(base);
    ctx.moveTo(startX, startY); // pick up "pen," reposition at 500 (horiz), 0 (vert)
    ctx.lineTo(startX, vertex ); // draw straight down by 200px (200 + 200)
    ctx.lineTo(basePoint, vertex); // draw up toward left (100 less than 300, so left)
    ctx.closePath(); // connect end to start
    ctx.stroke();  // o

  }

  drawRectangle(length: number, width: number)
  {
    var canvas= <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    let startX = 550;
    let startY = 120;
    ctx.rect(startX,startY,length,width);
    // connect end to start
    ctx.stroke();  // o


  }

  ngOnInit() {
  }

}
