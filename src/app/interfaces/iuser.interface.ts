export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    image: string;
}
  
export interface ApiResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
}