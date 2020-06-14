import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import { ListOfFavs } from '../components/ListOfFavs'
import { Loader } from '../components/Loader'
import { ContainerLoader } from '../components/Utils'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({ loading, error, data }) => {
  if (error) return (<h4> An Error has occurred!</h4>)
  if (loading) return (<ContainerLoader><Loader /></ContainerLoader>)

  const { favs } = data

  return <ListOfFavs favs={favs} />
}

export const ListOfFavoritesQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
