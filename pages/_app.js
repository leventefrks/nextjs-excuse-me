import "../styles.css";

import { ThemeProvider } from "next-themes";
import React from "react";
import App from "next/app";

export default class TailwindApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
