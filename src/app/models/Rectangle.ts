import { Shape} from './Shape';


export class Rectangle extends Shape
{
  length : number;
  width : number;
  imageUrl: string;

  constructor(length:number,width:number,imageUrl: string )
  {
    super();
    this.length = length;
    this.width = width;
    this.imageUrl = imageUrl;
  }

  area(): number
  {
    let area: number = this.length * this.width;
    area = Number(area.toFixed(3));
    return  area;
  }

  perimeter(): number
  {
    let perimeter =  2 * (Number(this.length) + Number(this.width));
    perimeter = Number(perimeter.toFixed(3));
    return perimeter;
  }
}
