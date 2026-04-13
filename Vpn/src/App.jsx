import './App.css'

function App() {
  const s = +prompt('Mesafeni daxil edin:')
  const t = +prompt('Vaxti daxil edin:')
 
  const v = s/t
  return (
    <>
   <h1>Suret: {v}</h1>
   
  
 
    </>
    
  )
}

export default App
