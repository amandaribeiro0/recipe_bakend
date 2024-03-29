import React, { useEffect, useState } from "react";
import { ScrollView, View, ActivityIndicator, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import firebase from "../database/firebase";


const RecipeDetailScreen = (props) => {
    const initialState = {
        id: "",
        titulo:"",
        detalhes:"",
    };

    const [recipe, setRecipe] = useState(initialState);
    const [loading, setLoading] = useState(true);

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection("1").doc(id);
        const doc = await dbRef.get();
        const recipe = doc.data();
        setRecipe({ ...recipe, id: doc.id});
        setLoading(false);
    };

    useEffect(() => {
        getUserById(props.route.params.recipeId);
    },[]);

    if(loading){
        return(
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="blue" />
        </View>
        );
    }


return(
    <ScrollView style={styles.container}>
        <View>
        <Text style={styles.title}>Receita:</Text>
        <TextInput
             placeholder="Name"
             autoCompleteType="username"
             style={styles.inputGroup}
             value={recipe.titulo}
        />
        </View>
        <View>
            <Text style={styles.title}>Detalhes:</Text>
            <TextInput
          autoCompleteType="cost"
          placeholder="cost"
          style={styles.inputGroup}
          value={recipe.detalhes}
          
        />
        </View>

    </ScrollView>
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
    },
    loader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
    },
    inputGroup: {
      fontSize:20,
      flex: 1,
      padding: 0,
      marginBottom: 15,
      borderBottomWidth: 2,
      borderBottomColor: "#87CEFA",
    },
    title: {
      fontSize: 18,
      fontWeight:600
    },
  });

  export default RecipeDetailScreen;