import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "@/reducer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const store = createStore(reducer);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
};

export default MyApp;
