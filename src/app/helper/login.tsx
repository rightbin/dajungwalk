import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthForm } from '@/components/AuthForm';
import { colors, spacing } from '@/constants/theme';
import { useAuth } from '@/context/AuthContext';

/** 도우미 로그인 화면 (H-02) */
export default function HelperLoginScreen() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <View style={styles.container}>
      <AuthForm
        mode="login"
        role="helper"
        accentColor={colors.helperAccent}
        errorMessage={errorMessage}
        onSubmit={({ email, password }) => {
          const result = signIn({ email, password, role: 'helper' });
          if (!result.ok) {
            setErrorMessage(result.message);
            return;
          }
          router.replace('/helper');
        }}
      />

      <Link href="/helper/signup" style={styles.link}>
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
    color: colors.helperAccent,
    fontSize: 15,
    fontWeight: '600',
  },
});
