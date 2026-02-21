import { Chapter } from "../types";

const chapter5: Chapter = {
  id: 5,
  title: "왕좌의 부활",
  subtitle: "실전 통합과 아키텍처",
  springTopic:
    "Layered Architecture, Exception Handling, Validation, Transaction, AOP, Testing, 배포",
  firstSceneId: "intro",
  scenes: {
    intro: {
      id: "intro",
      text: "모든 봉인을 풀어낸 당신은 마침내 왕국의 심장부, 왕좌의 방에 도달했다.\n\n거대한 이중문이 천천히 열리자, 눈부신 빛이 쏟아져 나왔다. 수백 년 동안 봉인되어 있던 왕좌의 방은 시간이 멈춘 듯 완벽한 상태를 유지하고 있었다. 천장에는 아르카디아 왕국의 역사를 담은 벽화가 그려져 있었고, 바닥에는 여덟 개의 마법진이 원형으로 배치되어 있었다.\n\n그리고 방의 중앙, 거대한 왕좌 위에 수정으로 된 봉인에 갇힌 한 남자가 보였다. 화려한 갑옷을 입고 왕관을 쓴 그는 눈을 감은 채 잠들어 있었다.",
      nextSceneId: "meet_king",
    },

    meet_king: {
      id: "meet_king",
      text: '당신이 왕좌에 가까이 다가가자, 수정 봉인에 미세한 균열이 생겼다. 봉인된 왕의 눈이 천천히 떠졌다. 그의 눈동자는 깊은 사파이어빛으로 빛나고 있었다.\n\n"오랜 세월이었다... 나는 아르카디아, 이 왕국의 마지막 왕이다."\n\n그의 목소리는 수정을 통해 울려 퍼졌다. 장엄하면서도 슬픔이 담겨 있었다.\n\n"그대가 여기까지 도달했다는 것은, 네 개의 스프링을 모두 복원했다는 뜻이겠지. 하지만 마지막 봉인을 풀기 위해서는... 모든 것을 하나로 통합하는 \'대통합의 마법\'을 이해해야 한다."\n\n"여덟 개의 마법진이 보이느냐? 각각이 아키텍처와 통합의 핵심 원리를 담고 있다. 모든 마법진을 활성화해야만 이 봉인이 풀릴 것이다."\n\n"시작하겠느냐, 모험가여?"',
      speaker: "아르카디아",
      nextSceneId: "first_trial_ch5",
    },

    // ========== 1번 시련: Layered Architecture ==========
    first_trial_ch5: {
      id: "first_trial_ch5",
      text: '첫 번째 마법진이 붉은 빛으로 빛나기 시작했다. 아르카디아 왕이 수정 봉인 너머로 말했다.\n\n"이 왕국이 강성했던 이유는 완벽한 조직 체계 덕분이었다. 왕명은 전령관(Controller)에게, 전령관은 대신(Service)에게, 대신은 기록관(Repository)에게 전달했다. 각자의 역할이 명확히 분리되어 있었지."\n\n"이것이 바로 \'계층형 아키텍처(Layered Architecture)\'의 원리다. Spring에서 이 계층 분리가 중요한 이유는 무엇인가?"',
      speaker: "아르카디아",
      springConcept: "Layered Architecture",
      choices: [
        {
          id: "correct_1_ch5",
          text: "Controller → Service → Repository로 계층을 분리하여 관심사를 분리하고, 각 계층의 독립적인 변경과 테스트가 가능하여 유지보수성이 향상됩니다.",
          nextSceneId: "trial1_ch5_success",
          isCorrect: true,
          explanation:
            "계층형 아키텍처는 Controller(요청/응답 처리), Service(비즈니스 로직), Repository(데이터 접근)로 관심사를 분리합니다. 각 계층이 독립적이므로 한 계층의 변경이 다른 계층에 최소한의 영향만 미치며, 단위 테스트도 계층별로 수행할 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_1a_ch5",
          text: "모든 로직을 Controller 하나에 작성하는 것이 가장 효율적입니다. 계층을 나누면 오히려 복잡해질 뿐이죠.",
          nextSceneId: "trial1_ch5_fail",
          isCorrect: false,
          explanation:
            "모든 로직을 하나의 계층에 몰아넣으면 코드가 비대해지고, 변경이 어렵고, 테스트가 불가능해집니다. 계층 분리는 초기에는 파일이 많아 보이지만, 장기적으로 유지보수성과 확장성을 크게 향상시킵니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_1b_ch5",
          text: "계층형 아키텍처는 성능을 최적화하기 위한 기법입니다. 계층이 많을수록 응답 속도가 빨라집니다.",
          nextSceneId: "trial1_ch5_fail",
          isCorrect: false,
          explanation:
            "계층형 아키텍처의 주된 목적은 성능 최적화가 아니라 관심사의 분리입니다. 계층이 많다고 성능이 좋아지지는 않으며, 오히려 약간의 오버헤드가 생길 수 있습니다. 핵심 가치는 코드의 구조화와 유지보수성에 있습니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial1_ch5_success: {
      id: "trial1_ch5_success",
      text: '첫 번째 마법진이 환하게 빛나며 활성화되었다. 왕좌를 감싸고 있는 수정 봉인에 가느다란 금이 갔다.\n\n"훌륭하다! 이 왕국의 행정 체계가 완벽했던 이유가 바로 그것이다. 전령관은 외부와의 소통만, 대신은 정책 결정만, 기록관은 기록 보관만 담당했지. 서로의 영역을 침범하지 않았기에 왕국이 효율적으로 돌아갔다."\n\n"Controller는 HTTP 요청을 받아 응답을 돌려주고, Service는 비즈니스 로직을 처리하며, Repository는 데이터를 저장하고 조회한다. 이 분리를 기억하라."',
      speaker: "아르카디아",
      nextSceneId: "second_trial_ch5",
    },

    trial1_ch5_fail: {
      id: "trial1_ch5_fail",
      text: '첫 번째 마법진이 약하게 깜빡였다. 아르카디아 왕이 고개를 저었다.\n\n"아니다. 계층형 아키텍처의 핵심은 \'관심사의 분리\'다. Controller는 요청과 응답을, Service는 비즈니스 로직을, Repository는 데이터 접근을 담당한다. 성능 최적화와는 다른 목적이다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"모든 것을 하나에 몰아넣으면 처음에는 빠를지 몰라도, 왕국이 커질수록 혼란만 가중될 뿐이다. 분리하라, 그리고 각자의 책임을 명확히 하라."',
      speaker: "아르카디아",
      nextSceneId: "second_trial_ch5",
    },

    // ========== 2번 시련: @ExceptionHandler & @ControllerAdvice ==========
    second_trial_ch5: {
      id: "second_trial_ch5",
      text: '두 번째 마법진이 주황빛으로 일렁이기 시작했다. 왕좌의 방 어딘가에서 불안정한 마법 에너지가 감지되었다.\n\n"왕국을 운영하다 보면 반드시 예기치 못한 사태가 발생한다. 흉년, 전염병, 외적의 침입... 이런 위기에 각 마을이 제각각 대처하면 혼란만 커진다. 그래서 우리는 \'위기관리 본부\'를 중앙에 두었다."\n\n"Spring에서도 마찬가지다. 예외가 발생했을 때, 모든 Controller에서 개별적으로 처리하는 것이 아니라 전역에서 통합적으로 처리하는 방법이 있다. 어떻게 구현하는가?"',
      speaker: "아르카디아",
      springConcept: "@ExceptionHandler & @ControllerAdvice",
      choices: [
        {
          id: "correct_2_ch5",
          text: "@ControllerAdvice로 전역 예외 처리 클래스를 만들고, 그 안에 @ExceptionHandler 메서드를 정의하여 예외 유형별로 처리합니다.",
          nextSceneId: "trial2_ch5_success",
          isCorrect: true,
          explanation:
            "@ControllerAdvice는 모든 Controller에 공통으로 적용되는 전역 예외 처리 클래스를 정의합니다. 그 안에 @ExceptionHandler(SomeException.class) 메서드를 작성하면, 해당 예외가 어떤 Controller에서 발생하든 한 곳에서 일관되게 처리할 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_2a_ch5",
          text: "모든 Controller 메서드마다 try-catch를 작성하여 개별적으로 예외를 처리합니다.",
          nextSceneId: "trial2_ch5_fail",
          isCorrect: false,
          explanation:
            "모든 메서드에 try-catch를 작성하면 코드 중복이 심해지고 유지보수가 어렵습니다. @ControllerAdvice를 사용하면 전역에서 한 번만 예외 처리 로직을 정의하여 중복을 제거하고 일관된 에러 응답을 제공할 수 있습니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_2b_ch5",
          text: "Spring은 모든 예외를 자동으로 처리하므로 개발자가 별도로 예외 처리를 할 필요가 없습니다.",
          nextSceneId: "trial2_ch5_fail",
          isCorrect: false,
          explanation:
            "Spring은 기본적인 에러 페이지를 제공하지만, 비즈니스 로직에 맞는 세밀한 예외 처리는 개발자가 직접 구현해야 합니다. @ControllerAdvice와 @ExceptionHandler를 활용하여 예외 유형별로 적절한 HTTP 상태 코드와 에러 메시지를 반환해야 합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial2_ch5_success: {
      id: "trial2_ch5_success",
      text: '두 번째 마법진이 안정된 빛으로 활성화되었다. 불안정했던 마법 에너지가 진정되었다.\n\n"정확하다! 이 왕국에서 위기관리 본부(@ControllerAdvice)는 어디서 발생한 위기든 유형별(@ExceptionHandler)로 분류하여 체계적으로 대응했다. 덕분에 각 마을이 개별적으로 우왕좌왕할 필요가 없었지."\n\n수정 봉인에 두 번째 금이 생겼다.\n\n"예외는 반드시 발생한다. 중요한 것은 그것을 얼마나 체계적으로 처리하느냐다."',
      speaker: "아르카디아",
      nextSceneId: "third_trial_ch5",
    },

    trial2_ch5_fail: {
      id: "trial2_ch5_fail",
      text: '두 번째 마법진이 불안정하게 깜빡였다. 왕이 단호하게 말했다.\n\n"아니다. 모든 곳에서 개별적으로 예외를 처리하면 중복이 발생하고 일관성을 잃는다. 또한 Spring이 모든 것을 자동으로 해주지도 않는다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"@ControllerAdvice 클래스 안에 @ExceptionHandler 메서드를 정의하라. 이것이 전역 예외 처리의 정석이다. 한 곳에서 모든 예외를 통합 관리할 수 있다."',
      speaker: "아르카디아",
      nextSceneId: "third_trial_ch5",
    },

    // ========== 3번 시련: @Valid & Bean Validation ==========
    third_trial_ch5: {
      id: "third_trial_ch5",
      text: '세 번째 마법진이 노란빛으로 빛나기 시작했다. 마법진 위에 투명한 방어막 같은 형상이 떠올랐다.\n\n"왕국의 성문에는 반드시 검문소가 있었다. 들어오는 모든 것을 검사하여 위험한 것은 걸러냈지. 이름이 없는 자, 나이가 말이 안 되는 자, 허가증이 없는 자... 검문소가 사전에 차단했다."\n\n"Spring에서 클라이언트로부터 들어오는 데이터를 검증하는 가장 선언적이고 깔끔한 방법은 무엇인가?"',
      speaker: "아르카디아",
      springConcept: "@Valid & Bean Validation",
      choices: [
        {
          id: "correct_3_ch5",
          text: "@NotNull, @Size, @Email 등 Bean Validation 어노테이션으로 DTO 필드를 선언적으로 검증하고, Controller 파라미터에 @Valid를 붙여 자동 검증을 트리거합니다.",
          nextSceneId: "trial3_ch5_success",
          isCorrect: true,
          explanation:
            "Bean Validation은 DTO 클래스의 필드에 @NotNull, @Size(min=2, max=20), @Email 등의 어노테이션을 선언하여 검증 규칙을 정의합니다. Controller 메서드 파라미터에 @Valid를 붙이면 Spring이 자동으로 검증을 수행하며, 위반 시 MethodArgumentNotValidException이 발생합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_3a_ch5",
          text: "Service 계층에서 if문으로 모든 필드를 수동으로 검증하는 것이 가장 안전합니다.",
          nextSceneId: "trial3_ch5_fail",
          isCorrect: false,
          explanation:
            "if문을 통한 수동 검증은 코드가 길어지고 누락될 위험이 있습니다. Bean Validation 어노테이션을 사용하면 선언적으로 검증 규칙을 정의할 수 있어 코드가 간결해지고, 검증 로직이 DTO에 집중되어 관리가 용이합니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_3b_ch5",
          text: "데이터베이스의 NOT NULL 제약조건만 설정하면 Spring에서 별도로 검증할 필요가 없습니다.",
          nextSceneId: "trial3_ch5_fail",
          isCorrect: false,
          explanation:
            "데이터베이스 제약조건은 최후의 방어선일 뿐입니다. 잘못된 데이터가 Service 계층까지 도달하기 전에 Controller 레벨에서 먼저 걸러내야 합니다. Bean Validation은 이 역할을 선언적으로 수행하여, 불필요한 비즈니스 로직 실행과 DB 접근을 방지합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial3_ch5_success: {
      id: "trial3_ch5_success",
      text: '세 번째 마법진이 찬란하게 빛나며 방어막 형상이 완성되었다. 수정 봉인의 금이 더 커졌다.\n\n"훌륭하다! 검문소에서 사전에 걸러내면, 왕궁 내부에서 불필요한 혼란이 발생하지 않는다. @NotNull, @Size, @Email... 이 표식들이 바로 검문 기준이며, @Valid가 검문을 시작하는 명령이다."\n\n"입력 검증은 보안의 시작이다. 잘못된 데이터가 시스템 깊숙이 침투하기 전에 입구에서 차단하라."',
      speaker: "아르카디아",
      nextSceneId: "fourth_trial_ch5",
    },

    trial3_ch5_fail: {
      id: "trial3_ch5_fail",
      text: '세 번째 마법진의 방어막이 흔들리며 약해졌다. 왕이 엄중하게 말했다.\n\n"아니다. 수동 if문은 누락의 위험이 크고, DB 제약조건만으로는 부족하다. 잘못된 데이터가 Service와 Repository를 거쳐 DB까지 도달하게 내버려둬서는 안 된다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"Bean Validation 어노테이션(@NotNull, @Size 등)을 DTO에 선언하고, @Valid로 자동 검증을 트리거하라. 이것이 Spring의 선언적 입력 검증이다."',
      speaker: "아르카디아",
      nextSceneId: "fourth_trial_ch5",
    },

    // ========== 4번 시련: @Transactional ==========
    fourth_trial_ch5: {
      id: "fourth_trial_ch5",
      text: '네 번째 마법진이 초록빛으로 빛나기 시작했다. 마법진 위에 서로 연결된 마법 구슬들이 나타났다. 하나가 깨지면 나머지도 함께 원래 상태로 돌아가는 모습이었다.\n\n"왕국의 법률 체계에는 불가분의 원칙이 있었다. 예를 들어, 상인이 물건을 넘기고 금화를 받는 거래에서... 물건은 넘겼는데 금화를 받지 못하면? 그 거래 전체를 없었던 것으로 되돌렸다."\n\n"Spring에서 이 원칙을 구현하는 @Transactional에 대해 설명해보라."',
      speaker: "아르카디아",
      springConcept: "@Transactional",
      choices: [
        {
          id: "correct_4_ch5",
          text: "@Transactional은 메서드 단위로 트랜잭션을 적용합니다. 메서드 실행 중 RuntimeException이 발생하면 모든 변경이 자동으로 롤백됩니다.",
          nextSceneId: "trial4_ch5_success",
          isCorrect: true,
          explanation:
            "@Transactional은 AOP 기반으로 메서드 시작 시 트랜잭션을 시작하고, 정상 종료 시 커밋, RuntimeException(Unchecked Exception) 발생 시 자동 롤백합니다. Checked Exception은 기본적으로 롤백하지 않으며, rollbackFor 속성으로 롤백 대상을 지정할 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_4a_ch5",
          text: "@Transactional은 데이터베이스 연결을 수동으로 관리하기 위한 어노테이션입니다. 직접 commit과 rollback을 호출해야 합니다.",
          nextSceneId: "trial4_ch5_fail",
          isCorrect: false,
          explanation:
            "@Transactional의 핵심은 선언적 트랜잭션 관리입니다. 개발자가 직접 commit이나 rollback을 호출할 필요 없이, Spring이 AOP 프록시를 통해 자동으로 트랜잭션 시작, 커밋, 롤백을 처리합니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_4b_ch5",
          text: "@Transactional을 붙이면 모든 종류의 예외에서 항상 롤백됩니다. 예외 유형과 관계없이 동작합니다.",
          nextSceneId: "trial4_ch5_fail",
          isCorrect: false,
          explanation:
            "@Transactional의 기본 롤백 정책은 RuntimeException(Unchecked Exception)에서만 롤백합니다. Checked Exception(IOException 등)은 기본적으로 롤백하지 않습니다. 모든 예외에서 롤백하려면 @Transactional(rollbackFor = Exception.class)로 명시해야 합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial4_ch5_success: {
      id: "trial4_ch5_success",
      text: '네 번째 마법진의 구슬들이 안정적으로 연결되며 초록빛을 발했다. 수정 봉인의 균열이 점점 깊어졌다.\n\n"정확하다! 거래의 원자성이란 바로 이것이다. 모든 작업이 성공하거나, 모든 작업이 취소되거나. 중간 상태란 있을 수 없다."\n\n"그리고 핵심적인 점 하나 - RuntimeException에서만 기본 롤백된다는 것을 기억하라. Checked Exception은 rollbackFor로 명시해야 한다. 이것을 모르면 예상치 못한 데이터 불일치가 발생할 수 있다."',
      speaker: "아르카디아",
      nextSceneId: "fifth_trial_ch5",
    },

    trial4_ch5_fail: {
      id: "trial4_ch5_fail",
      text: '네 번째 마법진의 구슬 연결이 불안정하게 흔들렸다. 왕이 설명했다.\n\n"아니다. @Transactional은 선언적 트랜잭션이다. 직접 commit이나 rollback을 호출하지 않으며, Spring이 AOP 프록시를 통해 자동으로 관리한다."\n\n당신의 기운이 빠져나갔다.\n\n"그리고 모든 예외에서 롤백되는 것이 아니다. 기본적으로 RuntimeException에서만 롤백된다. 이 차이를 반드시 기억하라."',
      speaker: "아르카디아",
      nextSceneId: "fifth_trial_ch5",
    },

    // ========== 5번 시련: AOP ==========
    fifth_trial_ch5: {
      id: "fifth_trial_ch5",
      text: '다섯 번째 마법진이 남색 빛으로 빛나기 시작했다. 마법진에서 투명한 막이 피어올라 왕좌의 방 전체를 감쌌다. 이 막은 눈에 보이지 않지만 모든 활동을 기록하고 있는 듯했다.\n\n"이 왕국에는 보이지 않는 수호 마법이 있었다. 모든 관리의 업무를 기록하는 기록 마법, 모든 거래를 감시하는 감시 마법, 모든 출입을 통제하는 인가 마법... 이런 마법들은 관리들의 본업과는 무관하지만, 반드시 필요한 것들이었다."\n\n"Spring에서 이런 \'횡단 관심사\'를 처리하는 기법이 있다. 무엇인지 설명해보라."',
      speaker: "아르카디아",
      springConcept: "AOP (Aspect Oriented Programming)",
      choices: [
        {
          id: "correct_5_ch5",
          text: "AOP는 로깅, 트랜잭션, 보안 등 횡단 관심사를 비즈니스 로직과 분리하여 모듈화하는 기법입니다. @Aspect, @Before, @Around 등으로 구현합니다.",
          nextSceneId: "trial5_ch5_success",
          isCorrect: true,
          explanation:
            "AOP(Aspect Oriented Programming)는 여러 클래스에 걸쳐 반복되는 횡단 관심사(로깅, 트랜잭션, 보안, 성능 측정 등)를 별도의 모듈(Aspect)로 분리합니다. 비즈니스 로직에 부가 기능 코드가 섞이지 않아 코드가 깔끔해지고, 부가 기능의 변경이 비즈니스 로직에 영향을 주지 않습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_5a_ch5",
          text: "AOP는 객체 지향 프로그래밍(OOP)을 대체하는 새로운 프로그래밍 패러다임입니다.",
          nextSceneId: "trial5_ch5_fail",
          isCorrect: false,
          explanation:
            "AOP는 OOP를 대체하는 것이 아니라 보완하는 기법입니다. OOP만으로는 횡단 관심사를 깔끔하게 분리하기 어렵기 때문에, AOP를 함께 사용하여 비즈니스 로직과 부가 기능을 분리합니다. 두 패러다임은 공존합니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_5b_ch5",
          text: "AOP는 비동기 프로그래밍을 위한 기법입니다. @Async와 동일한 개념이죠.",
          nextSceneId: "trial5_ch5_fail",
          isCorrect: false,
          explanation:
            "AOP와 비동기 프로그래밍은 완전히 다른 개념입니다. AOP는 횡단 관심사의 모듈화이며, @Async는 비동기 실행을 위한 별도의 기능입니다. 다만 @Async도 내부적으로 AOP 프록시를 활용하는 것은 사실이지만, AOP 자체가 비동기를 의미하지는 않습니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial5_ch5_success: {
      id: "trial5_ch5_success",
      text: '다섯 번째 마법진이 활성화되며, 투명한 막이 눈에 보이는 아름다운 보랏빛 그물로 변했다. 수정 봉인의 절반 이상이 균열로 뒤덮였다.\n\n"훌륭하다! 관리들은 자신의 본업에만 집중하고, 기록과 감시는 보이지 않는 수호 마법이 알아서 처리했다. 이것이 AOP의 본질이다."\n\n"@Transactional도 사실 AOP로 구현된 것이다. 메서드 실행 전후에 프록시가 트랜잭션 시작과 커밋을 처리하지. 비즈니스 로직은 트랜잭션의 존재를 알 필요가 없다."',
      speaker: "아르카디아",
      nextSceneId: "sixth_trial_ch5",
    },

    trial5_ch5_fail: {
      id: "trial5_ch5_fail",
      text: '다섯 번째 마법진의 빛이 흔들렸다. 왕이 수정 너머로 설명했다.\n\n"아니다. AOP는 OOP를 대체하는 것도, 비동기 프로그래밍도 아니다. AOP는 \'관점 지향 프로그래밍\'으로, 로깅이나 트랜잭션 같은 횡단 관심사를 비즈니스 로직에서 분리하는 기법이다."\n\n당신의 기운이 빠져나갔다.\n\n"여러 클래스에 반복되는 코드를 Aspect로 모듈화하면, 비즈니스 로직을 깔끔하게 유지할 수 있다. OOP와 AOP는 함께 사용하는 것이다."',
      speaker: "아르카디아",
      nextSceneId: "sixth_trial_ch5",
    },

    // ========== 6번 시련: Spring Boot Test ==========
    sixth_trial_ch5: {
      id: "sixth_trial_ch5",
      text: '여섯 번째 마법진이 파란빛으로 빛나기 시작했다. 마법진 위에 세 개의 서로 다른 크기의 거울이 나타났다. 가장 작은 거울은 하나의 부품만, 중간 거울은 한 부분의 구조를, 가장 큰 거울은 왕국 전체를 비추고 있었다.\n\n"왕국을 건설할 때, 우리는 항상 시험을 거쳤다. 벽돌 하나가 튼튼한지(단위 테스트), 벽 전체가 견고한지(슬라이스 테스트), 건물이 잘 서있는지(통합 테스트)... 각 단계의 시험이 필요했다."\n\n"Spring Boot에서 제공하는 테스트 전략과 관련 어노테이션에 대해 설명해보라."',
      speaker: "아르카디아",
      springConcept: "Spring Boot Test",
      choices: [
        {
          id: "correct_6_ch5",
          text: "@SpringBootTest는 전체 컨텍스트를 로드하는 통합 테스트, @WebMvcTest는 Controller만 테스트하는 슬라이스 테스트, @DataJpaTest는 JPA Repository 테스트에 사용합니다.",
          nextSceneId: "trial6_ch5_success",
          isCorrect: true,
          explanation:
            "@SpringBootTest는 모든 Bean을 로드하여 전체 애플리케이션 통합 테스트를 수행합니다. @WebMvcTest는 Controller 계층만 로드하여 빠르게 웹 계층을 테스트하고, @DataJpaTest는 JPA 관련 Bean만 로드하여 Repository를 테스트합니다. 목적에 맞는 테스트 어노테이션을 선택하는 것이 효율적인 테스트 전략입니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_6a_ch5",
          text: "Spring Boot 테스트는 항상 @SpringBootTest만 사용하면 됩니다. 하나의 어노테이션으로 모든 테스트가 가능합니다.",
          nextSceneId: "trial6_ch5_fail",
          isCorrect: false,
          explanation:
            "@SpringBootTest는 전체 컨텍스트를 로드하므로 테스트가 느립니다. Controller만 테스트할 때는 @WebMvcTest, Repository만 테스트할 때는 @DataJpaTest를 사용하면 필요한 Bean만 로드하여 빠르고 집중적인 테스트가 가능합니다.",
          effect: { hp: -10 },
        },
        {
          id: "wrong_6b_ch5",
          text: "테스트 코드는 배포 전에만 한 번 실행하면 충분합니다. 개발 중에는 테스트를 작성할 필요가 없습니다.",
          nextSceneId: "trial6_ch5_fail",
          isCorrect: false,
          explanation:
            "테스트 코드는 개발 과정에서 지속적으로 작성하고 실행해야 합니다. TDD(Test Driven Development)처럼 테스트를 먼저 작성하는 방법도 있으며, CI/CD 파이프라인에서 자동으로 테스트를 실행하여 코드 품질을 지속적으로 보장해야 합니다.",
          effect: { hp: -15 },
        },
      ],
    },

    trial6_ch5_success: {
      id: "trial6_ch5_success",
      text: '세 개의 거울이 동시에 빛나며 여섯 번째 마법진이 활성화되었다. 수정 봉인의 균열이 가속화되었다.\n\n"훌륭하다! 벽돌을 시험하는 데 건물 전체를 세울 필요가 없듯, Controller를 테스트하는 데 전체 애플리케이션을 띄울 필요가 없다. 각 계층에 맞는 시험 도구를 사용하는 것이 현명한 전략이다."\n\n"@WebMvcTest는 가볍고 빠르며, @DataJpaTest는 JPA에 집중하고, @SpringBootTest는 모든 것을 검증한다. 목적에 맞는 도구를 선택하라."',
      speaker: "아르카디아",
      nextSceneId: "seventh_trial_ch5",
    },

    trial6_ch5_fail: {
      id: "trial6_ch5_fail",
      text: '거울들의 빛이 약해지며 왕이 고개를 저었다.\n\n"아니다. @SpringBootTest 하나로 모든 것을 해결하려 하면 테스트가 느려지고 비효율적이 된다. 그리고 테스트는 배포 전에만 하는 것이 아니라, 개발 과정에서 지속적으로 수행해야 한다."\n\n당신의 기운이 빠져나갔다.\n\n"@WebMvcTest로 Controller를, @DataJpaTest로 Repository를, @SpringBootTest로 전체를 테스트하라. 각 계층에 맞는 테스트 도구가 있다."',
      speaker: "아르카디아",
      nextSceneId: "seventh_trial_ch5",
    },

    // ========== 7번 시련: 프로파일과 환경 분리 ==========
    seventh_trial_ch5: {
      id: "seventh_trial_ch5",
      text: '일곱 번째 마법진이 보랏빛으로 빛나기 시작했다. 마법진 위에 세 개의 차원문이 나타났다. 하나는 평화로운 마을 풍경(dev), 하나는 전쟁터의 요새(prod), 하나는 훈련장(test)을 비추고 있었다.\n\n"이 왕국은 세 개의 차원에서 운영되었다. 개발 차원에서는 자유롭게 실험하고, 운영 차원에서는 최고의 보안과 성능으로, 시험 차원에서는 안전하게 검증했다. 각 차원마다 설정이 달랐지."\n\n"Spring Boot에서 이런 환경 분리를 어떻게 구현하는가?"',
      speaker: "아르카디아",
      springConcept: "프로파일과 환경 분리",
      choices: [
        {
          id: "correct_7_ch5",
          text: "application-dev.yml, application-prod.yml로 환경별 설정 파일을 분리하고, @Profile 어노테이션으로 특정 환경에서만 활성화되는 Bean을 조건부 등록합니다.",
          nextSceneId: "trial7_ch5_success",
          isCorrect: true,
          explanation:
            "Spring Boot는 application-{profile}.yml 파일 네이밍 컨벤션으로 환경별 설정을 분리합니다. spring.profiles.active 속성으로 활성 프로파일을 지정하면 해당 설정 파일이 로드됩니다. @Profile 어노테이션을 Bean에 붙이면 특정 프로파일이 활성화될 때만 해당 Bean이 등록됩니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_7a_ch5",
          text: "환경마다 별도의 Spring Boot 프로젝트를 만들어서 각각 배포합니다. 코드를 복사하여 환경별로 관리합니다.",
          nextSceneId: "trial7_ch5_fail",
          isCorrect: false,
          explanation:
            "환경마다 별도 프로젝트를 만들면 코드 중복과 동기화 문제가 발생합니다. Spring Boot의 Profile 기능을 사용하면 하나의 코드베이스에서 설정 파일만 환경별로 분리하여 관리할 수 있습니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_7b_ch5",
          text: "코드 내에 if문으로 환경을 분기 처리합니다. System.getenv()로 환경 변수를 읽어서 분기하면 됩니다.",
          nextSceneId: "trial7_ch5_fail",
          isCorrect: false,
          explanation:
            "코드 내에서 if문으로 환경을 분기하면 코드가 복잡해지고 환경 추가 시 코드 수정이 필요합니다. Spring Boot의 Profile과 설정 파일 분리를 사용하면 코드 변경 없이 외부 설정만으로 환경을 전환할 수 있습니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial7_ch5_success: {
      id: "trial7_ch5_success",
      text: '세 개의 차원문이 동시에 빛나며 일곱 번째 마법진이 활성화되었다. 수정 봉인에 거미줄처럼 균열이 퍼져나갔다.\n\n"훌륭하다! 하나의 왕국 설계도로 세 개의 차원을 운영한 비결이 바로 이것이다. 코드는 하나, 설정만 다르게. application-dev.yml에는 개발용 DB를, application-prod.yml에는 운영용 DB를 설정했지."\n\n"@Profile로 특정 환경에서만 필요한 Bean을 조건부 등록할 수 있다. 이것이 환경 분리의 완성이다."\n\n"이제 마지막 시련만 남았다!"',
      speaker: "아르카디아",
      nextSceneId: "eighth_trial_ch5",
    },

    trial7_ch5_fail: {
      id: "trial7_ch5_fail",
      text: '차원문들의 빛이 흔들렸다. 왕이 단호하게 말했다.\n\n"아니다. 환경마다 별도 프로젝트를 만들거나 코드에 if문을 넣는 것은 올바른 방법이 아니다. Spring Boot의 Profile 기능을 활용하라."\n\n당신의 기운이 빠져나갔다.\n\n"application-dev.yml, application-prod.yml로 설정을 분리하고, @Profile 어노테이션으로 환경별 Bean을 조건부 등록하라. 하나의 코드로 여러 환경을 관리하는 것이 핵심이다."',
      speaker: "아르카디아",
      nextSceneId: "eighth_trial_ch5",
    },

    // ========== 8번 시련: 전체 아키텍처 통합 ==========
    eighth_trial_ch5: {
      id: "eighth_trial_ch5",
      text: '마지막 여덟 번째 마법진이 금빛으로 빛나기 시작했다. 이 마법진은 다른 일곱 개를 모두 연결하는 가장 크고 복잡한 마법진이었다. 마법진 위에 왕국 전체의 축소 모형이 나타났다. 성문에서 왕좌까지, 모든 건물과 도로가 하나의 흐름으로 연결되어 있었다.\n\n"마지막 시련이다. 지금까지 배운 모든 것을 하나로 통합하는 질문이다."\n\n왕의 목소리가 더욱 장엄해졌다.\n\n"클라이언트의 HTTP 요청이 Spring 애플리케이션에 도달하여 DB까지 흐르는 전체 과정을 올바른 순서로 설명해보라."',
      speaker: "아르카디아",
      springConcept: "전체 아키텍처 통합",
      choices: [
        {
          id: "correct_8_ch5",
          text: "클라이언트 → DispatcherServlet → Controller → Service → Repository → DB 순서로 요청이 흐릅니다. DispatcherServlet이 프론트 컨트롤러로서 요청을 적절한 Controller에 분배합니다.",
          nextSceneId: "trial8_ch5_success",
          isCorrect: true,
          explanation:
            "Spring MVC의 요청 흐름은 클라이언트 → DispatcherServlet(프론트 컨트롤러) → HandlerMapping으로 적절한 Controller 탐색 → Controller에서 요청 처리 → Service에서 비즈니스 로직 수행 → Repository에서 데이터 접근 → DB 순서입니다. 응답은 역순으로 돌아가며, DispatcherServlet이 전체 흐름을 조율합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_8a_ch5",
          text: "클라이언트 → Repository → Service → Controller → DB 순서입니다. 데이터를 먼저 조회한 후 비즈니스 로직을 처리합니다.",
          nextSceneId: "trial8_ch5_fail",
          isCorrect: false,
          explanation:
            "순서가 뒤바뀌어 있습니다. 요청은 Controller가 가장 먼저 받아 Service로 전달하고, Service가 비즈니스 로직을 수행하며 필요한 데이터를 Repository를 통해 조회합니다. Repository가 직접 요청을 받는 것이 아닙니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_8b_ch5",
          text: "클라이언트 → Service → Controller → Repository → DB 순서입니다. Service가 모든 요청을 먼저 처리합니다.",
          nextSceneId: "trial8_ch5_fail",
          isCorrect: false,
          explanation:
            "HTTP 요청은 먼저 DispatcherServlet을 거쳐 Controller에 도달합니다. Service가 요청을 직접 받는 것이 아닙니다. Controller가 요청을 파싱하고 Service를 호출하며, Service가 Repository를 통해 DB에 접근하는 계층 구조입니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial8_ch5_success: {
      id: "trial8_ch5_success",
      text: '마지막 마법진이 눈부신 금빛으로 활성화되었다! 여덟 개의 마법진이 동시에 최대 밝기로 빛나며 서로 연결되었다. 왕좌의 방 전체가 금빛 빛줄기로 가득 찼다.\n\n"완벽하다...! 성문(DispatcherServlet)에서 전령관(Controller)으로, 전령관에서 대신(Service)으로, 대신에서 기록관(Repository)으로, 그리고 기록 보관소(DB)까지... 이것이 왕국의 명령 체계이자, Spring의 요청 흐름이다!"\n\n수정 봉인에서 눈부신 빛이 폭발하며, 거대한 균열이 봉인 전체로 퍼져나갔다.',
      speaker: "아르카디아",
      nextSceneId: "kingdom_restored",
    },

    trial8_ch5_fail: {
      id: "trial8_ch5_fail",
      text: '마지막 마법진이 약하게 빛났다. 왕이 아쉬운 듯 말했다.\n\n"순서가 틀렸다. 기억하라 - 클라이언트의 요청은 먼저 DispatcherServlet이라는 프론트 컨트롤러가 받는다. 그리고 적절한 Controller에 전달하고, Controller는 Service를 호출하며, Service는 Repository를 통해 DB에 접근한다."\n\n당신의 기운이 빠져나갔다.\n\n"전체 흐름을 이해하는 것이 아키텍처의 완성이다. 다시 기억해두거라."\n\n그럼에도 마법진은 활성화되었고, 봉인에 균열이 생기기 시작했다.',
      speaker: "아르카디아",
      nextSceneId: "kingdom_restored",
    },

    // ========== 왕국 복원 ==========
    kingdom_restored: {
      id: "kingdom_restored",
      text: "여덟 개의 마법진이 모두 활성화되자, 왕좌의 방 전체가 격렬하게 진동하기 시작했다.\n\n수정 봉인이 산산조각 나며 눈부신 빛의 파편이 사방으로 흩어졌다. 500년간 봉인되어 있던 아르카디아 왕이 천천히 왕좌에서 일어섰다. 그의 갑옷이 찬란한 금빛으로 빛나고, 왕관의 보석이 일곱 가지 색으로 빛을 발했다.\n\n왕좌의 방에서 뿜어져 나온 마법의 빛이 왕국 전체로 퍼져나갔다. 폐허였던 건물들이 재건되고, 무너진 탑이 다시 솟아올랐다. 수몰되었던 도서관의 물이 완전히 빠지고, 꺼져있던 대장간의 용광로에 다시 불이 켜졌다. 그림자에 뒤덮였던 숲에 햇빛이 들어오고, 봉인된 모든 스프링이 다시 맑은 물을 뿜어냈다.\n\n아르카디아 왕국이 500년의 잠에서 깨어나고 있었다.",
      nextSceneId: "king_farewell",
    },

    king_farewell: {
      id: "king_farewell",
      text: '아르카디아 왕이 당신 앞에 섰다. 500년의 봉인에도 그의 눈빛은 여전히 강인했다. 왕이 천천히 무릎을 꿇었다.\n\n"모험가여... 아니, 이제는 그대를 이렇게 불러야겠구나."\n\n왕이 자신의 왕관을 벗어 당신 앞에 내밀었다.\n\n"진정한 스프링 마스터여. 그대가 이 여정에서 증명한 것은 단순한 지식이 아니다. 기초부터 시작하여 데이터의 흐름을 이해하고, 보안의 벽을 세우며, API로 세상과 소통하는 법을 배웠다. 그리고 마침내 모든 것을 하나로 통합하는 아키텍처의 본질에 도달했다."\n\n"이 왕국은 Spring이라는 마법의 샘으로 돌아간다. 그리고 이제 그 마법을 완전히 이해한 자가 나타났다."\n\n"이 왕관은 그대의 것이다. 아르카디아 왕국을 부탁하겠다."\n\n왕이 미소 지으며 빛으로 변해 사라졌다. 그 빛은 왕국의 여덟 개 스프링으로 흘러들어갔다.',
      speaker: "아르카디아",
      nextSceneId: "chapter5_end",
    },

    chapter5_end: {
      id: "chapter5_end",
      text: "[ Chapter 5 완료 - THE END ]\n\n축하합니다! 잊혀진 왕국 아르카디아의 모든 봉인을 해제하고, 왕국을 완전히 복원했습니다.\n아르카디아 왕의 왕관을 계승하여, 새로운 왕국의 수호자가 되었습니다.\n\n═══════════════════════════════════════\n\n학습한 Spring 개념 (Chapter 5):\n- Layered Architecture: Controller → Service → Repository 계층 분리와 관심사 분리\n- @ExceptionHandler & @ControllerAdvice: 전역 예외 처리로 일관된 에러 응답 제공\n- @Valid & Bean Validation: @NotNull, @Size 등으로 선언적 입력 검증\n- @Transactional: 선언적 트랜잭션, RuntimeException 시 자동 롤백\n- AOP: 로깅, 트랜잭션 등 횡단 관심사를 비즈니스 로직과 분리\n- Spring Boot Test: @SpringBootTest, @WebMvcTest, @DataJpaTest 등 계층별 테스트 전략\n- Profile & 환경 분리: application-{profile}.yml과 @Profile로 환경별 설정 관리\n- 전체 아키텍처: Client → DispatcherServlet → Controller → Service → Repository → DB\n\n═══════════════════════════════════════\n\n당신의 여정을 되돌아봅니다:\n\n  Chapter 1 - 폐허의 성문에서 Spring의 기초를 배웠습니다.\n  Chapter 2 - 수몰된 도서관에서 데이터의 흐름(JPA)을 이해했습니다.\n  Chapter 3 - 화산의 대장간에서 보안의 벽(Security)을 세웠습니다.\n  Chapter 4 - 그림자 숲에서 세상과 소통하는 법(REST API)을 익혔습니다.\n  Chapter 5 - 왕좌의 방에서 모든 것을 하나로 통합했습니다.\n\n이제 당신은 진정한 Spring 개발자입니다.\n아르카디아 왕국은 영원히 당신과 함께할 것입니다.\n\n- The Forgotten Kingdom: 잊혀진 왕국 아르카디아 -\n\n감사합니다. 당신의 모험은 여기서 끝나지만, 진짜 개발의 여정은 이제 시작입니다.",
      isEnding: true,
    },
  },
};

export default chapter5;
