import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <Link legacyBehavior className="text-3xl font-bold underline" href="/dashboard">
                <a>Dashboard</a>
            </Link>
        </div>
    );
}
