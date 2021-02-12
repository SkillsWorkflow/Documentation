---
id: mdx
title: Powered by MDX
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can write JSX and use React components within your Markdown thanks to [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>{children}</span> );



<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

<Tabs
  groupId="operating-systems"
  defaultValue="win"
  values={[
    {label: 'Windows', value: 'win'},
    {label: 'macOS', value: 'mac'},
  ]
}>
<TabItem value="win">Windows in windows.</TabItem>
<TabItem value="mac">macOS is macOS.</TabItem>
</Tabs>

<Tabs
  groupId="non-mac-operating-systems"
  defaultValue="win"
  values={[
    {label: 'Windows', value: 'win'},
    {label: 'Unix', value: 'unix'},
  ]
}>
<TabItem value="win">Windows is windows.</TabItem>
<TabItem value="unix">Unix is unix.</TabItem>
</Tabs>

I can write **Markdown** alongside my _JSX_!
