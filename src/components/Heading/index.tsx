export const HeadingWithGradient = ({ text }: { text: string }) => (
  <h1 className="inline-block m-10 text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    {text}
  </h1>
);
