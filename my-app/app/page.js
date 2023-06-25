import Link from 'next/link'

export default function Home(){
  let name ='jang'
  let age = 20
  let link = 'https://www.naver.com'
  return (
    <div>


      <h3 style = {{color:'red', fontSize : '30px'}}>안녕하세요</h3>
      <h4 className="title"> abc</h4>
      <p className="title-sub"> {name}</p>

      

      <a href={link}>링크</a>
    </div>

  )
}

