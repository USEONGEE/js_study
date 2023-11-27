export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
}

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data
  }
}

export const logoutAction = () => {
  return {
    type: 'LOG_OUT',
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state, // object spread로 참조 관계 유지하기
        user: action.data,
        isLoggedIn: true,
      }
    case 'LOG_OUT':
      return { // return이 state 객체이다.
        ...state,  // state의 모든 프로퍼티를 스프레드한다.
        isLoggedIn: false, // 그 중에서 isLoggedin과 user의 참조만 변경한다.
        user: null,
      }
    default: return state;
  }
}
