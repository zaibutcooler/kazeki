"use client";

import { store } from "@/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </main>
  );
};

export default Providers;
