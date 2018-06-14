import React from 'react'

const downloadBrochure = () => window.open('media/brochure.pdf')

const BrochureLink = ({ children }) => <a onClick={downloadBrochure}>{children}</a>

export default BrochureLink
