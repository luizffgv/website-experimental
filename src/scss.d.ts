declare module "*.scss?string" {
  const style: string;
  export default style;
}

declare module "*.scss?apply";

declare module "*.scss?sheet" {
  const sheet: CSSStyleSheet;
  export default sheet;
}
