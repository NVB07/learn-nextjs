import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <h1>hello, this is home page</h1>
            <Link className="text-3xl font-bold underline" href="/dashboard">
                Dashboard
            </Link>
        </div>
    );
}
