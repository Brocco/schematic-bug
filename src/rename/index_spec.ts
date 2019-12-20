import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';


const collectionPath = path.join(__dirname, '../collection.json');


describe('rename', () => {
  it('works', () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const startTree = new UnitTestTree(Tree.empty());
    startTree.create('/a', 'stuff');
    const tree = runner.runSchematic('rename', {}, startTree);

    console.log(tree.files);
  });
});
