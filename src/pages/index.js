import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Habit Tracker & Motivator</title>
        <meta name="description" content="Track your habits and get AI-powered suggestions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Dashboard />
      </main>
    </div>
  )
}

