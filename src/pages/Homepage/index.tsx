import { ContentContainer, GetStartedButton } from './styles';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <ContentContainer>
      <h2>Finances to conversions!</h2>

      <p>ZB Smart Ads allows for an interactive method that helps users manage and visualize their advertising campaign budgets. <br />
        Users can set a monthly budget for their ads campaign and receive a detailed report showing their daily spendings for a span of 30 days.</p>

      <p>The spendings data is presented visually through an intuitive line chart, enabling users to track their daily spendings over the course of the month. <br />
        The chart provides a clear overview of the spending patterns, allowing users to identify trends, monitor their budget utilization, <br />
        and make informed decisions regarding their ads campaign.</p>

      <GetStartedButton onClick={() => navigate('/dashboard')}>
        Get Started!
      </GetStartedButton>
    </ContentContainer>
  );
};

export default Homepage;