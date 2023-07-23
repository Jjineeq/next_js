import Detail from "../detail/[aaa]/page"
import DetailLink from "./DetailLink"
import { connectDB  } from "/util/mongodb.js"
import Link from 'next/link'


export default async function List() {
    let client = await connectDB
    const db = client.db('forum')
    let result = await db.collection('post').find().toArray() // await 붙이면 js가 다른 코드를 먼저 실행하지 않고 기다림
    // result는 object 자료형
    
    // map 사용해서 result에 있는 값들 배정
    return (
    result.map((a, i) => {
        return (
            <div className="list-bg">
            <div className="list-item" key = {i}>
                
                <Link prefetch = {false} href = {'/detail/' + result[i]._id}>
                    <h4>{result[i].title}</h4>
                </Link>
                <p>{result[i].content}</p>
            </div>
            </div>
        )
        })
    // <DetailLink/> 이거 넣으면 버튼 생기고 버튼 누르면 페이지 이동 및 다른 기능 가능

    //   <div className="list-bg">
    //     <div className="list-item">
    //       <h4>{result[0].title}</h4>
    //       <p>{result[0].content}</p>
    //     </div>
    //     <div className="list-item">
    //       <h4>글제목</h4>
    //       <p>1월 1일</p>
    //     </div>
    //     <div className="list-item">
    //       <h4>글제목</h4>
    //       <p>1월 1일</p>
    //     </div>
    //   </div>
    )
  } 

  // 상세 페이지만들기
  // 1. 글 제목 누르면 상세 페이지 이동
  // 2. 상세 페이지 방문시 DB에서 글 1개 꺼내서 HTML에 보여주기

  // 여러 페이지 만드려면 [Dynamic Route] 사용
  // 현재 URL이 뭔지 궁금하면 props/useRouter
