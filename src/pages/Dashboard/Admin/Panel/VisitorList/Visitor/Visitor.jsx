import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { TableCell, TableRow } from 'material-ui/Table'
import { Icon, tableCellStyle, countryStyle } from './styles'

const getFlag = countryCode => {
  const invalidFlags = {
    GG: true,
  }

  if (invalidFlags[countryCode]) return ''

  return (
    <img
      src={`/media/icons/flags/${countryCode.toLowerCase()}.png`}
      alt="flag"
    />
  )
}
const getBrowserIcon = browser => {
  if (browser.indexOf('Chrome') > -1 || browser === 'Blink') return 'Chrome.svg'
  else if (browser.indexOf('Firefox') > -1) return 'Firefox.png'
  else if (browser === 'Safari') return 'Safari.svg'
  else if (browser === 'Microsoft Edge') return 'Edge.svg'
  else if (browser === 'IE') return 'IE.png'
  else if (browser === 'Android Browser') return 'AndroidBrowser.svg'
  else if (browser === 'Opera') return 'Opera.png'
  else if (browser === 'PhantomJS') return 'PhantomJS.png'
  return ''
}

const getOSIcon = os => {
  if (os === 'Windows') return 'Windows.png'
  else if (os === 'OS X') return 'MacOS.png'
  else if (os === 'iOS') return 'IOS.png'
  else if (os === 'Android') return 'Android.png'
  else if (os === 'Linux' || os === 'Ubuntu') return 'Linux.png'
  return ''
}

const getDeviceIcon = device => {
  if (device.product === 'iPad') return 'fa-tablet'
  else if (device.type === 'mobile') return 'fa-mobile'
  return 'fa-desktop'
}

const Visitor = ({ visitor }) => (
  <TableRow key={visitor.id}>
    <TableCell style={countryStyle}>
      {visitor.location && getFlag(visitor.location.country_code)}
      <p style={{ marginLeft: '8px' }}>
        {visitor.location && visitor.location.country_name}
      </p>
    </TableCell>
    <TableCell
      onClick={() => console.log(visitor.url)}
      style={{ height: '48px' }}
    >
      <p>
        {
          visitor.url
            .replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')
            .split('/')[0]
        }
      </p>
    </TableCell>
    <TableCell style={{ height: '48px' }}>
      {moment(visitor.createdAt).fromNow()}
    </TableCell>
    <TableCell style={tableCellStyle}>
      {visitor.device && (
        <i className={`fa ${getDeviceIcon(visitor.device)}`} />
      )}
      {visitor.device && (
        <Icon
          src={`/media/icons/devices/${getOSIcon(visitor.device.os)}`}
          alt="os"
        />
      )}
      {visitor.device && (
        <Icon
          src={`/media/icons/devices/${getBrowserIcon(visitor.device.browser)}`}
          alt="browser"
        />
      )}
    </TableCell>
  </TableRow>
)

Visitor.propTypes = {
  visitor: PropTypes.object,
}

export default Visitor
