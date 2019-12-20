import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function rename(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // FAILS on disk sync
    tree.rename('/a.txt', '/b/c/d/a.txt');

    // WORKS on disk sync
    const buffer = tree.read('/a.txt');
    if (!buffer) { return; }
    tree.create('/b/c/d/a.txt', buffer);
    tree.delete('/a.txt');

    return tree;
  };
}