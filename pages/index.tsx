/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        css={css({
          width: "100vw",
          height: "100vh",
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        })}
      >
        <div>Hello World</div>
      </div>
    </div>
  )
}
