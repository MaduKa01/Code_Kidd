import { formatPhoneNumber } from "@/helpers/phone-helpers";
import IUser from "@/interfaces/user.interface";

type UseUserDataReturn = Partial<IUser>;
type UseUserDataProps = { user: IUser | null };

function useUserData({ user }: UseUserDataProps): UseUserDataReturn {
  const cellphone = formatPhoneNumber(user?.cellphone || "");

  return { ...user, cellphone };
}

export default useUserData;
