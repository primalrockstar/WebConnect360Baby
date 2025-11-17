export default function InstitutionsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">For Institutions & Programs</h1>
      <p className="mb-6 text-muted-foreground max-w-2xl">ProMedixEMS supports EMS programs with analytics, content libraries, and compliance. FERPA/HIPAA compliant. Request a program demo below.</p>
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
          <ul className="list-disc list-inside">
            <li>Student analytics dashboard</li>
            <li>Exam and assessment tools</li>
            <li>Content library</li>
            <li>Bulk licensing options</li>
            <li>FERPA/HIPAA compliant</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Request Program Demo</h2>
          <form className="space-y-4">
            <input className="w-full border rounded p-2" type="text" placeholder="Name" required />
            <input className="w-full border rounded p-2" type="email" placeholder="Email" required />
            <input className="w-full border rounded p-2" type="text" placeholder="Institution" required />
            <input className="w-full border rounded p-2" type="text" placeholder="Role" />
            <input className="w-full border rounded p-2" type="number" placeholder="Number of students" />
            <textarea className="w-full border rounded p-2" placeholder="Message" rows={3}></textarea>
            <input type="text" name="_gotcha" style={{display:'none'}} tabIndex={-1} autoComplete="off" />
            <button className="bg-primary text-white px-4 py-2 rounded" type="submit">Request Demo</button>
          </form>
        </div>
      </div>
      <p className="text-xs text-gray-500">We never share your information. Demo requests are reviewed within 1 business day.</p>
    </div>
  );
}
