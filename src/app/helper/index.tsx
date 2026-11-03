import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing } from '@/constants/theme';

/**
 * 도우미 홈 (H-01 이후) — 1차 개발용 임시 화면
 * - 승인된 도우미만 예약에 지원할 수 있다는 원칙을 안내합니다.
 */
export default function HelperHomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>안녕하세요, 도우미님</Text>
      <Text style={styles.body}>
        프로필을 등록하고 운영자 승인을 받은 뒤에야 동행 예약에 지원할 수
        있습니다.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>다음으로 만들 기능</Text>
        <Text style={styles.cardItem}>· 회원가입 및 본인 확인</Text>
        <Text style={styles.cardItem}>· 프로필·활동 지역/시간 등록</Text>
        <Text style={styles.cardItem}>· 승인 상태 확인</Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          중요: 승인되지 않은 도우미는 예약에 지원할 수 없습니다.
        </Text>
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
    marginBottom: spacing.md,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.helperAccent,
    marginBottom: spacing.sm,
  },
  cardItem: {
    fontSize: 15,
    color: colors.text,
    marginBottom: 4,
  },
  notice: {
    backgroundColor: '#FFF4F4',
    borderRadius: radii.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  noticeText: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.danger,
  },
  backLink: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.sm,
  },
  backText: {
    fontSize: 15,
    color: colors.helperAccent,
    fontWeight: '600',
  },
});
