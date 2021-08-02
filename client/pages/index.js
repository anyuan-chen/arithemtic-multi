import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import io from "socket.io-client"
import Link from "next/link"

let socket;

export default function Home() {
  const ENDPOINT = "http://localhost:4000"
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("handshake")
    console.log(socket)
  }, [ENDPOINT])
  return (
    <div>
      <h1>lol</h1>
    </div>
  )
}
