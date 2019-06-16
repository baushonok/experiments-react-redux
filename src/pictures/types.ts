export interface IImageList {
  id: string;
  created_at: string;
  width: number;
  height: number;
  color: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  urls: { [key: string]: string };
}
export interface IState {
  images: IImageList[];
}
