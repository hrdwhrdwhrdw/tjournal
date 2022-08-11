"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueOnDatabase = exports.UniqueOnDatabaseExistConstraint = void 0;
const class_validator_1 = require("class-validator");
let UniqueOnDatabaseExistConstraint = class UniqueOnDatabaseExistConstraint {
    async validate(value, args) {
        const entity = args.object[`class_entity_${args.property}`];
        return true;
    }
};
UniqueOnDatabaseExistConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true })
], UniqueOnDatabaseExistConstraint);
exports.UniqueOnDatabaseExistConstraint = UniqueOnDatabaseExistConstraint;
function UniqueOnDatabase(entity, validationOptions) {
    validationOptions = Object.assign({ message: '$value already exists. Choose another.' }, validationOptions);
    return function (object, propertyName) {
        object[`class_entity_${propertyName}`] = entity;
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: UniqueOnDatabaseExistConstraint,
        });
    };
}
exports.UniqueOnDatabase = UniqueOnDatabase;
//# sourceMappingURL=UniqueValidationi.js.map