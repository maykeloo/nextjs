import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
body {
  background: #f2f2f2;
  color: #333;
  font-family: "Poppins";
}
a {
  color: #333;
  text-decoration: none;
}
.content {
  max-width: 960px;
  margin: 0 auto;
}
nav {
  margin: 10px auto 80px;
  padding: 10px 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-bottom: 1px solid #ddd;
}
nav a {
  margin-left: 12px;
}
nav .logo {
  margin-right: auto;
}
footer {
  display: block;
  text-align: center;
  padding: 30px 0;
  margin-top: 60px;
  color: #777;
  border-top: 1px solid #eaeaea;
}
`;
