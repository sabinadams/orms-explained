import type { NextPage } from 'next'
import Head from 'next/head'
import ThemeToggler from '../components/ThemeToggler'

const Home: NextPage = () => {
  return (
    <div className="max-h-full min-h-screen px-4 mx-auto transition duration-300 ease-in-out dark:bg-slate-700">
      <Head>
        <title>ORMs Explained</title>
        <meta name="description" content="A look at why you should use an ORM, the history behind them, and the ORMs currently available." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pt-4 px-4 mx-auto">
        <div className="flex justify-end">
          <ThemeToggler/>
        </div>
      </header>

      <main>
        <h1 className="text-4xl font-extrabold">ORMs</h1>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
