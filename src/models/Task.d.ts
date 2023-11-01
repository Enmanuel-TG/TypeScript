export type Task = {
    id: number;
    title: string;
    description: string | undefined;
    priority: "Baja" | "Media" | "Alta"
    due: Date
}

// export type Tasks = Task[]
export type Tasks = Array<Task>

// Esto:
// type BugTask = Task & {
//     bugId: number;
// }

// Equivale a esto:
// type BugTask = {
//     id: number;
//     title: string;
//     description: string | undefined;
//     bugId: number;
// }

