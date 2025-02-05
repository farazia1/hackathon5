"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname() || "/";

  // Split the route path into parts
  const pathParts = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 mt-10">
      <ol className="list-none flex items-center space-x-2">

        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            Home
          </Link>
        </li>
        {pathParts.map((part, index) => {
          // Construct the path up to the current part
          const href = "/" + pathParts.slice(0, index + 1).join("/");

          return (
            <li key={index} className="flex items-center">
              {/* Separator */}
              <span className="mx-2"> {">"}
              </span>

              {/* Link for intermediate paths */}
              {index === pathParts.length - 1 ? (
                <span className="text-gray-700 capitalize">{part}</span> // Current Page (not a link)
              ) : (
                <Link href={href} className="text-blue-500 hover:underline capitalize">
                  {part}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;


