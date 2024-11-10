import { ActivityIndicator } from "@ant-design/react-native";
import { Routes } from "@config/Routes";
import { useGetCurrentUserQuery } from "@modules/user/api/endpoints";
import { useRouter } from '@modules/common/hooks';
import { FC, ReactElement } from "react"

interface IAuthProviderProps {
  children: ReactElement;
}

export const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const { data, isLoading } = useGetCurrentUserQuery({});

  if(isLoading) {
    return <ActivityIndicator />
  }

  if(!isLoading && !data) {
    router.replace(Routes.HOME);
  }

  return children;
}