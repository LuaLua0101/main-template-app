import { remoteConfig } from './firebase'

remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000,
};

remoteConfig.ensureInitialized()
  .then(() => {
    console.log('Firebase Remote Config is initialized');
    console.log(remoteConfig.getValue('init_param'))
  })
  .catch((err) => {
    console.error('Firebase Remote Config failed to initialize', err);
  });

export const getRemoteConfigParam = (param_name = 'init_param') => {
  remoteConfig.fetchAndActivate()
    .then(() => {
      console.log(remoteConfig.getAll())
    })
    .catch((err) => {
      console.error(err);
    });
}