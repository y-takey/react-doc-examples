import React from 'react'
import { hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

import { imports } from './imports'
import db from './db.json'

import Wrapper from 'src/docz/Wrapper'

const Root = () => (
  <Theme
    db={db}
    imports={imports}
    hashRouter={false}
    websocketUrl="ws://127.0.0.1:60505"
    wrapper={Wrapper}
  />
)

export default hot(module)(Root)
