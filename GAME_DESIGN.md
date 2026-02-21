# "잊혀진 왕국: 코드의 유산" (The Forgotten Kingdom)

### 텍스트 기반 멀티플레이어 RPG

---

## 1. 게임 컨셉

**장르**: 텍스트 기반 선택형 RPG + 실시간 멀티플레이어 요소

**핵심 아이디어**: 플레이어는 저주받은 왕국에 도착한 모험가. 왕국의 몰락 원인을 밝혀내며 던전을 탐험하고, 다른 플레이어와 거래/전투/길드 활동을 한다.

**왜 이 게임인가?**

- 텍스트 기반이라 프론트엔드 부담 최소화 → **백엔드 로직에 집중**
- 게임 특성상 복잡한 비즈니스 로직이 자연스럽게 필요
- 면접관이 "이걸 왜 만들었나?"에 대한 답이 명확함

---

## 2. 스토리

### 배경

> 500년 전, 번영하던 아르카디아 왕국이 하룻밤 사이에 멸망했다.
> 왕국의 마지막 현자가 남긴 예언서에는 이렇게 적혀있다.
> _"다섯 개의 봉인이 풀릴 때, 진실이 깨어난다."_
>
> 플레이어는 왕국의 폐허에 도착한 모험가.
> 5개 지역의 던전을 탐험하며 봉인을 풀고, 왕국 멸망의 진상을 밝힌다.

### 5개 챕터 구성

| 챕터 | 지역           | 테마        | 핵심 선택                        |
| ---- | -------------- | ----------- | -------------------------------- |
| 1장  | 폐허의 성문    | 튜토리얼/입문 | 직업 선택 (전사/마법사/도적)     |
| 2장  | 수몰된 도서관  | 지식과 진실 | NPC를 신뢰할 것인가?             |
| 3장  | 화산의 대장간  | 힘과 대가   | 금지된 무기를 만들 것인가?       |
| 4장  | 그림자 숲      | 배신과 동맹 | 길드원 중 배신자를 찾아라        |
| 5장  | 왕의 묘소      | 최종 결전   | 왕국을 부활시킬 것인가, 해방시킬 것인가? |

**멀티엔딩**: 플레이어의 선택에 따라 3가지 엔딩 분기

---

## 3. 핵심 시스템 & 포트폴리오 어필 포인트

### 3-1. 유저 시스템

| 기능                         | 기술 어필 포인트                          |
| ---------------------------- | ----------------------------------------- |
| 회원가입/로그인              | **Spring Security + JWT** (Access/Refresh Token) |
| OAuth2 소셜 로그인           | **OAuth2 Client** (Google/Kakao)          |
| 역할 관리 (유저/어드민)      | **Role-based Authorization**              |
| 비밀번호 재설정              | **이메일 발송 (Spring Mail)**             |

### 3-2. 캐릭터 & 전투 시스템

| 기능                       | 기술 어필 포인트                                |
| -------------------------- | ----------------------------------------------- |
| 캐릭터 생성 (직업/스탯)   | **복잡한 Entity 설계, JPA Inheritance**          |
| 턴제 전투 (PvE)           | **상태 패턴(State Pattern), 전략 패턴**          |
| 스킬 시스템               | **다형성 활용한 OOP 설계**                       |
| 경험치/레벨업              | **도메인 이벤트 (ApplicationEventPublisher)**    |
| PvP 대전                  | **WebSocket (STOMP) 실시간 통신**                |

### 3-3. 스토리/퀘스트 시스템

| 기능           | 기술 어필 포인트                            |
| -------------- | ------------------------------------------- |
| 메인 퀘스트 진행 | **복잡한 상태 관리, FSM**                  |
| 선택지 분기    | **그래프 기반 시나리오 엔진**               |
| 사이드 퀘스트  | **조건부 쿼리, Specification 패턴**         |
| 업적 시스템    | **이벤트 기반 아키텍처 (Observer Pattern)** |

### 3-4. 경제 시스템

| 기능               | 기술 어필 포인트                              |
| ------------------ | --------------------------------------------- |
| 인벤토리 관리      | **JPA 연관관계 (ManyToMany, OneToMany)**      |
| 상점 (NPC 거래)    | **트랜잭션 관리 (@Transactional)**            |
| 플레이어 간 거래   | **동시성 제어 (낙관적/비관적 락)**            |
| 경매장             | **스케줄러 (@Scheduled) + Redis 캐시**        |
| 골드/재화 관리     | **원자적 연산, 데이터 정합성**                |

### 3-5. 소셜 시스템

| 기능           | 기술 어필 포인트                    |
| -------------- | ----------------------------------- |
| 길드 생성/관리 | **복잡한 도메인 모델링**            |
| 실시간 채팅    | **WebSocket + Message Broker**      |
| 랭킹 시스템    | **Redis Sorted Set**                |
| 알림 시스템    | **SSE (Server-Sent Events)**        |

### 3-6. 어드민 시스템

| 기능                           | 기술 어필 포인트                |
| ------------------------------ | ------------------------------- |
| 게임 데이터 관리 (몬스터/아이템) | **CRUD + Validation**          |
| 유저 관리/제재                 | **Soft Delete, Audit Log**      |
| 게임 통계 대시보드             | **집계 쿼리, QueryDSL**        |
| 공지사항/이벤트 관리           | **페이징, 정렬, 검색**         |

---

## 4. 기술 스택

```
Backend (핵심)
├── Java 17+
├── Spring Boot 3.x
├── Spring Security 6 + JWT + OAuth2
├── Spring Data JPA + QueryDSL
├── Spring WebSocket (STOMP)
├── Spring Validation
├── Spring Mail
└── Spring AOP (로깅, 성능 측정)

Database
├── MySQL 8.0 (메인 DB)
├── Redis (캐시, 세션, 랭킹, 경매 만료)
└── H2 (테스트용)

Infra & DevOps
├── Docker + Docker Compose
├── GitHub Actions (CI/CD)
├── Swagger/OpenAPI 3.0 (API 문서)
└── Nginx (리버스 프록시)

Testing
├── JUnit 5
├── Mockito
├── RestAssured (API 통합 테스트)
└── Testcontainers (DB 통합 테스트)

Frontend (최소한)
└── Thymeleaf 또는 간단한 React SPA
```

---

## 5. DB 설계 (핵심 엔티티)

```
[User] 1---1 [Character] 1---N [Inventory]
  |                |                 |
  |                N                 1
  |           [QuestProgress]    [Item]
  |                |
  |                1
  |            [Quest] 1---N [QuestChoice]
  |
  N
[GuildMember] N---1 [Guild]

[Character] N---N [Battle] (PvP 기록)
[Character] 1---N [ChatMessage]
[Character] 1---N [AuctionItem]
[Character] 1---N [TradeHistory]
[Character] 1---N [Achievement]

[Monster] --- [Dungeon] --- [Chapter]
[Item] --- [ItemEffect]
[Skill] --- [CharacterClass]
```

---

## 6. API 설계 (주요 엔드포인트)

```
AUTH
  POST   /api/auth/signup              회원가입
  POST   /api/auth/login               로그인 (JWT 발급)
  POST   /api/auth/refresh             토큰 갱신
  POST   /api/auth/oauth2/{provider}   소셜 로그인

CHARACTER
  POST   /api/characters               캐릭터 생성
  GET    /api/characters/me             내 캐릭터 조회
  PATCH  /api/characters/me/stats       스탯 분배

STORY
  GET    /api/chapters/{id}             챕터 정보
  GET    /api/quests/current            현재 퀘스트
  POST   /api/quests/{id}/choice        선택지 선택
  GET    /api/quests/{id}/result        결과 확인

BATTLE
  POST   /api/battles/pve              PvE 전투 시작
  POST   /api/battles/pve/{id}/action  전투 행동
  POST   /api/battles/pvp/match        PvP 매칭 요청
  WS     /ws/battle/{battleId}         실시간 PvP

ECONOMY
  GET    /api/shop/items               상점 아이템 목록
  POST   /api/shop/buy                 아이템 구매
  POST   /api/trade/offer              거래 제안
  GET    /api/auction                  경매장 목록
  POST   /api/auction/bid              입찰

SOCIAL
  POST   /api/guilds                   길드 생성
  POST   /api/guilds/{id}/join         길드 가입
  GET    /api/ranking                  랭킹 조회
  WS     /ws/chat/{channelId}          실시간 채팅
```

---

## 7. 개발 로드맵 (8~10주)

| 주차       | 목표                    | 산출물                           |
| ---------- | ----------------------- | -------------------------------- |
| **1주차**  | 프로젝트 세팅 & DB 설계 | Entity, ERD, Docker 환경         |
| **2주차**  | 인증/인가 시스템        | JWT + OAuth2 로그인 완성         |
| **3주차**  | 캐릭터 & 스탯 시스템    | 캐릭터 CRUD, 직업 시스템        |
| **4주차**  | 스토리 엔진 & 퀘스트    | 시나리오 분기 로직, 1~2장       |
| **5주차**  | 전투 시스템 (PvE)       | 턴제 전투, 스킬, 몬스터 AI      |
| **6주차**  | 경제 시스템             | 인벤토리, 상점, 거래            |
| **7주차**  | 소셜 기능               | 길드, 채팅(WebSocket), 랭킹(Redis) |
| **8주차**  | 어드민 & 경매장         | 관리자 페이지, 경매 스케줄링    |
| **9주차**  | 테스트 & 문서화         | 테스트 커버리지 70%+, Swagger   |
| **10주차** | 배포 & 마무리           | Docker 배포, CI/CD, README      |

---

## 8. 면접에서의 어필 포인트

이 프로젝트를 완성하면 다음 질문에 실전 경험으로 답할 수 있다:

1. **"동시성 문제를 해결한 경험?"** → 거래/경매 시스템의 낙관적 락
2. **"JPA N+1 문제?"** → 인벤토리/길드 조회 시 Fetch Join 최적화
3. **"캐시 전략?"** → Redis를 활용한 랭킹, 경매 TTL 관리
4. **"실시간 통신 경험?"** → WebSocket STOMP 기반 PvP, 채팅
5. **"트랜잭션 관리?"** → 거래 시스템의 원자적 골드/아이템 교환
6. **"테스트 전략?"** → 단위/통합/E2E 테스트 피라미드
7. **"설계 패턴?"** → 전투의 State/Strategy, 업적의 Observer 패턴
8. **"이벤트 기반 아키텍처?"** → 레벨업 시 업적/알림 자동 트리거
