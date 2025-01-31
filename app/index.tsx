import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-lg text-blue-400 font-bold font-rubik-extrabold text-4xl">Welcome Restate</Text>
      <Link href={'/sign-in'}>Sign In</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/profile'}>profile</Link>
      <Link href={'/properties/1'}>Property</Link>
    </View>
  );
}
