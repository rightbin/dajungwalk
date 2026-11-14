import { Redirect, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { colors, radii, spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { useChildren } from '@/context/ChildContext';

/**
 * 자녀 정보 관리 목록 (P-05)
 */
export default function ChildrenListScreen() {
  const router = useRouter();
  const { currentUser } = useAuth();
  const { getChildrenByParent } = useChildren();

  if (currentUser?.role !== 'parent') {
    return <Redirect href="/parent" />;
  }

  const myChildren = getChildrenByParent(currentUser.id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.body}>
        서비스에 필요한 최소 정보만 등록합니다. 지금은 연습용(Mock) 저장입니다.
      </Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => router.push('/parent/children/add')}
      >
        <Text style={styles.primaryButtonText}>자녀 등록하기</Text>
      </Pressable>

      {myChildren.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyTitle}>등록된 자녀가 없습니다</Text>
          <Text style={styles.emptyBody}>
            위에서 자녀를 먼저 등록해 주세요. 나중에 예약 신청에 사용됩니다.
          </Text>
        </View>
      ) : (
        myChildren.map((child) => (
          <View key={child.id} style={styles.card}>
            <Text style={styles.cardTitle}>
              {child.name} · {child.grade}학년
            </Text>
            <Text style={styles.cardItem}>학교: {child.schoolName}</Text>
            <Text style={styles.cardItem}>학원: {child.academyName}</Text>
            <Text style={styles.cardItem}>
              비상 연락: {child.emergencyContactName} (
              {child.emergencyContactPhone})
            </Text>
            <Text style={styles.cardItem}>
              인계자: {child.handoverName} ({child.handoverPhone})
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xl * 2,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  primaryButton: {
    backgroundColor: colors.parentAccent,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  emptyBox: {
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  emptyBody: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
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
    fontSize: 18,
    fontWeight: '700',
    color: colors.brand,
    marginBottom: spacing.sm,
  },
  cardItem: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
    lineHeight: 20,
  },
});
