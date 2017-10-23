interface NodeRequireX extends NodeRequire {
  ensure(dependencies: string[], callback: (require?:any)=>void,chunkName?:string): void;
}

declare var require: NodeRequireX;