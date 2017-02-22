import { createRenderer } from 'fela';
import webPreset from 'fela-preset-web';
import validator from 'fela-plugin-validator';

const devPreset =
  [ validator(
      { logInvalid: true
      , deleteInvalid: true
      }
    )
  ];

const renderer =
  createRenderer(
    { plugins:
      [ ...webPreset
      , ...(process.env.NODE_ENV !== 'production' ? devPreset : [])
      ]
    }
  );

export default renderer;
