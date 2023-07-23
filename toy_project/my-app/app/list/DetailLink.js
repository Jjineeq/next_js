'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(){
    let router = useRouter()
    return(
        <button onClick={() => {router.push('/list')}}>이동</button>
    )
}

// 단순 페이지 이동 외에 router.back() 이런거 사용해서 뒤로가기도 가능
// router.forward() 은 앞으로 가기 .refresh()는 새로고침
// .refresh는 바뀐 내용만 새로고침됨 
// prefetch()는 페이지 미리보기 가능 -> 매우 빠르게 방문 가능

