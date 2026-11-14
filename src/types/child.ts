/**
 * 초등학교 저학년 (서비스 대상: 1~3학년)
 */
export type ElementaryGrade = 1 | 2 | 3;

/**
 * 자녀 정보(Child)
 * - 서비스에 필요한 최소 정보만 담습니다. (SRS FR-010~015)
 * - 지금은 서버 없이 Mock으로만 사용합니다.
 */
export type Child = {
  id: string;
  /** 이 자녀를 등록한 부모 사용자 id */
  parentId: string;
  /** 자녀 이름 */
  name: string;
  /** 학년 */
  grade: ElementaryGrade;
  /** 학교 이름 */
  schoolName: string;
  /** 학원 이름 */
  academyName: string;
  /** 비상 연락처 이름 */
  emergencyContactName: string;
  /** 비상 연락처 전화번호 */
  emergencyContactPhone: string;
  /** 인계 가능 보호자/담당자 이름 */
  handoverName: string;
  /** 인계 가능 보호자/담당자 연락처 */
  handoverPhone: string;
  createdAt: string;
};

/** 자녀 등록 시 입력값 */
export type ChildInput = Omit<Child, 'id' | 'parentId' | 'createdAt'>;
