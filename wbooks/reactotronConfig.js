import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotronConfig = {
  initiate: () => {
    Reactotron.configure().useReactNative().use(reactotronRedux()).connect();
  },
  createEnhancer: () => Reactotron.createEnhancer(),
  // eslint-disable-next-line no-console
  console: {
    tron: {
      log: (...args) => Reactotron.logImportant(...args),
      clear: () => Reactotron.clear(),
      customCommand: ({ command, handler, title, description }) =>
        Reactotron.onCustomCommand({
          command,
          handler,
          title,
          description
        }),
      display: ({ name, value, preview, image }) =>
        Reactotron.display({
          name: name || 'DISPLAY',
          value,
          preview: preview || 'Click para mostrar detalle',
          important: true,
          image
        })
    }
  }
};

export default reactotronConfig;
