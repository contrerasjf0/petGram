import React from 'react'
import LoaderSpiner from 'react-loader-spinner'

function Loader () {
  return (
    <LoaderSpiner
      type='Circles'
      color='#3e6d8d'
      height={50}
      width={50}
      timeout={3000}
    />
  )
}

export const FancyLoader = Loader
