import React from "react";
import { useNavigation } from "react-router";
import Loader from "./Loader";

const NavigationLoader = () => {
  const navigation = useNavigation();

  {
    navigation.state === "loading" ? (
      <div className="fixed top-0 left-0 right-0 z-50">
        <Loader />
      </div>
    ) : null;
  }
};

export default NavigationLoader;
