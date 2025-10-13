

import React from 'react'

function Home() {
  const user =JSON.parse(localStorage.getItem('user'))
  // console.log(user)
  return (
    <div>
      <h1>Home page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae corrupti quas aut nisi architecto distinctio voluptatum facilis impedit, magnam repellat libero obcaecati minima, ullam aspernatur esse explicabo veniam non! Eaque sapiente mollitia odio culpa ab corrupti. Facilis doloribus earum aperiam dolor maiores voluptatem. Minima ipsum tempora dolor qui vero neque.</p>
    </div>
  )
}

export default Home
