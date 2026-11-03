import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing } from '@/constants/theme';

/**
 * 부모 메인 홈 (P-03) — 1차 개발용 임시 화면
 * - 다음 단계에서 자녀 등록·예약 신청 화면을 연결합니다.
 */
export default function ParentHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>안녕하세요, 보호자님</Text>
      <Text style={styles.body}>
        여기서 자녀 정보와 학교·학원 동행 예약을 관리하게 됩니다.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>다음으로 만들 기능</Text>
        <Text style={styles.cardItem}>· 회원가입 및 로그인</Text>
        <Text style={styles.cardItem}>· 자녀 등록</Text>
        <Text style={styles.cardItem}>· 예약 신청</Text>
      </View>

      <Link href="/" style={styles.backLink}>
        <Text style={styles.backText}>역할 선택으로 돌아가기</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.brand,
    marginBottom: spacing.sm,
  },
  cardItem: {
    fontSize: 15,
    color: colors.text,
    marginBottom: 4,
  },
  backLink: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.sm,
  },
  backText: {
    fontSize: 15,
    color: colors.brandSoft,
    fontWeight: '600',
  },
});
