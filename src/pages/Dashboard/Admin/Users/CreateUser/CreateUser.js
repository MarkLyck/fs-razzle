import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $name: String!
    $plan: String!
    $type: String!
    $stripeToken: String
    $stripeCustomer: String
    $address: Json
    $location: Json
    $device: Json!
    $taxPercent: Float!
  ) {
    createUser(
      email: $email
      password: $password
      name: $name
      plan: $plan
      type: $type
      stripeToken: $stripeToken
      stripeCustomer: $stripeCustomer
      address: $address
      location: $location
      device: $device
      taxPercent: $taxPercent
    ) {
      id
    }
  }
`

const CreateUser = () => {
  return (
    <Mutation mutation={CREATE_USER}>
      {createUser => {
        return (
          <button
            onClick={() =>
              createUser({
                variables: {
                  address: { countryName: 'Denmark', countryCode: 'DK', city: '', zip: '', address: '' },
                  email: 'hpu@kammeradvokaten.dk',
                  password: 'temp',
                  device: {},
                  name: 'Henrik',
                  plan: 'FUND',
                  stripeToken: 'tok',
                  stripeCustomer: 'cus_DVEOVxqtt2Br9x',
                  taxPercent: 25,
                  type: 'demo',
                },
              })
            }
          >
            CREATE USER
          </button>
        )
      }}
    </Mutation>
  )
}

export default CreateUser
