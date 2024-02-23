module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/plugin-transform-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};


/**
 * babel : ES6 이상 의 js, jsx, ts 코드를 하위 버전의 js 문법으로 변환시켜주는 역할을 한다.
 *  일종의 트랜스 파일러
 * 
 * 크로스 브라우징 : js 엔진의 차이로 발생 , 내일 마저 보자
 * https://xtring-dev.tistory.com/entry/Babel-%EB%AA%A8%EB%A5%B4%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8D%98-Babel-%EC%9D%B4%EC%A0%A0-%EB%91%90%EB%A0%A4%EC%9B%8C-%EB%A7%88%EC%84%B8%EC%9A%94-Babel-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0
 */