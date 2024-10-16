import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text">Discover & Share</h1>
        <br className='max-md:hidden' />
        <span className='orange_gradient font-[800] text-4xl text-center'>
            AI-Powered Prompts
        </span>
        <p className='desc text-center'>
            Promptopia is an open-source AI prompting tool designed for the modern world, enabling users to discover, create, and share innovative prompts effortlessly.</p>
        <Feed />
    </section>
  )
}

export default Home