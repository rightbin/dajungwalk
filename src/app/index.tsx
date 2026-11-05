import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, radii, spacing } from '@/constants/theme';

/**
 * 시작 화면 / 역할 선택 (P-01, H-01)
 * - 브랜드와 엄마·아이 이미지로 따뜻한 첫인상을 줍니다.
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

          {/* 메인 비주얼: 엄마와 아이 */}
          <Image
            source={require('../../assets/mother-child-walk.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
            accessibilityLabel="엄마와 아이가 함께 걷는 모습"
          />
        </View>

        <View style={styles.actions}>
          <Text style={styles.prompt}>어떻게 이용하시나요?</Text>

          <Link href="/parent" style={styles.parentButton}>
            <View style={styles.buttonInner}>
              <Text style={styles.buttonTitle}>부모로 시작</Text>
              <Text style={styles.buttonDesc}>자녀 동행을 예약해요</Text>
            </View>
          </Link>

          <Link href="/helper" style={styles.helperButton}>
            <View style={styles.buttonInner}>
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
    marginTop: spacing.lg,
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
    marginBottom: spacing.md,
    fontSize: 13,
    color: colors.textMuted,
  },
  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: radii.lg,
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
  buttonInner: {
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
    textAlign: 'center',
  },
  buttonDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
  },
});
