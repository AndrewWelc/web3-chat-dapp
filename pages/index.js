import Head from 'next/head'
import LoginScreen from '../components/LoginScreen'
import { useMoralis } from "react-moralis";
import LoggedHeader from '../components/LoggedHeader';
import MessagesPanel from '../components/MessagesPanel';

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();
  if (!isAuthenticated) return <LoginScreen />

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-emerald-900 overflow-hidden">
      <Head>
        <title>WelCoded Web3 Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="max-w-screen-2xl mx-auto">
      <LoggedHeader />
      <MessagesPanel />
      </div>
    <button onClick={logout}>Logout</button>
    </div>
  )
}
