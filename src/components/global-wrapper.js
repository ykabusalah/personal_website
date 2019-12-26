import React, { Fragment } from "react";
import Helmet from "react-helmet";
import GlobalStyle from "styles/global-style";

class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayOutlines: false
    };
  }
  componentDidMount() {
    window.addEventListener("keydown", e => this.handleKeyboardInput(e));
  }

  handleKeyboardInput(e) {
    const key = e.keyCode || e.charCode;
    // Tab
    if (key === 9) {
      this.setState({ displayOutlines: true });
    }
  }

  render() {
    return (
      <Fragment>
        <Helmet>
          <html lang="en" />
          <title>Yousef Abu-Salah</title>
          <meta name="description" content="Yousef Abu-Salah's Website" />
          <meta
            name="keywords"
            content="design, ux, ui, product, graphic, health, climbing, app, interface, experience, festival, techno, code"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png?v=OmKYznWjWY"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png?v=OmKYznWjWY"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png?v=OmKYznWjWY"
          />
          <link rel="manifest" href="/manifest.json?v=OmKYznWjWY" />
          <link
            rel="mask-icon"
            href="/safari-pinned-tab.svg?v=OmKYznWjWY"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/favicon.ico?v=OmKYznWjWY"></link>
          <meta name="msapplication-TileColor" content="#5bbad5"></meta>
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <GlobalStyle displayOutlines={this.state.displayOutlines} />
        {this.props.children}
      </Fragment>
    );
  }
}

export default GlobalWrapper;
