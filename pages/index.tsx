import type { NextPage } from 'next'
import Head from 'next/head'
import ThemeToggler from '../components/ThemeToggler'

const Home: NextPage = () => {
  return (
    <div className="relative max-h-full min-h-screen px-8 mx-auto transition duration-300 ease-in-out dark:bg-slate-700">
      <Head>
        <title>The one about ORMs</title>
        <meta name="description" content="A look at why you should use an ORM, the history behind them, and the ORMs currently available." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pt-4 px-4 mx-auto absolute top-0 w-screen left-0">
        <div className="flex justify-end">
          <ThemeToggler/>
        </div>
      </header>

      <main className="text-xl">
        <div className="text-center h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold">ORMs</h1>
          <p>Why you should use them, how you should use them, and what your options are.</p>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
