export class Circle{
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }
    getRadius(): number {
        return this._radius;
    }
    setRadius(radius: number): void {
        this._radius = radius;
    }
    toString(): string {
        return ` A Circle with radius = ${this.getRadius()} `
    }
}
