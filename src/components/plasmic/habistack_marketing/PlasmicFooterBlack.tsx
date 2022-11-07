// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cEHjHBABazmDxgQhPGAjL
// Component: kngZZ_UHkod0cN
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

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as sty from "./PlasmicFooterBlack.module.css"; // plasmic-import: kngZZ_UHkod0cN/css

import HabistackLogosvgIcon from "./icons/PlasmicIcon__HabistackLogosvg"; // plasmic-import: P1VcljlIEW/icon
import blog01390X290Jpg2N8M1FxKMyeW65 from "./images/blog01390X290Jpg2.jpeg"; // plasmic-import: N8m1FxK-myeW65/picture
import blog4390X290Jpg283Vg4IfgIonHza from "./images/blog4390X290Jpg2.jpeg"; // plasmic-import: 83Vg4ifgIONHza/picture
import blog2390X290Jpg29DgAtWcGbJo5Of from "./images/blog2390X290Jpg2.jpeg"; // plasmic-import: 9DgATWcGbJO5OF/picture

export type PlasmicFooterBlack__VariantMembers = {};

export type PlasmicFooterBlack__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterBlack__VariantsArgs;
export const PlasmicFooterBlack__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterBlack__ArgsType = {};
type ArgPropType = keyof PlasmicFooterBlack__ArgsType;
export const PlasmicFooterBlack__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterBlack__OverridesType = {
  root?: p.Flex<"div">;
  footerTop?: p.Flex<"div">;
  container?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  footerBottom?: p.Flex<"div">;
  container2?: p.Flex<"div">;
};

export interface DefaultFooterBlackProps {
  className?: string;
}

function PlasmicFooterBlack__RenderFunc(props: {
  variants: PlasmicFooterBlack__VariantsArgs;
  args: PlasmicFooterBlack__ArgsType;
  overrides: PlasmicFooterBlack__OverridesType;

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
    <div
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
        plasmic_new_habistack_com_css.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"footerTop"}
        data-plasmic-override={overrides.footerTop}
        className={classNames(projectcss.all, sty.footerTop)}
      >
        <div
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(projectcss.all, sty.container)}
        >
          <div className={classNames(projectcss.all, sty.columns__mIehj)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__mhIJz)}
            >
              <HabistackLogosvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cF65
                )}
              >
                {
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                }
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.column__l8Agf)}>
              <h5
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5__dayq1
                )}
              >
                {"Menu"}
              </h5>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___9Pfv
                )}
                component={Link}
                platform={"gatsby"}
              >
                {"Privacy Policy"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__m4Jx3
                )}
                component={Link}
                platform={"gatsby"}
              >
                {"Terms of Service"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___0EoL8
                )}
                component={Link}
                href={`/pricing`}
                platform={"gatsby"}
              >
                {"Pricing "}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__bxZ8X
                )}
                component={Link}
                href={`/contact`}
                platform={"gatsby"}
              >
                {"Contact"}
              </p.PlasmicLink>

              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__tcZyX
                )}
                component={Link}
                platform={"gatsby"}
              >
                {"Blog"}
              </p.PlasmicLink>
            </div>

            <div className={classNames(projectcss.all, sty.column__qS66Z)}>
              <h5
                className={classNames(
                  projectcss.all,
                  projectcss.h5,
                  projectcss.__wab_text,
                  sty.h5__nhydd
                )}
              >
                {"Gallery"}
              </h5>

              <div className={classNames(projectcss.all, sty.columns__l114G)}>
                <div className={classNames(projectcss.all, sty.column___8HQzb)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__rAuFt)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: blog01390X290Jpg2N8M1FxKMyeW65,
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__roi5Y)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__axQ)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: blog4390X290Jpg283Vg4IfgIonHza,
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__sVvVs)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ioMj8)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: blog2390X290Jpg29DgAtWcGbJo5Of,
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.columns__baz1P)}>
                <div className={classNames(projectcss.all, sty.column__cYJf)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__yIeGo)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: blog01390X290Jpg2N8M1FxKMyeW65,
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__aQlGx)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__rkHk)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: blog4390X290Jpg283Vg4IfgIonHza,
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div className={classNames(projectcss.all, sty.column__n8PKr)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__zQiG9)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: blog2390X290Jpg29DgAtWcGbJo5Of,
                      fullWidth: 390,
                      fullHeight: 290,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-plasmic-name={"footerBottom"}
        data-plasmic-override={overrides.footerBottom}
        className={classNames(projectcss.all, sty.footerBottom)}
      >
        <div
          data-plasmic-name={"container2"}
          data-plasmic-override={overrides.container2}
          className={classNames(projectcss.all, sty.container2)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tsdcT
            )}
          >
            {"© 2022 Fathym Inc. All rights reserved."}
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "footerTop", "container", "svg", "footerBottom", "container2"],
  footerTop: ["footerTop", "container", "svg"],
  container: ["container", "svg"],
  svg: ["svg"],
  footerBottom: ["footerBottom", "container2"],
  container2: ["container2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  footerTop: "div";
  container: "div";
  svg: "svg";
  footerBottom: "div";
  container2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterBlack__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterBlack__VariantsArgs;
    args?: PlasmicFooterBlack__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterBlack__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterBlack__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFooterBlack__ArgProps,
          internalVariantPropNames: PlasmicFooterBlack__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterBlack__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterBlack";
  } else {
    func.displayName = `PlasmicFooterBlack.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterBlack = Object.assign(
  // Top-level PlasmicFooterBlack renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    footerTop: makeNodeComponent("footerTop"),
    container: makeNodeComponent("container"),
    svg: makeNodeComponent("svg"),
    footerBottom: makeNodeComponent("footerBottom"),
    container2: makeNodeComponent("container2"),

    // Metadata about props expected for PlasmicFooterBlack
    internalVariantProps: PlasmicFooterBlack__VariantProps,
    internalArgProps: PlasmicFooterBlack__ArgProps
  }
);

export default PlasmicFooterBlack;
/* prettier-ignore-end */
