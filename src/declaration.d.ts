declare module "*.jpg" {
  const value: any;
  export default value;
}

declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.mp4" {
  const value: any;
  export default value;
}

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp,
  ): { [key: string]: any };
};
