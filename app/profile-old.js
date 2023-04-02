import { useRouter, useSearchParams } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const profile = () => {

    const router = useRouter()
    const { name, surname } = useSearchParams()

    console.log(name, surname, 'params ???')


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>
                Hello {name}
            </Text>
            <Button title='backkkkkk' onPress={() => {
                router.back()
            }} />
        </View>
    )
}

export default profile