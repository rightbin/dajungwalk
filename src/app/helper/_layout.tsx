import { Stack } from 'expo-router';

import { colors } from '@/constants/theme';

/**
 * 도우미(Helper) 영역 레이아웃
 */
export default function HelperLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.helperAccent,
        headerTitleStyle: { fontWeight: '600' },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: '도우미 홈' }} />
      <Stack.Screen name="login" options={{ title: '도우미 로그인' }} />
      <Stack.Screen name="signup" options={{ title: '도우미 회원가입' }} />
    </Stack>
  );
}
