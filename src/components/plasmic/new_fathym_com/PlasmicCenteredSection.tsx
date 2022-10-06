// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jbURxL3XuiMBQsLhf7apui
// Component: yoezpFd4_O
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

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_new_fathym_com.module.css"; // plasmic-import: jbURxL3XuiMBQsLhf7apui/projectcss
import * as sty from "./PlasmicCenteredSection.module.css"; // plasmic-import: yoezpFd4_O/css

import editProjectViewPng4DjTrA2M from "./images/editProjectViewPng.png"; // plasmic-import: 4djTrA2M_/picture

export type PlasmicCenteredSection__VariantMembers = {};

export type PlasmicCenteredSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicCenteredSection__VariantsArgs;
export const PlasmicCenteredSection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCenteredSection__ArgsType = {};
type ArgPropType = keyof PlasmicCenteredSection__ArgsType;
export const PlasmicCenteredSection__ArgProps = new Array<ArgPropType>();

export type PlasmicCenteredSection__OverridesType = {
  root?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  stayInSyncWithYourTeam?: p.Flex<"h2">;
  text?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  column?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultCenteredSectionProps {
  className?: string;
}

function PlasmicCenteredSection__RenderFunc(props: {
  variants: PlasmicCenteredSection__VariantsArgs;
  args: PlasmicCenteredSection__ArgsType;
  overrides: PlasmicCenteredSection__OverridesType;

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

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"foreground3"}
        data-plasmic-override={overrides.foreground3}
        hasGap={true}
        className={classNames(projectcss.all, sty.foreground3)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___70In9)}
        >
          <div className={classNames(projectcss.all, sty.freeBox___9C8Lg)}>
            <h2
              data-plasmic-name={"stayInSyncWithYourTeam"}
              data-plasmic-override={overrides.stayInSyncWithYourTeam}
              className={classNames(
                projectcss.all,
                projectcss.h2,
                projectcss.__wab_text,
                sty.stayInSyncWithYourTeam
              )}
            >
              {"Stay in sync with your team"}
            </h2>
          </div>

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {
                  "Collaborating and keeping updated with your teammate's builds, pull requests and deploys has never been easier. \n\nFathym offers "
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"one consolidated workflow"}
              </span>
              <React.Fragment>
                {
                  " for you to view and manage your web projects and their corresponding repositories and builds. "
                }
              </React.Fragment>
            </React.Fragment>
          </div>
        </p.Stack>

        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div
            data-plasmic-name={"column"}
            data-plasmic-override={overrides.column}
            className={classNames(projectcss.all, sty.column)}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: editProjectViewPng4DjTrA2M,
                fullWidth: 2828,
                fullHeight: 1390,
                aspectRatio: undefined
              }}
            />
          </div>
        </div>
      </p.Stack>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "foreground3",
    "stayInSyncWithYourTeam",
    "text",
    "columns",
    "column",
    "img"
  ],
  foreground3: [
    "foreground3",
    "stayInSyncWithYourTeam",
    "text",
    "columns",
    "column",
    "img"
  ],
  stayInSyncWithYourTeam: ["stayInSyncWithYourTeam"],
  text: ["text"],
  columns: ["columns", "column", "img"],
  column: ["column", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  foreground3: "div";
  stayInSyncWithYourTeam: "h2";
  text: "div";
  columns: "div";
  column: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCenteredSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCenteredSection__VariantsArgs;
    args?: PlasmicCenteredSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCenteredSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCenteredSection__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCenteredSection__ArgProps,
          internalVariantPropNames: PlasmicCenteredSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCenteredSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCenteredSection";
  } else {
    func.displayName = `PlasmicCenteredSection.${nodeName}`;
  }
  return func;
}

export const PlasmicCenteredSection = Object.assign(
  // Top-level PlasmicCenteredSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground3: makeNodeComponent("foreground3"),
    stayInSyncWithYourTeam: makeNodeComponent("stayInSyncWithYourTeam"),
    text: makeNodeComponent("text"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicCenteredSection
    internalVariantProps: PlasmicCenteredSection__VariantProps,
    internalArgProps: PlasmicCenteredSection__ArgProps
  }
);

export default PlasmicCenteredSection;
/* prettier-ignore-end */
