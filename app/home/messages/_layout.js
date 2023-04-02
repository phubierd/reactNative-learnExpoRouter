import { Stack } from 'expo-router'

export default () => {
    return <Stack screenOptions={{
        // headerShown: false
    }}>
        <Stack.Screen name='index' options={{ title: 'Messages' }} />
        <Stack.Screen name='[id]' options={{ title: 'Messages room' }} />
    </Stack>
}