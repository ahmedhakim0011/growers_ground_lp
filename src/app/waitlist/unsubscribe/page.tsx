import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { unsubscribeFromWaitlist } from "@/lib/waitlist.server";

export const metadata: Metadata = {
  title: "Unsubscribe",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function unsubscribe(formData: FormData) {
  "use server";
  const token = String(formData.get("token") ?? "");
  if (!UUID.test(token)) redirect("/waitlist/unsubscribe?status=invalid");
  let ok = false;
  try {
    ok = await unsubscribeFromWaitlist(token);
  } catch {
    redirect("/waitlist/unsubscribe?status=error");
  }
  redirect(`/waitlist/unsubscribe?status=${ok ? "done" : "invalid"}`);
}

// A confirm button (not a GET link) so email scanners that pre-open links can't unsubscribe people.
export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const token = typeof sp.token === "string" ? sp.token : "";
  const status = typeof sp.status === "string" ? sp.status : "";

  let title = "Unsubscribe from the waitlist";
  let text = "You'll stop getting Growers Ground launch emails. You can rejoin anytime.";
  if (status === "done") {
    title = "You're unsubscribed";
    text = "We won't email you about the waitlist again. Changed your mind? Join again from the home page.";
  } else if (status === "invalid" || (!status && !UUID.test(token))) {
    title = "This link doesn't work";
    text = "It may be incomplete or already used. Email us and we'll remove you by hand.";
  } else if (status === "error") {
    title = "Something went wrong";
    text = "Please try the link again in a minute, or email us and we'll remove you by hand.";
  }
  const showButton = !status && UUID.test(token);

  return (
    <main className="container" style={{ maxWidth: 520, padding: "96px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>{title}</h1>
      <p style={{ marginBottom: 24 }}>{text}</p>
      {showButton ? (
        <form action={unsubscribe}>
          <input type="hidden" name="token" value={token} />
          <button type="submit" className="btn btn-accent btn-rect">
            Unsubscribe
          </button>
        </form>
      ) : (
        <p>
          <Link href="/">Back to Growers Ground</Link> ·{" "}
          <a href="mailto:support@growersground.com">support@growersground.com</a>
        </p>
      )}
    </main>
  );
}
