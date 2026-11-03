import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/**
 * 앱의 진입 화면(Entry Screen)입니다.
 * 지금은 프로젝트가 잘 실행되는지 확인하는 환영 화면만 보여줍니다.
 */
export default function App() {
  return (
    <View style={styles.container}>
      {/* 브랜드(Brand) 이름 */}
      <Text style={styles.brand}>다정걸음</Text>

      {/* 한 줄 안내 문구 */}
      <Text style={styles.subtitle}>따뜻한 걸음을 함께 기록해요</Text>

      {/* 상태 표시줄(Status Bar) 스타일 */}
      <StatusBar style="auto" />
    </View>
  );
}

// 스타일시트(StyleSheet): 화면 디자인 규칙을 모아 둡니다.
const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면 전체 높이를 사용
    backgroundColor: '#F3F8F4',
    alignItems: 'center', // 가로 가운데 정렬
    justifyContent: 'center', // 세로 가운데 정렬
    paddingHorizontal: 24,
  },
  brand: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1B5E3B',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#4A6B57',
    textAlign: 'center',
  },
});
