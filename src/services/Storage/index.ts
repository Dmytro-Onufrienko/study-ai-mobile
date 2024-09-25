import { IAuthTokens } from '@modules/auth/interfaces/IAuthTokens';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {

  public async setTokens(tokens: IAuthTokens | null): Promise<void> {
    try {
      if (!tokens) {
        await this.removeItem('accessToken');
        await this.removeItem('refreshToken');
        return;
      }

      const { accessToken, refreshToken } = tokens;

      await this.setItem('accessToken', accessToken);
      await this.setItem('refreshToken', refreshToken);
    } catch {
      throw new Error('Unable to set auth tokens to storage');
    }
  }

  public async getTokens(): Promise<IAuthTokens | null> {
    try {
      const accessToken = await this.getItem('accessToken');
      const refreshToken = await this.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        return null;
      }

      return { accessToken, refreshToken };
    } catch {
      throw new Error('Unable to read auth tokens from storage');
    }
  }

  public async getItem(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  public async setItem(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, value);
  }

  public async removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }
}

export const storageService = new StorageService();
