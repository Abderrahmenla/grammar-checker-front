import { cn } from "@/utils/cn";

const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card p-4 md:p-6 shadow-sm text-card-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
