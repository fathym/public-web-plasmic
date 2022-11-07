// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: rcEGNgTfxT6W6gDjnxsJgN
// Component: fpAiM6T_26Q9w_
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
import * as projectcss from "./plasmic_new_habistack_com.module.css"; // plasmic-import: rcEGNgTfxT6W6gDjnxsJgN/projectcss
import * as sty from "./PlasmicFathymFooter.module.css"; // plasmic-import: fpAiM6T_26Q9w_/css

import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: GpYviYn89BZwTO/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: 6_xhyaadO0xeOn/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: AJL_5Hbt1wN1Ed/icon
import fathymLogoAqua01400PxlspngOHhrboXuD1Vys from "./images/fathymLogoAqua01400Pxlspng.png"; // plasmic-import: O-HHRBOXuD1vys/picture
import copyrightIconPzX6Qreze5WXr from "./images/copyrightIcon.png"; // plasmic-import: PzX6QREZE5_wXR/picture

export type PlasmicFathymFooter__VariantMembers = {};

export type PlasmicFathymFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFathymFooter__VariantsArgs;
export const PlasmicFathymFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFathymFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFathymFooter__ArgsType;
export const PlasmicFathymFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFathymFooter__OverridesType = {
  root?: p.Flex<"div">;
  fathymFramework?: p.Flex<"a"> & Partial<LinkProps>;
  ioTEnsemble?: p.Flex<"a"> & Partial<LinkProps>;
  habistack?: p.Flex<"a"> & Partial<LinkProps>;
  docs?: p.Flex<"a"> & Partial<LinkProps>;
  blog?: p.Flex<"a"> & Partial<LinkProps>;
  support?: p.Flex<"a"> & Partial<LinkProps>;
  enterpriseAgreement?: p.Flex<"a"> & Partial<LinkProps>;
  termsOfService?: p.Flex<"a"> & Partial<LinkProps>;
  privacyPolicy?: p.Flex<"a"> & Partial<LinkProps>;
  httpstwittercomFathymIt?: p.Flex<"a"> & Partial<LinkProps>;
  httpsgithubcomfathym?: p.Flex<"a"> & Partial<LinkProps>;
  httpswwwfacebookcomFathymInc?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultFathymFooterProps {
  className?: string;
}

function PlasmicFathymFooter__RenderFunc(props: {
  variants: PlasmicFathymFooter__VariantsArgs;
  args: PlasmicFathymFooter__ArgsType;
  overrides: PlasmicFathymFooter__OverridesType;

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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__toPm)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__x3JLl)} />

        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__a0FQb)}
          displayHeight={"75px" as const}
          displayMaxHeight={"75%" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: fathymLogoAqua01400PxlspngOHhrboXuD1Vys,
            fullWidth: 400,
            fullHeight: 129,
            aspectRatio: undefined
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__pr78)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___0PSu6)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__hu3Gk
              )}
            >
              {"Products"}
            </div>

            <p.PlasmicLink
              data-plasmic-name={"fathymFramework"}
              data-plasmic-override={overrides.fathymFramework}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.fathymFramework
              )}
              component={Link}
              href={"https://www.fathym.com/" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__caRd
                )}
              >
                {"Fathym Platform"}
              </div>
            </p.PlasmicLink>

            <p.PlasmicLink
              data-plasmic-name={"ioTEnsemble"}
              data-plasmic-override={overrides.ioTEnsemble}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.ioTEnsemble
              )}
              component={Link}
              href={"https://www.fathym.com/iot" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bSub0
                )}
              >
                {"IoT Ensemble"}
              </div>
            </p.PlasmicLink>

            <p.PlasmicLink
              data-plasmic-name={"habistack"}
              data-plasmic-override={overrides.habistack}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.habistack
              )}
              component={Link}
              href={"https://www.fathym.com/forecast" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ibGu
                )}
              >
                {"Habistack"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__gU5V2)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__s7ZTn
              )}
            >
              {"Resources"}
            </div>

            <p.PlasmicLink
              data-plasmic-name={"docs"}
              data-plasmic-override={overrides.docs}
              className={classNames(projectcss.all, projectcss.a, sty.docs)}
              component={Link}
              href={"https://www.fathym.com/forecast/docs" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mWoq2
                )}
              >
                {"Docs"}
              </div>
            </p.PlasmicLink>

            {true ? (
              <p.PlasmicLink
                data-plasmic-name={"blog"}
                data-plasmic-override={overrides.blog}
                className={classNames(projectcss.all, projectcss.a, sty.blog)}
                component={Link}
                href={"https://www.fathym.com/blog" as const}
                platform={"gatsby"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pxNjn
                  )}
                >
                  {"Blog"}
                </div>
              </p.PlasmicLink>
            ) : null}

            <p.PlasmicLink
              data-plasmic-name={"support"}
              data-plasmic-override={overrides.support}
              className={classNames(projectcss.all, projectcss.a, sty.support)}
              component={Link}
              href={"mailto:support@fathym.com" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__p7IeG
                )}
              >
                {"Support"}
              </div>
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cqdt6)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__b9GqE
              )}
            >
              {"Company"}
            </div>

            <p.PlasmicLink
              data-plasmic-name={"enterpriseAgreement"}
              data-plasmic-override={overrides.enterpriseAgreement}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.enterpriseAgreement
              )}
              component={Link}
              href={"https://www.fathym.com/enterprise-agreement/" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uPn5H
                )}
              >
                {"Enterprise Agreement"}
              </div>
            </p.PlasmicLink>

            <p.PlasmicLink
              data-plasmic-name={"termsOfService"}
              data-plasmic-override={overrides.termsOfService}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.termsOfService
              )}
              component={Link}
              href={"https://www.fathym.com/terms-of-services/" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iDAux
                )}
              >
                {"Terms of Service"}
              </div>
            </p.PlasmicLink>

            <p.PlasmicLink
              data-plasmic-name={"privacyPolicy"}
              data-plasmic-override={overrides.privacyPolicy}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.privacyPolicy
              )}
              component={Link}
              href={"https://www.fathym.com/privacy-policy/" as const}
              platform={"gatsby"}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__tg2Ag
                )}
              >
                {"Privacy Policy"}
              </div>
            </p.PlasmicLink>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__t5L7Z)} />

        <div className={classNames(projectcss.all, sty.freeBox__gT4R)}>
          <div className={classNames(projectcss.all, sty.freeBox__wrnix)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__d5Q1W
              )}
            >
              {"Copyright "}
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__aat1O)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: copyrightIconPzX6Qreze5WXr,
                fullWidth: 24,
                fullHeight: 24,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kcFp
              )}
            >
              {" 2022 Fathym. All rights reserved."}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uoVX)}
          >
            <p.PlasmicLink
              data-plasmic-name={"httpstwittercomFathymIt"}
              data-plasmic-override={overrides.httpstwittercomFathymIt}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.httpstwittercomFathymIt
              )}
              component={Link}
              href={"https://twitter.com/FathymIt" as const}
              platform={"gatsby"}
            >
              <TwitterIconIcon
                className={classNames(projectcss.all, sty.svg__jb5QA)}
                role={"img"}
              />
            </p.PlasmicLink>

            <p.PlasmicLink
              data-plasmic-name={"httpsgithubcomfathym"}
              data-plasmic-override={overrides.httpsgithubcomfathym}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.httpsgithubcomfathym
              )}
              component={Link}
              href={"https://github.com/fathym" as const}
              platform={"gatsby"}
            >
              <GithubIconIcon
                className={classNames(projectcss.all, sty.svg__efcH)}
                role={"img"}
              />
            </p.PlasmicLink>

            <p.PlasmicLink
              data-plasmic-name={"httpswwwfacebookcomFathymInc"}
              data-plasmic-override={overrides.httpswwwfacebookcomFathymInc}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.httpswwwfacebookcomFathymInc
              )}
              component={Link}
              href={"https://www.facebook.com/FathymInc/" as const}
              platform={"gatsby"}
            >
              <FacebookIconIcon
                className={classNames(projectcss.all, sty.svg___1Yo7W)}
                role={"img"}
              />
            </p.PlasmicLink>
          </p.Stack>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "fathymFramework",
    "ioTEnsemble",
    "habistack",
    "docs",
    "blog",
    "support",
    "enterpriseAgreement",
    "termsOfService",
    "privacyPolicy",
    "httpstwittercomFathymIt",
    "httpsgithubcomfathym",
    "httpswwwfacebookcomFathymInc"
  ],
  fathymFramework: ["fathymFramework"],
  ioTEnsemble: ["ioTEnsemble"],
  habistack: ["habistack"],
  docs: ["docs"],
  blog: ["blog"],
  support: ["support"],
  enterpriseAgreement: ["enterpriseAgreement"],
  termsOfService: ["termsOfService"],
  privacyPolicy: ["privacyPolicy"],
  httpstwittercomFathymIt: ["httpstwittercomFathymIt"],
  httpsgithubcomfathym: ["httpsgithubcomfathym"],
  httpswwwfacebookcomFathymInc: ["httpswwwfacebookcomFathymInc"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  fathymFramework: "a";
  ioTEnsemble: "a";
  habistack: "a";
  docs: "a";
  blog: "a";
  support: "a";
  enterpriseAgreement: "a";
  termsOfService: "a";
  privacyPolicy: "a";
  httpstwittercomFathymIt: "a";
  httpsgithubcomfathym: "a";
  httpswwwfacebookcomFathymInc: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFathymFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFathymFooter__VariantsArgs;
    args?: PlasmicFathymFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFathymFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFathymFooter__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFathymFooter__ArgProps,
          internalVariantPropNames: PlasmicFathymFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFathymFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFathymFooter";
  } else {
    func.displayName = `PlasmicFathymFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFathymFooter = Object.assign(
  // Top-level PlasmicFathymFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fathymFramework: makeNodeComponent("fathymFramework"),
    ioTEnsemble: makeNodeComponent("ioTEnsemble"),
    habistack: makeNodeComponent("habistack"),
    docs: makeNodeComponent("docs"),
    blog: makeNodeComponent("blog"),
    support: makeNodeComponent("support"),
    enterpriseAgreement: makeNodeComponent("enterpriseAgreement"),
    termsOfService: makeNodeComponent("termsOfService"),
    privacyPolicy: makeNodeComponent("privacyPolicy"),
    httpstwittercomFathymIt: makeNodeComponent("httpstwittercomFathymIt"),
    httpsgithubcomfathym: makeNodeComponent("httpsgithubcomfathym"),
    httpswwwfacebookcomFathymInc: makeNodeComponent(
      "httpswwwfacebookcomFathymInc"
    ),

    // Metadata about props expected for PlasmicFathymFooter
    internalVariantProps: PlasmicFathymFooter__VariantProps,
    internalArgProps: PlasmicFathymFooter__ArgProps
  }
);

export default PlasmicFathymFooter;
/* prettier-ignore-end */
