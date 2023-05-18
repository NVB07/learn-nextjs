import Link from 'next/link';

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <div>
            <h1>Hello, Dashboard Page!</h1>
            <Link className="text-3xl font-bold underline" href="/">
                back
            </Link>
        </div>
    );
}
