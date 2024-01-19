import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div role="status" className="flex items-center gap-2">
      <Loader2 className="animate-spin" />
      Loading...
      <span className="sr-only">Loading...</span>
    </div>
  );
}
