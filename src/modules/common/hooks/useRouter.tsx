import { DynamicRoutesKeys, Routes, dynamicRoutes } from 'config/Routes';
import { useRouter as useExpoRouter } from 'expo-router';

type RouterKeys = 'push' | 'replace';

type Router = Record<RouterKeys, (path: Routes | { path: DynamicRoutesKeys, params: string }) => void>

export const useRouter = (): Router => {
  const router = useExpoRouter();

  return {
    push: (path) => {
      if (typeof path === 'string') {
        router.push(path);
      } else {
        const { path: routePath, params } = path;
        const dynamicRoute = dynamicRoutes[routePath](params);
        router.push(dynamicRoute);
      }
    },

    replace: (path) => {
      if (typeof path === 'string') {
        router.replace(path);
      } else {
        const { path: routePath, params } = path;
        const dynamicRoute = dynamicRoutes[routePath](params);
        router.replace(dynamicRoute);
      }
    },
  };
};