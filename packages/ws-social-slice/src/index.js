import React from 'react'
import SocialSlice from './components/social-slice'
import defaultConfig from './fixtures/data.json'

const WSSocialSlice = ({
    serviceName = 'news',
    edition = 'domestic',
    config = defaultConfig
}) => {
    return <SocialSlice serviceName={serviceName} edition={edition} config={config} />
}

export default WSSocialSlice
