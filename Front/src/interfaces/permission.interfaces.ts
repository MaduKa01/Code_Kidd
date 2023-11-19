import { AcessLevel } from "@/types/permission.types";

export interface IProfile {
  id: number;
  code: string;
  label: string;
  rowdate: Date;
  profileModule: IProfileModule[];
}

export interface IProfileModule {
  profileId: number;
  moduleId: number;
  accessLevel: AcessLevel;
  rowDate: Date;
}

export interface IUserProfile {
  userId: number;
  profileId: number;
  rowDate: Date;
}

export interface IInsertUserProfile extends Omit<IUserProfile, "rowDate"> {}
