import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors, radii, spacing } from '@/constants/theme';
import type { UserRole } from '@/types/user';

type AuthFormProps = {
  mode: 'login' | 'signup';
  role: UserRole;
  accentColor: string;
  onSubmit: (values: {
    name: string;
    email: string;
    password: string;
    privacyAgreed: boolean;
  }) => void;
  errorMessage?: string;
};

/**
 * 로그인/회원가입 공통 입력 폼(Form)
 */
export function AuthForm({
  mode,
  role,
  accentColor,
  onSubmit,
  errorMessage,
}: AuthFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const roleLabel = role === 'parent' ? '부모' : '도우미';
  const title = mode === 'login' ? `${roleLabel} 로그인` : `${roleLabel} 회원가입`;

  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.hint}>
        지금은 서버 없이 연습용(Mock)으로 동작합니다. 비용이 발생하지 않습니다.
      </Text>

      {mode === 'signup' ? (
        <View style={styles.field}>
          <Text style={styles.label}>이름</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="홍길동"
            placeholderTextColor={colors.textMuted}
            autoCapitalize="words"
          />
        </View>
      ) : null}

      <View style={styles.field}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="example@email.com"
          placeholderTextColor={colors.textMuted}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="6자 이상"
          placeholderTextColor={colors.textMuted}
          secureTextEntry
        />
      </View>

      {mode === 'signup' ? (
        <Pressable
          style={styles.checkRow}
          onPress={() => setPrivacyAgreed((prev) => !prev)}
        >
          <View style={[styles.checkbox, privacyAgreed && { backgroundColor: accentColor, borderColor: accentColor }]}>
            {privacyAgreed ? <Text style={styles.checkMark}>✓</Text> : null}
          </View>
          <Text style={styles.checkText}>
            개인정보 수집·이용에 동의합니다. (필수)
          </Text>
        </Pressable>
      ) : null}

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Pressable
        style={[styles.submit, { backgroundColor: accentColor }]}
        onPress={() =>
          onSubmit({
            name,
            email,
            password,
            privacyAgreed,
          })
        }
      >
        <Text style={styles.submitText}>
          {mode === 'login' ? '로그인' : '가입하기'}
        </Text>
      </Pressable>

      <View style={styles.demoBox}>
        <Text style={styles.demoTitle}>체험 계정</Text>
        <Text style={styles.demoText}>
          {role === 'parent'
            ? 'parent@demo.com / demo1234'
            : 'helper@demo.com / demo1234'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  hint: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
    marginBottom: spacing.xs,
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
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  checkText: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  error: {
    color: colors.danger,
    fontSize: 14,
  },
  submit: {
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  demoBox: {
    marginTop: spacing.sm,
    padding: spacing.md,
    borderRadius: radii.md,
    backgroundColor: '#EAF3ED',
    borderWidth: 1,
    borderColor: colors.border,
  },
  demoTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.brand,
    marginBottom: 4,
  },
  demoText: {
    fontSize: 13,
    color: colors.textMuted,
  },
});
