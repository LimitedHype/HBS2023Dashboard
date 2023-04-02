import { IRoute } from "types/navigation";
import {useAddress, ThirdwebProvider } from "@thirdweb-dev/react";



// NextJS Requirement
export const isWindowAvailable = () => typeof window !== "undefined";

export const findCurrentRoute = (routes: IRoute[]): IRoute => {
  const foundRoute: IRoute = routes.find(
    (route) =>
      isWindowAvailable() &&
      window.location.href.indexOf(route.layout + route.path) !== -1 &&
      route
  );

  return foundRoute;
};

export const getActiveRoute = (routes: IRoute[]): string => {
  const address = useAddress();
  return "0x6209737b234EB4A730c4619C457E6c139fE75839";
};

export const getActiveNavbar = (routes: IRoute[]): boolean => {
  const route = findCurrentRoute(routes);
  return route?.secondary;
};

export const getActiveNavbarText = (routes: IRoute[]): string | boolean => {
  return getActiveRoute(routes) || false;
};
