// 변수에 문자열 또는 숫자가 올 수 있다. -> 유니온 타입(타입을 합친다 |)
var 변수 = '홍길동';
변수 = 33;
var 변수2 = 'str';
변수2 = 33;
// 배열에서 특정 위치에 오는 값의 데이터를 직접 정해주고 싶다면 -> 튜플
var 일반배열 = [1, 2, 3, 4];
// [숫자, 문자열, 불린, 숫자]구성 배열로 만드려면 튜플 생성
var 튜플배열 = [3, 'str', false, 4];
// 함수의 매개변수와 리턴값의 자료형 검사
function 함수(num) {
    return num * 2;
}
// 함수('34')  // 매개변수 자료형이 안맞아서 에러
함수(34);
