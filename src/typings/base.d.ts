// export const require: (url: string) => any;
//export const require: (url: string) => any;

// export declare var require: NodeRequire | ;


interface NodeRequireFunction {
  (id: string| (  string[],resolve?: (component: any) => void): any;
}

// export type AsyncComponent = (
//   resolve: (component: Component) => void,
//   reject: (reason?: any) => void
// ) => Promise<Component | EsModuleComponent> | Component | void;