import { Link, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

/**
 * 도우미 홈
 * - 로그인 전: 가입/로그인 안내
 * - 로그인 후: 승인 전 지원 불가 원칙 안내
 */
export default function HelperHomeScreen() {
  const router = useRouter();
  const { currentUser, signOut } = useAuth();
  const isHelper = currentUser?.role === 'helper';

  if (!isHelper) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>도우미로 시작하기</Text>
        <Text style={styles.body}>
          동행 지원에 참여하려면 먼저 로그인하거나 회원가입해 주세요.
        </Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push('/helper/login')}
        >
          <Text style={styles.primaryButtonText}>로그인</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push('/helper/signup')}
        >
          <Text style={styles.secondaryButtonText}>회원가입</Text>
        </Pressable>

        <Link href="/" style={styles.backLink}>
          <Text style={styles.backText}>역할 선택으로 돌아가기</Text>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>안녕하세요, {currentUser.name}님</Text>
      <Text style={styles.body}>
        로그인되었습니다. 다음 단계에서 프로필 등록과 승인 상태 화면을 만들
        예정입니다.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>내 계정</Text>
        <Text style={styles.cardItem}>역할: 도우미</Text>
        <Text style={styles.cardItem}>이메일: {currentUser.email}</Text>
      </View>

      <View style={styles.notice}>
        <Text style={styles.noticeText}>
          중요: 승인되지 않은 도우미는 예약에 지원할 수 없습니다.
        </Text>
      </View>

      <Pressable style={styles.logoutButton} onPress={signOut}>
        <Text style={styles.logoutText}>로그아웃</Text>
      </Pressable>

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
  primaryButton: {
    backgroundColor: colors.helperAccent,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: colors.helperAccent,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  secondaryButtonText: {
    color: colors.helperAccent,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
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
  logoutButton: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.sm,
    marginBottom: spacing.sm,
  },
  logoutText: {
    color: colors.danger,
    fontSize: 15,
    fontWeight: '600',
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
