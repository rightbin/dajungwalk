import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

/**
 * 루트 레이아웃(Root Layout)
 * - 앱 전체의 화면 이동(Navigation) 뼈대입니다.
 * - Stack: 화면을 위로 겹쳐 쌓는 방식의 네비게이터(Navigator)
 */
export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false, // 첫 화면은 커스텀 UI를 쓰므로 기본 헤더 숨김
          contentStyle: { backgroundColor: '#F3F8F4' },
        }}
      />
    </>
  );
}
