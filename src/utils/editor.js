const JAVA_DEFAULT = `public class Main{
    public static void main(String[] args){
        
    }
}`;

/**
 * 언어 받아서 기본 스크립트 출력
 * @param {string} languages
 */
export const inScript = (languages) => {
  switch (languages) {
    case "java":
      return JAVA_DEFAULT;
    default:
      console.error("지원하지 않는 언어입니다.");
      return;
  }
};
