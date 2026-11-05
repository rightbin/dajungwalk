import { Link, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

/**
 * 부모 메인 홈 (P-03)
 * - 로그인 전에는 가입/로그인 안내
 * - 로그인 후에는 다음 기능(자녀 등록 등) 안내
 */
export default function ParentHomeScreen() {
  const router = useRouter();
  const { currentUser, signOut } = useAuth();
  const isParent = currentUser?.role === 'parent';

  if (!isParent) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>부모로 시작하기</Text>
        <Text style={styles.body}>
          자녀 동행 예약을 하려면 먼저 로그인하거나 회원가입해 주세요.
        </Text>

        <Pressable
          style={styles.primaryButton}
          onPress={() => router.push('/parent/login')}
        >
          <Text style={styles.primaryButtonText}>로그인</Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.push('/parent/signup')}
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
        로그인되었습니다. 다음 단계에서 자녀 등록 화면을 만들 예정입니다.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>내 계정</Text>
        <Text style={styles.cardItem}>역할: 부모(보호자)</Text>
        <Text style={styles.cardItem}>이메일: {currentUser.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>다음으로 만들 기능</Text>
        <Text style={styles.cardItem}>· 자녀 등록</Text>
        <Text style={styles.cardItem}>· 예약 신청</Text>
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
    backgroundColor: colors.parentAccent,
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
    borderColor: colors.parentAccent,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  secondaryButtonText: {
    color: colors.parentAccent,
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
    color: colors.brand,
    marginBottom: spacing.sm,
  },
  cardItem: {
    fontSize: 15,
    color: colors.text,
    marginBottom: 4,
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
    color: colors.brandSoft,
    fontWeight: '600',
  },
});
