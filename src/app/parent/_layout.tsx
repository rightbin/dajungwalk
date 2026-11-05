import { Stack } from 'expo-router';

import { colors } from '@/constants/theme';

/**
 * 부모(Parent) 영역 레이아웃
 */
export default function ParentLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.brand,
        headerTitleStyle: { fontWeight: '600' },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: '부모 홈' }} />
      <Stack.Screen name="login" options={{ title: '부모 로그인' }} />
      <Stack.Screen name="signup" options={{ title: '부모 회원가입' }} />
    </Stack>
  );
}
