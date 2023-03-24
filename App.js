import React from "react";
import { View } from "react-native";
import { Box, FlatList, Heading, Avatar, HStack, VStack, Text, Spacer, Center, NativeBaseProvider } from "native-base";
import AnimalListItem from "./src/components/AnimalListItem";
import Animals from "./src/utils/Animals.json";

const Example = () => {
  return <View>
    <Heading fontSize="xl" p="4" pb="3">
      <Center>Animals</Center>
    </Heading>
    <FlatList data={Animals} renderItem={({ item }) =>
    <AnimalListItem animal={item}/>
   } keyExtractor={item => item.id} />
  </View>;
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
