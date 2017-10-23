interface NodeRequireX extends NodeRequire {
  ensure(dependencies: string[], callback: (require: NodeRequire) => void, chunkName?: string): void;
}

declare var require: NodeRequireX;