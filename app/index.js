import { Link, Redirect, Stack, useRouter } from "expo-router";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";



export default function Page() {
  const router = useRouter()

  return <Redirect href={'home'} />
}


