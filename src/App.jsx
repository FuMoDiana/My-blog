import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {

  return (
  <div className='app'>
      <div className="content">{useRoutes(routes)}</div> 
  </div>
  )
})

export default App