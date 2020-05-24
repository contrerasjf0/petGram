import React from 'react'

import { ListOfCategories } from './components/ListOfCategories'

import { GlobalStyle } from './styles-components/GlobalStyles'
import { ListOfPhotoCards } from './conteiners/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards categoryId={1} />
  </div>
)
