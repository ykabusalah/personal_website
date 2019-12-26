import React, { useState } from 'react'

const LearnMore = ({ more }) => {
  const [showText, setShowText] = useState(false)
  if (showText) {
    return (
      <>
        <div
          style={{ cursor: 'pointer', userSelect: 'none', fontWeight: 600 }}
          onClick={() => setShowText(false)}
        >
          Close
        </div>
        <div style={{ padding: 15 }}>{more}</div>
      </>
    )
  } else {
    return (
      <div
        style={{ cursor: 'pointer', userSelect: 'none', fontWeight: 600 }}
        onClick={() => setShowText(true)}
      >
        Learn More...
      </div>
    )
  }
}

export default LearnMore
