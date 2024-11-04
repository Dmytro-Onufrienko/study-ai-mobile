import { ActivityIndicator } from "@ant-design/react-native";
import { Routes } from "@constants/Routes";
import { useGetCurrentUserQuery } from "@modules/user/api/endpoints";
import { useRouter } from "expo-router";
import { FC, ReactElement } from "react"

interface INoAuthProviderProps {
  children: ReactElement;
}

export const NoAuthProvider: FC<INoAuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const { data, isLoading } = useGetCurrentUserQuery({});

  if(isLoading) {
    return <ActivityIndicator />
  }

  if(!isLoading && data) {
    router.replace(Routes.COURSE);
  }

  return children;
}