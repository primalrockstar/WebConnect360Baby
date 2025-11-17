export default function PCRTrainerPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">PCR Trainer</h1>
      <p className="mb-6 text-muted-foreground max-w-2xl">Practice writing patient care reports (PCRs) with realistic scenarios and feedback. Improve your documentation skills for EMS practice and exams.</p>
      <ul className="list-disc list-inside mb-6">
        <li>Scenario picker (trauma, medical, cardiac, etc.)</li>
        <li>Guided PCR writing</li>
        <li>Hints and feedback fields</li>
        <li>Future: AI-assisted critique</li>
      </ul>
    </div>
  );
}
