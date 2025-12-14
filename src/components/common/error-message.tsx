import { IconExclamationCircle } from "@tabler/icons-react";

export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1 text-red-900 bg-red-100 p-1 rounded-2xl">
      <IconExclamationCircle />
      {message}
    </div>
  );
}
