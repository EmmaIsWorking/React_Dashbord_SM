import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import './Media.css';

:root {
  --bg_body: hsl(0, 0%, 100%);
  --paragraph: hsl(228, 12%, 44%);
  --color-card: hsl(225, 100%, 98%);
}

[data-theme="dark"] {
  --bg_body: hsl(232, 19%, 15%);
  --paragraph: hsl(0, 0%, 100%);
  --color-card: hsl(230, 17%, 14%);
}

h1,
h2,
h4,
h5,
h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: var(--paragraph);
}

p {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: var(--paragraph);
  font-size: 14px;
}

h3 {
  font-family: 'Inter', sans-serif;
  margin: 0;
  font-weight: 400;
  color: #63687e;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 14px;
}

body {
  padding: 0;
  margin: 0;
  background-color: var(--bg_body);
}
`