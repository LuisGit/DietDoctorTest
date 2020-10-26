import React, { useState, useEffect } from 'react';
import AppNavigationBar from '../components/AppNavigationBar';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { getMeals } from '../api/meals';
import styles from '../styles/MealsScreenStyle';

const MealsScreen = () => {
  const [data, setData] = useState({ recipies: [] });
  const [loading, setLoading] = useState(true);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => {
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{`Type: ${item.type}`}</ListItem.Subtitle>
          <ListItem.Subtitle>{`Is Members Only? : ${item.isMembersOnly}`}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      var postData = JSON.stringify({
        query:
          'fragment NutritionFragment on Nutrition {\n    values {\n        carbs\n        fat\n        protein\n        fiber\n        calories\n    }\n    percentages {\n        carbs\n        fat\n        protein\n    }\n}\n\n\nfragment MealFragment on Meal {\n    active\n    recipesDetails {\n        id\n        title\n        images {\n            hz\n            vt\n        }\n    }\n}\n\nfragment MealPlanFragment on Mealplan {\n    id\n    title\n    userAuthor\n    createdAt\n    description\n    type\n    isMembersOnly\n    schedule {\n      name\n      dinner {\n          ...MealFragment\n      }\n      lunch {\n         ...MealFragment\n      }\n      nutrition {\n        ...NutritionFragment\n      }\n      strictness {\n          rating\n          value\n      }\n    }\n    nutritionAverage {\n      ...NutritionFragment\n    }\n}\n\n\nquery GetMemberMealPlans {\n  memberMealplans {\n    ...MealPlanFragment\n  }\n}',
        variables: { page: 1, pageSize: 1 },
      });

      try {
        const response = await getMeals(postData);
        setData(response);
        setLoading(false);
      } catch (error) {
        return error.name;
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <AppNavigationBar title="Recipies" color="green" />
      {loading && (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
      {!loading && (
        <FlatList
          keyExtractor={keyExtractor}
          data={data}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default MealsScreen;
