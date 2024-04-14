import React, {FC, useState} from 'react';
import {useDebounce} from 'use-debounce';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';
import {Input, Title, MoviesList} from '../../components';

export const HomeScreen: FC = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 400);

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Home" />
        <Input value={query} onValueChange={setQuery} />
        <MoviesList query={debouncedQuery} />
      </View>
    </SafeAreaView>
  );
};
