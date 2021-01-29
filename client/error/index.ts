export class UnprocessedCaseError extends Error {
    constructor(componentName: string, unprocessedCaseValue: string) {
        super(`${componentName}. Switch construction. Unprocessed case: ${unprocessedCaseValue}`);
        this.name = "UnprocessedCaseError";
    }
}