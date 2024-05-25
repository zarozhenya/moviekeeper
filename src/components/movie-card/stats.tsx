import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {IMovie} from '../../types';
import {GENRES} from '../../constants';
import {styles} from './styles';

interface Props {
  rating: IMovie['vote_average'];
  votes: IMovie['vote_count'];
  title: IMovie['original_title'];
  genres: IMovie['genre_ids'];
  popularity: IMovie['popularity'];
}

export const Stats: FC<Props> = ({
  votes,
  rating,
  title,
  genres,
  popularity,
}) => {
  const {t} = useTranslation();
  const formattedVotes = new Intl.NumberFormat('en-US').format(votes);
  return (
    <View style={styles.statsWrapper}>
      <View style={[styles.statsRow, styles.statsRowCenter]}>
        <Text style={styles.statsTextKey}>{t('movie-card.votes')}</Text>
        <View style={styles.statsTextKeyContainer}>
          <View style={styles.statsVotesRatingContainer}>
            <Text style={styles.statsVotesRatingText}>{rating.toFixed(1)}</Text>
          </View>
          <Text style={styles.statsVotesCountText}>/</Text>
          <View style={styles.statsVotesCountContainer}>
            <Text style={styles.statsVotesCountText}>{formattedVotes}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statsTextKey}>{t('movie-card.popularity')}</Text>
        <Text style={styles.statsTextValue}>{popularity.toFixed(1)}</Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statsTextKey}>
          {t('movie-card.original-title')}
        </Text>
        <Text style={[styles.statsTextValue, styles.uppercaseText]}>
          {title}
        </Text>
      </View>
      <View style={styles.statsRow}>
        <Text style={styles.statsTextKey}>{t('movie-card.genre')}</Text>
        <Text style={styles.statsTextValue}>
          {genres.map(key => GENRES[key]).join(', ')}
        </Text>
      </View>
    </View>
  );
};
