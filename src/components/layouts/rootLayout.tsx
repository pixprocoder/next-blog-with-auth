import { UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { Space } from "antd";

import React, { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <header>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <h1>Logo</h1>
          <Space>
            <Button type={"primary"}>Home</Button>
            <Button type={"primary"}>Blogs</Button>
            <Button type={"primary"}>About</Button>
            <Button type={"primary"}>Contact</Button>
          </Space>

          <Button icon={<UserAddOutlined />}>Login</Button>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>This is footer</p>
      </footer>
    </>
  );
}

export default RootLayout;
