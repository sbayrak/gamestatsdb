import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900/20 text-slate-400 py-8 px-4 mt-auto border-t border-primary/20">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <nav className="w-full flex items-center justify-center gap-4 text-sm font-medium text-slate-200">
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <span className="text-slate-700">|</span>
          <Link
            href="/disclaimer"
            className="hover:text-white transition-colors"
          >
            Disclaimer
          </Link>
          <span className="text-slate-700">|</span>
          <Link
            href="/data-source"
            className="hover:text-white transition-colors"
          >
            Data Source
          </Link>
          <span className="text-slate-700">|</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm text-slate-500 text-center">
          <p>
            Statistics and game information are sourced from{" "}
            <strong className="font-semibold text-primary">Steam</strong>. This
            project is entirely independent and not endorsed by or associated
            with Valve Corporation. All registered names and marks belong to
            their respective owners.
          </p>
          <p>
            Built by{" "}
            <a
              href="https://suatbayrak.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              Suat Bayrak
            </a>{" "}
            to help you discover unique gaming trends. ©{" "}
            {new Date().getFullYear()} GamestatsDB.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
