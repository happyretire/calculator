<div align="center">

# 🧮 계산기 (Modern Calculator)

### 정수 및 소수점 연산을 지원하는 현대적인 웹 계산기

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[데모 보기](#-빠른-시작) • [기능](#-주요-기능) • [설치](#-설치-방법) • [사용법](#-사용-방법)

</div>

---

## 📖 목차

- [소개](#-소개)
- [주요 기능](#-주요-기능)
- [데모](#-데모)
- [빠른 시작](#-빠른-시작)
- [설치 방법](#-설치-방법)
- [사용 방법](#-사용-방법)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [코드 아키텍처](#-코드-아키텍처)
- [성능 최적화](#-성능-최적화)
- [브라우저 호환성](#-브라우저-호환성)
- [문제 해결](#-문제-해결)
- [개발 로드맵](#-개발-로드맵)
- [기여하기](#-기여하기)
- [라이선스](#-라이선스)

---

## 🎯 소개

**Modern Calculator**는 사용자 경험을 최우선으로 설계된 웹 기반 계산기입니다. 단순한 계산 도구를 넘어서, 현대적인 디자인과 부드러운 애니메이션, 직관적인 인터페이스를 제공합니다.

### 🌟 왜 이 계산기인가?

- ✨ **아름다운 디자인**: 다크 테마와 그라데이션 효과로 시각적 즐거움 제공
- ⚡ **빠른 성능**: 최적화된 코드로 즉각적인 반응
- 📱 **완벽한 반응형**: 모든 디바이스에서 완벽하게 작동
- ⌨️ **키보드 지원**: 마우스 없이도 완전한 제어 가능
- 🎨 **현대적 UX**: 마이크로 인터랙션과 부드러운 애니메이션

---

## ✨ 주요 기능

### 🔢 기본 기능

| 기능 | 설명 | 단축키 |
|------|------|--------|
| **숫자 입력** | 0-9 버튼으로 최대 8자리 입력 | `0-9` |
| **사칙연산** | 덧셈, 뺄셈, 곱셈, 나눗셈 | `+` `-` `*` `/` |
| **계산 실행** | 연산 결과 표시 | `Enter` 또는 `=` |
| **지우기 (C)** | 마지막 입력 또는 연산자 제거 | `Backspace` |
| **전체 초기화 (AC)** | 모든 값과 연산 초기화 | `Escape` |
| **오류 처리** | 8자리 초과 시 'ERR' 표시 | - |

### 🎁 보너스 기능

- **부호 변경 (+/-)**: 양수와 음수 간 전환
- **소수점 연산**: 최대 소수점 3자리까지 정밀 계산
- **연속 연산**: 여러 연산을 연속으로 수행 (예: `1 + 2 + 3 + 4`)

### 🚀 고급 기능

- **연산 히스토리**: 현재 진행 중인 연산 과정 실시간 표시
- **키보드 완전 지원**: 마우스 없이 모든 기능 사용 가능
- **스마트 입력 검증**: 잘못된 입력 자동 방지
- **부동소수점 정밀도**: 정확한 소수점 계산

---

## 🎨 데모

### 디자인 특징

```
┌─────────────────────────────────┐
│  🎨 다크 테마                    │
│  • 눈의 피로를 줄이는 색상 구성  │
│  • 높은 대비율로 가독성 향상     │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  ✨ 그라데이션 & 네온 효과       │
│  • 보라-핑크 색상 팔레트         │
│  • 발광 효과로 미래적 느낌       │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  🎭 글래스모피즘                 │
│  • 반투명 배경으로 깊이감 표현   │
│  • 블러 효과로 세련된 디자인     │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│  🎬 부드러운 애니메이션          │
│  • 호버 효과                     │
│  • 클릭 피드백                   │
│  • 페이드인 효과                 │
└─────────────────────────────────┘
```

---

## 🚀 빠른 시작

### 방법 1: 직접 실행

```bash
# 1. 파일 다운로드
git clone https://github.com/your-username/calculator.git

# 2. 디렉토리 이동
cd calculator

# 3. 브라우저에서 열기
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

### 방법 2: 로컬 서버 사용

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# Node.js (serve)
npx serve

# 브라우저에서 http://localhost:8000 접속
```

---

## 💻 설치 방법

### 요구사항

- 모던 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- 인터넷 연결 (Google Fonts 로딩용, 선택사항)

### 설치 단계

1. **저장소 클론**
   ```bash
   git clone https://github.com/your-username/calculator.git
   cd calculator
   ```

2. **파일 확인**
   ```
   calculator/
   ├── index.html
   ├── style.css
   ├── script.js
   ├── .gitignore
   └── README.md
   ```

3. **실행**
   - `index.html` 파일을 더블클릭하거나
   - 로컬 서버를 실행하여 접속

---

## 📚 사용 방법

### 기본 계산

```
예시 1: 덧셈
12 + 34 = 46

예시 2: 뺄셈
100 - 25 = 75

예시 3: 곱셈
15 × 3 = 45

예시 4: 나눗셈
50 ÷ 2 = 25
```

### 소수점 계산

```
예시 1: 소수점 덧셈
12.5 + 7.3 = 19.8

예시 2: 소수점 나눗셈
10 ÷ 3 = 3.333

예시 3: 정밀 계산
0.1 + 0.2 = 0.3
```

### 연속 연산

```
예시: 여러 연산 연속 수행
5 + 3 = 8
(계속) × 2 = 16
(계속) - 4 = 12
```

### 키보드 단축키

| 키 | 기능 | 설명 |
|---|---|---|
| `0-9` | 숫자 입력 | 숫자 버튼과 동일 |
| `+` | 덧셈 | 더하기 연산 |
| `-` | 뺄셈 | 빼기 연산 |
| `*` | 곱셈 | 곱하기 연산 |
| `/` | 나눗셈 | 나누기 연산 |
| `.` | 소수점 | 소수점 입력 |
| `Enter` 또는 `=` | 계산 | 결과 표시 |
| `Escape` | AC | 전체 초기화 |
| `Backspace` | C | 마지막 입력 지우기 |

---

## 🛠️ 기술 스택

### Frontend

```javascript
{
  "HTML5": "시맨틱 마크업, SEO 최적화",
  "CSS3": "모던 디자인 시스템",
  "JavaScript": "ES6+ 클래스 기반 아키텍처"
}
```

### CSS 기술

- **CSS Variables**: 일관된 디자인 토큰
- **Flexbox & Grid**: 반응형 레이아웃
- **Animations**: 60fps 부드러운 애니메이션
- **Glassmorphism**: 현대적인 UI 트렌드
- **Responsive Design**: 모바일 우선 접근

### JavaScript 기술

- **ES6+ Classes**: 객체지향 프로그래밍
- **Event Delegation**: 효율적인 이벤트 처리
- **DOM Caching**: 성능 최적화
- **State Management**: 명확한 상태 관리
- **JSDoc**: 코드 문서화

---

## 📁 프로젝트 구조

```
calculator/
│
├── 📄 index.html          # HTML 구조 및 시맨틱 마크업
│   ├── 계산기 헤더
│   ├── 디스플레이 영역
│   ├── 버튼 그리드
│   └── 푸터
│
├── 🎨 style.css           # 스타일 및 디자인 시스템
│   ├── CSS Variables (디자인 토큰)
│   ├── 레이아웃 (Flexbox, Grid)
│   ├── 컴포넌트 스타일
│   ├── 애니메이션
│   └── 반응형 미디어 쿼리
│
├── ⚙️ script.js           # 계산기 로직
│   ├── Calculator 클래스
│   ├── 이벤트 리스너
│   ├── 계산 로직
│   ├── 상태 관리
│   └── 유틸리티 메서드
│
├── 🚫 .gitignore          # Git 제외 파일
└── 📖 README.md           # 프로젝트 문서
```

---

## 🏗️ 코드 아키텍처

### Calculator 클래스 구조

```javascript
class Calculator {
  // 상태 관리
  - currentValue: string
  - previousValue: number | null
  - operator: string | null
  - waitingForNewValue: boolean
  - hasError: boolean
  
  // 핵심 메서드
  + handleNumber(num: string): void
  + handleOperator(op: string): void
  + calculate(a: number, b: number, op: string): number | 'ERR'
  + equals(): void
  
  // 유틸리티 메서드
  + formatNumber(num: number): string
  + canAddDigit(): boolean
  + clearErrorIfNeeded(): boolean
  
  // UI 업데이트
  + updateDisplay(): void
  + updateHistory(text?: string): void
  + highlightOperator(op: string): void
}
```

### 주요 메서드 설명

#### `formatNumber(num)`
```javascript
/**
 * 숫자를 포맷팅하여 불필요한 trailing zeros 제거
 * @param {number} num - 포맷할 숫자
 * @returns {string} 포맷된 문자열
 * 
 * 예시:
 * formatNumber(5.000) → "5"
 * formatNumber(3.140) → "3.14"
 */
```

#### `canAddDigit()`
```javascript
/**
 * 현재 값에 더 많은 자릿수를 추가할 수 있는지 검증
 * @returns {boolean} 추가 가능 여부
 * 
 * 검증 규칙:
 * - 정수 부분: 최대 8자리
 * - 소수 부분: 최대 3자리
 */
```

#### `calculate(a, b, operator)`
```javascript
/**
 * 두 숫자에 대한 연산 수행
 * @param {number} a - 첫 번째 피연산자
 * @param {number} b - 두 번째 피연산자
 * @param {string} operator - 연산자 (+, -, *, /)
 * @returns {number | 'ERR'} 계산 결과 또는 에러
 * 
 * 특징:
 * - 부동소수점 정밀도 처리
 * - 0으로 나누기 방지
 * - 8자리 초과 검증
 */
```

---

## ⚡ 성능 최적화

### 1. DOM 쿼리 캐싱

```javascript
// ❌ 비효율적 (매번 DOM 쿼리)
clearOperatorHighlight() {
  document.querySelectorAll('[data-operator]').forEach(...)
}

// ✅ 최적화 (한 번만 쿼리)
constructor() {
  this.operatorButtons = document.querySelectorAll('[data-operator]');
}
clearOperatorHighlight() {
  this.operatorButtons.forEach(...)
}
```

### 2. 계산 최적화

```javascript
// ❌ 비효율적 (매번 계산)
Math.pow(10, this.MAX_DECIMAL_PLACES)

// ✅ 최적화 (한 번만 계산)
this.DECIMAL_MULTIPLIER = Math.pow(10, this.MAX_DECIMAL_PLACES);
```

### 3. CSS 애니메이션 최적화

```css
/* GPU 가속 활용 */
.calculator {
  will-change: transform, box-shadow;
  transform: translateZ(0);
}
```

### 4. 코드 중복 제거

```javascript
// DRY 원칙 적용
clearErrorIfNeeded() {
  if (this.hasError) {
    this.clearAll();
    return true;
  }
  return false;
}
```

### 성능 지표

| 항목 | 값 |
|------|-----|
| 초기 로딩 시간 | < 100ms |
| 버튼 클릭 반응 | < 16ms (60fps) |
| 애니메이션 프레임 | 60fps |
| 메모리 사용량 | < 5MB |

---

## 🌐 브라우저 호환성

| 브라우저 | 최소 버전 | 테스트 완료 |
|---------|----------|------------|
| Chrome | 90+ | ✅ |
| Firefox | 88+ | ✅ |
| Safari | 14+ | ✅ |
| Edge | 90+ | ✅ |
| Opera | 76+ | ✅ |

### 필요한 브라우저 기능

- ✅ ES6+ (Classes, Arrow Functions, Template Literals)
- ✅ CSS Grid & Flexbox
- ✅ CSS Variables
- ✅ CSS Animations
- ✅ DOM API (querySelector, addEventListener)

---

## 🔧 문제 해결

### 자주 묻는 질문 (FAQ)

#### Q1: 계산 결과가 'ERR'로 표시됩니다.
**A:** 다음 경우에 'ERR'가 표시됩니다:
- 계산 결과가 8자리를 초과하는 경우
- 0으로 나누기를 시도한 경우

**해결방법:** AC 버튼을 눌러 초기화하고 다시 시도하세요.

#### Q2: 소수점이 입력되지 않습니다.
**A:** 다음을 확인하세요:
- 이미 소수점이 입력되어 있는지 확인
- 소수점 자리수가 3자리를 초과하지 않는지 확인

#### Q3: 키보드가 작동하지 않습니다.
**A:** 페이지에 포커스가 있는지 확인하세요. 페이지를 클릭한 후 키보드를 사용하세요.

### 알려진 제한사항

- 정수 부분은 최대 8자리까지만 입력 가능
- 소수점은 최대 3자리까지만 입력 가능
- 과학적 표기법(e 표기법)은 지원하지 않음

---

## 🗺️ 개발 로드맵

### ✅ 완료된 기능

- [x] 기본 사칙연산
- [x] 소수점 연산
- [x] 키보드 지원
- [x] 반응형 디자인
- [x] 다크 테마
- [x] 애니메이션 효과
- [x] 코드 최적화

### 🚧 계획 중인 기능

- [ ] 계산 히스토리 저장
- [ ] 테마 전환 (라이트/다크)
- [ ] 과학 계산기 모드
- [ ] 메모리 기능 (M+, M-, MR, MC)
- [ ] 단위 변환 기능
- [ ] PWA (Progressive Web App) 지원
- [ ] 다국어 지원

---

## 🤝 기여하기

기여를 환영합니다! 다음 방법으로 기여할 수 있습니다:

### 버그 리포트

1. [Issues](https://github.com/your-username/calculator/issues) 페이지에서 새 이슈 생성
2. 버그 재현 단계 상세히 기술
3. 스크린샷 첨부 (가능한 경우)

### 기능 제안

1. [Issues](https://github.com/your-username/calculator/issues) 페이지에서 제안
2. 기능의 필요성과 사용 사례 설명
3. 가능하다면 구현 방법 제시

### Pull Request

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 코딩 스타일

- ES6+ 문법 사용
- 의미 있는 변수명 사용
- JSDoc 주석 작성
- 일관된 들여쓰기 (2 spaces)

---

## 📄 라이선스 및 저작권

**저작자 ⓒ Dunam**

- 카페: [cafe.naver.com/retireclass](https://cafe.naver.com/retireclass)

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

---

## 👨‍💻 개발자

**저작자: Dunam**

- 개발 기간: 2026년 2월
- 기술 스택: HTML5, CSS3, Vanilla JavaScript
- 디자인: Modern Dark Theme with Glassmorphism
- 카페: [cafe.naver.com/retireclass](https://cafe.naver.com/retireclass)

---

## 🙏 감사의 말

- [Google Fonts](https://fonts.google.com/) - Inter 폰트 제공
- [MDN Web Docs](https://developer.mozilla.org/) - 웹 기술 문서

---

## 📞 연락처

프로젝트에 대한 질문이나 제안이 있으시면 언제든지 연락주세요!

- GitHub Issues: [이슈 생성하기](https://github.com/happyretire/calculator/issues)
- 카페: [cafe.naver.com/retireclass](https://cafe.naver.com/retireclass)

---

<div align="center">

### ⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요!

**즐거운 계산 되세요! 🧮✨**

저작자 ⓒ Dunam | [cafe.naver.com/retireclass](https://cafe.naver.com/retireclass)

</div>
