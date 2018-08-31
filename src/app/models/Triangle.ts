import {Shape} from './Shape';

export class Triangle extends Shape
{
  base : number;
  height : number;
  imageUrl: string;

  constructor(base:number,height: number,imageUrl: string )
  {
    super();
    this.base = base;
    this.height = height;
    this.imageUrl = imageUrl;
  }

  area(): number
  {
    let area: number = 0.5 * this.base * this.height;
    area = Number(area.toFixed(3));
    return  area;
  }

  perimeter(): number
  {
    let hypotenuse =  Math.sqrt(Math.pow(this.base, 2) + Math.pow(this.height, 2));
    let perimeter: number = Number(this.base) + Number(this.height) + Number(hypotenuse);
    perimeter = Number(perimeter.toFixed(3));
    return perimeter;
  }

}
