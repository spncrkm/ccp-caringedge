import React from 'react'
import Typewriter from 'typewriter-effect'

const TypewriterContent = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: "Together.",
          autoStart: true,
          loop: true,
          cursor: null,
        }}
      />
    </>
  )
}

export default TypewriterContent
