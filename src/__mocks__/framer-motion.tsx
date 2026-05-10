/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const STRIP = new Set([
  "initial","animate","exit","variants","whileHover","whileTap",
  "whileInView","transition","onMouseMove","onMouseLeave",
  "layout","layoutId","drag","dragConstraints","viewport",
]);

function strip(props: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(props).filter(([k]) => !STRIP.has(k))
  );
}

const TAGS = ["div","span","a","button","ul","li","p","header","footer","section","nav","main","h1","h2","h3"];

export const motion: Record<string, React.FC<any>> = new Proxy({} as any, {
  get: (_: any, tag: string) =>
    ({ children, style: _style, ...props }: any) =>
      React.createElement(TAGS.includes(tag) ? tag : "div", strip(props), children),
});

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export function useMotionValue(init: number) {
  return { get: () => init, set: () => {}, onChange: () => () => {} };
}

export function useSpring(_val: any) {
  return { get: () => 0, set: () => {}, onChange: () => () => {} };
}

export function useTransform(_val: any, fn: (v: number) => number): number {
  return fn(0);
}

export function useInView(_ref: any, _opts?: any): boolean {
  return true;
}

export function animate(_from: any, _to: number, _opts?: any) {
  return { stop: () => {} };
}
