let age = 20;
export default age; // 변수 내보내기


let name = 'kim';

export {age, name}; //두개 이상의 변수 내보내기

// import {age, name} from './data.js' // 변수 불러오기