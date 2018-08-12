"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
/**
 * Created by kumar on 11/5/2017.
 */
var core_1 = require("@angular/core");
var CourseComponent = /** @class */ (function () {
    function CourseComponent() {
        this.title = "Welcome to Angular";
        this.courses = ["Course1", "Course2", "Course3"];
    }
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'app-course',
            template: " \n    <h2> {{title}}</h2>\n    <ul>\n      <li *ngFor=\"let course of courses\"> {{course}}</li>\n    </ul>\n  "
        })
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
