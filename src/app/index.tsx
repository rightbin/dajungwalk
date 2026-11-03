import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, radii, spacing } from '@/constants/theme';

/**
 * 시작 화면 / 역할 선택 (P-01, H-01)
 * - 사용자가 부모인지 도우미인지 먼저 고릅니다.
 * - 아직 서버 로그인은 없고, 화면 이동만 확인합니다.
 */
export default function RoleSelectScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text style={styles.brand}>다정다감</Text>
          <Text style={styles.subtitle}>
            학교부터 학원까지,{'\n'}따뜻한 동행을 연결해요
          </Text>
          <Text style={styles.region}>초기 지역: 안양 평촌·범계</Text>
        </View>

        <View style={styles.actions}>
          <Text style={styles.prompt}>어떻게 이용하시나요?</Text>

          <Link href="/parent" style={styles.parentButton}>
            <View>
              <Text style={styles.buttonTitle}>부모로 시작</Text>
              <Text style={styles.buttonDesc}>자녀 동행을 예약해요</Text>
            </View>
          </Link>

          <Link href="/helper" style={styles.helperButton}>
            <View>
              <Text style={styles.buttonTitle}>도우미로 시작</Text>
              <Text style={styles.buttonDesc}>동행 지원에 참여해요</Text>
            </View>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    justifyContent: 'space-between',
  },
  hero: {
    marginTop: spacing.xl * 2,
    alignItems: 'center',
  },
  brand: {
    fontSize: 40,
    fontWeight: '700',
    color: colors.brand,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.textMuted,
    textAlign: 'center',
  },
  region: {
    marginTop: spacing.md,
    fontSize: 13,
    color: colors.textMuted,
  },
  actions: {
    gap: spacing.sm,
  },
  prompt: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  parentButton: {
    borderRadius: radii.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    backgroundColor: colors.parentAccent,
    borderColor: colors.parentAccent,
  },
  helperButton: {
    borderRadius: radii.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    backgroundColor: colors.helperAccent,
    borderColor: colors.helperAccent,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  buttonDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
  },
});
