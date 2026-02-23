import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout className="py-12 px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-slate-100">Contact</h1>
        <div className="space-y-4 text-slate-300">
          <p>Thank you for checking out GamestatsDB!</p>
          <p>
            My name is{" "}
            <strong className="font-semibold text-primary hover:text-primary/80">
              Suat Bayrak
            </strong>
            , and I am the creator of this platform.
          </p>
          <p>
            If you have any questions, feedback, or inquiries, you can learn
            more about me and get in touch through my personal website:
          </p>
          <p>
            <Link
              href="https://suatbayrak.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 hover:underline transition-colors"
            >
              https://suatbayrak.com
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
