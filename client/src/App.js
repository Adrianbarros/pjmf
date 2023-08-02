import { useEffect, useState } from 'react'
import { useTable } from "react-table"
import './App.css';


const Header = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((title) => (
          <th className='fire-table-cell'>
            {title}
          </th>
        ))}
      </tr>

    </thead>
  )
}

const Content = ({ fires, columns }) => {
  return (
    <tbody>
      {fires.map(entry => (
        <tr >
          {columns.map(column => (
            <td >{JSON.stringify(entry[column])}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}
function App() {
  const [fires, setFires] = useState()
  const [bigData, setBigData] = useState(null)
  let columns = []


  useEffect(() => {
    const url = 'http://127.0.0.1:5000/'
    fetch(url)
      .then((res) => res.json())
      .then(data => setBigData(data))
    if (bigData) {
      setFires(bigData.rss.channel.item.slice(0, 10))
    }
  }, [])

  if (fires) {
    columns = Object.keys(fires[0])
  }

  return (
    <div className="App">

      {fires ? <table className='fire-table'>
        <Header columns={columns} />
        <Content fires={fires} columns={columns} />
      </table>
        : <></>}
    </div>
  );
}

export default App;
