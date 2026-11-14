import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthForm } from '@/components/AuthForm';
import { colors, spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

/** 부모 회원가입 화면 (P-02) */
export default function ParentSignupScreen() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <View style={styles.container}>
      <AuthForm
        mode="signup"
        role="parent"
        accentColor={colors.parentAccent}
        errorMessage={errorMessage}
        onSubmit={({ name, email, password, privacyAgreed }) => {
          const result = signUp({
            name,
            email,
            password,
            privacyAgreed,
            role: 'parent',
          });
          if (!result.ok) {
            setErrorMessage(result.message);
            return;
          }
          router.replace('/parent');
        }}
      />

      <Link href="/parent/login" style={styles.link}>
        <Text style={styles.linkText}>이미 계정이 있나요? 로그인</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  link: {
    marginTop: spacing.lg,
    alignSelf: 'center',
  },
  linkText: {
    color: colors.parentAccent,
    fontSize: 15,
    fontWeight: '600',
  },
});
