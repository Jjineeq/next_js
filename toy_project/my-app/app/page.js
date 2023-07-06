import { connectDB  } from "/util/mongodb.js"

export default async function Home() {
  let client = await connectDB
  const db = client.db('forum')
  let result = await db.collection('post').find().toArray()
  

  return (
    <main>
      {result[0].title + " " + result[0].content}
      
    </main>
  )
}