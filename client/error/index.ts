export class UnprocessedCaseError extends Error {
    constructor(componentName: string, unprocessedCaseValue: string) {
        super(`${componentName}. Switch construction. Unprocessed case: ${unprocessedCaseValue}`);
        this.name = "UnprocessedCaseError";
    }
}

export class InvalidTypeError extends Error {
    constructor(sourceComponentPointer: React.FC, validTypeFunctionPointer: React.FC) {
        super(`${sourceComponentPointer.displayName}. Component type must be: ${validTypeFunctionPointer.name}`);
        this.name = "InvalidTypeError";
    }
}