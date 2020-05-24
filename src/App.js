import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'

import { GlobalStyle } from './styles-components/GlobalStyles'
import { ListOfPhotoCards } from './conteiners/ListOfPhotoCards'
import { PhotoCardWithQuery } from './conteiners/PhotoCardWithQuery'

import { Logo } from './components/Logo'

export const App = () => {

  const urlParams = new window.URLSearchParams(window.location.search)
  const datailIdParam = urlParams.get('detail')

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        (datailIdParam)
          ? (<PhotoCardWithQuery id={datailIdParam} />)
          : (
            <>
              <ListOfCategories />
              <ListOfPhotoCards categoryId={1} />
            </>)
      }
    </div>
  )
}
