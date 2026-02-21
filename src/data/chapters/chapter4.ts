import { Chapter } from "../types";

const chapter4: Chapter = {
  id: 4,
  title: "봉인의 결계",
  subtitle: "Spring Security와 인증/인가",
  springTopic:
    "Spring Security, Authentication, Authorization, SecurityFilterChain, BCrypt, JWT, CSRF, CORS",
  firstSceneId: "intro",
  scenes: {
    intro: {
      id: "intro",
      text: "왕국의 내부 깊숙이 진입한 당신은 마침내 내성(内城)의 입구에 도달했다.\n\n거대한 결계가 궁전 전체를 감싸고 있었다. 투명한 보랏빛 에너지가 벽처럼 솟아올라 하늘까지 닿아 있었고, 결계의 표면에는 여덟 개의 마법 문양이 복잡하게 얽혀 있었다. 아무리 가까이 다가가도 보이지 않는 힘이 당신을 밀어냈다.\n\n결계 앞에 거대한 갑옷을 입은 기사가 미동도 없이 서 있었다. 은빛 갑옷에는 자물쇠와 방패 문양이 새겨져 있었고, 등 뒤에는 여덟 겹으로 접힌 날개 형태의 에너지가 펼쳐져 있었다.\n\n기사가 천천히 고개를 들었다.",
      nextSceneId: "meet_guardian",
    },

    meet_guardian: {
      id: "meet_guardian",
      text: '"멈추어라, 이방인이여."\n\n기사의 목소리가 결계 전체를 울렸다.\n\n"나는 가디아나. 이 내성의 결계를 수호하는 기사다. 500년 전, 왕의 명으로 여덟 겹의 보안 결계를 세웠다. 이 결계는 허가받지 못한 자의 접근을 차단하고, 허가받은 자에게만 알맞은 권한을 부여한다."\n\n가디아나가 결계를 가리켰다. 여덟 개의 마법 문양이 각각 다른 색으로 빛나고 있었다.\n\n"이 결계를 통과하려면 보안의 여덟 가지 원리를 증명해야 한다. 각 문양이 하나의 시련이다. 모든 문양을 해제해야만 결계가 풀릴 것이다."\n\n"시작하겠느냐?"',
      speaker: "가디아나",
      nextSceneId: "first_trial_ch4",
    },

    // ========== 1번 시련: Spring Security 기본 ==========
    first_trial_ch4: {
      id: "first_trial_ch4",
      text: '가디아나가 검을 뽑아 결계의 첫 번째 문양을 가리켰다. 붉은빛의 문양이 반응하며 허공에 질문의 문자를 새겼다.\n\n"첫 번째 결계다. 이 왕국의 보안 체계는 \'Spring Security\'라 불리는 마법 프레임워크로 구축되었다. 성문에서 신원을 확인하고, 궁전의 각 구역마다 출입 권한을 다르게 설정했지."\n\n"말해보아라. Spring Security란 무엇이며, 왜 필요한가?"',
      speaker: "가디아나",
      springConcept: "Spring Security 기본",
      choices: [
        {
          id: "correct_1_ch4",
          text: "인증(Authentication)과 인가(Authorization)를 담당하는 보안 프레임워크입니다. 누가 접근하는지 확인하고, 어떤 권한이 있는지 검증합니다.",
          nextSceneId: "trial1_ch4_success",
          isCorrect: true,
          explanation:
            "Spring Security는 Spring 기반 애플리케이션의 인증과 인가를 처리하는 강력한 보안 프레임워크입니다. 인증은 '누구인가'를 확인하고, 인가는 '무엇을 할 수 있는가'를 결정합니다. 세션 관리, CSRF 방어, CORS 설정 등 포괄적인 보안 기능을 제공합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_1a_ch4",
          text: "서버의 방화벽을 설정하는 네트워크 보안 도구입니다. 포트를 열고 닫는 역할을 합니다.",
          nextSceneId: "trial1_ch4_fail",
          isCorrect: false,
          explanation:
            "Spring Security는 네트워크 방화벽이 아닙니다. 애플리케이션 레벨에서 인증(Authentication)과 인가(Authorization)를 처리하는 보안 프레임워크입니다. 방화벽이나 포트 관리는 OS나 네트워크 장비의 역할입니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_1b_ch4",
          text: "데이터베이스의 데이터를 암호화하는 라이브러리입니다. 저장된 모든 데이터를 자동으로 암호화해줍니다.",
          nextSceneId: "trial1_ch4_fail",
          isCorrect: false,
          explanation:
            "Spring Security는 데이터베이스 암호화 전용 도구가 아닙니다. 비밀번호 암호화(BCrypt) 기능은 제공하지만, 핵심 역할은 인증과 인가입니다. 사용자가 누구인지 확인하고, 어떤 리소스에 접근할 수 있는지 제어하는 것이 본질입니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial1_ch4_success: {
      id: "trial1_ch4_success",
      text: '결계의 첫 번째 문양이 붉은빛에서 밝은 금빛으로 변하며 해제되기 시작했다.\n\n"정확하다. 이 결계의 근본은 두 가지 질문에 있다. 첫째, \'너는 누구인가?\' - 이것이 인증(Authentication)이다. 둘째, \'너에게 이곳에 들어올 자격이 있는가?\' - 이것이 인가(Authorization)이다."\n\n"Spring Security는 이 두 가지를 체계적으로 관리하는 보안 프레임워크다. 세션 관리, 토큰 검증, 공격 방어까지... 보안에 필요한 거의 모든 것을 제공한다."\n\n첫 번째 문양이 완전히 해제되었다. 결계의 빛이 아주 약간 옅어졌다.',
      speaker: "가디아나",
      nextSceneId: "second_trial_ch4",
    },

    trial1_ch4_fail: {
      id: "trial1_ch4_fail",
      text: '결계가 반발하며 당신을 밀어냈다. 가디아나가 고개를 저었다.\n\n"틀렸다. Spring Security는 방화벽이나 데이터 암호화 전용 도구가 아니다. 이것은 애플리케이션 레벨에서 인증(Authentication)과 인가(Authorization)를 담당하는 보안 프레임워크다."\n\n"인증은 \'너는 누구인가\'를 확인하는 과정이고, 인가는 \'너에게 권한이 있는가\'를 검증하는 과정이다. 이 두 가지가 보안의 핵심이다."\n\n당신의 몸에서 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "second_trial_ch4",
    },

    // ========== 2번 시련: SecurityFilterChain ==========
    second_trial_ch4: {
      id: "second_trial_ch4",
      text: '가디아나가 검으로 결계의 두 번째 문양을 가리켰다. 청록색 문양이 활성화되며, 결계 표면에 여러 겹의 투명한 막이 겹쳐진 모습이 드러났다.\n\n"이 결계를 자세히 보아라. 단순한 벽이 아니다. 여러 겹의 필터가 순서대로 겹쳐져 있는 구조다. 외부에서 누군가가 접근하면, 첫 번째 막이 신원을 확인하고, 두 번째 막이 토큰을 검증하고, 세 번째 막이 권한을 확인하는 식이다."\n\n"이 결계의 핵심 구조인 SecurityFilterChain에 대해 설명해보아라."',
      speaker: "가디아나",
      springConcept: "SecurityFilterChain",
      choices: [
        {
          id: "correct_2_ch4",
          text: "여러 보안 필터가 순서대로 실행되는 체인 구조로 요청을 검증합니다. 각 필터가 인증, 인가, CSRF 방어 등 특정 보안 역할을 수행합니다.",
          nextSceneId: "trial2_ch4_success",
          isCorrect: true,
          explanation:
            "SecurityFilterChain은 HTTP 요청이 컨트롤러에 도달하기 전에 여러 보안 필터를 순서대로 거치는 체인 구조입니다. UsernamePasswordAuthenticationFilter, BasicAuthenticationFilter, AuthorizationFilter 등 각 필터가 고유한 보안 역할을 수행하며, 하나라도 통과하지 못하면 요청이 차단됩니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_2a_ch4",
          text: "하나의 거대한 보안 필터가 모든 검증을 한꺼번에 처리하는 구조입니다.",
          nextSceneId: "trial2_ch4_fail",
          isCorrect: false,
          explanation:
            "SecurityFilterChain은 하나의 필터가 아닌, 여러 개의 보안 필터가 체인으로 연결된 구조입니다. 각 필터가 특정 역할(인증, 인가, CSRF 등)을 분담하여 순서대로 실행됩니다. 이렇게 분리함으로써 유연한 보안 설정이 가능해집니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_2b_ch4",
          text: "데이터베이스 쿼리를 필터링하여 보안에 위배되는 데이터를 걸러내는 구조입니다.",
          nextSceneId: "trial2_ch4_fail",
          isCorrect: false,
          explanation:
            "SecurityFilterChain은 데이터베이스 쿼리 필터링과는 관련이 없습니다. HTTP 요청이 들어올 때 서블릿 필터 레벨에서 동작하며, 요청의 인증 정보, 권한, 보안 토큰 등을 순차적으로 검증하는 필터 체인입니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial2_ch4_success: {
      id: "trial2_ch4_success",
      text: '결계의 겹쳐진 막들이 하나씩 빛나며 그 구조가 선명하게 드러났다. 두 번째 문양이 해제되었다.\n\n"훌륭하다. 이 결계가 강력한 이유는 바로 이 다중 필터 구조에 있다. 하나의 벽이 뚫려도 다음 벽이 막아낸다. 각 필터가 자신의 역할에만 집중하니 빈틈이 없지."\n\n"Spring Security에서도 마찬가지다. UsernamePasswordAuthenticationFilter가 로그인을 처리하고, AuthorizationFilter가 권한을 확인하는 식으로 역할이 분담된다."\n\n두 번째 문양이 청록빛으로 빛나며 해제되었다.',
      speaker: "가디아나",
      nextSceneId: "third_trial_ch4",
    },

    trial2_ch4_fail: {
      id: "trial2_ch4_fail",
      text: '결계의 막들이 거칠게 출렁이며 당신을 밀어냈다. 가디아나가 설명했다.\n\n"아니다. SecurityFilterChain은 하나의 거대한 필터도, 데이터베이스 필터도 아니다. HTTP 요청이 들어오면 여러 개의 보안 필터가 순서대로 실행되는 체인 구조다."\n\n"인증 필터, 인가 필터, CSRF 필터... 각각이 특정 역할을 맡아 요청을 검증한다. 이 분리된 구조가 유연하고 강력한 보안을 가능케 하는 것이다."\n\n당신의 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "third_trial_ch4",
    },

    // ========== 3번 시련: Authentication (인증) ==========
    third_trial_ch4: {
      id: "third_trial_ch4",
      text: '가디아나가 갑옷의 가슴 부분에서 빛나는 수정 배지를 꺼내 보여주었다. 배지에는 가디아나의 얼굴과 이름, 그리고 직위가 새겨져 있었다.\n\n"이것은 나의 신원 증명이다. 이 결계를 지키는 기사로서 나의 정체를 증명하는 것이지. 성문을 지나려는 모든 자는 먼저 자신이 누구인지를 증명해야 했다."\n\n가디아나가 세 번째 문양을 가리켰다. 황금빛 문양이 자물쇠 형태로 빛나고 있었다.\n\n"인증(Authentication)이란 무엇인지 설명해보아라."',
      speaker: "가디아나",
      springConcept: "Authentication (인증)",
      choices: [
        {
          id: "correct_3_ch4",
          text: "사용자가 누구인지 확인하는 과정입니다. 아이디와 비밀번호로 로그인하여 본인임을 증명하는 것이 대표적인 인증입니다.",
          nextSceneId: "trial3_ch4_success",
          isCorrect: true,
          explanation:
            "인증(Authentication)은 사용자의 신원을 확인하는 과정입니다. 가장 일반적인 방식은 아이디/비밀번호를 통한 로그인이며, OAuth2, JWT 토큰, 생체 인식 등 다양한 인증 방식이 존재합니다. Spring Security에서는 AuthenticationManager가 이 과정을 관리합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_3a_ch4",
          text: "사용자가 특정 페이지에 접근할 수 있는 권한이 있는지 확인하는 과정입니다.",
          nextSceneId: "trial3_ch4_fail",
          isCorrect: false,
          explanation:
            "그것은 인가(Authorization)에 대한 설명입니다. 인증(Authentication)은 '누구인가'를 확인하는 과정이고, 인가(Authorization)는 '무엇을 할 수 있는가'를 확인하는 과정입니다. 인증이 먼저 이루어진 후에 인가가 수행됩니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_3b_ch4",
          text: "서버가 클라이언트에게 SSL 인증서를 발급하는 과정입니다.",
          nextSceneId: "trial3_ch4_fail",
          isCorrect: false,
          explanation:
            "SSL/TLS 인증서는 네트워크 통신 보안을 위한 것이며, 애플리케이션 레벨의 사용자 인증과는 다른 개념입니다. Spring Security의 인증은 사용자의 신원(아이디/비밀번호 등)을 확인하여 시스템에 로그인하는 과정을 말합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial3_ch4_success: {
      id: "trial3_ch4_success",
      text: '황금빛 자물쇠 문양이 딸깍 소리와 함께 열렸다. 세 번째 결계가 해제되었다.\n\n"그렇다. 인증은 \'너는 누구인가?\'에 답하는 과정이다. 이 성에 들어오려는 자는 먼저 자신의 이름과 암호를 대야 했다. 그것이 바로 로그인이다."\n\n"Spring Security에서는 AuthenticationManager가 이 과정을 총괄한다. UsernamePasswordAuthenticationToken으로 자격 증명을 전달하고, UserDetailsService가 실제 사용자 정보를 조회하여 검증하지."\n\n세 번째 문양이 황금빛으로 빛나며 해제되었다.',
      speaker: "가디아나",
      nextSceneId: "fourth_trial_ch4",
    },

    trial3_ch4_fail: {
      id: "trial3_ch4_fail",
      text: '자물쇠 문양이 붉게 빛나며 잠긴 채로 남았다. 가디아나가 말했다.\n\n"틀렸다. 인증(Authentication)은 \'사용자가 누구인지 확인하는 과정\'이다. 권한 확인은 인가(Authorization)이고, SSL 인증서는 네트워크 보안의 영역이다."\n\n"가장 쉬운 예시로, 아이디와 비밀번호를 입력하여 로그인하는 것이 인증이다. \'나는 가디아나다\'라고 신원을 증명하는 것이지."\n\n당신의 몸에서 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "fourth_trial_ch4",
    },

    // ========== 4번 시련: Authorization (인가) ==========
    fourth_trial_ch4: {
      id: "fourth_trial_ch4",
      text: '가디아나가 결계 너머 궁전의 구조를 가리켰다. 궁전에는 여러 구역이 있었다 - 일반 접견실, 기밀 문서실, 왕의 사적 공간, 보물 창고 등이 보였다.\n\n"이 궁전에는 다양한 구역이 있다. 일반 방문자는 접견실까지만 허용되고, 대신들은 기밀 문서실까지, 왕족만이 사적 공간에 들어갈 수 있었다. 같은 \'인증된\' 사람이라도 들어갈 수 있는 곳이 달랐지."\n\n네 번째 문양이 은빛으로 빛나며 활성화되었다.\n\n"인가(Authorization)란 무엇인지 설명해보아라."',
      speaker: "가디아나",
      springConcept: "Authorization (인가)",
      choices: [
        {
          id: "correct_4_ch4",
          text: "인증된 사용자가 특정 리소스에 접근할 권한이 있는지 확인하는 과정입니다. ROLE_ADMIN, ROLE_USER 등 역할 기반으로 접근을 제어합니다.",
          nextSceneId: "trial4_ch4_success",
          isCorrect: true,
          explanation:
            "인가(Authorization)는 인증된 사용자에게 특정 리소스나 기능에 대한 접근 권한이 있는지 검증하는 과정입니다. Spring Security에서는 @PreAuthorize, @Secured, hasRole() 등을 사용하여 메서드나 URL 레벨에서 권한을 제어합니다. RBAC(Role-Based Access Control) 방식이 가장 일반적입니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_4a_ch4",
          text: "사용자의 아이디와 비밀번호가 맞는지 확인하는 로그인 과정입니다.",
          nextSceneId: "trial4_ch4_fail",
          isCorrect: false,
          explanation:
            "아이디와 비밀번호 확인은 인증(Authentication)입니다. 인가(Authorization)는 인증 이후의 단계로, 이미 로그인한 사용자가 특정 리소스에 접근할 '권한'이 있는지를 확인하는 과정입니다. 인증은 '누구인가', 인가는 '무엇을 할 수 있는가'입니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_4b_ch4",
          text: "외부 서비스에 API 키를 발급하여 접근을 허용하는 과정입니다.",
          nextSceneId: "trial4_ch4_fail",
          isCorrect: false,
          explanation:
            "API 키 발급은 인증의 한 방식이지, 인가의 정의는 아닙니다. 인가(Authorization)는 이미 인증된 사용자가 특정 리소스에 접근할 권한이 있는지 확인하는 과정입니다. '이 사용자는 관리자인가, 일반 사용자인가'를 판단하는 것이 인가입니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial4_ch4_success: {
      id: "trial4_ch4_success",
      text: '은빛 문양이 풀리며 궁전의 구역 구조가 선명하게 드러났다. 네 번째 결계가 해제되었다.\n\n"훌륭하다. 인가는 \'너에게 이곳에 들어올 자격이 있는가?\'를 판단하는 과정이다. 인증이 신원 확인이라면, 인가는 권한 확인이다."\n\n"Spring Security에서는 @PreAuthorize(\'hasRole(ADMIN)\')처럼 역할 기반으로 접근을 제어한다. URL 패턴별로 .requestMatchers(\'/admin/**\').hasRole(\'ADMIN\')과 같이 설정할 수도 있지."\n\n"네 개의 결계가 해제되었다. 절반을 넘겼구나. 하지만 남은 네 개가 더 까다로울 것이다."',
      speaker: "가디아나",
      nextSceneId: "fifth_trial_ch4",
    },

    trial4_ch4_fail: {
      id: "trial4_ch4_fail",
      text: '은빛 문양이 차갑게 빛나며 닫힌 채 유지되었다. 가디아나가 설명했다.\n\n"아니다. 인가(Authorization)는 로그인이나 API 키 발급이 아니다. 인증이 완료된 이후, 해당 사용자에게 특정 리소스에 접근할 권한이 있는지를 검증하는 과정이다."\n\n"예를 들어, 일반 병사는 무기고에 출입할 수 있지만 보물 창고에는 들어갈 수 없다. 반면 왕은 모든 곳에 출입 가능하다. 이것이 역할(Role) 기반 인가다."\n\n당신의 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "fifth_trial_ch4",
    },

    // ========== 5번 시련: BCrypt 비밀번호 암호화 ==========
    fifth_trial_ch4: {
      id: "fifth_trial_ch4",
      text: '가디아나가 갑옷 안에서 낡은 양피지 두루마리를 꺼냈다. 두루마리에는 알아볼 수 없는 문자들이 빼곡히 적혀 있었다.\n\n"이것은 이 성의 비밀 암호 목록이다. 하지만 보다시피 원래의 암호를 알아볼 수 없게 변환되어 있다. 적에게 이 두루마리가 탈취되더라도 원래의 암호를 알아낼 수 없도록 하기 위해서다."\n\n가디아나가 두루마리를 다시 접으며 다섯 번째 문양을 가리켰다. 녹색 문양이 빛나고 있었다.\n\n"비밀번호를 안전하게 저장하기 위해 Spring Security는 BCrypt를 권장한다. 왜 BCrypt인지 설명해보아라."',
      speaker: "가디아나",
      springConcept: "BCrypt 비밀번호 암호화",
      choices: [
        {
          id: "correct_5_ch4",
          text: "단방향 해시 함수에 Salt를 추가하여 레인보우 테이블 공격을 방지하고, 같은 비밀번호라도 매번 다른 해시값을 생성하기 때문입니다.",
          nextSceneId: "trial5_ch4_success",
          isCorrect: true,
          explanation:
            "BCrypt는 단방향 해시 함수로 원본 비밀번호를 복원할 수 없습니다. 자동으로 랜덤 Salt를 추가하여 같은 비밀번호라도 매번 다른 해시값이 생성되므로 레인보우 테이블 공격이 무효화됩니다. 또한 cost factor로 해싱 속도를 조절할 수 있어 브루트포스 공격에도 강합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_5a_ch4",
          text: "양방향 암호화라서 필요할 때 원래 비밀번호를 복원할 수 있기 때문입니다.",
          nextSceneId: "trial5_ch4_fail",
          isCorrect: false,
          explanation:
            "BCrypt는 양방향이 아닌 단방향 해시 함수입니다. 한번 해싱된 비밀번호는 원래 값으로 복원할 수 없습니다. 이것이 비밀번호 저장에 안전한 이유입니다. 비밀번호 확인은 입력값을 해싱하여 저장된 해시값과 비교하는 방식으로 이루어집니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_5b_ch4",
          text: "같은 비밀번호는 항상 같은 결과가 나오므로 빠르게 비교할 수 있기 때문입니다.",
          nextSceneId: "trial5_ch4_fail",
          isCorrect: false,
          explanation:
            "BCrypt의 핵심 특징은 같은 비밀번호라도 Salt 때문에 매번 다른 해시값이 생성된다는 것입니다. 같은 결과가 나온다면 레인보우 테이블 공격에 취약해집니다. BCrypt는 의도적으로 느린 해싱을 사용하여 보안성을 높입니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial5_ch4_success: {
      id: "trial5_ch4_success",
      text: '녹색 문양이 밝게 빛나며 해제되었다. 두루마리의 암호화된 문자들이 잠시 빛났다가 사라졌다.\n\n"정확하다. 이 암호 목록은 일방통행 마법으로 보호되어 있다. 아무리 강력한 마법사라도 변환된 문자에서 원래 암호를 되돌릴 수 없다. 그것이 단방향 해시의 본질이다."\n\n"게다가 같은 암호를 적어도 매번 다른 문자로 변환된다. Salt라는 무작위 값이 섞이기 때문이지. 적이 이 두루마리를 손에 넣어도, 미리 만들어둔 변환표(레인보우 테이블)로는 해독할 수 없다."\n\n다섯 번째 문양이 해제되었다. 결계의 빛이 눈에 띄게 약해졌다.',
      speaker: "가디아나",
      nextSceneId: "sixth_trial_ch4",
    },

    trial5_ch4_fail: {
      id: "trial5_ch4_fail",
      text: '녹색 문양이 거부하며 강하게 빛났다. 가디아나가 두루마리를 펼쳐 보이며 말했다.\n\n"틀렸다. BCrypt는 단방향 해시 함수다. 원래 비밀번호로 되돌릴 수 없다는 뜻이다. 양방향이면 적에게 탈취당했을 때 모든 암호가 노출된다."\n\n"그리고 BCrypt는 같은 비밀번호라도 Salt 때문에 매번 다른 해시값을 만들어낸다. 이것이 레인보우 테이블 공격을 무효화하는 핵심이다."\n\n당신의 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "sixth_trial_ch4",
    },

    // ========== 6번 시련: JWT (JSON Web Token) ==========
    sixth_trial_ch4: {
      id: "sixth_trial_ch4",
      text: '가디아나가 허리춤에서 삼단으로 접힌 금속 패를 꺼내 보여주었다. 첫 번째 판에는 종류와 알고리즘이, 두 번째 판에는 소유자의 정보와 만료 시간이, 세 번째 판에는 복잡한 마법 봉인이 새겨져 있었다.\n\n"이것은 \'통행 토큰\'이다. 한번 인증을 마친 자에게 발급되며, 이후에는 이 토큰만 보여주면 다시 신원을 확인하지 않아도 된다. 성 안에서 매번 암호를 물을 수 없으니까."\n\n여섯 번째 문양이 보라색으로 빛나기 시작했다.\n\n"JWT, JSON Web Token의 구조와 용도를 설명해보아라."',
      speaker: "가디아나",
      springConcept: "JWT (JSON Web Token)",
      choices: [
        {
          id: "correct_6_ch4",
          text: "Header.Payload.Signature 구조로, 서버에 세션을 저장하지 않고도 사용자 상태를 유지하는 토큰 기반 인증 방식입니다.",
          nextSceneId: "trial6_ch4_success",
          isCorrect: true,
          explanation:
            "JWT는 Header(알고리즘, 토큰 타입), Payload(사용자 정보, 만료 시간 등 클레임), Signature(위변조 방지 서명)의 세 부분으로 구성됩니다. 서버가 세션을 유지할 필요 없이 토큰 자체에 정보가 담겨 있어 Stateless한 인증이 가능하며, 분산 서버 환경에서 특히 유용합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_6a_ch4",
          text: "서버 메모리에 세션을 저장하여 사용자 상태를 관리하는 기술입니다.",
          nextSceneId: "trial6_ch4_fail",
          isCorrect: false,
          explanation:
            "그것은 세션 기반 인증에 대한 설명입니다. JWT는 정반대로, 서버에 세션을 저장하지 않는 Stateless 방식입니다. 토큰 자체에 사용자 정보가 담겨 있어 서버가 상태를 기억할 필요가 없습니다. 이 덕분에 서버 확장(Scale-out)이 용이합니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_6b_ch4",
          text: "JSON 형식으로 데이터를 암호화하여 데이터베이스에 저장하는 기술입니다.",
          nextSceneId: "trial6_ch4_fail",
          isCorrect: false,
          explanation:
            "JWT는 데이터베이스 저장 기술이 아닙니다. JWT는 인증 정보를 담은 토큰으로, Header.Payload.Signature 구조를 가지며 클라이언트와 서버 사이에서 인증 상태를 전달하는 데 사용됩니다. 기본적으로 암호화가 아닌 서명(Signature)으로 위변조를 방지합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial6_ch4_success: {
      id: "trial6_ch4_success",
      text: '삼단 금속 패가 빛나며 그 구조가 허공에 크게 투영되었다. 여섯 번째 문양이 해제되었다.\n\n"정확하다. 이 통행 토큰은 세 부분으로 나뉜다. 첫째 판(Header)은 어떤 마법 방식으로 봉인했는지, 둘째 판(Payload)은 소유자가 누구이며 언제까지 유효한지, 셋째 판(Signature)은 위조를 방지하는 마법 봉인이다."\n\n"이 토큰 덕분에 성 안의 경비병들은 매번 중앙에 신원을 조회하지 않아도 된다. 토큰만 확인하면 되니까. 이것이 Stateless 인증의 핵심이다."\n\n여섯 번째 결계가 보라색 빛과 함께 사라졌다. 남은 문양은 두 개뿐이었다.',
      speaker: "가디아나",
      nextSceneId: "seventh_trial_ch4",
    },

    trial6_ch4_fail: {
      id: "trial6_ch4_fail",
      text: '금속 패가 차갑게 식으며 빛을 잃었다. 가디아나가 말했다.\n\n"아니다. JWT는 세션 저장이나 데이터베이스 기술이 아니다. Header.Payload.Signature의 세 부분으로 구성된 토큰이며, 서버에 상태를 저장하지 않는 Stateless 인증 방식이다."\n\n"토큰 자체에 사용자 정보가 담겨 있어 서버가 세션을 유지할 필요가 없다. 여러 대의 서버로 분산 운영할 때 특히 유리하지."\n\n당신의 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "seventh_trial_ch4",
    },

    // ========== 7번 시련: CSRF (Cross-Site Request Forgery) ==========
    seventh_trial_ch4: {
      id: "seventh_trial_ch4",
      text: '가디아나의 표정이 어두워졌다. 그가 결계 너머 궁전의 한 구역을 가리켰다. 그곳에는 과거 침입의 흔적이 남아 있었다.\n\n"500년 전, 이 성이 위협받았던 적이 있다. 적은 정면으로 공격하지 않았다. 대신 성 안의 병사를 속여 그 병사의 권한으로 성문을 열게 만들었지. 병사는 자신이 속았다는 것조차 몰랐다."\n\n일곱 번째 문양이 어두운 적색으로 빛나고 있었다.\n\n"이런 교묘한 공격을 CSRF라 부른다. CSRF 공격이란 무엇이며, 어떻게 방어하는가?"',
      speaker: "가디아나",
      springConcept: "CSRF (Cross-Site Request Forgery)",
      choices: [
        {
          id: "correct_7_ch4",
          text: "사용자의 인증 정보를 악용하여 의도하지 않은 위조 요청을 보내는 공격입니다. 서버가 발급한 CSRF 토큰을 검증하여 방어합니다.",
          nextSceneId: "trial7_ch4_success",
          isCorrect: true,
          explanation:
            "CSRF는 인증된 사용자의 브라우저를 통해 악의적인 요청을 보내는 공격입니다. 사용자가 악성 사이트를 방문하면, 해당 사이트가 사용자의 인증 쿠키를 이용해 원래 서버에 위조 요청을 보냅니다. 서버가 매 요청마다 CSRF 토큰을 검증함으로써 정상적인 요청인지 확인하여 방어합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_7a_ch4",
          text: "서버의 데이터베이스에 SQL을 주입하여 데이터를 탈취하는 공격입니다.",
          nextSceneId: "trial7_ch4_fail",
          isCorrect: false,
          explanation:
            "그것은 SQL Injection 공격에 대한 설명입니다. CSRF는 사용자의 인증 정보(쿠키)를 악용하여 사용자가 의도하지 않은 요청을 서버에 보내는 공격입니다. 예를 들어 사용자가 로그인된 상태에서 악성 링크를 클릭하면 사용자 모르게 송금 요청이 전송될 수 있습니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_7b_ch4",
          text: "웹페이지에 악성 스크립트를 삽입하여 다른 사용자의 정보를 빼내는 공격입니다.",
          nextSceneId: "trial7_ch4_fail",
          isCorrect: false,
          explanation:
            "그것은 XSS(Cross-Site Scripting) 공격에 대한 설명입니다. CSRF는 스크립트 삽입이 아니라, 인증된 사용자의 권한을 도용하여 위조된 요청을 서버에 보내는 공격입니다. CSRF 토큰 검증, SameSite 쿠키, Referer 헤더 확인 등으로 방어합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial7_ch4_success: {
      id: "trial7_ch4_success",
      text: '어두운 적색 문양이 맑은 백색으로 변하며 해제되었다. 일곱 번째 결계가 풀렸다.\n\n"훌륭하다. CSRF는 매우 교활한 공격이다. 적이 직접 성벽을 넘는 것이 아니라, 이미 성 안에 있는 병사를 조종하여 자신의 목적을 달성하는 것이지."\n\n"방어의 핵심은 토큰 검증이다. 서버가 발급한 고유 토큰을 매 요청에 함께 보내도록 하고, 서버는 이 토큰이 유효한지 확인한다. 외부에서 위조한 요청에는 이 토큰이 없으므로 차단된다."\n\n"이제 마지막 한 개만 남았다. 거의 다 왔다."',
      speaker: "가디아나",
      nextSceneId: "eighth_trial_ch4",
    },

    trial7_ch4_fail: {
      id: "trial7_ch4_fail",
      text: '적색 문양이 불길하게 맥동하며 당신을 밀어냈다. 가디아나가 말했다.\n\n"아니다. SQL Injection이나 XSS와는 다른 공격이다. CSRF, Cross-Site Request Forgery는 인증된 사용자의 권한을 악용하는 공격이다. 사용자의 브라우저에 저장된 쿠키를 이용해 사용자가 모르게 위조 요청을 보내는 것이지."\n\n"서버가 매 요청마다 CSRF 토큰을 검증하면, 정상적인 요청만 통과시킬 수 있다. 이것이 방어의 핵심이다."\n\n당신의 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "eighth_trial_ch4",
    },

    // ========== 8번 시련: CORS (Cross-Origin Resource Sharing) ==========
    eighth_trial_ch4: {
      id: "eighth_trial_ch4",
      text: '마지막 문양 앞에 섰다. 가디아나가 결계의 가장 바깥쪽을 가리켰다. 결계 외부에서 다양한 방향으로 빛줄기가 날아오고 있었다. 어떤 것은 결계에 부딪혀 튕겨나가고, 어떤 것은 특정 통로를 통해 안으로 들어오고 있었다.\n\n"이 결계의 마지막 층은 외부 세계와의 소통을 관리한다. 이 성은 우방국과는 교류해야 하지만, 적국의 접근은 차단해야 한다. 같은 왕국 내의 요청은 허용하지만, 외부 왕국에서 오는 요청은 선별적으로 허용하거나 차단해야 하는 것이지."\n\n마지막 하늘색 문양이 빛을 발했다.\n\n"CORS란 무엇이며, 왜 필요한지 설명해보아라."',
      speaker: "가디아나",
      springConcept: "CORS (Cross-Origin Resource Sharing)",
      choices: [
        {
          id: "correct_8_ch4",
          text: "다른 출처(도메인)에서의 리소스 요청을 허용하거나 차단하는 브라우저 보안 정책입니다. 서버에서 Access-Control-Allow-Origin 등의 헤더로 허용 범위를 설정합니다.",
          nextSceneId: "trial8_ch4_success",
          isCorrect: true,
          explanation:
            "CORS는 브라우저의 동일 출처 정책(Same-Origin Policy)에 의해, 다른 도메인에서 온 요청을 제어하는 메커니즘입니다. 서버가 응답 헤더에 Access-Control-Allow-Origin을 설정하여 허용할 출처를 지정합니다. Spring Security에서는 CorsConfigurationSource를 통해 허용 도메인, 메서드, 헤더 등을 세밀하게 설정할 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_8a_ch4",
          text: "서버 간의 데이터 동기화를 위한 프로토콜입니다. 여러 서버의 데이터를 일치시키는 역할을 합니다.",
          nextSceneId: "trial8_ch4_fail",
          isCorrect: false,
          explanation:
            "CORS는 서버 간 데이터 동기화 프로토콜이 아닙니다. 브라우저에서 다른 출처(프로토콜, 도메인, 포트가 다른 서버)의 리소스를 요청할 때 보안을 위해 적용되는 브라우저 보안 정책입니다. 서버가 아닌 브라우저 레벨에서 동작한다는 점이 핵심입니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_8b_ch4",
          text: "모든 외부 요청을 무조건 차단하는 방화벽 설정입니다. 내부 요청만 허용합니다.",
          nextSceneId: "trial8_ch4_fail",
          isCorrect: false,
          explanation:
            "CORS는 모든 외부 요청을 차단하는 것이 아니라, 다른 출처에서의 요청을 선별적으로 허용하거나 차단하는 정책입니다. 프론트엔드(React 등)와 백엔드(Spring)가 다른 도메인에서 운영될 때 CORS 설정으로 프론트엔드의 요청을 허용할 수 있습니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial8_ch4_success: {
      id: "trial8_ch4_success",
      text: '마지막 하늘색 문양이 찬란하게 빛나며 해제되었다! 여덟 개의 문양이 모두 풀렸다.\n\n"완벽하다. CORS는 이 결계의 외교 정책과 같다. 같은 왕국(Same Origin)의 요청은 자유롭게 통과하지만, 외부 왕국(Cross Origin)의 요청은 우리가 설정한 규칙에 따라 선별적으로 허용된다."\n\n"프론트엔드와 백엔드가 다른 도메인에서 운영되는 현대의 구조에서 CORS 설정은 필수적이다. Access-Control-Allow-Origin 헤더로 신뢰할 수 있는 출처를 명시해야 하지."\n\n여덟 개의 문양이 동시에 빛나기 시작했다!',
      speaker: "가디아나",
      nextSceneId: "barrier_broken",
    },

    trial8_ch4_fail: {
      id: "trial8_ch4_fail",
      text: '하늘색 문양이 거부하며 빛을 잃었다. 가디아나가 설명했다.\n\n"아니다. CORS는 서버 간 동기화 프로토콜도, 모든 것을 차단하는 방화벽도 아니다. 브라우저의 보안 정책으로, 다른 출처(도메인)에서 오는 리소스 요청을 선별적으로 허용하거나 차단하는 메커니즘이다."\n\n"서버가 Access-Control-Allow-Origin 헤더로 허용할 출처를 지정하면, 브라우저가 이를 확인하고 요청을 통과시키거나 차단한다."\n\n당신의 기운이 빠져나갔다.',
      speaker: "가디아나",
      nextSceneId: "barrier_broken",
    },

    // ========== 결계 해제 ==========
    barrier_broken: {
      id: "barrier_broken",
      text: "여덟 개의 문양이 동시에 찬란한 빛을 내뿜었다. 보랏빛 결계 전체가 진동하며 금빛 균열이 사방으로 퍼져나갔다.\n\n거대한 결계가 유리처럼 산산이 부서지기 시작했다. 파편들은 땅에 닿기 전에 빛으로 변해 사라졌다. 500년간 궁전을 감싸고 있던 봉인이 마침내 풀린 것이다.\n\n결계가 사라진 자리에 내성의 웅장한 모습이 드러났다. 고대의 건축미가 살아 숨 쉬는 궁전의 회랑, 정원, 그리고 높이 솟은 탑들이 석양빛 아래 빛나고 있었다.\n\n차가운 바람이 500년 만에 궁전 안으로 불어들어왔다.",
      nextSceneId: "guardian_farewell",
    },

    guardian_farewell: {
      id: "guardian_farewell",
      text: '가디아나가 검을 거두고 무릎을 꿇었다. 은빛 갑옷이 부드러운 빛을 내며, 여덟 겹의 날개 에너지가 서서히 접혀들었다.\n\n"여덟 개의 결계를 모두 해제하였다. 보안의 원리를 이해한 자만이 이 결계를 통과할 수 있었으니, 그대는 자격이 있다."\n\n가디아나가 천천히 일어서며 말했다.\n\n"내가 지키던 것은 결계만이 아니다. 이 안에는 왕국의 가장 깊은 비밀이 잠들어 있다. 왕의 묘소, 고대 마법의 근원, 그리고... 왕국이 멸망한 진짜 이유가."\n\n"보안은 한번 설정하면 끝이 아니다. 끊임없이 새로운 위협이 나타나고, 그에 맞서 방어를 갱신해야 한다. 그대가 배운 여덟 가지 원리를 항상 기억하라."\n\n"앞으로의 여정에 나의 축복을 더하겠다. 건투를 빈다, 모험가여."',
      speaker: "가디아나",
      nextSceneId: "chapter4_end",
    },

    chapter4_end: {
      id: "chapter4_end",
      text: "[ Chapter 4 완료 ]\n\n봉인의 결계가 해제되었습니다.\n결계의 수호기사 가디아나의 축복을 받았습니다.\n\n학습한 Spring 개념:\n- Spring Security: 인증(Authentication)과 인가(Authorization)를 담당하는 보안 프레임워크\n- SecurityFilterChain: 여러 보안 필터가 순서대로 실행되는 체인 구조\n- Authentication (인증): 사용자가 누구인지 확인하는 과정 (로그인)\n- Authorization (인가): 인증된 사용자의 리소스 접근 권한 확인\n- BCrypt: 단방향 해시 + Salt로 비밀번호를 안전하게 저장\n- JWT: Header.Payload.Signature 구조의 Stateless 토큰 기반 인증\n- CSRF: 인증 정보 악용 위조 요청 공격, 토큰 검증으로 방어\n- CORS: 다른 출처에서의 리소스 요청을 제어하는 브라우저 보안 정책\n\n다음 챕터에서 계속됩니다...",
      isEnding: true,
    },
  },
};

export default chapter4;
