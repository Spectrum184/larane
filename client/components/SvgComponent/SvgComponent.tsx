import {
  AnnotationIcon,
  BellIcon,
  ChatIcon,
  EmailSymbolIcon,
  FacebookIcon,
  GithubIcon,
  HomeIcon,
  LockIcon,
  LoginIcon,
  MoonIcon,
  RegisterIcon,
  RuleIcon,
  SearchIcon,
  SpeakerIcon,
  SunIcon,
  UserGroupIcon,
  UserIcon,
  VariableICon,
  XIcon,
} from './Icon';
import React, { FC } from 'react';

interface PropsType {
  className: string;
  name: string;
}

const SvgComponent: FC<PropsType> = ({ className, name = 'variable' }) => {
  let SvgComp;

  switch (name) {
    case 'sun':
      SvgComp = SunIcon;
      break;

    case 'moon':
      SvgComp = MoonIcon;
      break;

    case 'bell':
      SvgComp = BellIcon;
      break;

    case 'search':
      SvgComp = SearchIcon;
      break;

    case 'x':
      SvgComp = XIcon;
      break;

    case 'facebook':
      SvgComp = FacebookIcon;
      break;

    case 'github':
      SvgComp = GithubIcon;
      break;

    case 'home':
      SvgComp = HomeIcon;
      break;

    case 'chat':
      SvgComp = ChatIcon;
      break;

    case 'user-group':
      SvgComp = UserGroupIcon;
      break;

    case 'notify':
      SvgComp = SpeakerIcon;
      break;

    case 'rule':
      SvgComp = RuleIcon;
      break;

    case 'annotation':
      SvgComp = AnnotationIcon;
      break;

    case 'email-symbol':
      SvgComp = EmailSymbolIcon;
      break;

    case 'lock':
      SvgComp = LockIcon;
      break;

    case 'login':
      SvgComp = LoginIcon;
      break;

    case 'register':
      SvgComp = RegisterIcon;
      break;

    case 'user':
      SvgComp = UserIcon;
      break;

    default:
      SvgComp = VariableICon;
      break;
  }

  return <>{SvgComp(className)}</>;
};

export default SvgComponent;
