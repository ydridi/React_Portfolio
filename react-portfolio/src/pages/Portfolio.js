import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard"
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Row from "../components/Row";
import portfolio from "../portfolio.json";

class Portfolio extends Component {
  // Setting this.state.portfolio to the portfolio json array
  state = {
    portfolio
  };

  componentDidMount() {
    this.setState({ portfolio });
  }

  // Map over this.state.portfolio and render a PortfolioCard component for each portfolio object
  render() {
    return (
      <Wrapper>
        <Title children="Bootcamp Portfolio" />
        <Row>
          {this.state.portfolio.map(item => (
            <PortfolioCard
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.image}
              github={item.github}
              url={item.url}
            />
          ))}
        </Row>
      </Wrapper>
    );
  }
}

export default Portfolio;