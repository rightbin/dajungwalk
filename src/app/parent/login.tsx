import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthForm } from '@/components/AuthForm';
import { colors, spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

/** 부모 로그인 화면 (P-02) */
export default function ParentLoginScreen() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <View style={styles.container}>
      <AuthForm
        mode="login"
        role="parent"
        accentColor={colors.parentAccent}
        errorMessage={errorMessage}
        onSubmit={({ email, password }) => {
          const result = signIn({ email, password, role: 'parent' });
          if (!result.ok) {
            setErrorMessage(result.message);
            return;
          }
          router.replace('/parent');
        }}
      />

      <Link href="/parent/signup" style={styles.link}>
        <Text style={styles.linkText}>아직 계정이 없나요? 회원가입</Text>
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
