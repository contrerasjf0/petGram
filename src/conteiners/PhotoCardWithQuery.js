
import React from 'react'
import { Query } from 'react-apollo'

import { PhotoCard } from '../components/PhotoCard'
import { Loader } from '../components/Loader'
import { ContainerLoader } from '../components/Utils'
import { gql } from 'apollo-boost'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

const renderProp = ({ loading, error, data = {} }) => {
  if (error) return (<h4> An Error has occurred!</h4>)
  if (loading) return (<ContainerLoader><Loader /></ContainerLoader>)

  const { photo = {} } = data
  return (<PhotoCard {...photo} />)
}

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {
        renderProp
      }
    </Query>
  )
}
