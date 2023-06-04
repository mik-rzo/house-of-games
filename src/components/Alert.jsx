export function Alert({ severity, crud, setDisplayAlert }) {
  if (severity === 'error') {
    return (
      <span id='alert'>
        <svg
          className='alert-symbol'
          fill='#000000'
          version='1.1'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          xmlns:xlink='http://www.w3.org/1999/xlink'
          width='40px'
          height='40px'
          viewBox='0 0 100 100'
          enable-background='new 0 0 100 100'
          xml:space='preserve'>
          <g>
            <path
              d='M91.17,81.374l0.006-0.004l-0.139-0.24c-0.068-0.128-0.134-0.257-0.216-0.375l-37.69-65.283
      c-0.611-1.109-1.776-1.87-3.133-1.87c-1.47,0-2.731,0.887-3.285,2.153l-0.004-0.002L9.312,80.529l0.036,0.021
      c-0.505,0.618-0.82,1.397-0.82,2.257c0,1.982,1.607,3.59,3.588,3.59h0h75.767v0c1.982,0,3.589-1.607,3.589-3.589
      C91.472,82.297,91.362,81.814,91.17,81.374z M50.035,79.617c-2.874,0-5.201-2.257-5.201-5.13c0-2.874,2.326-5.2,5.201-5.2
      c2.803,0,5.13,2.325,5.13,5.2C55.166,77.36,52.838,79.617,50.035,79.617z M55.165,34.25v28.299h-0.002
      c0,0.005,0.002,0.01,0.002,0.016c0,1.173-0.95,2.094-2.094,2.094c-0.005,0-0.009-0.001-0.014-0.001v0.001h-6.093
      c-1.174,0-2.123-0.921-2.123-2.094c0-0.005,0.002-0.01,0.002-0.016h-0.002V34.326c-0.001-0.026-0.008-0.051-0.008-0.077
      c0-1.117,0.865-1.996,1.935-2.078v-0.016h6.288v0.001c1.149,0.007,2.074,0.897,2.103,2.039h0.005v0.053V34.25
      C55.166,34.25,55.165,34.25,55.165,34.25z'
            />
          </g>
        </svg>
        <p>
          <b>{crud} request failed.</b> {crud === 'Vote' && 'Vote count has been reset.'}
        </p>
        <button className='alert-close' onClick={() => setDisplayAlert(false)}>
          <svg
            fill='#000000'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            width='30px'
            height='30px'
            viewBox='0 0 100 100'
            enable-background='new 0 0 100 100'
            xml:space='preserve'>
            <path
              d='M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
    c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
    c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
    c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
    c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
    l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z'
            />
          </svg>
        </button>
      </span>
    )
  } else if (severity === 'success') {
    return (
      <span id='alert'>
        <svg
          className='alert-symbol'
          width='40px'
          height='40px'
          viewBox='0 0 512 512'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          xmlns:xlink='http://www.w3.org/1999/xlink'>
          <title>success</title>
          <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
            <g id='add-copy' fill='#000000' transform='translate(42.666667, 42.666667)'>
              <path
                d='M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M213.333333,384 C119.227947,384 42.6666667,307.43872 42.6666667,213.333333 C42.6666667,119.227947 119.227947,42.6666667 213.333333,42.6666667 C307.43872,42.6666667 384,119.227947 384,213.333333 C384,307.43872 307.438933,384 213.333333,384 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z'
                id='Shape'></path>
            </g>
          </g>
        </svg>
        <p><b>{crud} request succeeded.</b></p>
        <button className='alert-close' onClick={() => setDisplayAlert(false)}>
          <svg
            fill='#000000'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            xmlns:xlink='http://www.w3.org/1999/xlink'
            width='30px'
            height='30px'
            viewBox='0 0 100 100'
            enable-background='new 0 0 100 100'
            xml:space='preserve'>
            <path
              d='M84.707,68.752L65.951,49.998l18.75-18.752c0.777-0.777,0.777-2.036,0-2.813L71.566,15.295
    c-0.777-0.777-2.037-0.777-2.814,0L49.999,34.047l-18.75-18.752c-0.746-0.747-2.067-0.747-2.814,0L15.297,28.431
    c-0.373,0.373-0.583,0.88-0.583,1.407c0,0.527,0.21,1.034,0.583,1.407L34.05,49.998L15.294,68.753
    c-0.373,0.374-0.583,0.88-0.583,1.407c0,0.528,0.21,1.035,0.583,1.407l13.136,13.137c0.373,0.373,0.881,0.583,1.41,0.583
    c0.525,0,1.031-0.21,1.404-0.583l18.755-18.755l18.756,18.754c0.389,0.388,0.896,0.583,1.407,0.583c0.511,0,1.019-0.195,1.408-0.583
    l13.138-13.137C85.484,70.789,85.484,69.53,84.707,68.752z'
            />
          </svg>
        </button>
      </span>
    )
  }
}
