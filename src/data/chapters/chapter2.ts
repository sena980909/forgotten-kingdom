import { Chapter } from "../types";

const chapter2: Chapter = {
  id: 2,
  title: "수몰된 도서관",
  subtitle: "JPA와 데이터의 흐름",
  springTopic: "JPA, ORM, Entity, 영속성 컨텍스트, 연관관계, N+1, JPQL",
  firstSceneId: "intro",
  scenes: {
    intro: {
      id: "intro",
      text: "성문을 지나 왕국 내부로 들어선 당신은 첫 번째 봉인된 스프링을 찾아 나섰다.\n\n폐허의 거리를 따라 한참을 걸은 끝에, 거대한 돔 형태의 건물이 모습을 드러냈다. 한때 왕국의 모든 지식을 담고 있었다는 '대도서관'이었다. 그러나 지금은 지하에서 차오른 물에 반쯤 잠겨 있었다.\n\n도서관 입구의 돌계단은 물속으로 사라져 있고, 수면 위로 고대 서적들이 둥둥 떠다니고 있었다. 물빛은 기묘한 청록색으로 빛나며, 마치 데이터의 흐름을 상징하는 듯했다.\n\n잠긴 문 앞에 희미하게 빛나는 형체가 서 있다.",
      nextSceneId: "meet_librarian",
    },

    meet_librarian: {
      id: "meet_librarian",
      text: '반투명한 형체가 천천히 모습을 드러냈다. 긴 머리를 틀어 올리고, 고대 사서복을 입은 여성의 유령이었다. 그녀의 손에는 빛나는 카탈로그가 들려 있었다.\n\n"오랜만에 방문자라니... 나는 리포지아. 이 도서관의 수호자이자 사서였지."\n\n그녀가 물에 잠긴 도서관을 쓸쓸하게 바라보았다.\n\n"이 도서관에는 왕국의 모든 데이터가 저장되어 있었어. 객체와 테이블을 잇는 마법... 우리는 그것을 \'영속의 기술\'이라 불렀지. 봉인이 걸리면서 물이 차올라 모든 것이 잠겨버렸어."\n\n"봉인을 풀려면 데이터의 흐름에 대한 일곱 가지 시련을 통과해야 해. 하나씩 통과할 때마다 물이 빠지고, 도서관이 복원될 거야."\n\n"준비됐니?"',
      speaker: "리포지아",
      nextSceneId: "first_trial_ch2",
    },

    // ========== 1번 시련: JPA와 ORM 기본 개념 ==========
    first_trial_ch2: {
      id: "first_trial_ch2",
      text: '리포지아가 물 위에 떠다니는 고대 서적 한 권을 집어 올렸다. 책을 펼치자 한쪽에는 자바 객체의 구조가, 다른 한쪽에는 데이터베이스 테이블의 구조가 그려져 있었다. 두 페이지 사이에서 빛줄기가 오가며 서로를 연결하고 있었다.\n\n"이것이 이 도서관의 핵심 마법이야. 우리는 이것을 \'번역 마법\'이라 불렀지. 객체의 세계와 테이블의 세계를 자동으로 변환해주는 기술이야."\n\n"자바 진영에서 이 번역 마법의 표준을 무엇이라 부르는지 알고 있니?"',
      speaker: "리포지아",
      springConcept: "JPA & ORM",
      choices: [
        {
          id: "correct_1",
          text: "JPA는 자바 ORM 표준 인터페이스이며, Hibernate 등이 구현체입니다. 객체와 관계형 데이터베이스 테이블을 매핑해주는 기술이죠.",
          nextSceneId: "trial1_ch2_success",
          isCorrect: true,
          explanation:
            "JPA(Java Persistence API)는 자바 ORM(Object-Relational Mapping)의 표준 인터페이스입니다. Hibernate, EclipseLink 등이 JPA의 구현체이며, 객체와 RDB 테이블 간의 매핑을 자동으로 처리합니다.",
          effect: { knowledge: 10 },
        },
        {
          id: "wrong_1a",
          text: "JPA는 NoSQL 전용 기술입니다. MongoDB 같은 문서형 데이터베이스를 위한 것이죠.",
          nextSceneId: "trial1_ch2_fail",
          isCorrect: false,
          explanation:
            "JPA는 NoSQL이 아닌 관계형 데이터베이스(RDB)를 위한 ORM 표준입니다. NoSQL을 위해서는 Spring Data MongoDB 같은 별도의 기술을 사용합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_1b",
          text: "JPA는 SQL을 직접 작성하는 라이브러리입니다. MyBatis와 동일한 기술이에요.",
          nextSceneId: "trial1_ch2_fail",
          isCorrect: false,
          explanation:
            "JPA는 SQL을 직접 작성하는 것이 아니라 객체와 테이블 간 매핑을 통해 SQL을 자동 생성하는 ORM 기술입니다. MyBatis는 SQL Mapper로, JPA와는 접근 방식이 다릅니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial1_ch2_success: {
      id: "trial1_ch2_success",
      text: '리포지아의 얼굴에 미소가 번졌다. 책에서 뿜어져 나온 빛이 도서관 벽면의 첫 번째 문양을 비추었다.\n\n"맞아! JPA는 자바 ORM의 표준 인터페이스이고, Hibernate가 가장 널리 쓰이는 구현체지. 이 도서관에서도 객체의 세계와 테이블의 세계를 이 번역 마법으로 연결했어."\n\n수면이 조금 낮아졌다. 물속에 잠겨 있던 첫 번째 책장의 윗부분이 모습을 드러냈다.\n\n"좋은 시작이야. 계속 가보자."',
      speaker: "리포지아",
      nextSceneId: "second_trial_ch2",
    },

    trial1_ch2_fail: {
      id: "trial1_ch2_fail",
      text: '리포지아가 아쉬운 듯 고개를 저었다.\n\n"아니야. JPA는 Java Persistence API의 약자로, 자바 진영의 ORM 표준 인터페이스야. 객체와 관계형 데이터베이스의 테이블을 자동으로 매핑해주는 기술이지. Hibernate가 가장 대표적인 구현체고."\n\n물이 약간 차올랐다. 발목 근처까지 물이 올라오는 것이 느껴졌다.\n\n"NoSQL 전용도 아니고, SQL을 직접 쓰는 것도 아니야. ORM... 객체-관계 매핑이라는 핵심을 기억해."',
      speaker: "리포지아",
      nextSceneId: "second_trial_ch2",
    },

    // ========== 2번 시련: Entity 매핑 ==========
    second_trial_ch2: {
      id: "second_trial_ch2",
      text: '리포지아가 물 위에 떠다니는 또 다른 책 한 권을 잡아 펼쳤다. 빈 페이지 위에 글자가 저절로 새겨지기 시작했다. 클래스의 이름이 적히고, 그 아래로 필드들이 나타났다. 동시에 반대편 페이지에는 테이블의 컬럼들이 그려졌다.\n\n"봐, 이 책에 기록이 새겨지는 과정을... 객체가 테이블에 매핑되는 과정이야. 도서관의 모든 지식은 이런 방식으로 기록되었어."\n\n"자바 클래스를 데이터베이스 테이블에 매핑하려면 어떤 어노테이션을 사용해야 하는지 알고 있니?"',
      speaker: "리포지아",
      springConcept: "Entity Mapping",
      choices: [
        {
          id: "correct_2",
          text: "@Entity로 클래스를 테이블에 매핑하고, @Id로 기본키를 지정합니다. @Column은 생략 가능하며, 필드명이 곧 컬럼명이 됩니다.",
          nextSceneId: "trial2_ch2_success",
          isCorrect: true,
          explanation:
            "@Entity 어노테이션으로 JPA가 관리하는 엔티티 클래스임을 선언하고, @Id로 기본키를 지정합니다. @Column은 생략하면 필드명이 그대로 컬럼명으로 매핑되며, 컬럼명을 다르게 하고 싶을 때만 명시합니다.",
          effect: { knowledge: 10 },
        },
        {
          id: "wrong_2a",
          text: "모든 필드에 반드시 @Column을 붙여야 합니다. 하나라도 빠지면 매핑이 되지 않아요.",
          nextSceneId: "trial2_ch2_fail",
          isCorrect: false,
          explanation:
            "@Column은 생략 가능합니다. JPA는 기본적으로 엔티티의 모든 필드를 테이블 컬럼에 매핑합니다. @Column은 컬럼명, 제약조건 등을 커스터마이징할 때만 필요합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_2b",
          text: "@Entity 대신 @Table만 붙이면 됩니다. @Table이 엔티티 선언의 핵심이에요.",
          nextSceneId: "trial2_ch2_fail",
          isCorrect: false,
          explanation:
            "@Table은 테이블 이름을 지정하는 보조 어노테이션이며, @Entity를 대체할 수 없습니다. JPA 엔티티 선언에는 반드시 @Entity가 필요하고, @Table은 테이블명을 명시적으로 지정할 때 함께 사용합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial2_ch2_success: {
      id: "trial2_ch2_success",
      text: '책 위의 글자들이 환하게 빛나며 완성되었다. 두 번째 문양이 빛을 발했다.\n\n"정확해! @Entity가 핵심이야. 이 어노테이션이 붙은 클래스가 바로 데이터베이스 테이블과 매핑되는 엔티티가 되는 거지. @Id로 기본키를 지정하고, @Column은 필요할 때만 사용하면 돼."\n\n수면이 한 단계 더 낮아졌다. 두 번째 책장이 완전히 드러나며 그 위에 놓인 서적들이 빛을 내뿜기 시작했다.',
      speaker: "리포지아",
      nextSceneId: "third_trial_ch2",
    },

    trial2_ch2_fail: {
      id: "trial2_ch2_fail",
      text: '책 위의 글자들이 흐릿하게 사라졌다. 리포지아가 다시 설명했다.\n\n"아니야. 엔티티 매핑의 핵심은 @Entity 어노테이션이야. 이걸로 JPA가 관리하는 클래스임을 선언하고, @Id로 기본키를 지정하지. @Column은 생략 가능해 - 필드명이 자동으로 컬럼명이 되거든."\n\n물이 조금 차올라 허벅지 근처까지 닿았다.\n\n"@Table은 보조 어노테이션일 뿐이야. @Entity 없이는 아무 의미가 없어."',
      speaker: "리포지아",
      nextSceneId: "third_trial_ch2",
    },

    // ========== 3번 시련: 영속성 컨텍스트 ==========
    third_trial_ch2: {
      id: "third_trial_ch2",
      text: '리포지아가 도서관 중앙으로 당신을 이끌었다. 물속에서 거대한 수정구가 희미하게 빛나고 있었다. 수정구 안에는 수많은 빛의 점들이 떠다니며, 각각이 하나의 엔티티를 나타내는 듯했다.\n\n"이것은 도서관의 심장, \'기억의 수정구\'야. 한번 읽어낸 데이터는 이 수정구가 기억하고 있어서, 같은 데이터를 다시 찾을 때 책장까지 갈 필요 없이 수정구에서 바로 꺼내줬지."\n\n"JPA에서 이 수정구와 같은 역할을 하는 것이 무엇인지 알고 있니?"',
      speaker: "리포지아",
      springConcept: "Persistence Context",
      choices: [
        {
          id: "correct_3",
          text: "영속성 컨텍스트입니다. Entity를 관리하는 1차 캐시 역할을 하며, 같은 트랜잭션 내에서 동일 Entity는 항상 같은 인스턴스를 반환합니다.",
          nextSceneId: "trial3_ch2_success",
          isCorrect: true,
          explanation:
            "영속성 컨텍스트(Persistence Context)는 엔티티를 영구 저장하는 환경으로, 1차 캐시를 통해 같은 트랜잭션 내에서 동일한 식별자의 엔티티는 항상 같은 인스턴스를 반환합니다. 변경 감지(Dirty Checking), 지연 로딩 등의 기능도 제공합니다.",
          effect: { knowledge: 12 },
        },
        {
          id: "wrong_3a",
          text: "데이터베이스에 직접 접근하는 연결 풀(Connection Pool)입니다.",
          nextSceneId: "trial3_ch2_fail",
          isCorrect: false,
          explanation:
            "연결 풀(Connection Pool)은 DB 커넥션을 관리하는 별도의 개념입니다. 영속성 컨텍스트는 엔티티를 관리하는 1차 캐시로, DB 연결과는 다른 레벨에서 동작합니다.",
          effect: { knowledge: 1, hp: -15 },
        },
        {
          id: "wrong_3b",
          text: "영구적으로 데이터를 저장하는 파일 시스템입니다. 서버가 꺼져도 데이터가 유지됩니다.",
          nextSceneId: "trial3_ch2_fail",
          isCorrect: false,
          explanation:
            "영속성 컨텍스트는 파일 시스템이 아닙니다. 메모리상에서 엔티티를 관리하는 1차 캐시이며, 트랜잭션이 끝나면 사라집니다. 영구 저장은 데이터베이스가 담당합니다.",
          effect: { knowledge: 1, hp: -15 },
        },
      ],
    },

    trial3_ch2_success: {
      id: "trial3_ch2_success",
      text: '수정구가 눈부시게 빛나며 물속에서 서서히 떠올랐다. 세 번째 문양이 활성화되었다.\n\n"맞아! 영속성 컨텍스트는 이 수정구처럼 한번 읽은 엔티티를 기억하고 있어. 1차 캐시 덕분에 같은 트랜잭션 안에서 같은 데이터를 조회하면 DB에 다시 가지 않고 캐시에서 바로 돌려주지."\n\n"그리고 변경 감지(Dirty Checking)도 가능해. 엔티티의 값을 바꾸면 트랜잭션 커밋 시 자동으로 UPDATE 쿼리가 나가거든."\n\n수면이 또 낮아졌다. 세 번째 책장이 나타나며, 수정구 주변에 빛의 고리가 형성되었다.',
      speaker: "리포지아",
      nextSceneId: "fourth_trial_ch2",
    },

    trial3_ch2_fail: {
      id: "trial3_ch2_fail",
      text: '수정구의 빛이 약해졌다. 리포지아가 안타깝다는 듯 말했다.\n\n"아니야. 이 수정구는 연결 풀이나 파일 시스템이 아니라 \'영속성 컨텍스트\'를 상징하는 거야. Entity를 관리하는 1차 캐시로, 같은 트랜잭션 내에서 동일한 ID의 Entity를 조회하면 항상 같은 인스턴스를 반환해."\n\n물이 또 차올랐다.\n\n"영속성 컨텍스트는 메모리에 존재하며, 1차 캐시, 동일성 보장, 변경 감지, 쓰기 지연 같은 기능을 제공해. 잊지 마."',
      speaker: "리포지아",
      nextSceneId: "fourth_trial_ch2",
    },

    // ========== 4번 시련: 연관관계 매핑 ==========
    fourth_trial_ch2: {
      id: "fourth_trial_ch2",
      text: '리포지아가 도서관 깊은 곳으로 당신을 안내했다. 거대한 책장들이 줄지어 서 있었는데, 책장과 책장 사이에 빛나는 마법의 끈이 연결되어 있었다. 어떤 끈은 한 방향으로만, 어떤 끈은 양쪽으로 빛이 흐르고 있었다.\n\n"이 끈들은 책장(테이블)들 사이의 관계를 나타내. 어떤 책장은 다른 책장에 종속되어 있고, 어떤 것들은 서로 참조하고 있지."\n\n"그런데 양방향으로 연결된 끈에는 반드시 한쪽이 \'주인\'이 되어야 해. 연관관계의 주인에 대해 설명해줄 수 있겠니?"',
      speaker: "리포지아",
      springConcept: "연관관계 매핑",
      choices: [
        {
          id: "correct_4",
          text: "@ManyToOne이 외래키를 관리하는 연관관계의 주인입니다. 양방향 매핑 시 mappedBy 속성으로 주인이 아닌 쪽을 지정합니다.",
          nextSceneId: "trial4_ch2_success",
          isCorrect: true,
          explanation:
            "연관관계의 주인은 외래키가 있는 쪽, 즉 @ManyToOne이 붙은 쪽입니다. 주인만이 외래키를 등록, 수정, 삭제할 수 있으며, 주인이 아닌 쪽(@OneToMany)은 mappedBy로 주인을 지정하고 읽기만 가능합니다.",
          effect: { knowledge: 13 },
        },
        {
          id: "wrong_4a",
          text: "@OneToMany 쪽이 항상 연관관계의 주인입니다. '다(Many)' 쪽보다 '일(One)' 쪽이 주도권을 가지니까요.",
          nextSceneId: "trial4_ch2_fail",
          isCorrect: false,
          explanation:
            "반대입니다. 외래키는 항상 '다(Many)' 쪽 테이블에 존재하므로, @ManyToOne이 연관관계의 주인입니다. @OneToMany 쪽은 mappedBy로 읽기 전용이 됩니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_4b",
          text: "양방향 매핑 시 양쪽 모두 외래키를 관리합니다. 어느 쪽에서든 수정할 수 있어요.",
          nextSceneId: "trial4_ch2_fail",
          isCorrect: false,
          explanation:
            "양쪽 모두 외래키를 관리하면 충돌이 발생합니다. 반드시 한쪽만 주인으로 지정하여 외래키를 관리해야 합니다. 주인이 아닌 쪽은 mappedBy를 통해 읽기만 가능합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial4_ch2_success: {
      id: "trial4_ch2_success",
      text: '책장들을 잇는 마법의 끈이 밝게 빛나며 안정적인 흐름을 보여주었다. 네 번째 문양이 활성화되었다.\n\n"정확해! 외래키가 있는 쪽, 즉 @ManyToOne이 연관관계의 주인이야. 이 도서관에서도 책(Many)이 책장(One)을 참조하는 구조였지. 책이 어떤 책장에 속하는지를 책 스스로 알고 있는 거야."\n\n"양방향 매핑에서 mappedBy는 \'나는 주인이 아니야\'라고 선언하는 것과 같아."\n\n수면이 또 한 단계 낮아졌다. 네 번째 책장이 모습을 드러내며, 책장과 책장을 잇는 빛의 끈이 더 선명해졌다.',
      speaker: "리포지아",
      nextSceneId: "fifth_trial_ch2",
    },

    trial4_ch2_fail: {
      id: "trial4_ch2_fail",
      text: '마법의 끈이 불안정하게 흔들리며 빛이 깜빡였다. 리포지아가 설명했다.\n\n"아니야. 연관관계의 주인은 외래키가 있는 쪽, 즉 @ManyToOne이야. 데이터베이스에서 외래키는 항상 \'다(Many)\' 쪽 테이블에 있잖아."\n\n물이 다시 차올랐다.\n\n"양쪽 모두 외래키를 관리하면 충돌이 일어나. 반드시 한쪽만 주인으로 지정하고, 나머지는 mappedBy로 읽기 전용으로 설정해야 해."',
      speaker: "리포지아",
      nextSceneId: "fifth_trial_ch2",
    },

    // ========== 5번 시련: N+1 문제 ==========
    fifth_trial_ch2: {
      id: "fifth_trial_ch2",
      text: '갑자기 도서관이 심하게 흔들렸다. 천장에서 돌 파편이 떨어지고, 물이 출렁이기 시작했다. 리포지아의 표정이 급격히 심각해졌다.\n\n"위험해! 느꼈니? 누군가 책을 하나하나 따로 꺼내고 있어! 한 번에 가져와야 할 것을 하나씩... 하나씩... 이러면 도서관의 구조가 버틸 수 없어!"\n\n리포지아가 다급하게 말했다.\n\n"이건 \'N+1의 저주\'야. 한 번 쿼리로 N건의 데이터를 가져온 후, 각 데이터의 연관 엔티티를 위해 N번의 추가 쿼리가 발생하는 끔찍한 문제지. 이 문제를 어떻게 해결할 수 있는지 알려줘!"',
      speaker: "리포지아",
      springConcept: "N+1 Problem",
      choices: [
        {
          id: "correct_5",
          text: "N+1은 1번 쿼리로 N건 조회 후, 각각의 연관 엔티티를 위해 N번 추가 쿼리가 발생하는 문제입니다. Fetch Join이나 @EntityGraph로 연관 데이터를 한 번에 가져와 해결합니다.",
          nextSceneId: "trial5_ch2_success",
          isCorrect: true,
          explanation:
            "N+1 문제는 Lazy Loading 시 연관 엔티티에 접근할 때마다 추가 쿼리가 발생하는 성능 문제입니다. JPQL의 'JOIN FETCH'나 @EntityGraph를 사용하면 연관 데이터를 한 번의 쿼리로 함께 가져올 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_5a",
          text: "N+1은 데이터가 N+1개 이상일 때 발생하는 오류입니다. 데이터 수를 제한하면 해결돼요.",
          nextSceneId: "trial5_ch2_fail",
          isCorrect: false,
          explanation:
            "N+1 문제는 데이터 수의 제한과는 관련이 없습니다. 1번의 메인 쿼리 + N번의 추가 쿼리가 발생하는 성능 문제로, 데이터가 많을수록 심각해집니다. Fetch Join으로 한 번에 가져오는 것이 해결책입니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_5b",
          text: "Lazy Loading을 쓰면 N+1 문제가 절대 발생하지 않습니다. 필요할 때만 가져오니까요.",
          nextSceneId: "trial5_ch2_fail",
          isCorrect: false,
          explanation:
            "오히려 Lazy Loading이 N+1 문제의 주된 원인입니다. Lazy Loading으로 설정된 연관 엔티티에 실제로 접근할 때 개별 쿼리가 발생하기 때문입니다. Fetch Join이나 @EntityGraph로 해결해야 합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial5_ch2_success: {
      id: "trial5_ch2_success",
      text: '도서관의 흔들림이 멈추었다. 리포지아가 안도의 한숨을 내쉬었다. 다섯 번째 문양이 강렬한 빛을 발했다.\n\n"휴... 잘 알고 있구나. Fetch Join으로 한 번에 가져오면 N+1의 저주가 풀려. 이 도서관에서도 책과 관련 문서를 한 번에 꺼내는 것이 원칙이었지."\n\n"\'SELECT b FROM Book b JOIN FETCH b.author\' - 이렇게 하면 책과 저자 정보를 한 방 쿼리로 가져올 수 있어."\n\n수면이 크게 낮아졌다. 다섯 번째 책장이 나타나며, 도서관의 하부 구조가 서서히 드러나기 시작했다.',
      speaker: "리포지아",
      nextSceneId: "sixth_trial_ch2",
    },

    trial5_ch2_fail: {
      id: "trial5_ch2_fail",
      text: '도서관이 다시 한번 크게 흔들렸다. 리포지아가 급히 천장을 마법으로 지탱했다.\n\n"틀렸어! N+1 문제는 데이터 수의 제한과 관계없고, Lazy Loading이 오히려 원인이 될 수 있어! 지연 로딩된 연관 엔티티에 접근할 때마다 개별 쿼리가 나가는 거지."\n\n물이 차오르며 몸이 무거워졌다.\n\n"해결책은 Fetch Join이나 @EntityGraph로 연관 데이터를 한 번의 쿼리에 함께 가져오는 거야. 꼭 기억해!"',
      speaker: "리포지아",
      nextSceneId: "sixth_trial_ch2",
    },

    // ========== 6번 시련: JPQL ==========
    sixth_trial_ch2: {
      id: "sixth_trial_ch2",
      text: '리포지아가 도서관의 검색대로 당신을 이끌었다. 검색대 위에는 고대의 마법진이 새겨져 있었고, 그 위에 손을 올리면 도서관 전체에서 원하는 책을 찾을 수 있었다.\n\n"이 검색 마법이 특별한 이유가 있어. 보통의 검색은 책장 번호와 선반 위치(테이블과 컬럼)로 찾지만, 이 마법은 \'책의 종류\'와 \'내용\'으로 검색하거든. 즉, 물리적 위치가 아닌 논리적 의미로 검색하는 거야."\n\n"JPA에서 이런 방식의 검색 기술을 무엇이라 하는지 알고 있니?"',
      speaker: "리포지아",
      springConcept: "JPQL",
      choices: [
        {
          id: "correct_6",
          text: "JPQL입니다. 엔티티 객체를 대상으로 쿼리하는 객체 지향 쿼리 언어로, 테이블이 아닌 엔티티 이름과 필드명을 사용합니다.",
          nextSceneId: "trial6_ch2_success",
          isCorrect: true,
          explanation:
            "JPQL(Java Persistence Query Language)은 엔티티 객체를 대상으로 하는 객체 지향 쿼리 언어입니다. SQL과 문법이 유사하지만, 테이블 이름 대신 엔티티 이름을, 컬럼명 대신 필드명을 사용합니다. 데이터베이스 방언에 독립적입니다.",
          effect: { knowledge: 12 },
        },
        {
          id: "wrong_6a",
          text: "JPQL은 SQL과 완전히 동일한 문법입니다. 테이블명과 컬럼명을 그대로 사용해요.",
          nextSceneId: "trial6_ch2_fail",
          isCorrect: false,
          explanation:
            "JPQL은 SQL과 유사하지만 동일하지 않습니다. 가장 큰 차이는 JPQL은 엔티티 이름과 필드명을 사용하고, SQL은 테이블명과 컬럼명을 사용한다는 점입니다.",
          effect: { knowledge: 1, hp: -10 },
        },
        {
          id: "wrong_6b",
          text: "JPQL은 NoSQL 쿼리 언어입니다. MongoDB의 쿼리 문법과 동일해요.",
          nextSceneId: "trial6_ch2_fail",
          isCorrect: false,
          explanation:
            "JPQL은 NoSQL과는 관련이 없습니다. JPA에서 관계형 데이터베이스의 엔티티를 조회하기 위한 객체 지향 쿼리 언어이며, SQL을 추상화한 것입니다.",
          effect: { knowledge: 1, hp: -10 },
        },
      ],
    },

    trial6_ch2_success: {
      id: "trial6_ch2_success",
      text: '검색대의 마법진이 환하게 빛나며, 도서관 곳곳에서 책들이 빛을 내며 반응했다. 여섯 번째 문양이 활성화되었다.\n\n"맞아! JPQL은 엔티티를 대상으로 검색하는 객체 지향 쿼리 언어야. \'SELECT m FROM Member m WHERE m.name = :name\' 이렇게 엔티티 이름과 필드명을 사용하지."\n\n"SQL을 직접 쓰는 게 아니라 엔티티 기반으로 쿼리를 작성하니까, 데이터베이스가 바뀌어도 코드를 수정할 필요가 없어. 이것이 추상화의 힘이야."\n\n수면이 더 낮아졌다. 여섯 번째 책장이 드러나며, 도서관의 바닥 문양이 조금씩 보이기 시작했다.',
      speaker: "리포지아",
      nextSceneId: "seventh_trial_ch2",
    },

    trial6_ch2_fail: {
      id: "trial6_ch2_fail",
      text: '검색대의 마법진이 깜빡이며 오류를 일으켰다. 리포지아가 진정시키며 말했다.\n\n"아니야. JPQL은 SQL과 유사하지만 같지 않아. 가장 큰 차이점은 테이블이 아닌 엔티티를, 컬럼이 아닌 필드를 대상으로 쿼리한다는 거야. NoSQL과도 전혀 관련이 없고."\n\n물이 약간 차올랐다.\n\n"JPQL은 객체 지향 쿼리 언어야. \'SELECT m FROM Member m\' - 여기서 Member는 테이블명이 아니라 엔티티 클래스명인 거지."',
      speaker: "리포지아",
      nextSceneId: "seventh_trial_ch2",
    },

    // ========== 7번 시련: Spring Data JPA Repository ==========
    seventh_trial_ch2: {
      id: "seventh_trial_ch2",
      text: '도서관의 가장 깊은 곳에 도달했다. 거대한 서가 앞에 봉인된 마법진이 있었다. 이 마법진은 한때 도서관의 모든 CRUD 작업을 자동으로 처리해주던 최고의 마법이었다.\n\n리포지아가 봉인된 마법진을 바라보며 말했다.\n\n"이것은 도서관의 마지막 비밀, \'자동 마법 생성기\'야. 사서가 원하는 검색 조건을 말하기만 하면, 마법이 자동으로 생성되었지. \'이름으로 찾아줘\'라고 말하면 알아서 검색 마법이 만들어지는 거야."\n\n"Spring Data JPA에서 이런 자동 마법 생성은 어떻게 동작하는지 알고 있니?"',
      speaker: "리포지아",
      springConcept: "Spring Data JPA",
      choices: [
        {
          id: "correct_7",
          text: "JpaRepository를 상속하면 CRUD 메서드가 자동 제공됩니다. 메서드 이름 규칙(findByName 등)으로 쿼리가 자동 생성되죠.",
          nextSceneId: "trial7_ch2_success",
          isCorrect: true,
          explanation:
            "Spring Data JPA의 JpaRepository를 상속하면 save, findById, findAll, delete 등 기본 CRUD 메서드가 자동으로 제공됩니다. 또한 메서드 이름 규칙(Query Method)을 따르면 findByName, findByAgeGreaterThan 등의 쿼리가 메서드 이름만으로 자동 생성됩니다.",
          effect: { knowledge: 13 },
        },
        {
          id: "wrong_7a",
          text: "Repository는 반드시 SQL을 직접 작성해야 합니다. @Query 없이는 아무것도 할 수 없어요.",
          nextSceneId: "trial7_ch2_fail",
          isCorrect: false,
          explanation:
            "Spring Data JPA의 가장 큰 장점은 SQL이나 JPQL을 직접 작성하지 않아도 메서드 이름만으로 쿼리가 자동 생성된다는 점입니다. @Query는 복잡한 쿼리가 필요할 때만 선택적으로 사용합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_7b",
          text: "Repository 인터페이스를 상속하면 모든 테이블에 접근 가능합니다. 하나의 Repository로 전부 처리해요.",
          nextSceneId: "trial7_ch2_fail",
          isCorrect: false,
          explanation:
            "하나의 Repository는 하나의 엔티티(테이블)를 담당합니다. JpaRepository<Member, Long>처럼 제네릭으로 엔티티 타입과 ID 타입을 지정해야 하며, 각 엔티티마다 별도의 Repository를 만들어야 합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial7_ch2_success: {
      id: "trial7_ch2_success",
      text: '봉인된 마법진이 눈부시게 빛나며 풀려나갔다! 일곱 번째 문양이 환하게 빛을 발했다.\n\n"완벽해! Spring Data JPA의 JpaRepository는 정말 놀라운 마법이야. 인터페이스만 정의하면 구현체가 자동으로 만들어지고, 메서드 이름만으로 쿼리가 생성되니까."\n\n"findByNameAndAge, findByPriceGreaterThan... 이름 규칙만 지키면 알아서 JPQL로 변환되는 거지."\n\n마법진에서 뿜어져 나온 빛이 도서관 전체로 퍼져나갔다.\n\n"모든 시련을 통과했어!"',
      speaker: "리포지아",
      nextSceneId: "library_restored",
    },

    trial7_ch2_fail: {
      id: "trial7_ch2_fail",
      text: '봉인된 마법진이 약하게 진동했지만 완전히 풀리지는 않았다. 리포지아가 설명했다.\n\n"아니야. Spring Data JPA의 핵심은 자동화야. JpaRepository를 상속하면 기본 CRUD 메서드가 자동으로 제공되고, findByName처럼 메서드 이름 규칙을 따르면 쿼리가 자동 생성돼."\n\n물이 조금 차올랐다.\n\n"그리고 하나의 Repository는 하나의 엔티티만 담당해. 모든 테이블에 접근하는 건 아니야. 각 엔티티마다 별도의 Repository가 필요하지."',
      speaker: "리포지아",
      nextSceneId: "library_restored",
    },

    // ========== 도서관 복원 ==========
    library_restored: {
      id: "library_restored",
      text: "일곱 개의 문양이 동시에 빛나며 도서관 전체가 환하게 밝아졌다. 차올랐던 물이 빠르게 빠져나가기 시작했다.\n\n물이 빠진 자리에는 아름다운 대리석 바닥이 드러났고, 정교한 모자이크가 새겨져 있었다. 물에 잠겨 있던 책장들이 하나둘 모습을 드러내며, 젖어있던 서적들이 마법의 힘으로 건조되어 원래의 빛을 되찾았다.\n\n도서관 중앙의 수정구가 눈부시게 빛나며 천천히 허공에 떠올랐다. 수정구 안의 빛의 점들이 활발하게 움직이며 도서관 곳곳으로 데이터의 흐름을 만들어냈다.\n\n바닥의 모자이크가 빛을 발하며 봉인이 풀리는 소리가 도서관 전체에 울려 퍼졌다.",
      nextSceneId: "librarian_farewell",
    },

    librarian_farewell: {
      id: "librarian_farewell",
      text: '리포지아의 반투명했던 모습이 조금 더 또렷해졌다. 그녀의 눈에 눈물이 맺혀 있었다.\n\n"고마워... 500년 만에 이 도서관이 다시 숨을 쉬고 있어. 데이터의 흐름이 복원됐어."\n\n그녀가 빛나는 카탈로그를 당신에게 건넸다.\n\n"이건 내 카탈로그야. 네가 배운 JPA의 지식이 담겨 있어. 앞으로의 여정에서 분명 도움이 될 거야."\n\n"왕국에는 아직 복원해야 할 곳이 많이 남아있어. 다음 봉인은... 화산의 대장간이라고 들었어. 보안의 마법이 걸려 있다더군."\n\n"부디 조심해. 그리고... 이 도서관에 다시 방문해줘. 언제든 환영할게."\n\n리포지아가 미소 지으며 책장 사이로 사라졌다.',
      speaker: "리포지아",
      nextSceneId: "chapter2_end",
    },

    chapter2_end: {
      id: "chapter2_end",
      text: "[ Chapter 2 완료 ]\n\n수몰된 도서관의 봉인이 해제되었습니다.\n유령 사서 리포지아의 카탈로그를 획득했습니다.\n\n학습한 Spring 개념:\n- JPA & ORM: 자바 ORM 표준 인터페이스, Hibernate가 대표 구현체\n- Entity Mapping: @Entity로 클래스-테이블 매핑, @Id로 기본키 지정\n- Persistence Context: 영속성 컨텍스트, 1차 캐시와 동일성 보장\n- 연관관계 매핑: @ManyToOne이 연관관계의 주인, mappedBy로 양방향 설정\n- N+1 Problem: 추가 쿼리 폭발 문제, Fetch Join과 @EntityGraph로 해결\n- JPQL: 엔티티 객체 대상의 객체 지향 쿼리 언어\n- Spring Data JPA: JpaRepository 상속으로 CRUD 자동 제공, 메서드 이름 기반 쿼리 생성\n\n다음 챕터에서 계속됩니다...",
      isEnding: true,
    },
  },
};

export default chapter2;
