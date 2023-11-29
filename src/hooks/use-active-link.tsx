import { useRouter } from "next/router";

type ReturnType = {
  active: boolean;
  isExternalLink: boolean;
};

export default function useActiveLink(path: string, deep = true): ReturnType {
  const { pathname, asPath } = useRouter();

  const checkPath = path.startsWith("#");

  // const currentPath = path === "/" ? "/" : `${path}/`;

  const currentPath = path === "/" ? "/" : `${path}`;

  const normalActive =
    (!checkPath && pathname === currentPath) ||
    (!checkPath && asPath === currentPath);

  const deepActive =
    (!checkPath && pathname.includes(currentPath)) ||
    (!checkPath && asPath.includes(currentPath));

  // console.log(
  //   pathname,
  //   asPath,
  //   currentPath,
  //   asPath === currentPath,
  //   normalActive,
  //   deepActive
  // );

  return {
    active: deep ? deepActive : normalActive,
    isExternalLink: path.includes("http"),
  };
}
