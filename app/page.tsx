import RecoverFromClipboardForm from "@/components/forms/recover-from-clipboard-form";
import SendToClipboardForm from "@/components/forms/send-to-clipboard-form";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-6 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SendToClipboardForm />
        <RecoverFromClipboardForm />
      </div>
    </main>
  );
}
