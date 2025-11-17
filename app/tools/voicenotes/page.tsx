export default function VoiceNotesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">ProMedix VoiceNotes</h1>
      <p className="mb-6 text-muted-foreground max-w-2xl">Record and transcribe lectures for review. VoiceNotes is built for EMS and medical students to capture, tag, and search audio notes by module or chapter.</p>
      <ul className="list-disc list-inside mb-6">
        <li>One-tap recording</li>
        <li>Auto-transcription</li>
        <li>Tagging and search</li>
        <li>EMS-specific workflow</li>
      </ul>
      <p className="text-sm text-gray-500">Standalone VoiceNotes app coming soon.</p>
    </div>
  );
}
