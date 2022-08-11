import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class UniqueOnDatabaseExistConstraint implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments): Promise<boolean>;
}
export declare function UniqueOnDatabase(entity: any, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
