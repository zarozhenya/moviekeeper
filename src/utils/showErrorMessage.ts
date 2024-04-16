import {showMessage} from 'react-native-flash-message';

export const showErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    showMessage({
      message: error.message.replace(/\[.*?\]/g, ''),
      type: 'danger',
      icon: 'danger',
    });
  }
};
