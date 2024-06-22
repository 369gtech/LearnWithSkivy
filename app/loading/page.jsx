import React from 'react'
export async function wait(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const LoadingPage = async() => {
  await wait(5000);
  return (
    <div>
      <h1>This Is Loading</h1>
    </div>
  )
}

export default LoadingPage
