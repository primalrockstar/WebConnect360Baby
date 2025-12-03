import fs from "fs";
import path from "path";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Mic, ClipboardList, Activity, CheckCircle } from "lucide-react";

const toolsDataPath = path.join(process.cwd(), "data", "tools.json");
const tools = JSON.parse(fs.readFileSync(toolsDataPath, "utf-8"));

const iconMap: Record<string, any> = {
  BookOpen,
  Mic,
  ClipboardList,
  Activity,
  CheckCircle,
};

export default function ToolsPage() {
  return (
    <div className="container mx-auto py-12">
  <h1 className="text-4xl font-bold mb-8 text-center">EmeritaClinical<sup>TM</sup> Tools</h1>
      <div className="grid gap-8 md:grid-cols-3">
        {tools.map((tool: any) => {
          const Icon = iconMap[tool.icon] || BookOpen;
          return (
            <Link key={tool.id} href={tool.link} className="block">
              <Card className="glass-card p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Icon className="h-10 w-10 mb-2 text-primary" />
                <h2 className="text-2xl font-semibold mb-2">{tool.name}</h2>
                <p className="mb-4 text-muted-foreground text-center">{tool.description}</p>
                <span className="text-sm text-blue-600 underline">Learn more</span>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
