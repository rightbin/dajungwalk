import { Stack } from 'expo-router';

import { colors } from '@/constants/theme';

/** 자녀 관리 화면들의 레이아웃 */
export default function ChildrenLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.brand,
        headerTitleStyle: { fontWeight: '600' },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title: '자녀 관리' }} />
      <Stack.Screen name="add" options={{ title: '자녀 등록' }} />
    </Stack>
  );
}
