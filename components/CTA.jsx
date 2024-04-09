import Link from 'next/link';
import { Button } from './ui/Button';

const CTA = () => {
  return (
    <section className="section py-24 bg-white dark:bg-navy-900">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="title text-4xl font-bold mb-4 text-foreground dark:text-white">Get Started Today</h2>
          <p className="note text-2xl mb-8 text-muted-foreground dark:text-white">Contact us to schedule an appointment for your notarial needs.</p>
          <Link href="/contact">
            <Button className="bg-blue-600 text-white dark:bg-blue-600 dark:text-white hover:bg-black dark:hover:bg-blue-600">Get in Touch</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;