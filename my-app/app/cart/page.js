// server component -> html에 js기능 넣기 불가
// useState, useEffect도 사용 불가
// use client -> html에 js 기능 넣기 가능
// useState, useEffect 사용 가능
// server component는 로딩 속도가 빠르다는 장점 및 검색엔진 노출 유리함
// client componet는 로딩 속도가 느림 (hydration 필요 및 js 많이 필요함)
// 서버가 크다 -> server componet
// 기능이 필요하다 -> client componet

import data from './data.js'

export default function Cart() {
    return (
      <div>
        <h4 className="title">Cart</h4>
        <div className="cart-item"></div>
        <CartItem/>
        <CartItem/>
        </div>
      
    )
  }
  
  function CartItem(){
    return(
      <div className="cart-item">
        <p>상품명</p>
        <p>${data}</p>
        <p>1개</p>
      </div>
    )
  } 