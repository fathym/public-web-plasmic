// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import GlobalContextsProvider from "../components/plasmic/new_fathym_com/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/new_fathym_com/PlasmicGlobalVariant__Screen";
import {
  PlasmicLandingPagesVue2,
  Head
} from "../components/plasmic/new_fathym_com/PlasmicLandingPagesVue2";
import type { PageProps } from "gatsby";
export { Head };

function LandingPagesVue2({ location, params }: PageProps) {
  // Use PlasmicLandingPagesVue2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicLandingPagesVue2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicLandingPagesVue2 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Gatsby "wrapRootElement" function
  // (https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr#wrapRootElement).
  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={params}
        query={Object.fromEntries(new URLSearchParams(location.search))}
      >
        <PlasmicLandingPagesVue2 />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default LandingPagesVue2;
