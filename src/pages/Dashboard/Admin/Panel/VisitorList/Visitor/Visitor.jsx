import React from 'react'
import PropTypes from 'prop-types'
import { distanceInWordsStrict } from 'date-fns'
import { TableCell, TableRow } from 'components/Table'
import { Icon, tableCellStyle, countryStyle } from './styles'

const getFlag = countryCode => {
  const invalidFlags = {
    GG: true,
  }

  if (invalidFlags[countryCode]) return ''

  return <img src={`/media/icons/flags/${countryCode.toLowerCase()}.png`} alt="flag" />
}
const getBrowserIcon = browser => {
  if (!browser) return ''
  if (browser.indexOf('Chrome') > -1 || browser === 'Blink') return 'Chrome.svg'
  else if (browser.indexOf('Firefox') > -1) return 'Firefox.png'
  else if (browser === 'Safari') return 'Safari.svg'
  else if (browser === 'Microsoft Edge') return 'Edge.svg'
  else if (browser === 'IE') return 'IE.png'
  else if (browser === 'Android Browser' || browser === 'Samsung Internet') return 'AndroidBrowser.svg'
  else if (browser === 'Opera') return 'Opera.png'
  else if (browser === 'PhantomJS') return 'PhantomJS.png'

  return ''
}

const getOSIcon = os => {
  if (!os) return ''
  if (os === 'Windows') return 'Windows.png'
  else if (os.includes('Windows Server')) return 'Windows.png'
  else if (os === 'OS X') return 'MacOS.png'
  else if (os === 'iOS') return 'IOS.png'
  else if (os === 'Android') return 'Android.png'
  else if (os === 'Linux' || os === 'Ubuntu' || os === 'Ubuntu Chromium') return 'Linux.png'
  else if (os.includes('Chrome')) return 'Chrome.svg'

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
      {visitor.location && getFlag(visitor.location.country.code)}
      <p style={{ marginLeft: '8px' }}>{visitor.location && visitor.location.country.name}</p>
    </TableCell>
    <TableCell onClick={() => console.log(visitor.referrer)} style={{ height: '48px' }}>
      <p>
        {
          visitor.referrer
            .replace('https://', '')
            .replace('http://', '')
            .replace('www.', '')
            .split('/')[0]
        }
      </p>
    </TableCell>
    <TableCell style={{ height: '48px' }}>{distanceInWordsStrict(new Date(), visitor.createdAt)} ago</TableCell>
    <TableCell style={tableCellStyle}>
      {visitor.device && <i className={`fa ${getDeviceIcon(visitor.device)}`} />}
      {visitor.device.os && <Icon src={`/media/icons/devices/${getOSIcon(visitor.device.os)}`} alt="os" />}
      {visitor.device.browser && (
        <Icon src={`/media/icons/devices/${getBrowserIcon(visitor.device.browser)}`} alt="browser" />
      )}
    </TableCell>
  </TableRow>
)

Visitor.propTypes = {
  visitor: PropTypes.object,
}

export default Visitor
