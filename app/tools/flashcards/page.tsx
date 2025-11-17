export default function FlashcardsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Flashcards</h1>
      <p className="mb-6 text-muted-foreground max-w-2xl">Study key EMS topics with spaced repetition. Flashcards cover anatomy, pharmacology, operations, trauma, and more. Designed for effective, mobile-friendly review.</p>
      <ul className="list-disc list-inside mb-6">
        <li>Spaced repetition scheduling</li>
        <li>Topic-based decks</li>
        <li>Progress tracking</li>
        <li>Mobile optimized</li>
      </ul>
      <p className="text-sm text-gray-500">Standalone Flashcards app coming soon.</p>
    </div>
  );
}
