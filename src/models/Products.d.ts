export type Products = {
    id: number;
    name: string;
    description: string;
    quality: "Baja" | "Media" | "Alta"
    due: Date
}

// export type Products = Product[]
export type Products = Array<Product>