// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cEHjHBABazmDxgQhPGAjL
// Component: 6zzHm2szXK
import * as React from "react";

import { Link, GatsbyLinkProps as LinkProps } from "gatsby";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NewFathymFooter from "../../NewFathymFooter"; // plasmic-import: U3TgOcVpMC2/component

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as sty from "./PlasmicNewMobileFooter.module.css"; // plasmic-import: 6zzHm2szXK/css

export type PlasmicNewMobileFooter__VariantMembers = {};

export type PlasmicNewMobileFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewMobileFooter__VariantsArgs;
export const PlasmicNewMobileFooter__VariantProps =
  new Array<VariantPropType>();

export type PlasmicNewMobileFooter__ArgsType = {};
type ArgPropType = keyof PlasmicNewMobileFooter__ArgsType;
export const PlasmicNewMobileFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicNewMobileFooter__OverridesType = {
  root?: p.Flex<typeof NewFathymFooter>;
};

export interface DefaultNewMobileFooterProps {
  className?: string;
}

function PlasmicNewMobileFooter__RenderFunc(props: {
  variants: PlasmicNewMobileFooter__VariantsArgs;
  args: PlasmicNewMobileFooter__ArgsType;
  overrides: PlasmicNewMobileFooter__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <NewFathymFooter
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: typeof NewFathymFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewMobileFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewMobileFooter__VariantsArgs;
    args?: PlasmicNewMobileFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewMobileFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewMobileFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewMobileFooter__ArgProps,
          internalVariantPropNames: PlasmicNewMobileFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicNewMobileFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewMobileFooter";
  } else {
    func.displayName = `PlasmicNewMobileFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicNewMobileFooter = Object.assign(
  // Top-level PlasmicNewMobileFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNewMobileFooter
    internalVariantProps: PlasmicNewMobileFooter__VariantProps,
    internalArgProps: PlasmicNewMobileFooter__ArgProps
  }
);

export default PlasmicNewMobileFooter;
/* prettier-ignore-end */
