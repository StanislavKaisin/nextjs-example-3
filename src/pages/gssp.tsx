import { GetServerSideProps } from "next";
import React from "react";
import getConfig from "next/config";
// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side
console.log(serverRuntimeConfig.MY_SECRET);
// Will be available on both server-side and client-side
console.log(publicRuntimeConfig.API_ENDPOINT);

const gssp = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>gssp!</h1>
      API_ENDPOINT: {publicRuntimeConfig.API_ENDPOINT}
      MY_SECRET: {serverRuntimeConfig.MY_SECRET}
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default gssp;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      MY_SECRET: serverRuntimeConfig.MY_SECRET,
      API_ENDPOINT: publicRuntimeConfig.API_ENDPOINT,
    },
  };
};
