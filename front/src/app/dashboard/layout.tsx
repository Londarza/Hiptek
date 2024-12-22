import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="flex justify-evenly space-x-4 p-4 bg-gray-100">
        <Link
          href="/dashboard"
          className="px-4 py-2 bg-sec-brown text-white rounded hover:bg-opacity-80"
        >
          Profile
        </Link>
        <Link
          href="/dashboard/cart"
          className="px-4 py-2 bg-sec-brown text-white rounded hover:bg-opacity-80"
        >
          Cart
        </Link>
        <Link
          href="/dashboard/orders"
          className="px-4 py-2 bg-sec-brown text-white rounded hover:bg-opacity-80"
        >
          Orders
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;
