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
                  address: { countryName: 'Australia', countryCode: 'AU', city: '', zip: '', address: '' },
                  email: 'jasonbac@hotmail.com',
                  password: 'temp',
                  device: {},
                  name: 'JASON BACZELIS',
                  plan: 'ENTRY',
                  stripeToken: 'tok',
                  stripeCustomer: 'cus_DZ3bEQoIGkkNRy',
                  taxPercent: 0,
                  type: 'subscriber',
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
