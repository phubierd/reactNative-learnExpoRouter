import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const messages = () => {
    return (
        <View>
            <Link href={'/home/messages/123'} style={{ margin: 10, fontSize: 24 }}>Messages with Lukas</Link>

            <Link href={'/home/messages/456'} style={{ margin: 10, fontSize: 24 }}>Messages with Lukas</Link>

            <Link href={'/home/messages/789'} style={{ margin: 10, fontSize: 24 }}>Messages with Lukas</Link>
        </View>
    )
}

export default messages