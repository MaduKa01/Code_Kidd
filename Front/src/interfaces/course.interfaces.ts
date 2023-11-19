// types/Course.ts

export interface ICourse {
  _id: string;
  title: string;
  description: string;
  banner: string;
  rating: number;
  category: string;
  level: string;
  reward: string;
  lessons: {
    lessonTitle: string;
    lessonDescription: string;
    videoURL: string;
    duration: string;
  }[];
}
