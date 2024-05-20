import React, {FC, useState} from 'react';
import {useDebounce} from 'use-debounce';
import {Keyboard, SafeAreaView, View} from 'react-native';
import {useMovies} from '../../api/hooks';
import {Input, Title, MoviesList} from '../../components';
import {styles} from './styles';
import CancelIcon from '../../assets/svg/cancel.svg';

export const HomeScreen: FC = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery] = useDebounce(query, 400);

  const {data, isLoading} = useMovies({search: debouncedQuery});

  const handleResetQuery = () => {
    setQuery('');
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <Title text="Home" />
        <View style={styles.inputContainer}>
          <Input
            value={query}
            onValueChange={setQuery}
            endContent={CancelIcon}
            onEndContentPress={handleResetQuery}
          />
        </View>
        <MoviesList data={data} loading={isLoading} />
      </View>
    </SafeAreaView>
  );
};
