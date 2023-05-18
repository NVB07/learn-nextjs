import Link from 'next/link';
import DashboardLayout from './dashboard/layout';

export default function Page() {
    return (
        <div>
            <Link className="text-3xl font-bold underline" href="/dashboard">
                Dashboard
            </Link>
            <DashboardLayout children="cho" />
        </div>
    );
}
