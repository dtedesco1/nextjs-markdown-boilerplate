'use client'

import { useState } from 'react'

function TallyButton() {
    const [count, setCount] = useState(0)
    return (
        <button className="btn" onClick={() => setCount(count + 1)}>
            Clicked {count} times
        </button>
    )
}

export default TallyButton