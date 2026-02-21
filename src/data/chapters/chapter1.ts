import { Chapter } from "../types";

const chapter1: Chapter = {
  id: 1,
  title: "폐허의 성문",
  subtitle: "Spring Boot의 기초",
  springTopic: "Spring Boot, IoC/DI, Bean, Component Scan, Configuration, ApplicationContext, Profile",
  firstSceneId: "intro",
  scenes: {
    intro: {
      id: "intro",
      text: "끝없는 여행 끝에, 당신은 마침내 아르카디아 왕국의 폐허에 도착했다.\n\n한때 대륙에서 가장 번영했던 이 왕국은 500년 전 하룻밤 사이에 멸망했다. 성문은 이끼와 덩굴에 뒤덮여 있지만, 거대한 석조 아치는 아직도 그 웅장함을 잃지 않았다.\n\n성문 앞에 낡은 로브를 걸친 노인이 서 있다. 그의 눈빛은 수백 년의 세월을 담고 있는 듯하다.",
      nextSceneId: "meet_sage",
    },

    meet_sage: {
      id: "meet_sage",
      text: '노인이 천천히 입을 열었다.\n\n"나는 이 왕국의 마지막 현자, 아르카누스다. 500년 동안 이 성문을 지키며 왕국을 되살릴 자를 기다려왔지."\n\n그가 성문 위에 새겨진 고대 문양을 가리켰다. 여덟 개의 원이 서로 연결된 형태의 문양이었다.\n\n"이 왕국은 여덟 개의 \'스프링(Spring)\'으로 구동되었다. 마법의 샘이자, 모든 것의 근원이지. 스프링이 봉인되면서 왕국이 멸망했다. 봉인을 풀려면... 먼저 스프링의 본질을 이해해야 한다."\n\n"여덟 개의 시련을 모두 통과해야만 이 성문이 열릴 것이다."',
      speaker: "아르카누스",
      nextSceneId: "first_trial",
    },

    // ========== 1번 시련: Spring Boot Auto Configuration ==========
    first_trial: {
      id: "first_trial",
      text: '현자가 지팡이로 땅을 내리쳤다. 공기 중에 마법 문자가 떠올랐다.\n\n"첫 번째 시련이다. 대답해보거라."\n\n"이 왕국의 스프링은 처음에 복잡한 의식(XML 설정)을 거쳐야만 작동했다. 하지만 위대한 마법사가 나타나 이 과정을 간소화했지. 바로 \'Spring Boot\'라는 마법이다."\n\n"Spring Boot가 기존 Spring과 다른 가장 핵심적인 특징은 무엇인가?"',
      speaker: "아르카누스",
      springConcept: "Spring Boot Auto Configuration",
      choices: [
        {
          id: "correct_1",
          text: "자동 설정(Auto Configuration)과 내장 서버로, 복잡한 설정 없이 바로 실행할 수 있습니다.",
          nextSceneId: "trial1_success",
          isCorrect: true,
          explanation:
            "Spring Boot는 @SpringBootApplication 하나로 자동 설정, 컴포넌트 스캔, 내장 톰캣 서버를 제공합니다.",
          effect: { knowledge: 10 },
        },
        {
          id: "wrong_1a",
          text: "Spring과 완전히 다른 새로운 프레임워크입니다.",
          nextSceneId: "trial1_fail",
          isCorrect: false,
          explanation:
            "Spring Boot는 새로운 프레임워크가 아니라, Spring Framework 위에 구축된 도구입니다. 설정을 간소화하여 빠르게 시작할 수 있게 해줍니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_1b",
          text: "프론트엔드 개발에 특화된 프레임워크입니다.",
          nextSceneId: "trial1_fail",
          isCorrect: false,
          explanation:
            "Spring Boot는 백엔드 서버 애플리케이션 개발에 특화되어 있습니다. 프론트엔드는 별도의 기술(React, Vue 등)을 사용합니다.",
          effect: { knowledge: 1, hp: -15 },
        },
      ],
    },

    trial1_success: {
      id: "trial1_success",
      text: '현자의 눈이 반짝였다.\n\n"훌륭하다! 그렇다. Spring Boot의 자동 설정은 마치 이 왕국의 건축가들이 기본 설계도를 자동으로 적용했던 것과 같다. @SpringBootApplication 하나면 내장 서버가 가동되고, 필요한 설정이 자동으로 적용되지."\n\n성문의 첫 번째 문양이 희미하게 빛나기 시작했다.',
      speaker: "아르카누스",
      nextSceneId: "second_trial",
    },

    trial1_fail: {
      id: "trial1_fail",
      text: '현자가 고개를 저었다.\n\n"아직 부족하구나. Spring Boot는 Spring Framework를 기반으로, 자동 설정(Auto Configuration)을 통해 복잡한 XML이나 Java Config 없이도 애플리케이션을 빠르게 시작할 수 있게 해주는 도구다."\n\n당신은 가슴에 미세한 통증을 느꼈다. 잘못된 답의 대가였다.\n\n"하지만 실패에서 배우는 것도 중요하다. 다음으로 넘어가자."',
      speaker: "아르카누스",
      nextSceneId: "second_trial",
    },

    // ========== 2번 시련: IoC ==========
    second_trial: {
      id: "second_trial",
      text: '현자가 허공에 두 개의 마법진을 그렸다. 하나는 안에서 밖으로 뻗어나가고, 다른 하나는 밖에서 안으로 흘러들어왔다.\n\n"이 왕국의 스프링이 강력했던 이유는 \'제어의 역전(IoC)\'이라는 원리 때문이었다. 일반적으로 마법사가 직접 마법 재료를 수집하고 조합해야 하지만... 스프링은 달랐지."\n\n"IoC, Inversion of Control이란 무엇인가?"',
      speaker: "아르카누스",
      springConcept: "IoC (Inversion of Control)",
      choices: [
        {
          id: "correct_2",
          text: "객체의 생성과 생명주기 관리를 개발자가 아닌 Spring 컨테이너에 맡기는 것입니다.",
          nextSceneId: "trial2_success",
          isCorrect: true,
          explanation:
            "IoC는 제어의 역전입니다. 개발자가 직접 new로 객체를 생성하지 않고, Spring IoC 컨테이너가 객체(Bean)를 생성하고 관리합니다.",
          effect: { knowledge: 10 },
        },
        {
          id: "wrong_2a",
          text: "코드의 실행 순서를 거꾸로 뒤집는 기법입니다.",
          nextSceneId: "trial2_fail",
          isCorrect: false,
          explanation:
            "IoC는 코드 실행 순서와 관련이 없습니다. '제어'란 객체의 생성과 의존성 관리에 대한 제어권을 의미하며, 이것을 프레임워크에 '역전'시키는 것입니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_2b",
          text: "입력과 출력의 방향을 바꾸는 네트워크 기술입니다.",
          nextSceneId: "trial2_fail",
          isCorrect: false,
          explanation:
            "IoC는 네트워크와 관련이 없습니다. 객체의 생성, 의존성 주입, 생명주기를 개발자 대신 컨테이너가 관리하는 설계 원칙입니다.",
          effect: { knowledge: 1, hp: -15 },
        },
      ],
    },

    trial2_success: {
      id: "trial2_success",
      text: '현자가 미소를 지었다.\n\n"정확하다. 이 왕국에서 마법사는 직접 재료를 구하지 않았다. 스프링이 필요한 재료(객체)를 자동으로 생성하고 관리해줬지. 마법사는 오직 마법을 사용하는 것에만 집중할 수 있었다."\n\n"이것이 Spring IoC 컨테이너의 핵심이다. 개발자는 비즈니스 로직에만 집중하면 된다."\n\n두 번째 문양도 빛을 발했다.',
      speaker: "아르카누스",
      nextSceneId: "third_trial",
    },

    trial2_fail: {
      id: "trial2_fail",
      text: '현자가 한숨을 쉬었다.\n\n"아니다. IoC에서 \'제어\'란 객체의 생성과 관리에 대한 제어권을 말한다. 일반적으로 개발자가 new 키워드로 직접 객체를 만들지만, Spring에서는 이 제어권을 컨테이너에 넘긴다. 이것이 \'역전\'의 의미다."\n\n당신의 몸에서 약간의 기운이 빠져나갔다.',
      speaker: "아르카누스",
      nextSceneId: "third_trial",
    },

    // ========== 3번 시련: DI ==========
    third_trial: {
      id: "third_trial",
      text: '현자가 마법진을 그렸다. 여러 개의 빛나는 구체가 서로에게 빛줄기를 보내며 연결되었다.\n\n"IoC를 실현하는 구체적인 방법이 바로 DI, 의존성 주입(Dependency Injection)이다. 이 구체들이 서로를 필요로 할 때, 스프링이 자동으로 연결해주었지."\n\n"Spring에서 DI를 구현하는 가장 권장되는 방법은 무엇인가?"',
      speaker: "아르카누스",
      springConcept: "DI (Dependency Injection)",
      choices: [
        {
          id: "correct_3",
          text: "생성자 주입(Constructor Injection)입니다. 불변성을 보장하고 테스트하기 쉽습니다.",
          nextSceneId: "trial3_success",
          isCorrect: true,
          explanation:
            "생성자 주입은 Spring 공식 권장 방식입니다. final 필드로 불변성을 보장하고, 순환 참조를 컴파일 타임에 발견할 수 있으며, 테스트 시 Mock 객체를 쉽게 주입할 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_3a",
          text: "@Autowired를 필드에 직접 붙이는 필드 주입이 가장 좋습니다.",
          nextSceneId: "trial3_partial",
          isCorrect: false,
          explanation:
            "필드 주입(@Autowired)은 간편하지만, 불변성을 보장할 수 없고 단위 테스트가 어렵습니다. Spring 팀은 생성자 주입을 권장합니다.",
          effect: { knowledge: 5, hp: -5 },
        },
        {
          id: "wrong_3b",
          text: "XML 파일에서 모든 의존성을 설정하는 것입니다.",
          nextSceneId: "trial3_fail",
          isCorrect: false,
          explanation:
            "XML 설정은 레거시 방식입니다. 현대 Spring에서는 어노테이션 기반 설정과 생성자 주입을 권장합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial3_success: {
      id: "trial3_success",
      text: '현자의 얼굴에 환한 미소가 번졌다.\n\n"훌륭하다! 생성자 주입은 이 왕국의 가장 견고한 마법 연결 방식이었다. 한번 연결되면 절대 끊어지지 않는(final), 믿을 수 있는 연결이지."\n\n세 번째 문양이 강렬한 빛을 내뿜었다.\n\n"세 개의 봉인이 풀렸다. 좋은 출발이다. 하지만 아직 다섯 개의 시련이 남아있다."',
      speaker: "아르카누스",
      nextSceneId: "fourth_trial",
    },

    trial3_partial: {
      id: "trial3_partial",
      text: '현자가 고개를 갸웃했다.\n\n"필드 주입... 틀린 것은 아니나 최선은 아니다. @Autowired 필드 주입은 간편하지만, final로 선언할 수 없어 불변성을 보장하지 못하고, 테스트할 때 리플렉션이 필요해 번거롭다."\n\n"생성자 주입이 권장되는 이유를 기억해두거라."\n\n세 번째 문양이 약하게 빛났다.',
      speaker: "아르카누스",
      nextSceneId: "fourth_trial",
    },

    trial3_fail: {
      id: "trial3_fail",
      text: '현자가 안타까운 표정을 지었다.\n\n"XML 설정은 과거의 방식이다. 현대의 Spring에서는 어노테이션과 생성자 주입을 사용한다. 생성자 주입은 불변성, 테스트 용이성, 순환 참조 감지 등 많은 장점이 있지."\n\n당신은 또다시 기운이 빠져나가는 것을 느꼈다.',
      speaker: "아르카누스",
      nextSceneId: "fourth_trial",
    },

    // ========== 4번 시련: Bean과 Bean Scope ==========
    fourth_trial: {
      id: "fourth_trial",
      text: '현자가 허공에서 빛나는 구슬 하나를 꺼내 들었다. 구슬 안에는 작은 마법 생명체가 살아 움직이고 있었다.\n\n"이것은 \'빈(Bean)\'이라 불리는 마법 결정체다. 스프링이 관리하는 모든 것의 기본 단위이지. 이 왕국의 모든 마법 장치, 수호 골렘, 자동 방어막... 모두 이 빈으로 이루어져 있었다."\n\n"그렇다면 묻겠다. Spring에서 Bean이란 무엇이며, 기본적으로 어떤 Scope로 생성되는가?"',
      speaker: "아르카누스",
      springConcept: "Spring Bean & Scope",
      choices: [
        {
          id: "correct_4",
          text: "Spring IoC 컨테이너가 관리하는 객체가 Bean이며, 기본 Scope는 Singleton으로 애플리케이션 전체에서 하나의 인스턴스만 존재합니다.",
          nextSceneId: "trial4_success",
          isCorrect: true,
          explanation:
            "Spring Bean은 IoC 컨테이너가 생성하고 관리하는 객체입니다. 기본 Scope인 Singleton은 컨테이너 당 하나의 인스턴스만 생성하여 메모리 효율성과 일관성을 보장합니다.",
          effect: { knowledge: 12 },
        },
        {
          id: "wrong_4a",
          text: "모든 자바 객체가 Bean입니다. new 키워드로 만든 객체도 Bean이죠.",
          nextSceneId: "trial4_fail",
          isCorrect: false,
          explanation:
            "모든 자바 객체가 Bean은 아닙니다. Spring Bean은 IoC 컨테이너가 생성하고 관리하는 객체만을 의미합니다. new로 직접 생성한 객체는 Spring Bean이 아닙니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_4b",
          text: "Bean은 데이터베이스 엔티티를 의미합니다. 테이블과 1:1로 매핑되는 객체이죠.",
          nextSceneId: "trial4_fail",
          isCorrect: false,
          explanation:
            "Bean은 데이터베이스 엔티티와는 다른 개념입니다. Spring Bean은 컨테이너가 관리하는 모든 종류의 객체(Service, Repository, Controller 등)를 포괄하는 개념입니다.",
          effect: { knowledge: 1, hp: -15 },
        },
      ],
    },

    trial4_success: {
      id: "trial4_success",
      text: '현자가 구슬을 높이 들었다. 구슬에서 뿜어져 나온 빛이 성문의 네 번째 문양을 비추었다.\n\n"정확하다! 이 왕국에서 수호 골렘은 단 하나만 만들어져 성 전체를 지켰다. 하나의 골렘이 모든 곳에서 호출되었지... 이것이 바로 싱글톤(Singleton)의 원리다."\n\n"물론 Prototype, Request, Session 같은 다른 Scope도 있지만, 기본은 언제나 Singleton이다."\n\n네 번째 문양이 선명하게 빛났다.',
      speaker: "아르카누스",
      nextSceneId: "fifth_trial",
    },

    trial4_fail: {
      id: "trial4_fail",
      text: '현자가 구슬을 내려놓으며 말했다.\n\n"아니다. Spring Bean이란 Spring IoC 컨테이너가 생성하고 관리하는 객체를 말한다. 단순히 new로 만든 객체나 DB 엔티티와는 다르다."\n\n"그리고 기본 Scope는 Singleton이다. 컨테이너 당 하나의 인스턴스만 만들어져 재사용된다. 마치 이 왕국의 수호 골렘이 단 하나뿐이었던 것처럼."\n\n당신의 몸에서 기운이 빠져나갔다.',
      speaker: "아르카누스",
      nextSceneId: "fifth_trial",
    },

    // ========== 5번 시련: Component Scan ==========
    fifth_trial: {
      id: "fifth_trial",
      text: '현자가 손을 뻗자, 성문 주변의 폐허에서 수십 개의 빛나는 조각들이 떠올랐다. 조각들은 저마다 다른 색과 모양을 가지고 있었다.\n\n"이 왕국이 전성기일 때, 스프링은 흩어진 마법 조각들을 스스로 찾아내어 하나로 모았다. 마법사가 일일이 조각을 수집할 필요가 없었지."\n\n"이 자동 탐색 기능, 즉 Component Scan은 어떻게 동작하는가?"',
      speaker: "아르카누스",
      springConcept: "Component Scan",
      choices: [
        {
          id: "correct_5",
          text: "@ComponentScan이 지정된 패키지 하위의 @Component, @Service, @Repository, @Controller 등의 어노테이션이 붙은 클래스를 자동으로 찾아 Bean으로 등록합니다.",
          nextSceneId: "trial5_success",
          isCorrect: true,
          explanation:
            "@ComponentScan은 지정된 베이스 패키지부터 하위 패키지까지 스캔하여 스테레오타입 어노테이션(@Component 등)이 붙은 클래스를 자동으로 Bean으로 등록합니다. @SpringBootApplication에 이미 포함되어 있습니다.",
          effect: { knowledge: 12 },
        },
        {
          id: "wrong_5a",
          text: "개발자가 XML 파일에 Bean을 하나하나 직접 등록해야 합니다.",
          nextSceneId: "trial5_fail",
          isCorrect: false,
          explanation:
            "XML에 일일이 등록하는 것은 과거의 방식입니다. Component Scan을 사용하면 어노테이션만 붙여두면 자동으로 Bean이 등록됩니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_5b",
          text: "런타임에 클래스패스의 모든 클래스를 스캔하여 전부 Bean으로 등록합니다.",
          nextSceneId: "trial5_fail",
          isCorrect: false,
          explanation:
            "모든 클래스를 Bean으로 등록하지는 않습니다. @Component 등 스테레오타입 어노테이션이 붙은 클래스만 선별적으로 Bean으로 등록합니다. 지정된 패키지 범위 내에서만 스캔합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial5_success: {
      id: "trial5_success",
      text: '빛나는 조각들이 일제히 성문 쪽으로 모여들었다. 각 조각이 정확한 위치에 자리를 잡으며 퍼즐처럼 맞물렸다.\n\n"훌륭하다! 마치 이 조각들이 자신의 자리를 알고 스스로 모여드는 것처럼, @Component 어노테이션이 붙은 클래스는 스프링이 자동으로 찾아 등록한다."\n\n"@SpringBootApplication 안에 이미 @ComponentScan이 포함되어 있으니, 별도 설정 없이도 자동 탐색이 이루어진다."\n\n다섯 번째 문양이 환하게 빛났다.',
      speaker: "아르카누스",
      nextSceneId: "sixth_trial",
    },

    trial5_fail: {
      id: "trial5_fail",
      text: '빛나는 조각들이 힘없이 땅으로 떨어졌다. 현자가 한숨을 쉬었다.\n\n"아니다. Component Scan은 @ComponentScan이 지정한 패키지 하위에서 @Component, @Service, @Repository, @Controller 같은 어노테이션이 붙은 클래스만 골라 Bean으로 등록한다."\n\n"모든 클래스를 무차별적으로 등록하는 것도, 일일이 수작업으로 등록하는 것도 아니다. 정확한 표식이 있는 것만 찾아내는 것이지."\n\n당신의 기운이 또 한 번 빠져나갔다.',
      speaker: "아르카누스",
      nextSceneId: "sixth_trial",
    },

    // ========== 6번 시련: @Configuration vs @Component ==========
    sixth_trial: {
      id: "sixth_trial",
      text: '현자가 두 개의 마법 서판을 꺼내 허공에 띄웠다. 하나는 푸른빛, 다른 하나는 금빛으로 빛나고 있었다.\n\n"이 두 서판은 비슷해 보이지만 역할이 다르다. 푸른 서판(@Component)은 일반 마법 부품이고, 금빛 서판(@Configuration)은 마법 설계도다."\n\n"@Configuration과 @Component의 차이를 설명해보거라."',
      speaker: "아르카누스",
      springConcept: "@Configuration & @Bean",
      choices: [
        {
          id: "correct_6",
          text: "@Configuration은 설정 클래스를 의미하며, @Bean 메서드로 직접 Bean을 정의합니다. CGLIB 프록시를 통해 @Bean 메서드의 싱글톤을 보장합니다.",
          nextSceneId: "trial6_success",
          isCorrect: true,
          explanation:
            "@Configuration 클래스는 CGLIB 프록시로 감싸져, @Bean 메서드를 여러 번 호출해도 같은 인스턴스를 반환합니다. @Component는 일반 Bean 등록용이며 이런 프록시 보장이 없습니다.",
          effect: { knowledge: 13 },
        },
        {
          id: "wrong_6a",
          text: "둘은 완전히 동일한 기능입니다. 어떤 것을 사용해도 차이가 없습니다.",
          nextSceneId: "trial6_fail",
          isCorrect: false,
          explanation:
            "둘은 동일하지 않습니다. @Configuration은 CGLIB 프록시를 통해 @Bean 메서드의 싱글톤을 보장하지만, @Component에서는 이 보장이 없어 @Bean 메서드 호출 시 매번 새 인스턴스가 생성될 수 있습니다.",
          effect: { knowledge: 2, hp: -10 },
        },
        {
          id: "wrong_6b",
          text: "@Component가 더 상위 어노테이션이라 @Configuration을 포함합니다.",
          nextSceneId: "trial6_fail",
          isCorrect: false,
          explanation:
            "오히려 @Configuration이 @Component를 포함(메타 어노테이션)합니다. @Configuration은 @Component의 특수한 형태로, 추가적인 설정 기능(CGLIB 프록시, @Bean 싱글톤 보장)을 제공합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial6_success: {
      id: "trial6_success",
      text: '금빛 서판이 빛을 발하며 펼쳐졌다. 그 안에 복잡한 마법 회로도가 그려져 있었다.\n\n"정확하다! 금빛 서판(@Configuration)은 마법 설계도로서, 그 안에 정의된 마법 부품(@Bean)들이 반드시 하나씩만 만들어지도록 보장한다. CGLIB라는 고대 마법이 이를 가능케 하지."\n\n"반면 푸른 서판(@Component)은 단순히 자신을 스프링에 등록할 뿐, 그런 보장은 없다."\n\n여섯 번째 문양이 금빛으로 빛났다.',
      speaker: "아르카누스",
      nextSceneId: "seventh_trial",
    },

    trial6_fail: {
      id: "trial6_fail",
      text: '두 서판의 빛이 동시에 꺼졌다. 현자가 고개를 가로저었다.\n\n"아니다. @Configuration은 @Component를 포함하는 특수한 어노테이션이다. @Configuration 클래스는 CGLIB 프록시로 감싸져, @Bean 메서드를 여러 번 호출해도 싱글톤을 보장한다."\n\n"@Component에서는 이런 보장이 없으니, 설정 클래스에는 반드시 @Configuration을 사용해야 한다."\n\n당신은 몸이 무거워지는 것을 느꼈다.',
      speaker: "아르카누스",
      nextSceneId: "seventh_trial",
    },

    // ========== 7번 시련: ApplicationContext ==========
    seventh_trial: {
      id: "seventh_trial",
      text: '현자가 지팡이 끝에서 거대한 환영을 만들어냈다. 왕궁의 심장부에 있는 거대한 수정 구체의 모습이었다. 수정 안에서 수많은 빛 줄기가 사방으로 뻗어나가 왕국 곳곳을 연결하고 있었다.\n\n"이것은 왕국의 심장, 스프링의 핵심 중추였다. 모든 마법 부품(Bean)을 생성하고, 관리하고, 필요한 곳에 전달하는... 바로 \'ApplicationContext\'라 불리던 것이다."\n\n"ApplicationContext란 무엇인가?"',
      speaker: "아르카누스",
      springConcept: "ApplicationContext",
      choices: [
        {
          id: "correct_7",
          text: "Spring IoC 컨테이너의 핵심 구현체로, Bean의 생성, 관리, 조회를 담당하며, 이벤트 발행, 메시지 소스, 환경 변수 접근 등 다양한 기능을 제공합니다.",
          nextSceneId: "trial7_success",
          isCorrect: true,
          explanation:
            "ApplicationContext는 BeanFactory를 확장한 Spring IoC 컨테이너의 핵심 인터페이스입니다. Bean 관리 외에도 국제화(MessageSource), 이벤트 발행(ApplicationEventPublisher), 리소스 로딩 등 엔터프라이즈 기능을 제공합니다.",
          effect: { knowledge: 13 },
        },
        {
          id: "wrong_7a",
          text: "웹 브라우저의 실행 환경을 의미합니다. JavaScript의 window 객체와 비슷한 개념이죠.",
          nextSceneId: "trial7_fail",
          isCorrect: false,
          explanation:
            "ApplicationContext는 브라우저 환경과는 전혀 관련이 없습니다. Spring의 IoC 컨테이너 구현체로, 서버 측에서 Bean의 생성과 관리를 담당하는 핵심 컴포넌트입니다.",
          effect: { knowledge: 1, hp: -15 },
        },
        {
          id: "wrong_7b",
          text: "애플리케이션의 메인 메서드가 위치한 클래스를 가리킵니다.",
          nextSceneId: "trial7_fail",
          isCorrect: false,
          explanation:
            "메인 메서드가 있는 클래스는 보통 @SpringBootApplication이 붙은 진입점 클래스입니다. ApplicationContext는 이 클래스가 아니라, Spring이 Bean을 관리하는 IoC 컨테이너 자체를 의미합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial7_success: {
      id: "trial7_success",
      text: '수정 구체의 환영이 눈부시게 빛나며 왕국 전체를 비추었다.\n\n"훌륭하다! ApplicationContext는 이 왕국의 심장이었다. 모든 마법 부품(Bean)을 만들고, 필요한 곳에 전달하고, 생명주기를 관리했지. BeanFactory보다 더 강력한 기능들 - 이벤트 전파, 국제화, 리소스 접근 - 을 추가로 제공했다."\n\n일곱 번째 문양이 수정처럼 투명하게 빛났다.\n\n"이제 마지막 시련만 남았다!"',
      speaker: "아르카누스",
      nextSceneId: "eighth_trial",
    },

    trial7_fail: {
      id: "trial7_fail",
      text: '수정 구체의 환영이 사그라들었다. 현자의 표정이 어두워졌다.\n\n"아니다. ApplicationContext는 Spring IoC 컨테이너의 핵심 구현체다. Bean의 생성과 관리, 의존성 주입, 이벤트 발행, 국제화 등을 담당하는 왕국의 심장과 같은 존재다."\n\n"웹 브라우저나 메인 클래스와는 전혀 다른 개념이다. 기억해두거라."\n\n당신의 몸에서 또다시 기운이 빠져나갔다.',
      speaker: "아르카누스",
      nextSceneId: "eighth_trial",
    },

    // ========== 8번 시련: Spring Profile ==========
    eighth_trial: {
      id: "eighth_trial",
      text: '현자가 마지막으로 세 개의 열쇠를 꺼냈다. 하나는 초록빛(dev), 하나는 붉은빛(prod), 하나는 푸른빛(test)으로 빛나고 있었다.\n\n"이 왕국은 세 개의 차원에서 동시에 운영되었다. 평시의 차원, 전시의 차원, 그리고 시험의 차원. 각 차원마다 스프링의 설정이 달랐지. 이를 \'Profile\'이라 불렀다."\n\n"Spring Profile이란 무엇이며, 어떻게 사용하는가?"',
      speaker: "아르카누스",
      springConcept: "Spring Profile",
      choices: [
        {
          id: "correct_8",
          text: "환경별(dev, prod, test 등) 설정을 분리하여 적용하는 기능입니다. @Profile 어노테이션이나 application-{profile}.yml 파일을 사용합니다.",
          nextSceneId: "trial8_success",
          isCorrect: true,
          explanation:
            "Spring Profile은 환경별로 다른 설정을 적용할 수 있게 해줍니다. application-dev.yml, application-prod.yml처럼 파일을 분리하거나, @Profile 어노테이션으로 특정 환경에서만 활성화되는 Bean을 정의할 수 있습니다.",
          effect: { knowledge: 15 },
        },
        {
          id: "wrong_8a",
          text: "사용자의 프로필 정보(이름, 이메일 등)를 관리하는 기능입니다.",
          nextSceneId: "trial8_fail",
          isCorrect: false,
          explanation:
            "Spring Profile은 사용자 프로필과 관련이 없습니다. 개발(dev), 운영(prod), 테스트(test) 등 실행 환경에 따라 다른 설정을 적용하기 위한 기능입니다.",
          effect: { knowledge: 1, hp: -15 },
        },
        {
          id: "wrong_8b",
          text: "Spring의 성능 프로파일링 도구입니다. 애플리케이션의 병목 지점을 찾아줍니다.",
          nextSceneId: "trial8_fail",
          isCorrect: false,
          explanation:
            "Spring Profile은 성능 프로파일링 도구가 아닙니다. 환경별 설정 분리 기능입니다. 성능 모니터링은 Spring Actuator나 별도의 APM 도구를 사용합니다.",
          effect: { knowledge: 2, hp: -10 },
        },
      ],
    },

    trial8_success: {
      id: "trial8_success",
      text: '세 개의 열쇠가 동시에 빛나며 허공에서 회전했다. 각각의 빛이 성문의 마지막 문양에 스며들었다.\n\n"완벽하다! 평시에는 dev 차원의 설정으로 편안하게, 전시에는 prod 차원의 설정으로 최대 성능을, 시험에는 test 차원의 설정으로 안전하게 운영했지."\n\n"application-dev.yml, application-prod.yml처럼 설정 파일을 분리하고, @Profile로 환경별 Bean을 정의하는 것. 이것이 Spring Profile의 핵심이다."\n\n여덟 번째 문양이 찬란하게 빛났다!',
      speaker: "아르카누스",
      nextSceneId: "gate_open",
    },

    trial8_fail: {
      id: "trial8_fail",
      text: '열쇠들의 빛이 약해졌다. 현자가 아쉬운 듯 말했다.\n\n"아니다. Spring Profile은 환경별 설정을 분리하는 기능이다. 개발 환경에서는 H2 인메모리 DB를, 운영 환경에서는 MySQL을 사용하는 식으로 말이다."\n\n"application-dev.yml, application-prod.yml로 파일을 분리하거나, @Profile 어노테이션으로 환경별 Bean을 정의할 수 있다. 사용자 프로필이나 성능 분석과는 전혀 다른 개념이다."\n\n당신의 몸이 무겁게 느껴졌다.',
      speaker: "아르카누스",
      nextSceneId: "gate_open",
    },

    // ========== 엔딩: 성문 열림 ==========
    gate_open: {
      id: "gate_open",
      text: '현자가 지팡이를 높이 들었다. 성문의 여덟 개 문양이 일제히 빛나며 거대한 석문이 천천히 열리기 시작했다.\n\n수백 년 만에 열리는 성문. 그 너머로 폐허가 된 왕국의 모습이 펼쳐졌다. 무너진 건물들 사이로 아직도 마법의 잔재가 빛나고 있었다.\n\n"여덟 개의 시련을 모두 거쳤구나. 비록 모든 답이 완벽하지 않았더라도, 도전한 것 자체가 성장이다."\n\n현자가 말했다.',
      nextSceneId: "sage_farewell",
    },

    sage_farewell: {
      id: "sage_farewell",
      text: '"모험가여, 이제 첫 발을 내딛었을 뿐이다. 이 왕국에는 아직 네 개의 봉인된 스프링이 남아있다."\n\n"수몰된 도서관에서는 데이터의 흐름(JPA)을, 화산의 대장간에서는 보안의 벽(Security)을, 그림자 숲에서는 소통의 방법(REST API)을, 그리고 왕의 묘소에서는 모든 것의 조화(트랜잭션)를 배우게 될 것이다."\n\n"오늘 배운 여덟 가지 기초를 잊지 마라. 이것이 모든 것의 토대가 될 것이다."\n\n"건투를 빈다."',
      speaker: "아르카누스",
      nextSceneId: "chapter1_end",
    },

    chapter1_end: {
      id: "chapter1_end",
      text: "[ Chapter 1 완료 ]\n\n당신은 아르카디아 왕국에 첫 발을 내디뎠습니다.\n\n학습한 Spring 개념:\n- Spring Boot: 자동 설정(Auto Configuration)과 내장 서버\n- IoC (Inversion of Control): 객체 관리 제어권을 컨테이너에 위임\n- DI (Dependency Injection): 생성자 주입이 권장되는 이유\n- Spring Bean & Scope: Bean은 컨테이너가 관리하는 객체, 기본 Singleton\n- Component Scan: @Component 등을 자동 탐색하여 Bean 등록\n- @Configuration & @Bean: 설정 클래스와 CGLIB 프록시를 통한 싱글톤 보장\n- ApplicationContext: IoC 컨테이너의 핵심 구현체\n- Spring Profile: 환경별 설정 분리 (dev, prod, test)\n\n다음 챕터에서 계속됩니다...",
      isEnding: true,
    },
  },
};

export default chapter1;
