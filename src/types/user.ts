/**
 * 사용자 역할(Role)
 * - parent: 부모(보호자)
 * - helper: 도우미
 */
export type UserRole = 'parent' | 'helper';

/**
 * 앱에 저장된 사용자 정보(User)
 * - 지금은 서버 없이 가짜 데이터(Mock)로만 사용합니다.
 */
export type User = {
  id: string;
  name: string;
  email: string;
  password: string; // Mock 전용. 나중에 서버 연동 시 앱에 비밀번호를 두지 않습니다.
  role: UserRole;
  privacyAgreed: boolean;
  createdAt: string;
};
