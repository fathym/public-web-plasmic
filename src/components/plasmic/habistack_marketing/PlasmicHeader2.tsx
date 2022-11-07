// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: cEHjHBABazmDxgQhPGAjL
// Component: qGnVW2keyHwAyV
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
import Button from "../../Button"; // plasmic-import: R_HdThxqzC5TC/component

import { useScreenVariants as useScreenVariantsbqSv1VYpZ4Deh } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bqSv1vYp-Z4DEH/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as plasmic_new_habistack_com_css from "../new_habistack_com/plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import * as projectcss from "./plasmic_habistack_marketing.module.css"; // plasmic-import: cEHjHBABazmDxgQhPGAjL/projectcss
import * as sty from "./PlasmicHeader2.module.css"; // plasmic-import: qGnVW2keyHwAyV/css

import Fathymaqua01SvgIcon from "./icons/PlasmicIcon__Fathymaqua01Svg"; // plasmic-import: 1MPoPWn62S/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 7UBYSnTbw80c2h/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: -19ZIVv2nz3-RT/icon

export type PlasmicHeader2__VariantMembers = {};

export type PlasmicHeader2__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeader2__VariantsArgs;
export const PlasmicHeader2__VariantProps = new Array<VariantPropType>();

export type PlasmicHeader2__ArgsType = {};
type ArgPropType = keyof PlasmicHeader2__ArgsType;
export const PlasmicHeader2__ArgProps = new Array<ArgPropType>();

export type PlasmicHeader2__OverridesType = {
  root?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultHeader2Props {
  className?: string;
}

function PlasmicHeader2__RenderFunc(props: {
  variants: PlasmicHeader2__VariantsArgs;
  args: PlasmicHeader2__ArgsType;
  overrides: PlasmicHeader2__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbqSv1VYpZ4Deh()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ttwMt)}
      >
        {true ? (
          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__rx3Kv
            )}
            component={Link}
            href={`/`}
            platform={"gatsby"}
          >
            <Fathymaqua01SvgIcon
              className={classNames(projectcss.all, sty.svg__eEzGx)}
              role={"img"}
            />
          </p.PlasmicLink>
        ) : null}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___08Q5F)}
        >
          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__azw2Y
              )}
              component={Link}
              href={`/about-us`}
              platform={"gatsby"}
            >
              {true ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__gPdbt)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3OxiA
                )}
              >
                {"Technology"}
              </div>

              {true ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__dauSm)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___4Vi92
              )}
              component={Link}
              href={`/about-us`}
              platform={"gatsby"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___3ERmb)}
                  role={"img"}
                />
              ) : null}
              {true ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pwMgE
                  )}
                >
                  {"Solutions"}
                </div>
              ) : null}
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__tdOyn)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}
          {true ? (
            <p.Stack
              as={p.PlasmicLink}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__wo6Su
              )}
              component={Link}
              href={`/pricing`}
              platform={"gatsby"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___7TdUz)}
                  role={"img"}
                />
              ) : null}

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0KRug
                )}
              >
                {"Pricing "}
              </div>

              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__x7Mkx)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          ) : null}

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__tsVl)}
            component={Link}
            href={"https://www.fathym.com/forecast/docs" as const}
            platform={"gatsby"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__mnLj)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zdb9X
              )}
            >
              {"Docs"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg___9M2Wm)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <p.PlasmicLink
            className={classNames(
              projectcss.all,
              projectcss.a,
              projectcss.__wab_text,
              sty.link__ffu7C
            )}
            component={Link}
            href={"https://www.fathym.com/blog/" as const}
            platform={"gatsby"}
          >
            {"Blog"}
          </p.PlasmicLink>

          <p.Stack
            as={p.PlasmicLink}
            hasGap={true}
            className={classNames(projectcss.all, projectcss.a, sty.link__t90C)}
            component={Link}
            href={"https://www.fathym.com/dashboard/forecast" as const}
            platform={"gatsby"}
          >
            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__o3U7X)}
                role={"img"}
              />
            ) : null}

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__gNlzl
              )}
            >
              {"Login"}
            </div>

            {false ? (
              <IconIcon
                className={classNames(projectcss.all, sty.svg__auexw)}
                role={"img"}
              />
            ) : null}
          </p.Stack>

          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button)}
            color={"blue" as const}
            link={"/dashboard/forecast/" as const}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__cbf9F
              )}
            >
              {"Get started for Free"}
            </div>
          </Button>
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeader2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeader2__VariantsArgs;
    args?: PlasmicHeader2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeader2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeader2__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicHeader2__ArgProps,
          internalVariantPropNames: PlasmicHeader2__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHeader2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader2";
  } else {
    func.displayName = `PlasmicHeader2.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader2 = Object.assign(
  // Top-level PlasmicHeader2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHeader2
    internalVariantProps: PlasmicHeader2__VariantProps,
    internalArgProps: PlasmicHeader2__ArgProps
  }
);

export default PlasmicHeader2;
/* prettier-ignore-end */
