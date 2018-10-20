import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { distanceInWordsStrict } from 'date-fns'
import { TableCell, TableRow } from 'components/Table'
import { Icon, tableCellStyle, countryStyle } from './styles'

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
  if (os.includes('Windows')) return 'Windows.png'
  else if (os.includes('Windows Server')) return 'Windows.png'
  else if (os === 'OS X') return 'MacOS.png'
  else if (os === 'iOS') return 'IOS.png'
  else if (os === 'Android') return 'Android.png'
  else if (os === 'Linux' || os === 'Ubuntu' || os === 'Ubuntu Chromium') return 'Linux.png'
  else if (os.includes('Chrome')) return 'Chrome.svg'

  return ''
}

const getDeviceIcon = device => {
  if (device.product === 'iPad') return 'tablet'
  else if (device.type === 'mobile') return 'mobile'
  return 'desktop'
}

const Visitor = ({ visitor }) => (
  <TableRow key={visitor.id} onClick={() => console.log(visitor)}>
    <TableCell style={countryStyle}>
      {visitor.location && visitor.location.country_flag_emoji}
      <p style={{ marginLeft: '8px' }}>{visitor.location && visitor.location.country_name}</p>
    </TableCell>
    <TableCell style={{ height: '48px' }}>
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
      {visitor.device.os && <Icon src={`/media/icons/devices/${getOSIcon(visitor.device.os)}`} alt="os" />}
      {visitor.device.browser && (
        <Icon src={`/media/icons/devices/${getBrowserIcon(visitor.device.browser)}`} alt="browser" />
      )}
      {visitor.device && <FontAwesomeIcon icon={getDeviceIcon(visitor.device)} style={{ width: '32px' }} />}
    </TableCell>
  </TableRow>
)

Visitor.propTypes = {
  visitor: PropTypes.object,
}

export default Visitor
