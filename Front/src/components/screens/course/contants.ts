// coursesTableConstants.ts

import { CoursesMessages } from "@/messages/courses.messages";

export const COURSES_TABLE_COLUMNS = (messages: CoursesMessages) => {
  return [
    messages.nameColumn,
    messages.categoryColumn,
    messages.levelColumn,
    messages.classesColumn,
    messages.rewardsColumn,
  ];
};
