import Head from 'next/head'
import LoginScreen from '../components/LoginScreen'
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <LoginScreen />

  return (
    <div className="h-screen">
      <Head>
        <title>WelCoded Web3 Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1>Authenticated! JAZDA!</h1>
    <button onClick={logout}>Logout</button>
    </div>
  )
}
