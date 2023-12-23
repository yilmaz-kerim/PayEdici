import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import filter from "../assets/icons/filter.png";
import { router } from "expo-router";
import Search from "../assets/icons/search.png";

const profile = () => {
  const data = [
    { id: "1", type: "Mutfak", description: "100", alacak: "100", net: "0" },
    { id: "2", type: "Deneme Öğrenci", description: "100", alacak: "100", net: "0" },
    { id: "3", type: "Halı Saha", description: "200", alacak: "200", net: "0" },
    // ... Diğer öğeler
  ];

  const renderItem = ({ item }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.type}</Text>
      <Text style={styles.tableCell}>{item.description}</Text>
      <Text style={styles.tableCell}>{item.alacak}</Text>
      <Text style={styles.tableCell}>{item.net}</Text>
    </View>
  );
  return (
    <ScrollView>
      <View>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              onChange={() => {}}
              placeholder="What are you looking for ?"
            />
          </View>
          <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
            <Image
              source={Search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>Type</Text>
          <Text style={styles.headerCell}>verecek</Text>
          <Text style={styles.headerCell}>Alacak</Text>
          <Text style={styles.headerCell}>Net</Text>
        </View>

        {/* Tablo İçeriği */}
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    height: 50,
    marginLeft: 20,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "white",
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: "#e7b532",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    marginRight: 20,
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
  },

  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingBottom: 5,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingVertical: 10,
  },
  headerCell: {
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
});
