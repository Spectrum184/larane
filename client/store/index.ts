import { IUser } from '~/interface';
import create from 'zustand';

interface PropTypes {
  user: IUser;
}

interface AppStore extends PropTypes {
  // eslint-disable-next-line no-unused-vars
  setUser: (user: IUser) => void;
  // eslint-disable-next-line no-unused-vars
  setTheme: (theme: boolean) => void;
}

const initialState: PropTypes = {
  user: {
    name: '',
    email: '',
    sex: 'male',
    role: 'BALL_BALL',
    theme: 1,
    avatar: '',
    is_active: 1,
  },
};

export const appStore = create<AppStore>((set) => ({
  ...initialState,
  setUser: (user: IUser) =>
    set((state) => {
      if (state.user.id) {
        return state;
      } else {
        return { ...state, user };
      }
    }),
  setTheme: (theme: boolean) =>
    set((state) => ({
      ...state,
      user: { ...state.user, theme: theme ? 1 : 0 },
    })),
}));
