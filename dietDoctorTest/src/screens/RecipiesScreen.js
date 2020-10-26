import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import AppNavigationBar from '../components/AppNavigationBar';
import { ListItem, Avatar } from 'react-native-elements';
import { getRecipies } from '../api/recipies';
import { IMAGES_BASE_URL } from '../constants';

const RecipiesScreen = () => {
  const [data, setData] = useState({ recipies: [] });

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => {
    return (
      <ListItem bottomDivider>
        <Avatar source={{ uri: `${IMAGES_BASE_URL}${item.images.hz}` }} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.rating}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const postData = JSON.stringify({
        query:
          'fragment NutritionFragment on Nutrition {\n    values {\n        carbs\n        fat\n        protein\n        fiber\n        calories\n    }\n    percentages {\n        carbs\n        fat\n        protein\n    }\n}\n\nfragment BaseRecipe on Recipe {\n  id\n  isMembersOnly\n  title\n  description\n  rating\n  modifiedAt\n  slug\n  nutrition {\n    ...NutritionFragment\n  }\n  time {\n    preparation\n    cook\n  }\n  difficulty {\n    rating\n    value\n  }\n  images {\n    hz\n    vt\n    brightness\n  }\n  tags {\n    id\n    type\n    title\n  }\n  servings {\n    default\n    allowed\n  }\n  strictness {\n    rating\n    value\n  }\n  instructionSections {\n      title\n      header {\n        text\n      }\n      footer {\n        text\n      }\n      steps\n  }\n  tips {\n   header\n   content\n  }\n  videos {\n     id\n     type\n  }\n}\n\nquery GetRecipes($page: Int,\n  $pageSize: Int,\n  $tagFilters: [String],\n  $premiumOnly: Boolean,\n  $includePremiumPreview: Boolean,\n) {\n  listRecipes(input: {\n    page: $page\n    pageSize: $pageSize\n    tagFilters: $tagFilters,\n    premiumOnly: $premiumOnly,\n    includePremiumPreview: $includePremiumPreview\n  }) {\n    recipes {\n      ...BaseRecipe\n    }\n    totalSize\n    nextPage\n  }\n}',
        variables: {
          page: 1,
          pageSize: 15,
          tagFilters: [],
          premiumOnly: false,
          includePremiumPreview: false,
        },
      });
      try {
        const response = await getRecipies(postData);
        setData(response);
      } catch (error) {
        return error.name;
      }
    };
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <AppNavigationBar title="Recipies" color="green" />
      <FlatList
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RecipiesScreen;
