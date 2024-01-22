import {
  handleRegisterClick,
  handleProfileClick,
  handleProfileLogIn,
  handleMenu,
  handleCloseRegister,
  handleCloseProfileLogIn,
  handleCloseModal,
  handleCloseMenuModal
} from './EventHandlers.js';

const setShowRegisterModal = jest.fn();
const setShowProfileModal = jest.fn();
const setShowLoginModal = jest.fn();
const setShowMenuModal = jest.fn();

describe('Unit Tests for Helper Functions', () => {
  it('handleRegisterClick should set ShowRegisterModal to true', () => {
    handleRegisterClick(setShowRegisterModal);
    expect(setShowRegisterModal).toHaveBeenCalledWith(true);
  });

  it('handleProfileClick should set ShowProfileModal to true', () => {
    handleProfileClick(setShowProfileModal);
    expect(setShowProfileModal).toHaveBeenCalledWith(true);
  });

  it('handleProfileLogIn should set ShowLoginModal to true', () => {
    handleProfileLogIn(setShowLoginModal);
    expect(setShowLoginModal).toHaveBeenCalledWith(true);
  });

  it('handleMenu should set ShowMenuModal to true', () => {
    handleMenu(setShowMenuModal);
    expect(setShowMenuModal).toHaveBeenCalledWith(true);
  });

  it('handleCloseRegister should set ShowRegisterModal to false', () => {
    handleCloseRegister(setShowRegisterModal);
    expect(setShowRegisterModal).toHaveBeenCalledWith(false);
  });

  it('handleCloseProfileLogIn should set ShowLoginModal to false', () => {
    handleCloseProfileLogIn(setShowLoginModal);
    expect(setShowLoginModal).toHaveBeenCalledWith(false);
  });

  it('handleCloseModal should set ShowProfileModal to false', () => {
    handleCloseModal(setShowProfileModal);
    expect(setShowProfileModal).toHaveBeenCalledWith(false);
  });

  it('handleCloseMenuModal should set ShowMenuModal to false', () => {
    handleCloseMenuModal(setShowMenuModal);
    expect(setShowMenuModal).toHaveBeenCalledWith(false);
  });
});
