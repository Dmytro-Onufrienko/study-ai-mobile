export enum Routes {
  SIGN_IN = '/sign-in',
  SIGN_UP = '/sign-up',
  SIGN_OUT = '/sign-out',
  ROOT = '/',
  COURSE = '/course',
  TOPIC = '/topic',
  SUBTOPIC = '/subtopic',
  HOME = './dashboard'
}

export type DynamicRoutesKeys = Routes.COURSE | Routes.TOPIC | Routes.SUBTOPIC

type DynamicRoutes = Record<DynamicRoutesKeys, (dynamicPath: string) => string>

export const dynamicRoutes: DynamicRoutes = {
  [Routes.COURSE]: (course: string) => `/course/${course}`,
  [Routes.TOPIC]: (topic: string) => `/topic/${topic}`,
  [Routes.SUBTOPIC]: (subtopic: string) => `/subtopic/${subtopic}`,
};