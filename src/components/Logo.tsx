import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label="Growers Ground home">
      <span className="logo-mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 4C11 10 8 14 8 19a8 8 0 1 0 16 0c0-5-3-9-8-15Z"
            fill="currentColor"
          />
          <path
            d="M16 22v6M12 26h8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="logo-text">Growers Ground</span>
    </Link>
  );
}
