import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import io from "socket.io-client"
import Link from "next/link"
import { useAppContext } from '../context/state'

let socket;

export default function Home() {



  return (
    <div>
      <h1>Neptune</h1>
      <div>
        <Link href="/singleplayer"><a><button>Singleplayer</button></a></Link>
        <Link href="rooms"><a><button>Join A Room</button></a></Link>
      </div>
    </div>
  )
}
