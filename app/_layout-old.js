import { Stack, useRouter } from 'expo-router'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
const Layout = () => {
    const router = useRouter()

    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: '#ffe030' },
                headerTintColor: '#1e2632',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',

            }} >
            <Stack.Screen name="index" options={{
                title: 'Home', headerRight: () => (<AntDesign
                    onPress={() => {
                        router.push('/modal')
                    }}
                    name="infocirlceo"
                    size={22}
                    color='#1e2632' />)
            }} />
            <Stack.Screen
                name="modal"
                options={{
                    presentation: 'modal',
                    headerStyle: { backgroundColor: 'white' },
                    headerTintColor: '#1e2632',
                }} />
        </Stack>
    )
}

export default Layout