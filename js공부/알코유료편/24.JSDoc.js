// 주석

/**TITLE 입니다 */
const TITLE = 'JSDoc';

// {} 안에는 자료형을 넣는다.
/**
 * 원주율
 * @type {number}
 * @const
 */
const PI = '3.14';

/**
 * 원주율
 * @const {number}
 */
const pi = '3.14';

/**
 * 
 * @param {number} x 
 * @param {number} y 
 * @returns {number} 두 수의 합
 */
const add = (x, y) => x + y;

// 커스텀 객체 타입 지정
/**
 * @typedef {Object} PersonObj 사람 객체
 * @property {string} name 이름
 * @property {number} age 나이
 * @property {boolean} married 기혼 여부
 */

/**
 * @param {string} name
 * @param {number} age
 * @param {bollean} 기혼 여부
 * @return {PersonObj}
 */
function getPersonObj(name, age, married) {
    return { name, age, married };
}
const person1 = getPersonObj('홍길동', 20, false)
console.log(person1)

// 생성자 용도
/**
 * 사람 객체 생성 함수
 * @param {string} name 
 * @param {number} age 
 */
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// class에서
/**
 * 새 클리스
 * @class
 */
class Bird {
    /**
     * @constructor
     * @param {string} name 
     */
    constructor(name){
        this.name = name
    }
}

// todo, 이후에 해야 할 일을 표시
/**
 * @todo 실행 속도 개선
 */
function slowFunction() {
    console.log('느린 함숩니다만')
}

// see, link, 참조, 링크
/**
 * @see {@link https://www.naver.com} 사이트 참조
 */
function func() {

}

// readonly, 읽기 전용
/**
 * @readonly
 * @const {string}
 */
const READONLY = '건들지마세욤'

// 사라질 기능
/**
 * @deprecated
 * @const {string}
 */
function odlFunction() {
    console.log('없어질 겁니다만?')
}