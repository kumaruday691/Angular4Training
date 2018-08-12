/**
 * Created by kumar on 11/5/2017.
 */
class Point {

  constructor(private  x?: number, private y?: number){
  }

  distance (otherPoint: Point) {
    console.log('point1 =' + otherPoint.x);
    return this.y;
  }
}


let point = new Point(1,2);
let point2 = new Point(5,6);


point.distance(point2);
