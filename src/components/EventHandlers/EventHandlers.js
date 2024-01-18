import { logout } from '../../redux/slices/AuthSlice.js';
import { setDarkMode } from '../../redux/slices/themeSlice.js';

const handleRegisterClick = (setShowRegisterModal) => {
  setShowRegisterModal(true);
};
const handleProfileClick = (setShowProfileModal) => {
  setShowProfileModal(true);
};
const handleProfileLogIn = (setShowLoginModal) => {
  setShowLoginModal(true);
};
const handleMenu = (setShowMenuModal) => {
  setShowMenuModal(true);
};
const handleCloseRegister = (setShowRegisterModal) => {
  setShowRegisterModal(false);
};
const handleCloseProfileLogIn = (setShowLoginModal) => {
  setShowLoginModal(false);
};
const handleCloseModal = (setShowProfileModal) => {
  setShowProfileModal(false);
};
const handleCloseMenuModal = (setShowMenuModal) => {
  setShowMenuModal(false);
};
const handleLogout = (dispatch, navigate) => {
  dispatch(logout());
  navigate('/');
};
const handleDarkModeToggle = (dispatch, isDarkMode) => {
  dispatch(setDarkMode(!isDarkMode));
};

export {
  handleRegisterClick,
  handleProfileClick,
  handleProfileLogIn,
  handleMenu,
  handleCloseRegister,
  handleCloseProfileLogIn,
  handleCloseModal,
  handleCloseMenuModal,
  handleLogout,
  handleDarkModeToggle
};
