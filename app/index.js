import { View, Image, ScrollView, SafeAreaView, Text, Pressable } from "react-native";
import { Stack } from "expo-router"
import intro from "../assets/intro.png";
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledPressable = styled(Pressable)


const Home = () => {

    return (
        <SafeAreaView style={{ flex: 1, display: "grid", backgroundColor: "white" }}>
            <Stack.Screen
                options={{
                    headerTitle: "",
                }}
            />
            <ScrollView className="p-6">
                <StyledView className="items-center text-center text-red-500">
                    <Image source={intro} alt="ded" />
                    <StyledText className="text-[34px]">Stay on top of your finance with us.</StyledText>
                    <StyledText className="text-[17px]">We are your new financial Advisors
                        to recommed the best investments for you.</StyledText>

                    <StyledPressable className="bg-pry-col text-white">
                        <StyledText className="">Create account</StyledText>
                    </StyledPressable>
                    <StyledPressable>
                        <StyledText className="text-pry-col">Login</StyledText>
                    </StyledPressable>
                </StyledView>
            </ScrollView>

        </SafeAreaView>
    )
}

export default withExpoSnack(Home);

//  npm install expo-font axios react-native-dotenv