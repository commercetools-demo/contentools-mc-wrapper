import { PERMISSIONS } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Contentools Wrapper',
  entryPointUriPath: '${env:ENTRY_POINT_URI_PATH}',
  cloudIdentifier: 'gcp-us',
  env: {
    production: {
      applicationId: '${env:CUSTOM_APPLICATION_ID}',
      url: '${env:APPLICATION_URL}',
    },
    development: {
      initialProjectKey: '${env:INITIAL_PROJECT_KEY}',
    },
  },
  additionalEnv: {
    CMS_API_URL: '${env:CMS_API_URL}',
  },
  headers: {
    csp: {
      'connect-src': ['*.commercetools.app', '*.commercetools.com', 'localhost:8080', "'unsafe-eval'"],
      'script-src': [
        '*.commercetools.app',
        '*.commercetools.com',
        'localhost:8080',
        'cdn.jsdelivr.net',
        'blob:',
        "'unsafe-eval'",
      ],
      'style-src': ['cdn.jsdelivr.net'],
      'font-src': ['cdn.jsdelivr.net'],
    },
  },
  oAuthScopes: {
    view: [
      'view_products',
      'view_key_value_documents',
    ],
    manage: ['manage_products', 'manage_key_value_documents'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Contenttools',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'pages',
      defaultLabel: 'Pages',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
    {
      uriPath: 'items',
      defaultLabel: 'Items',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
    {
      uriPath: 'types',
      defaultLabel: 'Types',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
