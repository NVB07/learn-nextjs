import Link from 'next/link';
import DashboardLayout from './dashboard/layout';

export default function Page() {
    return (
        <div>
            <Link legacyBehavior className="text-3xl font-bold underline" href="/dashboard">
                <a>Dashboard</a>
            </Link>
            <DashboardLayout children="cho" />
        </div>
    );
}
