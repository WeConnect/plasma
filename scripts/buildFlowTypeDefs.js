/* eslint-disable */
const { execSync } = require('child_process');

const p = require('../package.json');

const currentVersion = p.version;
const flowVersion = String(execSync('flow version')).match(/[\d\.]+/)[0];

const declarations = execSync(
  `jscodeshift -s -t scripts/extractFlowTypes.js src/components/**/*.jsx src/components/layout/**/*.jsx --parser flow`
);

console.log(`
// flow-typed version: <<STUB>>/@wework-dev/plasma_v${currentVersion}/flow_v${flowVersion}

declare module '@wework-dev/plasma' {
  declare type Data = { [key: string]: string };

  ${String(declarations).replace(/\bNode\b/g, 'React$Node')}

  declare export class CountedTextInput extends React$Component<{ ...$PropertyType<TextInput, 'props'>, counterClassName?: string }> { }
  declare export class CountedTextArea extends React$Component<{ ...$PropertyType<TextArea, 'props'>, counterClassName?: string }> { }

  declare export var LocationPin: string;
}
`);
