
// interface NodeRequireFunction {
//   (id: string): any;
// }

// interface NodeRequire extends NodeRequireFunction {
//   resolve(id: string): string;
//   cache: any;
//   extensions: NodeExtensions;
//   main: NodeModule | undefined;
// }

// interface NodeExtensions {
//   '.js': (m: NodeModule, filename: string) => any;
//   '.json': (m: NodeModule, filename: string) => any;
//   '.node': (m: NodeModule, filename: string) => any;
//   [ext: string]: (m: NodeModule, filename: string) => any;
// }

// declare var require: NodeRequire;

// interface NodeModule {
//   exports: any;
//   require: NodeRequireFunction;
//   id: string;
//   filename: string;
//   loaded: boolean;
//   parent: NodeModule | null;
//   children: NodeModule[];
// }

interface NodeRequire {
  ensure(urls: string[], fn: (resole) => void): string;
}

export declare var require: NodeRequireX;