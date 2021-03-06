import React, { useEffect, useState, memo } from 'react'
import { Category } from '../Category'

import { List, Item } from './styles'
import { ContainerLoader } from '../Utils'
import { FancyLoader } from '../Loader'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(function () {

    setLoading(true)

    window.fetch('https://petgram-serv-c.contrerasjf0.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200

      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        (loading)
          ? (<ContainerLoader>
            <FancyLoader />
          </ContainerLoader>)
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
      }
    </List>
  )

  return (
    <>
      {!showFixed && renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = memo(ListOfCategoriesComponent)
