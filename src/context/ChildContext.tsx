import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import type { Child, ChildInput } from '@/types/child';

type ChildContextValue = {
  childrenList: Child[];
  /** 특정 부모의 자녀만 가져오기 */
  getChildrenByParent: (parentId: string) => Child[];
  /** 자녀 등록 (Mock) */
  addChild: (
    parentId: string,
    input: ChildInput,
  ) => { ok: true; child: Child } | { ok: false; message: string };
};

const ChildContext = createContext<ChildContextValue | null>(null);

/** 체험용 미리 등록된 자녀 (부모 데모 계정용) */
const DEMO_CHILDREN: Child[] = [
  {
    id: 'demo-child-1',
    parentId: 'demo-parent',
    name: '김다정',
    grade: 2,
    schoolName: '평촌초등학교',
    academyName: '범계영어학원',
    emergencyContactName: '김보호',
    emergencyContactPhone: '010-1234-5678',
    handoverName: '학교 앞 돌봄 선생님',
    handoverPhone: '010-9876-5432',
    createdAt: '2026-11-03T00:00:00.000Z',
  },
];

function validateChildInput(input: ChildInput): string | null {
  if (!input.name.trim()) return '자녀 이름을 입력해 주세요.';
  if (![1, 2, 3].includes(input.grade)) {
    return '학년은 1~3학년만 선택할 수 있습니다.';
  }
  if (!input.schoolName.trim()) return '학교 이름을 입력해 주세요.';
  if (!input.academyName.trim()) return '학원 이름을 입력해 주세요.';
  if (!input.emergencyContactName.trim()) {
    return '비상 연락처 이름을 입력해 주세요.';
  }
  if (!input.emergencyContactPhone.trim()) {
    return '비상 연락처 번호를 입력해 주세요.';
  }
  if (!input.handoverName.trim()) {
    return '인계 가능 보호자/담당자 이름을 입력해 주세요.';
  }
  if (!input.handoverPhone.trim()) {
    return '인계 가능 보호자/담당자 연락처를 입력해 주세요.';
  }
  return null;
}

/**
 * 자녀 정보 상태 제공자
 * - 실제 서버 대신 앱 메모리에 저장합니다. (Mock)
 */
export function ChildProvider({ children }: { children: ReactNode }) {
  const [childrenList, setChildrenList] = useState<Child[]>(DEMO_CHILDREN);

  const value = useMemo<ChildContextValue>(
    () => ({
      childrenList,
      getChildrenByParent: (parentId) =>
        childrenList.filter((child) => child.parentId === parentId),
      addChild: (parentId, input) => {
        const message = validateChildInput(input);
        if (message) return { ok: false, message };

        const child: Child = {
          id: `child-${Date.now()}`,
          parentId,
          name: input.name.trim(),
          grade: input.grade,
          schoolName: input.schoolName.trim(),
          academyName: input.academyName.trim(),
          emergencyContactName: input.emergencyContactName.trim(),
          emergencyContactPhone: input.emergencyContactPhone.trim(),
          handoverName: input.handoverName.trim(),
          handoverPhone: input.handoverPhone.trim(),
          createdAt: new Date().toISOString(),
        };

        setChildrenList((prev) => [...prev, child]);
        return { ok: true, child };
      },
    }),
    [childrenList],
  );

  return (
    <ChildContext.Provider value={value}>{children}</ChildContext.Provider>
  );
}

/** 화면에서 자녀 기능을 꺼내 쓰는 훅(Hook) */
export function useChildren() {
  const context = useContext(ChildContext);
  if (!context) {
    throw new Error('useChildren는 ChildProvider 안에서만 사용할 수 있습니다.');
  }
  return context;
}
