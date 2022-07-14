export const USER_ROUTER = [
  { name: 'home', title: 'sidebar_home' },
  { name: 'chat', title: 'sidebar_chat' },
  { name: 'notify', title: 'sidebar_notify' },
  { name: 'rule', title: 'sidebar_rule' },
];

export const ADMIN_ROUTER = [
  { name: 'home', title: 'sidebar_home' },
  { name: 'chat', title: 'sidebar_chat' },
  { name: 'notify', title: 'sidebar_notify' },
  { name: 'rule', title: 'sidebar_rule' },
  { name: 'annotation', title: 'sidebar_annotation' },
  { name: 'user-group', title: 'sidebar_user_group' },
];
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || '';
export const FRONTEND_URL = process.env.NEXT_CLIENT_URL || '';
export const INTERNAL_SERVER_ERROR = 'Internal Server Error';
export const SUCCESS_MESSAGE = 'Success';
