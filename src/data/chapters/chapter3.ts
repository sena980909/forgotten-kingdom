import { Chapter } from "../types";

const chapter3: Chapter = {
  id: 3,
  title: "망각의 탑",
  subtitle: "Spring MVC와 REST API",
  springTopic:
    "Spring MVC, DispatcherServlet, @Controller, @RestController, @RequestMapping, ResponseEntity, @RequestBody, @PathVariable",
  firstSceneId: "intro",
  scenes: {
    intro: {
      id: "intro",
      text: "도서관을 뒤로하고 왕국의 중심부를 향해 걸어가던 당신은, 하늘을 찌를 듯 솟아오른 거대한 탑을 발견했다.\n\n일곱 층으로 이루어진 이 탑은 한때 아르카디아 왕국의 통신 중추였다. 왕국의 모든 메시지, 명령, 요청이 이 탑을 거쳐 적절한 곳으로 전달되었다고 한다. 그러나 지금은 각 층의 마법진이 봉인되어 있어, 탑 전체가 침묵에 잠겨 있었다.\n\n탑의 입구에 다다르자, 무거운 철문이 저절로 열리며 안쪽에서 푸른 빛이 새어 나왔다. 탑의 1층 중앙에 갑옷을 입은 기사가 서 있었다. 그의 몸은 마법의 빛줄기로 이루어져 있었고, 수천 개의 빛이 그의 몸을 통과하며 사방으로 흩어지고 있었다.",
      nextSceneId: "meet_dispatcher",
    },

    meet_dispatcher: {
      id: "meet_dispatcher",
      text: '빛의 기사가 천천히 고개를 들었다. 그의 눈에서 푸른 광채가 뿜어져 나왔다.\n\n"멈춰라, 방문자여. 나는 디스패처. 이 망각의 탑의 관리자이자, 모든 요청을 처리하는 자다."\n\n그가 탑의 중심축을 가리켰다. 중심축에는 일곱 개의 봉인된 마법진이 각 층으로 이어져 있었다.\n\n"이 탑은 왕국의 모든 통신을 관장했다. 외부에서 들어오는 모든 요청(Request)은 반드시 나를 거쳤고, 나는 그 요청을 분석하여 적절한 처리자(Handler)에게 전달했지. 그리고 처리 결과(Response)를 다시 요청자에게 돌려보냈다."\n\n"봉인이 걸리면서 탑의 기능이 멈추었다. 여덟 개의 시련을 통과하면 일곱 개의 층이 모두 복원될 것이다."\n\n"준비가 되었느냐?"',
      speaker: "디스패처",
      nextSceneId: "first_trial_ch3",
    },

    // ========== 1번 시련: Spring MVC 패턴 ==========
    first_trial_ch3: {
      id: "first_trial_ch3",
      text: '디스패처가 허공에 세 개의 빛나는 구체를 소환했다. 하나는 붉은색(Model), 하나는 초록색(View), 하나는 푸른색(Controller)이었다. 세 구체가 삼각형을 이루며 회전했다.\n\n"이 탑의 통신 체계는 세 가지 역할의 조화로 이루어졌다. 데이터를 담는 그릇, 결과를 보여주는 창, 그리고 이 둘을 중재하는 지휘관. 우리는 이것을 \'MVC 패턴\'이라 불렀다."\n\n"첫 번째 시련이다. MVC 패턴에서 Controller의 역할은 무엇인가?"',
      speaker: "디스패처",
      springConcept: "Spring MVC Pattern",
      choices: [
        {
          id: "correct_1_ch3",
          text: "Controller는 클라이언트의 요청을 받아 비즈니스 로직(Model)을 호출하고, 그 결과를 적절한 View로 반환하는 중재자 역할을 합니다.",
          nextSceneId: "trial1_ch3_success",
          isCorrect: true,
          explanation:
            "Controller는 MVC 패턴의 중재자입니다. HTTP 요청을 받아 적절한 Service(비즈니스 로직)를 호출하고, 결과 데이터를 Model에 담아 View에 전달합니다. Spring에서는 @Controller 어노테이션으로 선언합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_1a_ch3",
          text: "Controller는 데이터베이스에 직접 접근하여 데이터를 저장하고 조회하는 역할을 합니다.",
          nextSceneId: "trial1_ch3_fail",
          isCorrect: false,
          explanation:
            "데이터베이스 접근은 Repository(DAO) 계층의 역할입니다. Controller는 요청을 받아 Service를 호출하고 응답을 반환하는 중재자이며, 직접 DB에 접근하지 않습니다. 계층 분리가 MVC의 핵심입니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_1b_ch3",
          text: "Controller는 HTML 화면을 직접 렌더링하여 사용자에게 보여주는 역할을 합니다.",
          nextSceneId: "trial1_ch3_fail",
          isCorrect: false,
          explanation:
            "화면 렌더링은 View의 역할입니다. Controller는 요청을 처리하고 어떤 View를 사용할지 결정하지만, 실제 렌더링은 View가 담당합니다. Thymeleaf, JSP 등이 View 기술의 예입니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial1_ch3_success: {
      id: "trial1_ch3_success",
      text: '세 개의 구체가 조화롭게 회전하며 밝은 빛을 발했다. 탑 1층의 첫 번째 마법진이 활성화되었다.\n\n"훌륭하다! Controller는 이 탑의 지휘관과 같은 존재다. 외부의 요청을 받아 적절한 처리자에게 일을 맡기고, 그 결과를 요청자에게 돌려보내지. 직접 데이터를 처리하거나 화면을 그리는 것이 아니라, 흐름을 제어하는 것이 Controller의 본분이다."\n\n1층의 벽면에 새겨진 문양이 푸른빛으로 빛나기 시작했다.',
      speaker: "디스패처",
      nextSceneId: "second_trial_ch3",
    },

    trial1_ch3_fail: {
      id: "trial1_ch3_fail",
      text: '구체들의 회전이 불안정해지며 빛이 흐려졌다. 디스패처가 고개를 저었다.\n\n"아니다. Controller는 데이터베이스에 직접 접근하지도, 화면을 직접 렌더링하지도 않는다. Controller의 역할은 오직 중재다. 요청을 받아 Service에 처리를 위임하고, 결과를 View에 전달하는 것. 이것이 MVC 패턴에서 계층을 분리하는 핵심 원칙이다."\n\n당신의 몸에서 기운이 빠져나갔다.',
      speaker: "디스패처",
      nextSceneId: "second_trial_ch3",
    },

    // ========== 2번 시련: DispatcherServlet ==========
    second_trial_ch3: {
      id: "second_trial_ch3",
      text: '디스패처가 자신의 가슴을 가리켰다. 그의 몸 중심에서 수천 개의 빛줄기가 뻗어나가 탑의 각 층으로 흘러가고 있었다.\n\n"이제 나 자신에 대해 이야기할 차례다. 이 탑으로 들어오는 모든 메시지는 예외 없이 나를 거쳐야 했다. 어떤 요청이든, 어떤 형태든, 먼저 나에게 도달하고 나서야 적절한 처리자에게 전달되었지."\n\n"Spring MVC에서 나와 같은 역할을 하는 핵심 컴포넌트는 무엇이며, 어떤 패턴을 따르는가?"',
      speaker: "디스패처",
      springConcept: "DispatcherServlet",
      choices: [
        {
          id: "correct_2_ch3",
          text: "DispatcherServlet입니다. Front Controller 패턴으로 모든 HTTP 요청을 가장 먼저 받아 HandlerMapping을 통해 적절한 Controller에 위임합니다.",
          nextSceneId: "trial2_ch3_success",
          isCorrect: true,
          explanation:
            "DispatcherServlet은 Spring MVC의 핵심으로, Front Controller 패턴을 구현합니다. 모든 HTTP 요청의 진입점 역할을 하며, HandlerMapping으로 적절한 Controller를 찾고, HandlerAdapter로 실행한 뒤, ViewResolver로 응답을 생성합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_2a_ch3",
          text: "각 Controller가 자체적으로 요청을 직접 수신합니다. 중앙 집중식 처리는 없습니다.",
          nextSceneId: "trial2_ch3_fail",
          isCorrect: false,
          explanation:
            "Spring MVC는 중앙 집중식 Front Controller 패턴을 사용합니다. 모든 요청은 먼저 DispatcherServlet을 거치고, 여기서 적절한 Controller로 라우팅됩니다. 개별 Controller가 직접 요청을 수신하지 않습니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_2b_ch3",
          text: "Filter가 모든 요청의 진입점이며, Controller에 직접 매핑됩니다. DispatcherServlet은 보조적인 역할입니다.",
          nextSceneId: "trial2_ch3_fail",
          isCorrect: false,
          explanation:
            "Filter는 Servlet 앞단에서 전처리/후처리를 하지만 요청 라우팅의 핵심은 아닙니다. DispatcherServlet이 Spring MVC의 진정한 중심이며, 요청을 받아 HandlerMapping, HandlerAdapter, ViewResolver와 협력하여 처리합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial2_ch3_success: {
      id: "trial2_ch3_success",
      text: '디스패처의 몸에서 뿜어져 나오는 빛줄기가 한층 강렬해졌다. 2층으로 이어지는 계단의 봉인이 풀리며 마법진이 활성화되었다.\n\n"그렇다! 나는 DispatcherServlet이다. Front Controller로서 모든 요청의 관문 역할을 하지. 요청이 들어오면 HandlerMapping으로 적절한 Controller를 찾고, HandlerAdapter로 실행하며, ViewResolver로 응답을 만들어낸다."\n\n"이 중앙 집중식 처리 덕분에 공통 관심사를 한 곳에서 처리할 수 있었다. 인증, 로깅, 예외 처리... 모두 나를 통해 일괄 관리되었지."\n\n2층으로 향하는 계단이 푸른 빛으로 밝혀졌다.',
      speaker: "디스패처",
      nextSceneId: "third_trial_ch3",
    },

    trial2_ch3_fail: {
      id: "trial2_ch3_fail",
      text: '디스패처의 빛이 순간 흔들렸다. 그의 목소리에 실망이 묻어났다.\n\n"아니다. Spring MVC는 DispatcherServlet이라는 Front Controller가 모든 요청의 진입점 역할을 한다. 개별 Controller가 직접 요청을 받거나, Filter가 라우팅을 하는 것이 아니다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"DispatcherServlet이 요청을 받으면, HandlerMapping으로 Controller를 찾고, HandlerAdapter로 실행하고, ViewResolver로 응답을 만든다. 이 흐름을 기억하거라."',
      speaker: "디스패처",
      nextSceneId: "third_trial_ch3",
    },

    // ========== 3번 시련: @Controller vs @RestController ==========
    third_trial_ch3: {
      id: "third_trial_ch3",
      text: '2층에 도달하자, 벽면에 두 종류의 마법 문양이 새겨져 있었다. 왼쪽 문양은 빛의 편지를 받아 그림으로 변환하여 돌려보냈고, 오른쪽 문양은 빛의 편지를 받아 순수한 데이터(빛의 결정체)로 직접 돌려보내고 있었다.\n\n"이 두 문양은 모두 요청을 처리하는 마법이지만, 응답하는 방식이 다르다. 왼쪽은 그림(View)을 그려서 보내고, 오른쪽은 데이터 결정체(JSON)를 직접 보낸다."\n\n"Spring에서 @Controller와 @RestController의 차이를 설명해보거라."',
      speaker: "디스패처",
      springConcept: "@Controller vs @RestController",
      choices: [
        {
          id: "correct_3_ch3",
          text: "@RestController는 @Controller와 @ResponseBody를 합친 것입니다. @Controller는 View 이름을 반환하지만, @RestController는 객체를 JSON으로 직접 반환합니다.",
          nextSceneId: "trial3_ch3_success",
          isCorrect: true,
          explanation:
            "@RestController = @Controller + @ResponseBody입니다. @Controller는 ViewResolver를 통해 View(HTML)를 반환하고, @RestController는 메서드 반환값을 HttpMessageConverter가 JSON/XML로 변환하여 HTTP 응답 본문에 직접 씁니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_3a_ch3",
          text: "@RestController는 REST API 전용이라 GET 요청만 처리할 수 있습니다. POST, PUT, DELETE는 @Controller에서만 가능합니다.",
          nextSceneId: "trial3_ch3_fail",
          isCorrect: false,
          explanation:
            "@RestController도 모든 HTTP 메서드(GET, POST, PUT, DELETE 등)를 처리할 수 있습니다. 차이는 HTTP 메서드가 아니라 응답 방식입니다. @RestController는 데이터(JSON)를 직접 반환하고, @Controller는 View를 반환합니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_3b_ch3",
          text: "둘은 이름만 다를 뿐 완전히 동일한 기능입니다. 어느 것을 사용해도 결과가 같습니다.",
          nextSceneId: "trial3_ch3_fail",
          isCorrect: false,
          explanation:
            "둘은 분명한 차이가 있습니다. @Controller의 메서드는 기본적으로 View 이름(String)을 반환하여 ViewResolver가 HTML을 렌더링합니다. @RestController는 @ResponseBody가 포함되어 있어 반환 객체가 JSON으로 직렬화됩니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial3_ch3_success: {
      id: "trial3_ch3_success",
      text: '두 문양이 동시에 밝게 빛나며 조화를 이루었다. 3층으로의 봉인이 풀렸다.\n\n"정확하다! 왼쪽 문양(@Controller)은 View를 통해 그림(HTML)으로 응답하고, 오른쪽 문양(@RestController)은 데이터를 직접 결정체(JSON)로 변환하여 응답한다."\n\n"요즘 대부분의 통신은 오른쪽 방식, 즉 @RestController를 사용한다. 프론트엔드와 백엔드가 분리된 현대 구조에서는 서버가 JSON 데이터만 제공하면 되기 때문이지."\n\n3층 마법진이 활성화되며 탑에 생기가 돌기 시작했다.',
      speaker: "디스패처",
      nextSceneId: "fourth_trial_ch3",
    },

    trial3_ch3_fail: {
      id: "trial3_ch3_fail",
      text: '두 문양의 빛이 혼란스럽게 깜빡였다. 디스패처가 차분하게 설명했다.\n\n"틀렸다. @RestController는 @Controller에 @ResponseBody를 결합한 것이다. @Controller는 View 이름을 반환하여 HTML을 렌더링하고, @RestController는 객체를 JSON으로 직접 변환하여 반환한다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"HTTP 메서드와는 관련이 없다. 둘 다 모든 HTTP 메서드를 처리할 수 있다. 핵심 차이는 응답 방식이다. View를 반환하느냐, 데이터를 직접 반환하느냐."',
      speaker: "디스패처",
      nextSceneId: "fourth_trial_ch3",
    },

    // ========== 4번 시련: @RequestMapping ==========
    fourth_trial_ch3: {
      id: "fourth_trial_ch3",
      text: '3층에 올라서자, 벽면 가득 지도가 그려져 있었다. 지도에는 수십 개의 경로가 표시되어 있었고, 각 경로마다 색깔이 달랐다. 초록색은 정보 조회, 파란색은 새로운 기록, 주황색은 기록 수정, 붉은색은 기록 삭제를 나타내고 있었다.\n\n"이 지도는 탑이 요청을 분류하던 경로표다. 각 요청은 경로(URL)와 행위(HTTP Method)로 분류되어 적절한 처리자에게 전달되었지."\n\n"Spring에서 @GetMapping, @PostMapping 등의 어노테이션은 어떤 어노테이션의 축약형인가?"',
      speaker: "디스패처",
      springConcept: "@RequestMapping",
      choices: [
        {
          id: "correct_4_ch3",
          text: "@RequestMapping의 축약형입니다. @GetMapping은 @RequestMapping(method = RequestMethod.GET)과 같고, @PostMapping, @PutMapping, @DeleteMapping도 마찬가지입니다.",
          nextSceneId: "trial4_ch3_success",
          isCorrect: true,
          explanation:
            "@GetMapping, @PostMapping, @PutMapping, @DeleteMapping은 @RequestMapping의 축약형 어노테이션입니다. @RequestMapping은 URL 경로와 HTTP 메서드를 지정하여 요청을 핸들러 메서드에 매핑하며, 축약형을 사용하면 코드가 더 간결하고 의도가 명확해집니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_4a_ch3",
          text: "@GetMapping과 @PostMapping은 서로 독립적인 어노테이션이며, @RequestMapping과는 관련이 없습니다.",
          nextSceneId: "trial4_ch3_fail",
          isCorrect: false,
          explanation:
            "@GetMapping, @PostMapping 등은 @RequestMapping의 축약형입니다. 내부적으로 @RequestMapping(method = RequestMethod.GET/POST)와 동일하게 동작합니다. Spring 4.3에서 편의를 위해 도입된 것이며, 근본은 @RequestMapping입니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_4b_ch3",
          text: "@RequestMapping은 더 이상 사용되지 않는 레거시 어노테이션입니다. 현대 Spring에서는 완전히 대체되었습니다.",
          nextSceneId: "trial4_ch3_fail",
          isCorrect: false,
          explanation:
            "@RequestMapping은 레거시가 아닙니다. 클래스 레벨에서 공통 경로를 지정할 때 여전히 널리 사용됩니다. @GetMapping 등은 메서드 레벨에서 더 간결하게 쓰기 위한 축약형이며, 둘은 함께 사용됩니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial4_ch3_success: {
      id: "trial4_ch3_success",
      text: '벽면의 지도가 환하게 빛나며 모든 경로가 선명하게 드러났다. 4층의 봉인이 풀렸다.\n\n"정확하다! @GetMapping, @PostMapping, @PutMapping, @DeleteMapping은 모두 @RequestMapping의 축약형이다. 이 탑에서도 요청의 경로와 종류에 따라 적절한 처리자를 배정했지."\n\n"@RequestMapping은 클래스 레벨에서 공통 경로를 지정하고, 메서드 레벨에서는 축약형을 사용하는 것이 관례다. 예를 들어 @RequestMapping(\"/api/users\")를 클래스에 붙이고, 메서드에는 @GetMapping, @PostMapping을 사용하는 식이지."\n\n4층 마법진이 초록빛으로 빛났다.',
      speaker: "디스패처",
      nextSceneId: "fifth_trial_ch3",
    },

    trial4_ch3_fail: {
      id: "trial4_ch3_fail",
      text: '지도의 경로선들이 흐려지며 혼란스럽게 뒤엉켰다. 디스패처가 탄식했다.\n\n"아니다. @GetMapping, @PostMapping 등은 @RequestMapping의 축약형이다. 독립적인 어노테이션이 아니며, 레거시도 아니다. @RequestMapping은 여전히 클래스 레벨에서 공통 경로를 지정할 때 활발히 사용되고 있다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"@RequestMapping(\"/api/users\")를 클래스에 붙이고, @GetMapping(\"/{id}\")를 메서드에 붙이면 /api/users/{id}로 GET 요청이 매핑된다. 이 구조를 기억하거라."',
      speaker: "디스패처",
      nextSceneId: "fifth_trial_ch3",
    },

    // ========== 5번 시련: @RequestBody & @ResponseBody ==========
    fifth_trial_ch3: {
      id: "fifth_trial_ch3",
      text: '4층에는 거대한 변환 장치가 놓여 있었다. 장치의 한쪽에서는 빛의 문자(JSON)가 들어가고, 다른 쪽에서는 마법의 결정체(Java 객체)가 나왔다. 반대로, 결정체를 넣으면 빛의 문자가 출력되었다.\n\n"이 장치는 탑의 번역기다. 외부에서 들어오는 메시지(요청 본문)를 왕국의 언어(객체)로 변환하고, 왕국의 언어를 외부 메시지(응답 본문)로 다시 변환하지."\n\n"Spring에서 @RequestBody와 @ResponseBody의 역할을 설명해보거라."',
      speaker: "디스패처",
      springConcept: "@RequestBody & @ResponseBody",
      choices: [
        {
          id: "correct_5_ch3",
          text: "@RequestBody는 HTTP 요청 본문의 JSON을 Java 객체로 역직렬화하고, @ResponseBody는 Java 객체를 JSON으로 직렬화하여 HTTP 응답 본문에 작성합니다.",
          nextSceneId: "trial5_ch3_success",
          isCorrect: true,
          explanation:
            "@RequestBody는 HttpMessageConverter를 통해 HTTP 요청 본문(주로 JSON)을 Java 객체로 변환합니다. @ResponseBody는 반대로 Java 객체를 JSON으로 직렬화하여 응답 본문에 씁니다. Jackson 라이브러리가 이 변환을 담당합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_5a_ch3",
          text: "@RequestBody는 URL 쿼리 파라미터를 읽고, @ResponseBody는 HTTP 헤더에 데이터를 작성합니다.",
          nextSceneId: "trial5_ch3_fail",
          isCorrect: false,
          explanation:
            "@RequestBody는 URL 파라미터가 아니라 HTTP 요청 본문(Body)의 데이터를 읽습니다. URL 파라미터는 @RequestParam이 처리합니다. @ResponseBody도 헤더가 아닌 응답 본문(Body)에 데이터를 작성합니다. 'Body'라는 이름에 주목하세요.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_5b_ch3",
          text: "@RequestBody와 @ResponseBody는 같은 기능이며, 요청과 응답에서 모두 자동으로 동작합니다.",
          nextSceneId: "trial5_ch3_fail",
          isCorrect: false,
          explanation:
            "둘은 방향이 반대인 별개의 어노테이션입니다. @RequestBody는 요청 본문 -> Java 객체(역직렬화), @ResponseBody는 Java 객체 -> 응답 본문(직렬화)입니다. 각각의 역할이 명확히 구분됩니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial5_ch3_success: {
      id: "trial5_ch3_success",
      text: '변환 장치가 양방향으로 활발하게 작동하며 눈부신 빛을 발했다. 5층의 봉인이 풀렸다.\n\n"훌륭하다! @RequestBody는 외부의 빛 문자(JSON)를 왕국의 결정체(Java 객체)로 변환하고, @ResponseBody는 그 반대다. 이 변환을 담당하는 것이 HttpMessageConverter이며, Spring Boot에서는 Jackson이 기본으로 설정되어 있다."\n\n"참고로, @RestController를 사용하면 모든 메서드에 자동으로 @ResponseBody가 적용된다. 그래서 @RestController가 편리한 것이지."\n\n5층 마법진이 금빛으로 빛났다.',
      speaker: "디스패처",
      nextSceneId: "sixth_trial_ch3",
    },

    trial5_ch3_fail: {
      id: "trial5_ch3_fail",
      text: '변환 장치가 오류를 일으키며 빛이 흐트러졌다. 디스패처가 장치를 안정시키며 말했다.\n\n"틀렸다. @RequestBody는 HTTP 요청 \'본문(Body)\'의 JSON을 Java 객체로 변환하고, @ResponseBody는 Java 객체를 JSON으로 변환하여 응답 \'본문(Body)\'에 쓴다. URL 파라미터나 헤더와는 다른 영역이다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"둘은 방향이 반대인 별개의 어노테이션이다. \'Body\'라는 이름이 핵심이다. 요청의 Body를 읽고, 응답의 Body에 쓰는 것이지."',
      speaker: "디스패처",
      nextSceneId: "sixth_trial_ch3",
    },

    // ========== 6번 시련: @PathVariable & @RequestParam ==========
    sixth_trial_ch3: {
      id: "sixth_trial_ch3",
      text: '5층에는 두 종류의 전서구가 있었다. 첫 번째 전서구는 깃털에 번호가 새겨져 있었고(/messages/{id}), 두 번째 전서구는 발목에 작은 쪽지가 매달려 있었다(?status=urgent&priority=high).\n\n"이 전서구들은 서로 다른 방식으로 정보를 전달한다. 깃털에 새겨진 번호는 경로의 일부로서 \'누구에게\'를 나타내고, 발목의 쪽지는 부가적인 조건을 전달하지."\n\n"Spring에서 @PathVariable과 @RequestParam의 차이를 설명해보거라."',
      speaker: "디스패처",
      springConcept: "@PathVariable & @RequestParam",
      choices: [
        {
          id: "correct_6_ch3",
          text: "@PathVariable은 URL 경로의 일부인 변수(/users/{id})를 추출하고, @RequestParam은 쿼리 파라미터(?name=xxx)를 추출합니다. 용도와 위치가 다릅니다.",
          nextSceneId: "trial6_ch3_success",
          isCorrect: true,
          explanation:
            "@PathVariable은 URI 경로에 포함된 변수를 추출합니다(예: /users/{id}에서 id 값). @RequestParam은 URL의 쿼리 스트링(?key=value)에서 파라미터를 추출합니다. 리소스 식별에는 @PathVariable, 필터링이나 정렬 등 부가 조건에는 @RequestParam을 사용합니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_6a_ch3",
          text: "둘 다 HTTP 요청 본문(Body)에서 데이터를 추출합니다. JSON 데이터를 파싱하는 역할이죠.",
          nextSceneId: "trial6_ch3_fail",
          isCorrect: false,
          explanation:
            "요청 본문에서 데이터를 추출하는 것은 @RequestBody의 역할입니다. @PathVariable은 URL 경로(/users/{id})에서, @RequestParam은 쿼리 파라미터(?name=xxx)에서 데이터를 추출합니다. 데이터의 위치가 각각 다릅니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_6b_ch3",
          text: "@PathVariable이 @RequestParam보다 상위 개념이라서, @PathVariable만 쓰면 둘 다 처리할 수 있습니다.",
          nextSceneId: "trial6_ch3_fail",
          isCorrect: false,
          explanation:
            "둘은 상하 관계가 아니라 서로 다른 위치에서 데이터를 추출하는 별개의 어노테이션입니다. @PathVariable은 경로 변수용, @RequestParam은 쿼리 파라미터용으로, 각자의 역할이 명확합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial6_ch3_success: {
      id: "trial6_ch3_success",
      text: '두 종류의 전서구가 동시에 날아올라 6층의 봉인을 풀었다. 마법진이 빛을 발했다.\n\n"정확하다! 깃털의 번호(@PathVariable)는 경로의 일부로 \'누구\'를 특정하고, 발목의 쪽지(@RequestParam)는 부가적인 조건을 전달한다."\n\n"RESTful API에서는 리소스 식별에 @PathVariable(/users/{id})을, 필터링이나 정렬에 @RequestParam(?sort=name&order=asc)을 사용하는 것이 관례다. 이 구분이 깔끔한 API 설계의 기본이지."\n\n6층 마법진이 은빛으로 빛났다.',
      speaker: "디스패처",
      nextSceneId: "seventh_trial_ch3",
    },

    trial6_ch3_fail: {
      id: "trial6_ch3_fail",
      text: '전서구들이 혼란스럽게 날아다니며 제 경로를 찾지 못했다. 디스패처가 차분하게 설명했다.\n\n"아니다. @PathVariable은 URL 경로의 변수(/users/{id}에서 id)를, @RequestParam은 쿼리 파라미터(?name=xxx에서 name)를 추출한다. 요청 본문과는 관련이 없으며, 둘은 상하 관계도 아니다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"GET /users/42?sort=name 이라면, 42는 @PathVariable로, sort는 @RequestParam으로 받는다. 위치가 다르다는 것을 기억하거라."',
      speaker: "디스패처",
      nextSceneId: "seventh_trial_ch3",
    },

    // ========== 7번 시련: ResponseEntity ==========
    seventh_trial_ch3: {
      id: "seventh_trial_ch3",
      text: '6층에는 정교한 봉인 장치가 있었다. 장치에는 세 개의 다이얼이 달려 있었다. 첫 번째는 숫자(상태코드), 두 번째는 부가 정보(헤더), 세 번째는 내용물(바디)을 조절하는 다이얼이었다.\n\n"이 장치는 탑이 외부에 응답을 보낼 때 사용하던 세밀한 조절기다. 단순히 내용만 보내는 것이 아니라, 응답의 상태(성공인지 실패인지), 부가 정보(캐시 정책 등), 그리고 실제 내용물을 모두 정밀하게 제어했지."\n\n"Spring에서 이처럼 HTTP 응답을 세밀하게 제어하는 객체는 무엇인가?"',
      speaker: "디스패처",
      springConcept: "ResponseEntity",
      choices: [
        {
          id: "correct_7_ch3",
          text: "ResponseEntity입니다. HTTP 상태코드, 헤더, 바디를 모두 포함하여 응답을 세밀하게 제어할 수 있는 객체입니다.",
          nextSceneId: "trial7_ch3_success",
          isCorrect: true,
          explanation:
            "ResponseEntity<T>는 HTTP 응답의 상태코드(HttpStatus), 헤더(HttpHeaders), 바디(T)를 모두 제어할 수 있는 클래스입니다. ResponseEntity.ok(body), ResponseEntity.status(201).body(data) 등의 빌더 패턴으로 유연하게 응답을 구성할 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_7a_ch3",
          text: "@ResponseStatus 어노테이션만으로 상태코드, 헤더, 바디를 모두 제어할 수 있습니다.",
          nextSceneId: "trial7_ch3_fail",
          isCorrect: false,
          explanation:
            "@ResponseStatus는 상태코드만 고정적으로 지정하는 어노테이션이며, 헤더나 바디를 동적으로 제어할 수 없습니다. 상태코드, 헤더, 바디를 모두 세밀하게 제어하려면 ResponseEntity를 사용해야 합니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_7b_ch3",
          text: "HttpServletResponse를 직접 조작하는 것이 유일한 방법입니다. Spring에서 별도의 추상화는 없습니다.",
          nextSceneId: "trial7_ch3_fail",
          isCorrect: false,
          explanation:
            "HttpServletResponse를 직접 조작할 수도 있지만, Spring은 ResponseEntity라는 더 우아한 추상화를 제공합니다. ResponseEntity를 사용하면 Servlet API에 의존하지 않고도 응답을 세밀하게 제어할 수 있어 테스트도 용이합니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial7_ch3_success: {
      id: "trial7_ch3_success",
      text: '세 개의 다이얼이 완벽하게 맞물리며 장치가 활성화되었다. 7층으로의 마지막 봉인이 풀렸다!\n\n"훌륭하다! ResponseEntity는 이 조절기처럼 응답의 모든 것을 제어할 수 있다. 상태코드로 성공(200)인지 생성(201)인지 에러(404)인지를 알리고, 헤더로 부가 정보를 전달하며, 바디에 실제 데이터를 담는다."\n\n"ResponseEntity.ok(data), ResponseEntity.notFound().build(), ResponseEntity.status(HttpStatus.CREATED).body(data)... 빌더 패턴으로 유연하게 구성할 수 있지."\n\n7층 마법진이 찬란한 빛을 발하며 탑 전체가 진동했다.',
      speaker: "디스패처",
      nextSceneId: "eighth_trial_ch3",
    },

    trial7_ch3_fail: {
      id: "trial7_ch3_fail",
      text: '다이얼이 어긋나며 장치가 오작동을 일으켰다. 디스패처가 장치를 안정시키며 말했다.\n\n"아니다. @ResponseStatus는 상태코드만 고정적으로 지정하며, 동적 제어가 불가능하다. HttpServletResponse 직접 조작은 가능하지만 Spring의 방식이 아니다. Spring은 ResponseEntity라는 우아한 추상화를 제공한다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"ResponseEntity<T>를 사용하면 상태코드, 헤더, 바디를 모두 유연하게 제어할 수 있다. 이것이 REST API에서 응답을 다루는 표준 방식이다."',
      speaker: "디스패처",
      nextSceneId: "eighth_trial_ch3",
    },

    // ========== 8번 시련: REST API 설계 원칙 ==========
    eighth_trial_ch3: {
      id: "eighth_trial_ch3",
      text: '마침내 탑의 꼭대기, 7층에 도달했다. 이곳은 왕국 전체를 내려다볼 수 있는 전망대이자, 모든 통신의 최종 설계도가 보관된 곳이었다.\n\n벽면에 거대한 석판이 세워져 있었다. 석판에는 탑의 통신 규약이 새겨져 있었으나, 대부분이 지워져 읽을 수 없었다. 남아있는 몇 줄의 글귀가 빛나고 있었다.\n\n"이것은 탑의 최고 설계 원칙이었다. 우리는 이것을 \'REST의 규약\'이라 불렀다. 이 원칙에 따라 모든 통신이 설계되었지. 리소스를 중심으로, 행위는 메서드로 표현하는 아름다운 체계였다."\n\n"마지막 시련이다. RESTful API의 핵심 설계 원칙을 말해보거라."',
      speaker: "디스패처",
      springConcept: "REST API Design",
      choices: [
        {
          id: "correct_8_ch3",
          text: "리소스 중심의 URI 설계(/users, /orders)와 HTTP 메서드(GET: 조회, POST: 생성, PUT: 수정, DELETE: 삭제)로 행위를 표현하는 것이 핵심입니다.",
          nextSceneId: "trial8_ch3_success",
          isCorrect: true,
          explanation:
            "RESTful API는 URI로 리소스를 표현하고, HTTP 메서드로 행위를 나타냅니다. GET /users(전체 조회), GET /users/{id}(단건 조회), POST /users(생성), PUT /users/{id}(수정), DELETE /users/{id}(삭제). URI에는 동사가 아닌 명사를 사용하는 것이 원칙입니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_8a_ch3",
          text: "모든 요청을 POST로 보내고, URI에 행위를 포함시킵니다. 예: POST /getUsers, POST /deleteUser",
          nextSceneId: "trial8_ch3_fail",
          isCorrect: false,
          explanation:
            "URI에 동사를 포함시키는 것은 RESTful하지 않습니다. REST에서는 URI에 명사(리소스)만 사용하고, 행위는 HTTP 메서드로 표현합니다. /getUsers 대신 GET /users, /deleteUser 대신 DELETE /users/{id}를 사용합니다.",
          effect: { hp: -15 },
        },
        {
          id: "wrong_8b_ch3",
          text: "REST API는 특별한 설계 원칙 없이, 개발자가 자유롭게 URL과 메서드를 정하면 됩니다.",
          nextSceneId: "trial8_ch3_fail",
          isCorrect: false,
          explanation:
            "REST는 명확한 설계 원칙을 가집니다. 리소스 중심 URI, HTTP 메서드를 통한 행위 표현, 적절한 상태코드 반환, 무상태(Stateless) 통신 등이 핵심 원칙입니다. 이 원칙을 따라야 일관되고 예측 가능한 API를 만들 수 있습니다.",
          effect: { hp: -10 },
        },
      ],
    },

    trial8_ch3_success: {
      id: "trial8_ch3_success",
      text: '석판의 지워진 글귀들이 하나둘 복원되며 완전한 설계도가 드러났다. 마지막 마법진이 찬란하게 빛을 발했다!\n\n"완벽하다! REST의 핵심은 리소스 중심의 설계다. URI는 명사로 리소스를 나타내고, HTTP 메서드가 행위를 표현한다. GET으로 조회, POST로 생성, PUT으로 수정, DELETE로 삭제. 이 간결하고 아름다운 체계가 수백 년간 이 탑의 통신을 지탱했다."\n\n탑 전체가 눈부신 빛으로 가득 찼다. 일곱 층의 모든 마법진이 동시에 공명하며 탑이 부활하기 시작했다!',
      speaker: "디스패처",
      nextSceneId: "tower_restored",
    },

    trial8_ch3_fail: {
      id: "trial8_ch3_fail",
      text: '석판의 글귀가 다시 희미해졌다. 디스패처가 아쉬움을 담아 말했다.\n\n"아니다. REST API는 명확한 설계 원칙이 있다. URI에는 동사가 아닌 명사(리소스)를 사용하고, 행위는 HTTP 메서드로 표현한다. GET /users는 조회, POST /users는 생성, PUT /users/{id}는 수정, DELETE /users/{id}는 삭제다."\n\n당신의 몸에서 기운이 빠져나갔다.\n\n"/getUsers 같은 URI는 RESTful하지 않다. 이 원칙을 따라야 일관되고 예측 가능한 API를 만들 수 있다."',
      speaker: "디스패처",
      nextSceneId: "tower_restored",
    },

    // ========== 탑 복원 ==========
    tower_restored: {
      id: "tower_restored",
      text: "일곱 층의 마법진이 동시에 빛나며 망각의 탑 전체가 부활했다. 봉인되어 있던 통신 마법이 하나둘 깨어나며, 탑 꼭대기에서 수천 개의 빛줄기가 사방으로 뻗어나갔다.\n\n빛줄기는 왕국의 폐허 곳곳에 닿으며, 무너진 건물들 사이로 오래된 통신망을 복원하기 시작했다. 한때 왕국의 모든 메시지가 이 탑을 통해 전달되었듯, 다시 빛의 경로가 왕국 전체에 그물처럼 펼쳐졌다.\n\n탑의 중심축이 천천히 회전하며 마법의 에너지를 생성했다. 7층의 전망대에서 내려다보니, 왕국이 서서히 빛을 되찾아가는 모습이 보였다.\n\n침묵에 잠겨있던 망각의 탑이 500년 만에 다시 숨을 쉬기 시작했다.",
      nextSceneId: "dispatcher_farewell",
    },

    dispatcher_farewell: {
      id: "dispatcher_farewell",
      text: '디스패처의 빛이 한층 밝아졌다. 그의 갑옷이 찬란한 광채를 내며, 수천 개의 빛줄기가 그의 몸을 통해 탑 전체로 흘러갔다.\n\n"모험가여, 여덟 개의 시련을 모두 거쳤구나. 이 탑이 다시 작동하게 되어 기쁘다."\n\n그가 허공에서 빛나는 두루마리를 꺼내 당신에게 건넸다.\n\n"이 두루마리에는 오늘 네가 배운 통신의 기술이 담겨 있다. MVC 패턴, DispatcherServlet, Controller와 RestController, RequestMapping, RequestBody와 ResponseBody, PathVariable과 RequestParam, ResponseEntity, 그리고 REST의 설계 원칙까지."\n\n"왕국에는 아직 복원해야 할 곳이 남아있다. 다음 여정에서는 더 깊은 도전이 기다리고 있을 것이다."\n\n"이 탑은 언제든 네 요청을 받아들일 준비가 되어 있다. 건투를 빈다, 모험가여."',
      speaker: "디스패처",
      nextSceneId: "chapter3_end",
    },

    chapter3_end: {
      id: "chapter3_end",
      text: "[ Chapter 3 완료 ]\n\n망각의 탑의 봉인이 해제되었습니다.\n탑의 관리자 디스패처의 두루마리를 획득했습니다.\n\n학습한 Spring 개념:\n- Spring MVC Pattern: Model-View-Controller 패턴, Controller는 요청을 중재하는 역할\n- DispatcherServlet: Front Controller 패턴, 모든 HTTP 요청의 진입점\n- @Controller vs @RestController: View 반환 vs JSON 직접 반환 (@ResponseBody 포함)\n- @RequestMapping: HTTP 메서드 매핑, @GetMapping/@PostMapping 등은 축약형\n- @RequestBody & @ResponseBody: JSON-객체 간 직렬화/역직렬화\n- @PathVariable & @RequestParam: 경로 변수 vs 쿼리 파라미터\n- ResponseEntity: 상태코드, 헤더, 바디를 세밀하게 제어하는 응답 객체\n- REST API Design: 리소스 중심 URI + HTTP 메서드로 행위 표현\n\n다음 챕터에서 계속됩니다...",
      isEnding: true,
    },
  },
};

export default chapter3;
