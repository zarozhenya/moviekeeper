import React from 'react';
import {TabEnum} from '../types';
import HomeIcon from '../assets/svg/home.svg';
import MovieIcon from '../assets/svg/movie.svg';
import SettingsIcon from '../assets/svg/settings.svg';

export const renderTabIcon =
  (tab: TabEnum) =>
  ({color}: {color: string}) => {
    if (tab === TabEnum.Home) {
      return <HomeIcon width={20} height={20} fill={color} />;
    }

    if (tab === TabEnum.Movies) {
      return <MovieIcon width={32} height={32} fill={color} />;
    }

    if (tab === TabEnum.Profile) {
      return <SettingsIcon width={20} height={20} fill={color} />;
    }

    return null;
  };
