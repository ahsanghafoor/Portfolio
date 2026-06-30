import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#ffffff",
          color: "var(--ink)",
          border: "1px solid var(--line-2)",
          borderRadius: "14px",
          fontFamily: "var(--body)",
          boxShadow: "0 16px 40px -20px rgba(26,20,48,.5)",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
