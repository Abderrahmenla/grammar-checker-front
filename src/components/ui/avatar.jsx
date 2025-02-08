import { cn } from "@/utils/cn";

const Avatar = ({ name = "TEST USER", className, ...props }) => {
  const getNameInitials = (name) => {
    const names = name.trim().split(" ");

    return `${names[0][0].toUpperCase()}${
      names[1] ? names[1][0].toUpperCase() : ""
    }`;
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium",
        className
      )}
      {...props}
    >
      {getNameInitials(name)}
    </div>
  );
};

export default Avatar;
