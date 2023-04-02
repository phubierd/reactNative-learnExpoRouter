import { Stack, useRouter, useSearchParams } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const profile = () => {

    const router = useRouter()
    const { name, username } = useSearchParams()


    //username = [username].js
    // console.log(name, username, 'params ???')


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Stack.Screen
                options={{
                    title: username,
                    headerStyle: { backgroundColor: '#1e2632' },
                    headerTintColor: '#ffe030',
                }}
            />

            <Text style={{ fontSize: 30 }}>
                Hello {name} (@{username})
            </Text>
            <Button title='backkkkkk' onPress={() => {
                router.back()
            }} />
        </View>
    )
}

export default profile