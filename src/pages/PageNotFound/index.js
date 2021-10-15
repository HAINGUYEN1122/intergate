import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Button from '@material-ui/core/Button';
import img from '../../assets/images/TextPageNotFound.png';

const PageNotFound = () => (
  <Container>
    <Content>
      <Header className="notfound-404">
        <Title>404</Title>
      </Header>
      <SubTitle>Oops! This Page Could Not Be Found</SubTitle>
      <TextContent>
        Sorry but the page you are looking for does not exist,
        have been removed. name changed or is temporarily unavailable
      </TextContent>
      <ButtonLink to="/"><Button variant="contained" color="primary">Go To DashBoard</Button></ButtonLink>
    </Content>
  </Container>
);

export default PageNotFound;

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  max-width: 767px;
  width: 100%;
  line-height: 1.4;
  padding: 0px 15px;
`;

const Header = styled.div`
  position: relative;
  height: 150px;
  line-height: 150px;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  font-family: monospace;
  font-size: 186px;
  font-weight: 900;
  margin: 0px;
  text-transform: uppercase;
  background: url(${img});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
`;

const SubTitle = styled.h2`
  font-family: 'Titillium Web', sans-serif;
  font-size: 26px;
  font-weight: 700;
  margin: 0;
`;

const TextContent = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 0px;
  text-transform: uppercase;
`;

const ButtonLink = styled(Link)`
  font-family: 'Titillium Web', sans-serif;
  display: inline-block;
  text-transform: uppercase;
  color: #fff !important;
  text-decoration: none !important;
  font-size: 14px;
  font-weight: 700;
  border-radius: 1px;
  margin-top: 15px;
`;
