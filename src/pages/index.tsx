import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Hello World' }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div>{title}</div>
    </>
  )
}
