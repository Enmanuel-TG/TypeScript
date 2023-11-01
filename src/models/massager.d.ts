export type Cars = {
    modelo: number | string;
    name: string;
    color: string;
    type: string;
    age_model: number;
}
// export type Cars = Car[]
export type Cars = Array<Car>