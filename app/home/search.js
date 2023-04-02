import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
const user = [
  {
    username: 'phuctv1',
    name: 'PhuCT v1'
  },
  {
    username: 'phuctv2',
    name: 'PhuCT v2'
  },
]
const search = () => {
  return (
    <View style={styles.container}>

      {/* <Stack.Screen options={{ title: 'Home' }} /> */}

      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>

        {/* <Link
          // href={'/profile?name=PhuCT&surname=Test'}
          href={'/PhuCT'}
          style={styles.link}>
          Open profile
        </Link>

        <Link
          href={{ pathname: '/PhuCTOjbect', params: { name: 'PhuCT v2', surname: 'Test' } }}
          style={styles.link}>
          Open profile by object
        </Link> */}

        {user.map(user => (
          <Link
            // href={'/profile?name=PhuCT&surname=Test'}
            key={user.username}
            href={`/${user.username}`}
            // href={{ pathname: `/${user.username}`, params: { name: user.name, username: user.username } }}
            style={styles.link}>
            Open {user.name} profile
          </Link>
        ))}


      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  }
});

export default search