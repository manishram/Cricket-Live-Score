import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import TabSwitchScreen from './TabSwitchScreen'
import { createStackNavigator } from 'react-navigation-stack'
import DetailScore from './DetailScore'
import PointsTable from './PointsTable'
import Fixtures from './Fixtures'
import Auction from './Auction'
import Records from './Records'
import Venues from './Venues'
import News from './News'

function Home() {
    const StackNavigation = createStackNavigator(
        {
            TabSwitchScreen: TabSwitchScreen,
            PointsTable: PointsTable,
            Fixtures: Fixtures,
            Auction: Auction,
            Records: Records,
            Venues: Venues,
            News: News,
            DetailScore: DetailScore,
        },
        {
            headerMode: 'none',
        }
    )
    const AppContainer = createAppContainer(StackNavigation)
    return <AppContainer />
}

export default Home
