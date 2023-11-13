import { View, Image, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router"
import { useState } from "react";
import intro from "../assets/intro.png";
import { withExpoSnack } from 'nativewind';
import { NativeWindStyleSheet } from "nativewind";
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)



const Home = () => {

    return (
        <SafeAreaView style={{ flex: 1, display: "grid", backgroundColor: "white" }}>
            <ScrollView>
                <StyledView className=" bg-black text-red-500">
                    <Image source={intro} alt="ded" />
                    <StyledText className="text-red-600">Stay on top of your finance with us.</StyledText>
                    <StyledText>We are your new financial Advisors
                        to recommed the best investments for you.</StyledText>
                </StyledView>
            </ScrollView>

        </SafeAreaView>
    )
}

export default withExpoSnack(Home);

//  npm install expo-font axios react-native-dotenv