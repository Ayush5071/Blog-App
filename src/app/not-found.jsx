import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <p>Not found</p>
        <Link href={`/`}>return to homepage</Link>
      
    </div>
  )
}

export default NotFound
