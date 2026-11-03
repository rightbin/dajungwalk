import { Stack } from 'expo-router';

import { colors } from '@/constants/theme';

/**
 * 부모(Parent) 영역 레이아웃
 * - 부모 전용 화면들을 묶는 네비게이션입니다.
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
    </Stack>
  );
}
