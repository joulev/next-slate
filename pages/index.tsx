import dynamic from "next/dynamic";

// Fix "Prop `data-slate-editor-id` did not match" error
const Editor = dynamic(() => import("~/components/editor"), { ssr: false });

export default function IndexPage() {
  return <Editor className="mx-auto h-screen max-w-prose py-24 px-6" />;
}
