import dynamic from "next/dynamic";

// Must use dynamic import without SSR, see https://github.com/react-dnd/react-dnd/issues/3518
const Editor = dynamic(() => import("~/components/editor"), {
  ssr: false,
  loading: () => (
    <div className="grid h-screen w-screen place-items-center">Loading editor&hellip;</div>
  ),
});

export default function Page() {
  return <Editor className="mx-auto h-screen max-w-prose py-24 px-6" />;
}
