/**
 * Created by kumar on 11/5/2017.
 */
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.distance = function (otherPoint) {
        console.log('point1 =' + otherPoint.x);
        return this.y;
    };
    return Point;
}());
var point = new Point();
var point2 = new Point();
point2.x = 5;
point2.y = 6;
point.distance(point2);
