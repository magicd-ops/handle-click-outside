# handle-click-outside
React Hook Handle Click Outside

This module is only used in React Hooks and need useState, useRef, useEffect of current function

> To use this module :
```
import React, { useState, useRef, useEffect } from 'react';
import initRef from 'handle-click-outside';

let [ Ref, Orig, setHandler ] = initRef({useState, useRef, useEffect, document, index: 0});

```

Ref: the reference box to toggle

Orig: the original box for click to show/hide Ref

setHandler: to set show/hide in Ref manually

```
<Orig className={className} ....>some text</Orig>
<Ref className={className} .... defaultDisplay="block">
  <div onClick={() => setHandler(false)}>some text</div>
</Ref>
```

defaultDisplay: this method will set display ( default is flex ) when Ref is in show mode

> It can be used in multi Ref Orig box in a certain function and just set index in every Ref Orig

```
let [ Ref, Orig, setHandler ] = initRef({useState, useRef, useEffect, document, index: 0});
let [ Ref2, Orig2, setHandler2 ] = initRef({useState, useRef, useEffect, document, index: 1});


<Orig className={className} ....>some text</Orig>
<Ref className={className} .... defaultDisplay="block">
  <div onClick={() => setHandler(false)}>some text</div>
</Ref>

<Orig2 className={className} ....>some text</Orig>
<Ref2 className={className} .... defaultDisplay="block">
  <div onClick={() => setHandler2(false)}>some text</div>
</Ref>
```
