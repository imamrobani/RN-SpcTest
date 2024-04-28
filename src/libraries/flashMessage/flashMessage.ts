import {showMessage, MessageOptions} from 'react-native-flash-message';

interface FlashMessageOptions extends MessageOptions {
  message: string;
  type: 'default' | 'info' | 'success' | 'warning' | 'danger';
}

export const showFlashMessage = (options: FlashMessageOptions) => {
  showMessage(options);
};
