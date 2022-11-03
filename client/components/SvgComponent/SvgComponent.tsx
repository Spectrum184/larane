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
  PictureIcon,
  NewChatIcon,
  TellCallIcon,
  VideoCallIcon,
  ConversationInfIcon,
  ViewMoreIcon,
  ReplyIcon,
  EmotionsIcon,
  MoreActionsIcon,
  CameraIcon,
  MicroIcon,
  LikeIcon,
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

    case 'post':
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

    case 'picture':
      SvgComp = PictureIcon;
      break;

    case 'new-chat':
      SvgComp = NewChatIcon;
      break;

    case 'search':
      SvgComp = SearchIcon;
      break;

    case 'tell-call':
      SvgComp = TellCallIcon;
      break;

    case 'video-call':
      SvgComp = VideoCallIcon;
      break;

    case 'conversation-inf':
      SvgComp = ConversationInfIcon;
      break;

    case 'view-more':
      SvgComp = ViewMoreIcon;
      break;

    case 'reply':
      SvgComp = ReplyIcon;
      break;

    case 'emotions':
      SvgComp = EmotionsIcon;
      break;

    case 'more-actions':
      SvgComp = MoreActionsIcon;
      break;

    case 'camera':
      SvgComp = CameraIcon;
      break;

    case 'micro':
      SvgComp = MicroIcon;
      break;

    case 'like':
      SvgComp = LikeIcon;
      break;

    default:
      SvgComp = VariableICon;
      break;
  }

  return <>{SvgComp(className)}</>;
};

export default SvgComponent;
