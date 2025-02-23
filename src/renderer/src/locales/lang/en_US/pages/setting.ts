export default {
  name: 'Setting',
  loading: 'Loading...',
  upload: 'Upload',
  random: 'Random',
  placeholder: {
    general: 'Please enter the content',
    startPage: 'Please enter the start page path, such as /home/',
    paramsPath: 'path',
    paramsPasswd: 'password',
    params: '{\n\t"path": { "password": "password" }\n}',
    manualTip:
      'Example of M3U:\n#EXTM3U\n#EXTINF:-1,Channel\nhttps://channel-url\n\nExample of genre\nChannel,https://channel-url',
    groupTip: 'Please select a group',
    categoryTip: 'Please enter shielded main category content, separated by commas',
    shortcutKeyTip: 'Click this to set',
    shortcutKeyEnterTip: 'Press shortcut key combination',
    shortcutKeyNonCompliance: 'Shortcut key combination is not compliant',
    epgTip: 'Only support dipy',
    logoTip: 'Source logo is invalid',
    pdfaTip: 'List rules (e.g. body&&li)',
    pdfhTip: 'Node rules (e.g. body&&a,0&&href)',
    splitForVerticalLine: 'Split for vertical line',
  },
  form: {
    success: 'Success',
    fail: 'Fail',
    open: 'Open',
    close: 'Close',
  },
  dialog: {
    cancel: 'Cancel',
    confirm: 'OK',
    reset: 'Reset',
    add: 'Add',
    edit: 'Edit',
    flag: 'Flag',
    splitTip: 'Please use half-width state for separator ","',
    restoreFactoryHeader: 'Eestore Factory',
    restoreFactoryBody: 'Are you sure to restore the factory? Return to the initial state after leaving the factory.',
    rule: {
      message: 'Require',
    },
  },
  nav: {
    configBase: 'BaseConfig',
    siteSource: 'MovieConfig',
    iptvSource: 'IptvConfig',
    analyzeSource: 'ParseConfig',
    driveSource: 'CloudConfig',
    editSource: 'EditSource',
  },
  table: {
    default: 'Default',
    edit: 'Edit',
    check: 'Check',
    delete: 'Delete',
    deleteTip: 'Are you sure to delete it',
    noData: 'NoData',
    notSupport: 'NotSupport',
    skip: 'Skip',
    header: {
      name: 'Name',
      resource: 'Resource',
      search: 'Search',
      type: 'Type',
      group: 'Group',
      status: 'Status',
      startPath: 'StartPath',
      operate: 'Operate',
    },
  },
  header: {
    add: 'Add',
    enable: 'Enable',
    disable: 'Disable',
    delete: 'Delete',
    check: 'Check',
    flag: 'Flag',
    search: 'Search Resources',
    searchClose: 'Close',
    searchOnly: 'Only',
    searchGather: 'Gather',
  },
  site: {
    name: 'Name',
    type: 'Type',
    key: 'Key',
    api: 'Api',
    search: 'Search',
    playUrl: 'PlayUrl',
    ext: 'Ext',
    group: 'Group',
    category: 'Category',
    searchClose: '关闭',
    searchOnly: '仅搜索',
    searchGather: '聚能搜',
  },
  iptv: {
    name: 'Name',
    config: 'Type',
    api: 'Api',
    epg: 'Epg',
    logo: 'Logo',
    upload: 'Upload',
    apiRemote: 'Remote',
    apiLocal: 'Local',
    apiManual: 'Manual',
  },
  analyze: {
    name: 'Name',
    type: 'Type',
    api: 'Api',
    apiWeb: 'Web',
    apiJson: 'Json',
  },
  drive: {
    name: 'Name',
    server: 'Api',
    showAll: 'Show',
    video: 'Video',
    all: 'All',
    startPage: 'Start',
    params: 'Params',
  },
  base: {
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    auto: 'Auto',
    bossKey: 'BossKey',
    timeout: 'Timeout',
    film: 'Film',
    hotRecommend: 'Hot:',
    douban: 'DouBan',
    komect: 'Komect',
    local: 'DefaultSite',
    kylive: 'KyLive',
    enlightent: 'Enlightent',
    reset: 'Reset',
    search: 'Search:',
    site: 'Site',
    group: 'Group',
    all: 'All',
    filter: 'Filter:',
    on: 'On',
    off: 'Off',
    viewCasual: 'ViewCasual',
    iptv: 'Iptv',
    globalLogo: 'Logo:',
    defaultEpg: 'Epg:',
    delay: 'Delay',
    check: 'Check',
    markIp: 'MarkIp',
    thumbnail: 'Thumbnail',
    player: 'Player',
    barrage: 'Barrage',
    xgplayer: 'XgPlayer',
    veplayer: 'VePlayer',
    aliplayer: 'AliPlayer',
    tcplayer: 'TcPlayer',
    artplayer: 'ArtPlayer',
    oplayer: 'OPlayer',
    dplayer: 'DPlayer',
    nplayer: 'NPlayer',
    ckplayer: 'CkPlayer',
    custom: 'custom(call system)',
    command: 'Command',
    sniffer: 'Sniffer',
    info: 'Info',
    security: 'Security',
    proxy: 'Proxy',
    ua: 'UA',
    dns: 'DNS',
    permission: 'Permission',
    selefBoot: 'SelefBoot',
    hardwareAcceleration: 'HardwareAcceleration',
    windowPosition: 'WindowPosition',
    debug: 'Debug',
    other: 'Other',
    restoreFactory: 'RestoreFactory',
    dataMange: 'DataMange',
    checkUpdate: 'CheckUpdate',
    disclaimer: 'Disclaimer',
    license: 'License',
  },
  message: {
    reboot: 'Reset successfully, application will be restarted',
    hardwareAccelerationOn: 'HardwareAcceleration turn on, restarting application takes effect',
    hardwareAccelerationOff: 'HardwareAcceleration turn off, restarting application takes effect',
    windowPositionOn: 'WindowPosition turn on',
    windowPositionOff: 'WindowPosition turn off',
    networkAddress: 'Network address',
    networkCheckError: 'Network status detection failed',
    checking: 'Please wait for the completion of status batch detection',
    defaultDisable: 'Set default source when enabled',
    checkLoading: 'Please wait for the completion of the test',
  },
  ad: {
    title: 'Better on Hipy',
    desc: 'New Start, New Begin',
    open: 'open',
  },
  ua: {
    title: 'User-Agent',
    topTip: 'Emulate User Agent',
    bottomTip: 'Recommend chrome, empty use system default',
  },
  dns: {
    title: 'DNS-over-HTTP',
    topTip: 'Using Secure DNS',
    bottomTip: 'Recommend Tencent, empty use system default',
  },
  barrage: {
    title: 'Barrage',
    header: 'Enable param requires preprocess data, which will increase the seeding time',
    id: 'Return id',
    key: 'Return field',
    api: 'Api',
    support: 'Line',
    start: 'Time',
    color: 'Color',
    mode: 'Mode',
    content: 'Text',
    param: 'key-value Mapping',
    base: 'Basic Parameter',
    tip: 'Mapping Field position of the return, starting 0',
  },
  data: {
    title: 'DataMange',
    config: 'Config',
    configTip:
      'The data is stored in the database and exported as a JSON file for ease of migration. The import overwrites the original data',
    success: 'Success',
    fail: 'Fail',
    noSelectData: 'Not select data',
    noData: 'Necessary data exists empty',
    overrideTip: 'Original data will be erased',
    additionalTip: 'Additions to original data',
    override: 'Override',
    additional: 'Additional',
    easyConfig: {
      title: 'Quick Config',
      app: 'this app',
      appTip: 'Please strictly follow the format of this software interface',
      hipy: 'Hipt',
      catvod: 'Catvod',
      catvodTip: 'Only supports nodejs runtime env, no build env',
      drpy: 'Drpy',
      drpyTip: 'Please set js mode param in drpy configuration item to 0',
      tvbox: 'Tvbox',
      tvboxTip: 'Only partially compatible',
      address: 'url',
    },
    configImport: {
      title: 'Data Import',
      remote: 'Remote',
      local: 'Local',
      address: 'url',
      tip: 'Make sure the data format and fields are correct, otherwise dirty data will lead to software crash',
    },
    configExport: {
      title: 'Data Export',
      export: 'Export',
      exportTip: 'Selected data will be export',
    },
    clearData: {
      title: 'Data Clean',
      cache: 'Cache',
      thumbnail: 'Thumbnail',
      clear: 'Clear',
      clearTip: 'Selected data will be deleted',
    },
    table: {
      site: 'Site',
      iptv: 'Iptv',
      channel: 'Channel',
      analyze: 'Analyze',
      drive: 'Drive',
      history: 'History',
      star: 'Star',
      setting: 'Setting',
    },
    syncDisk: 'SyncDisk',
    content1: 'Because not collected data, you can choose sync service save data',
    content2: 'Built-in webdav as sync service, recommend jianguo cloud',
    content3: 'If switch AutoSync on, Sync every 5 minutes',
    webdev: {
      title: 'Param',
      check: 'Check',
      save: 'Save',
      sync: 'AutoSync',
      on: 'Enable',
      off: 'Disable',
      url: 'URL',
      username: 'UserName',
      password: 'PassWord',
    },
    syncToCloud: 'SyncToCloud',
    syncToCloudTip: 'Cloud data will be overwritten',
    syncToLocal: 'SyncToLocal',
    syncToLocalTip: 'Local data will be cleared',
  },
  thumbanilFfmpeg: {
    haveFfmpeg: 'FFmpeg module installed detected',
    noFfmpeg: 'No FFmpeg module was detected',
  },
  sniffer: {
    title: 'Sniffing Scheme',
    pie: {
      sign: 'Puppeteer',
      name: 'Intercept&Modify req',
      mainAbility: 'Sniff ability',
      secondaryAbility: 'Support unload page',
    },
    iframe: {
      sign: 'Browser native interface',
      name: 'Low resource',
      mainAbility: 'Compliant',
      secondaryAbility: 'Loaded page only',
    },
    other: {
      sign: 'Third-party interface',
      name: 'No local restrictions',
      mainAbility: 'Professional',
      secondaryAbility: '',
    },
  },
  update: {
    title: 'CheckUpdate',
    noUpdate: 'You are currently using the latest version',
    checkWait: 'Wait moment, checking for updates...',
    foundNewVersion: 'Discover app new version',
    changelog: 'ChangeLog',
    errorlog: 'ErrorLog',
    reCheck: 'Try to recheck the update',
    tip: 'win online, mac&linux go',
    install: 'install',
    download: 'download',
    downloading: 'downloading',
    message: {
      downloaded: 'The download of the installation package is complete',
    },
  },
};
