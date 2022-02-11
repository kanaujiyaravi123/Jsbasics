import { useEffect, useState } from "react";
import User from "./User";
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.smrize.com/books")
      .then((response) => response.json())
      .then((result) => {
        setData(result.data.books);
      });
  }, []);

  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <div className="head">
        <div style={{ width: "50%" }}>
          <h1>Books Name</h1>
        </div>
        <div>
          <h1>Users Name</h1>
        </div>
      </div>

      <div className="main">
        <div className="book">
          {data.map((item) => (
            <div className="item">
               <div>
               <div><img src={item.image} style={{'height':'50px','width':'40px'}}></img></div>
            </div>
             <div>
                 <div>{item.title} <br></br>{item.author}</div>
                 
            </div>
           
            </div>
          ))}
        </div>

        <User />
      </div>
    </div>
  );
}
export default App;
