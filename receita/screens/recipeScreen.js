import { QuerySnapshot } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";


import firebase from "../database/firebase";

const recipeScreen = (props) => {
    const [recipes, setRecipe] = useState([]);

    useEffect(() => { 
       firebase.db.collection("1").onSnapshot((QuerySnapshot) => {
            const recipes = [];
            QuerySnapshot.docs.forEach((doc)=>{
                const { titulo, detalhes } = doc.data();
                recipes.push({
                    id: doc.id,
                    titulo,
                    detalhes,
                });
            });
            setRecipe(recipes);
        })
    },[]);

return (
    <ScrollView>
        {recipes.map((recipe) => {
            return(
                <ListItem
                key={recipe.id}
                bottomDivider
                onPress={()=>{
                    props.navigation.navigate("RecipeDetailScreen",{
                        recipeId: recipe.id,
                    })
                }}
                >
                  <ListItem.Chevron/>

                 <ListItem.Content>
                    <ListItem.Title>{recipe.titulo}</ListItem.Title>
                    <ListItem.Subtitle>{recipe.detalhes}</ListItem.Subtitle>
                </ListItem.Content> 

                </ListItem>
            );
        })}
    </ScrollView>
)};

export default recipeScreen;