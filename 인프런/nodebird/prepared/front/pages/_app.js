import PropTypes from "prop-types";
import React from "react";
import Head from 'next/head';

/**
 * 모든 페이지의 공통인 부분을 처리한다.
 */
const App = ({Component}) => {
  return (
    <>
    <Head>
      <meta charSet="utf-8"></meta>
      <title>NodeBird</title>
    </Head>
    <Component />
    </>
  )
}

App.PropTypes = {
  Component: PropTypes.elementType.isRequired
}

export default App;

