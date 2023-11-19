export default interface IUser extends IUserInput {
  _id: string;
}

export interface IUserInput {
  name: string;
  email: string;
  password?: string;
  cellphone: string;
  enrolledCourses?: string[];
  savedCourses?: string[];
  points?: number;
  level?: number;
}
