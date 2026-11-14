import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from '@/context/AuthContext';
import { ChildProvider } from '@/context/ChildContext';

/**
 * 루트 레이아웃(Root Layout)
 * - AuthProvider: 로그인 상태
 * - ChildProvider: 자녀 등록 상태 (Mock)
 */
export default function RootLayout() {
  return (
    <AuthProvider>
      <ChildProvider>
        <StatusBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: '#F3F8F4' },
          }}
        />
      </ChildProvider>
    </AuthProvider>
  );
}
