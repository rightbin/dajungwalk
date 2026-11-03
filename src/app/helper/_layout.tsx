import { Stack } from 'expo-router';

import { colors } from '@/constants/theme';

/**
 * 도우미(Helper) 영역 레이아웃
 * - 도우미 전용 화면들을 묶는 네비게이션입니다.
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
    </Stack>
  );
}
