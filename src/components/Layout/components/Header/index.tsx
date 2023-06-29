import { Logo } from './components/Logo';
import { HeaderContainer } from './styles';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>ZB Smart Ads</Logo>
    </HeaderContainer>
  );
};

export default Header;