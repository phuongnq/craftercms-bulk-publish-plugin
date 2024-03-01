import en from './i18n/translations/en.json';
import es from './i18n/translations/es.json';
import { PluginDescriptor } from '@craftercms/studio-ui';
import BulkPublishPanelButton from './components/BulkPublishPanelButton';
import BulkPublishView from './components/BulkPublishView';

const plugin: PluginDescriptor = {
  id: 'org.craftercms.bulkpublish.componentLibrary',
  locales: {
    en,
    es
  },
  widgets: {
    'org.craftercms.bulkpublish.bulkPublishView': BulkPublishView,
    'org.craftercms.bulkpublish.bulkPublishPanelButton': BulkPublishPanelButton
  },
  scripts: [
    // Below are examples of how to load scripts into the Studio runtime
    // {
    //   src: 'https://code.jquery.com/jquery-3.5.1.min.js',
    //   integrity: 'sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=',
    //   crossorigin: 'anonymous'
    // },
    // 'script.js'
  ],
  stylesheets: [
    // Examples of how to load stylesheets into the Studio runtime
    // 'index.css'
  ]
};

export { BulkPublishView, BulkPublishPanelButton };

export default plugin;
