import { AlertTriangle } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function MedicalDisclaimer() {
  return (
    <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900 mt-8">
      <div className="p-4 md:p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-0.5" />
          <div className="space-y-2 text-sm">
            <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">
              Medical Disclaimer
            </h3>
            <p className="text-yellow-800 dark:text-yellow-200 leading-relaxed">
              <strong>FOR EDUCATIONAL PURPOSES ONLY.</strong> EmeritaClinical™ and all associated applications 
              are educational tools designed to supplement—not replace—formal EMS training and certification 
              programs. The information provided should not be used as a substitute for professional medical 
              advice, diagnosis, or treatment. Always follow your local protocols, medical director's orders, 
              and scope of practice. In case of a medical emergency, call 911 or your local emergency number 
              immediately. By using EmeritaClinical™ products, you acknowledge that webconnect360 and its affiliates 
              are not liable for any actions taken based on the educational content provided. This platform 
              does not certify, license, or credential users as EMS providers.
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
