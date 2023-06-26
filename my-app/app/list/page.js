

export default function List(){
    let 상품 = ['Tomatoes' ,'Pasta', 'Coconut']
    let price = [20, 30, 40]

    return (
      <div>
        
        <h4 className="title"> 상품목록</h4>
        {
          상품.map((a, i)=>{
            return (
            <div className="food">
              <h4>{상품[i]} ${price[i]}</h4>
            </div>
            )
          })
        }

        {/* <div className="food">
            <h4>{상품[0]} $30</h4>
        </div>
        <div className="food">
            <h4>{상품[1]} $50</h4>
        </div>
        <div className="food">
          <h4>{상품[2]} $70</h4>

        </div> */}
      </div>
  
    )
  }
  
  