import gql from 'graphql-tag'
import platform from 'platform'
import fetchJsonP from 'fetch-jsonp'
import { getDeviceType } from 'common/utils/helpers'
import { hasStorage } from 'common/utils/featureTests'
import { geoAccessKey } from 'common/constants'
import { client } from 'src/App'

const CREATE_VISITOR = gql`
  mutation createVisitor($device: Json!, $location: Json!, $referrer: String!) {
    createVisitor(device: $device, location: $location, referrer: $referrer) {
      id
    }
  }
`

const createNewVisit = async geoApiResponse => {
  const { city, zip, country_code, country_name, latitude, longitude, ip, location } = geoApiResponse
  const country_flag_emoji = location ? location.country_flag_emoji : undefined

  const response = await client
    .mutate({
      mutation: CREATE_VISITOR,
      variables: {
        referrer: document.referrer,
        device: {
          os: platform.os.family,
          product: platform.product,
          browser: platform.name,
          type: getDeviceType(),
        },
        location: {
          city,
          zip,
          country_code,
          country_name,
          country_flag_emoji,
          latitude,
          longitude,
          ip,
        },
      },
    })
    .catch(err => console.error(err))
  if (hasStorage && response.data) {
    localStorage.setItem('visitorID', response.data.createVisitor.id)
  }
}

const newVisitor = createVisitor => {
  if (hasStorage && localStorage.getItem('visitorID')) return null

  return fetchJsonP(`https://api.ipapi.com/check?access_key=${geoAccessKey}`)
    .then(response => {
      console.log('res', response)
      return response.json()
    })
    .then(createNewVisit)
    .catch(err => {
      console.error(err)

      createNewVisit({})
    })
}

export default newVisitor
