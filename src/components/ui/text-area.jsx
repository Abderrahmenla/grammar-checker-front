import { cn } from "@/utils/cn";

const TextArea = ({ className, error, label, id, rows = 4, ...props }) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-foreground mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        className={cn(
          "flex w-full rounded-md border bg-background px-3 py-2 min-h-[80px] text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary",
          error && "border-destructive focus:ring-destructive",
          className
        )}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default TextArea;
