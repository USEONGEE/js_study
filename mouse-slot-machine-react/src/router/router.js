import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Game from '../page/Game'

export default function router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Game />}/>
      </Routes>
    </div>
  )
}
