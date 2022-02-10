import { useEffect, useState } from 'react'
import User from './User';
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.smrize.com/books")
      .then((response) => response.json()).then((result) => {
        setData(result.data.books)
      })
  }, [])

  if (!data) return <div>Loading...</div>
  return (
    <div className='main'>
      <h1 className='head'>Books Name</h1>
      <div className="book">
        {data.map(item => <div className='item'>{item.title}</div>)}
      </div>
      <User></User>
    </div>
  )

}
export default App;