import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1">
        <Blog />
      </main>
      <Contact />
    </div>
  );
}
