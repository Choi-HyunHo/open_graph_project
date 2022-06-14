import './App.css'

import Header from './Header'
import User from './User'
import Title from './Title'
import ModalBtn from './ModalBtn'

function App() {
  return (
    <>
      <Header left={'<'} center={'URL 등록'} right={'>'} />
      <User left={'밝은_코브라'} right={'🔻'} />
      <Title />
      <ModalBtn />
    </>
  )
}

export default App
