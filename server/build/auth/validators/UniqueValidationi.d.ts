import { ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class UniqueOnDatabaseExistConstraint implements ValidatorConstraintInterface {
    validate(): Promise<boolean>;
}
export declare function UniqueOnDatabase(entity: any, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
