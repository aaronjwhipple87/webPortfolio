export function SectionHeading({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="mx-auto mb-10 w-fit bg-berry px-6 py-2 text-center font-display text-3xl font-semibold text-paper sm:text-4xl"
    >
      {children}
    </h2>
  );
}
