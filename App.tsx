import React from "react";
import FlatCards from "./components/FlatCards";
import { 
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native';
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";

function App(){
 return (
  <SafeAreaView>
  <ScrollView>
 <Text>App</Text>
    <FlatCards/>
     <ElevatedCards/>
      <FancyCard />
  </ScrollView>


</SafeAreaView>
 )
}



export default App;