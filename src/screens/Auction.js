import React, { Component, useState } from 'react'
import AuctionTopNav from '../components/AuctionTopNav'
const Auction = () => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

    return <AuctionTopNav />
}

export default Auction
