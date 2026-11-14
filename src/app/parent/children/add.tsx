import { Redirect, useRouter } from 'expo-router';
import { useState, type ReactNode } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors, radii, spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';
import { useChildren } from '@/context/ChildContext';
import type { ElementaryGrade } from '@/types/child';

const GRADES: ElementaryGrade[] = [1, 2, 3];

/**
 * 자녀 등록 화면 (P-04)
 * - 이름, 학년, 학교, 학원, 비상연락처, 인계자
 */
export default function AddChildScreen() {
  const router = useRouter();
  const { currentUser } = useAuth();
  const { addChild } = useChildren();

  const [name, setName] = useState('');
  const [grade, setGrade] = useState<ElementaryGrade>(1);
  const [schoolName, setSchoolName] = useState('');
  const [academyName, setAcademyName] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactPhone, setEmergencyContactPhone] = useState('');
  const [handoverName, setHandoverName] = useState('');
  const [handoverPhone, setHandoverPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (currentUser?.role !== 'parent') {
    return <Redirect href="/parent" />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.hint}>
        민감한 정보는 최소화합니다. 동행 서비스에 필요한 항목만 적어 주세요.
      </Text>

      <Field label="자녀 이름">
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="예: 김다정"
          placeholderTextColor={colors.textMuted}
        />
      </Field>

      <Text style={styles.label}>학년 (초등 1~3)</Text>
      <View style={styles.gradeRow}>
        {GRADES.map((value) => {
          const selected = grade === value;
          return (
            <Pressable
              key={value}
              style={[styles.gradeChip, selected && styles.gradeChipSelected]}
              onPress={() => setGrade(value)}
            >
              <Text
                style={[
                  styles.gradeChipText,
                  selected && styles.gradeChipTextSelected,
                ]}
              >
                {value}학년
              </Text>
            </Pressable>
          );
        })}
      </View>

      <Field label="학교">
        <TextInput
          style={styles.input}
          value={schoolName}
          onChangeText={setSchoolName}
          placeholder="예: 평촌초등학교"
          placeholderTextColor={colors.textMuted}
        />
      </Field>

      <Field label="학원">
        <TextInput
          style={styles.input}
          value={academyName}
          onChangeText={setAcademyName}
          placeholder="예: 범계영어학원"
          placeholderTextColor={colors.textMuted}
        />
      </Field>

      <Field label="비상 연락처 이름">
        <TextInput
          style={styles.input}
          value={emergencyContactName}
          onChangeText={setEmergencyContactName}
          placeholder="예: 김보호"
          placeholderTextColor={colors.textMuted}
        />
      </Field>

      <Field label="비상 연락처 번호">
        <TextInput
          style={styles.input}
          value={emergencyContactPhone}
          onChangeText={setEmergencyContactPhone}
          placeholder="예: 010-1234-5678"
          placeholderTextColor={colors.textMuted}
          keyboardType="phone-pad"
        />
      </Field>

      <Field label="인계 가능 보호자/담당자 이름">
        <TextInput
          style={styles.input}
          value={handoverName}
          onChangeText={setHandoverName}
          placeholder="예: 학교 앞 돌봄 선생님"
          placeholderTextColor={colors.textMuted}
        />
      </Field>

      <Field label="인계 가능 보호자/담당자 연락처">
        <TextInput
          style={styles.input}
          value={handoverPhone}
          onChangeText={setHandoverPhone}
          placeholder="예: 010-9876-5432"
          placeholderTextColor={colors.textMuted}
          keyboardType="phone-pad"
        />
      </Field>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Pressable
        style={styles.submit}
        onPress={() => {
          const result = addChild(currentUser.id, {
            name,
            grade,
            schoolName,
            academyName,
            emergencyContactName,
            emergencyContactPhone,
            handoverName,
            handoverPhone,
          });

          if (!result.ok) {
            setErrorMessage(result.message);
            return;
          }

          router.replace('/parent/children');
        }}
      >
        <Text style={styles.submitText}>저장하기</Text>
      </Pressable>
    </ScrollView>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    paddingBottom: spacing.xl * 2,
    gap: spacing.md,
  },
  hint: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  field: {
    gap: spacing.xs,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    fontSize: 16,
    color: colors.text,
  },
  gradeRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  gradeChip: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  gradeChipSelected: {
    borderColor: colors.parentAccent,
    backgroundColor: colors.parentAccent,
  },
  gradeChipText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  gradeChipTextSelected: {
    color: '#FFFFFF',
  },
  error: {
    color: colors.danger,
    fontSize: 14,
  },
  submit: {
    marginTop: spacing.sm,
    backgroundColor: colors.parentAccent,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
});
