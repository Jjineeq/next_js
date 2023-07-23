// 여러 페이지를 다 만들 수 없으니 폴더에 dynamic route를 사용한다.
// 사용 방법은 폴더명을 []로 감싸면 된다.
import { ObjectId } from "mongodb"
import { connectDB  } from "/util/mongodb.js"


export default async function Detail(props) { // props는 url에 있는 값들을 받아온다.
    let client = await connectDB
    const db = client.db('forum')
    let result = await db.collection('post').findOne(
        {_id : new ObjectId(props.params.aaa)}
        )
    console.log(props.params.aaa)

    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )

}