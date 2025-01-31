import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState } from "react";
import defaultStyles from "../styles/defaultStyles";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { dataType, DATA } from "@/data/appData";

export default function Index() {

  const[selectedId, setSelectedId] = useState<string>("1")

  /*
  declaring a function that receives a param of type dataType that we will refer to as 'item
  I can access the values of item using dot notation
  */

  const handleRowPress = (item: dataType) => {
    console.log("selected" + item.id)
    setSelectedId(item.id)
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data = {DATA}
            keyExtractor = {(item: dataType) => item.id}
            ItemSeparatorComponent={() => (
              <ListItemSeparator color="blue"/>
            )}
            renderItem={({item}) => (
              <ListItem
                item = {item}
                isSelected = {item.id === selectedId}
                onPress={handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
});
