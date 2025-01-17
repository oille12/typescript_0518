// object 공통타입
type objType = {
    [key:string] : number
}

// 객체의 각 요소값에 숫자만 넣으려면 
let objVar : objType = {age:33, height:172.3};

// 클래스
class myClass {
    멤버변수 : string;

    constructor(매개변수 : string) {
        this.멤버변수 = 매개변수;
    }
}

// constructor : 생성자 (클래스를 객체화 하는 순간 발동되는 함수)
// let 객체1 = new MyClass(3.13131414); // 자료형 불일치
let 객체1 = new myClass("str");
let 객체2 = new myClass("str2");