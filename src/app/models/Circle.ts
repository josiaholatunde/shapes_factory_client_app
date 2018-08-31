import { Shape} from './Shape';


export class Circle extends Shape
{
  radius : number;
  imageUrl: string;

  constructor(radius:number,imageUrl: string )
  {
    super();
    this.radius = radius;
    this.imageUrl = imageUrl;
  }

  area(): number
  {
    let area: number = Math.PI * this.radius * this.radius;
    area = Number(area.toFixed(3));
    return  area;
  }

  perimeter(): number
  {
    let perimeter =  2 * Math.PI * this.radius;
    perimeter = Number(perimeter.toFixed(3));
    return perimeter;
  }
}
