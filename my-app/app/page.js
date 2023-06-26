import Link from 'next/link'

export default function Home(){
  let name ='Jang'
  let age = 20
  let link = 'https://www.naver.com'
  return (
    <div>

      <h4 className="title"> Next js study page</h4>
      <p className="title-sub"> made by {name}</p>

    </div>

  )
}

