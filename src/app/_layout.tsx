import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { AuthProvider } from '@/context/AuthContext';

/**
 * 루트 레이아웃(Root Layout)
 * - 앱 전체의 화면 이동(Navigation) 뼈대입니다.
 * - AuthProvider: 로그인 상태를 모든 화면에 전달합니다.
 */
export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F3F8F4' },
        }}
      />
    </AuthProvider>
  );
}
