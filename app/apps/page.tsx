import fs from "fs";
import path from "path";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const appsDataPath = path.join(process.cwd(), "data", "apps.json");
const apps = JSON.parse(fs.readFileSync(appsDataPath, "utf-8"));

export default function AppsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">ProMedixEMS Apps</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {apps.map((app: any) => (
          <Card key={app.id} className="glass-card p-6 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-2">{app.name}</h2>
            <p className="mb-4 text-muted-foreground text-center">{app.description}</p>
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${app.status === 'available' ? 'bg-primary/10 text-primary' : 'bg-gray-200 text-gray-500'}`}>{app.status === 'available' ? 'Available' : 'Coming Soon'}</span>
            </div>
            <ul className="mb-4 text-sm list-disc list-inside text-left">
              {app.features.map((feature: string) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <div className="flex gap-2 mb-4">
              <Button asChild size="sm" variant="outline" disabled={app.appStoreUrl === '#'}>
                <a href={app.appStoreUrl} target="_blank" rel="noopener noreferrer">App Store</a>
              </Button>
              <Button asChild size="sm" variant="outline" disabled={app.playStoreUrl === '#'}>
                <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">Play Store</a>
              </Button>
            </div>
            {app.screenshots && app.screenshots.length > 0 && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {app.screenshots.map((src: string, idx: number) => (
                  <Image key={idx} src={src} alt={`${app.name} screenshot ${idx+1}`} width={160} height={90} className="rounded shadow" />
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
