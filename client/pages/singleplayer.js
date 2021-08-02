import React from 'react'
import { useAppContext } from '../context/state'

export default function Singleplayer() {
    const theme = useAppContext()
    return (
        <div>
            {theme.hi}
        </div>
    )
}
