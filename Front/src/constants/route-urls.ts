import { Language } from "@/types/language.types";

class RouteUrls {
  private redirect = (path: string): string => `/?redirect=${path}`;

  public baseUrl = "/";

  // --------- REGISTER ROUTES ---------
  public registerBase = "/register";

  public register = (lang: Language): string => `${this.registerBase}/${lang}`;

  public registerRedirect = (redirect: string, lang: Language) =>
    `${this.register(lang)}${this.redirect(redirect)}`;

  // --------- LOGIN ROUTES ---------
  public loginBase = "/login";
  public login = (lang: Language): string => `${this.loginBase}/${lang}`;
  public loginRedirect = (redirect: string, lang: Language) =>
    `${this.login(lang)}${this.redirect(redirect)}`;

  // --------- PROFILE ROUTES ---------

  public profileBase = "/profile";
  public profile = (lang: Language): string => `${this.profileBase}/${lang}`;

  public permissionsBase = `${this.profileBase}/permissions`;
  public permissions = (lang: Language): string => `${this.permissionsBase}/${lang}`;

  public changePasswordBase = `${this.profileBase}/change-password`;
  public changePassword = (lang: Language): string => `${this.changePasswordBase}/${lang}`;

  // --------- DASHBOARD ROUTES ---------
  public dashboardBase = "/dashboard";
  public dashboard = (lang: Language): string => `${this.dashboardBase}/${lang}`;

  // --------- ACCOUNT ROUTES ---------
  public baseAccount = "/account";
  public account = (lang: Language): string => `${this.baseAccount}/${lang}`;

  // --------- COURSES ROUTES ---------
  public baseCourses = "/courses";
  public courses = (lang: Language): string => `${this.baseCourses}/${lang}`;

  public baseCreateCourse = `${this.baseCourses}/create`;
  public createCourse = (lang: Language): string => `${this.baseCreateCourse}/${lang}`;

  public baseUpdateCourse = `${this.baseCourses}/update`;
  public updateCourse = (lang: Language, courseId: number): string =>
    `${this.baseUpdateCourse}/${courseId}/${lang}`;

  public baseCourseDetails = `${this.baseCourses}/details`;

  public courseDetails = (lang: Language, courseId: string): string =>
    `${this.baseCourseDetails}/${courseId}/${lang}`;
}

const ROUTE_URLS = new RouteUrls();
export default ROUTE_URLS;

export const UNPROTECTED_ROUTE = ROUTE_URLS.loginBase;
