import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { User, UserRole } from '@/types/user';

type SignUpInput = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  privacyAgreed: boolean;
};

type SignInInput = {
  email: string;
  password: string;
  role: UserRole;
};

type AuthContextValue = {
  /** 현재 로그인된 사용자 (없으면 null) */
  currentUser: User | null;
  /** 회원가입 (Mock) */
  signUp: (input: SignUpInput) => { ok: true } | { ok: false; message: string };
  /** 로그인 (Mock) */
  signIn: (input: SignInInput) => { ok: true } | { ok: false; message: string };
  /** 로그아웃 */
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/** 체험용 미리 만들어진 계정 (초보 테스트용) */
const DEMO_USERS: User[] = [
  {
    id: 'demo-parent',
    name: '김보호',
    email: 'parent@demo.com',
    password: 'demo1234',
    role: 'parent',
    privacyAgreed: true,
    createdAt: '2026-11-03T00:00:00.000Z',
  },
  {
    id: 'demo-helper',
    name: '이도우',
    email: 'helper@demo.com',
    password: 'demo1234',
    role: 'helper',
    privacyAgreed: true,
    createdAt: '2026-11-03T00:00:00.000Z',
  },
];

/**
 * 인증(Auth) 상태 제공자
 * - 실제 서버 대신 앱 메모리에 사용자 목록을 둡니다.
 * - 앱을 완전히 종료하면 새로 가입한 계정은 사라질 수 있습니다. (Mock 한계)
 */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<User[]>(DEMO_USERS);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      currentUser,
      signUp: ({ name, email, password, role, privacyAgreed }) => {
        const trimmedEmail = email.trim().toLowerCase();
        const trimmedName = name.trim();

        if (!trimmedName) {
          return { ok: false, message: '이름을 입력해 주세요.' };
        }
        if (!trimmedEmail.includes('@')) {
          return { ok: false, message: '이메일 형식을 확인해 주세요.' };
        }
        if (password.length < 6) {
          return { ok: false, message: '비밀번호는 6자 이상이어야 합니다.' };
        }
        if (!privacyAgreed) {
          return { ok: false, message: '개인정보 수집·이용에 동의해 주세요.' };
        }
        if (users.some((user) => user.email === trimmedEmail)) {
          return { ok: false, message: '이미 가입된 이메일입니다.' };
        }

        const newUser: User = {
          id: `${role}-${Date.now()}`,
          name: trimmedName,
          email: trimmedEmail,
          password,
          role,
          privacyAgreed,
          createdAt: new Date().toISOString(),
        };

        setUsers((prev) => [...prev, newUser]);
        setCurrentUser(newUser);
        return { ok: true };
      },
      signIn: ({ email, password, role }) => {
        const trimmedEmail = email.trim().toLowerCase();
        const found = users.find(
          (user) =>
            user.email === trimmedEmail &&
            user.password === password &&
            user.role === role,
        );

        if (!found) {
          return {
            ok: false,
            message: '이메일, 비밀번호 또는 역할이 올바르지 않습니다.',
          };
        }

        setCurrentUser(found);
        return { ok: true };
      },
      signOut: () => {
        setCurrentUser(null);
      },
    }),
    [currentUser, users],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/** 화면에서 인증 기능을 꺼내 쓰는 훅(Hook) */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 AuthProvider 안에서만 사용할 수 있습니다.');
  }
  return context;
}
