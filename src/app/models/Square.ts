import { Shape} from './Shape';


export class Square extends Shape
{
  length : number;
  imageUrl: string;

  constructor(length:number,imageUrl: string )
  {
    super();
    this.length = length;
    this.imageUrl = imageUrl;
  }

  area(): number
  {
    let area: number = this.length * this.length;
    area = Number(area.toFixed(3));
    return  area;
  }

  perimeter(): number
  {
    let perimeter =  4 *  this.length;
    perimeter = Number(perimeter.toFixed(3));
    return perimeter;
  }
}
