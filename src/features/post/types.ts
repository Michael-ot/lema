export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
  
export interface UserSummary {
    id: number;
    name: string;
    email: string;
    postCount: number;
}

export interface CreatePostFormValues  {
    title: string;
    body: string;
};
  