//Post data
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

//Department data
export interface DeptData {
    department: string,
    sub_departments: string[],
}