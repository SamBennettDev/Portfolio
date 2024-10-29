interface TitleSplitterProps {
  sectionTitle: string;
  sectionRef: React.RefObject<HTMLDivElement>;
}

export const TitleSplitter: React.FC<TitleSplitterProps> = ({
  sectionTitle,
  sectionRef,
}) => {
  return (
    <div className="w-full relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full h-[100px] bg-background  before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[100px] before:bg-card before:rounded-b-[10vw]" />
      <h2
        className="w-[105vw] h-[100px] font-sans leading-none flex justify-center md:justify-start md:px-[10vw] items-center text-muted-foreground bg-background rounded-b-[10vw]"
        style={{
          fontSize: "clamp(24px, 3vw, 40px)",
          textWrap: "balance",
        }}
        ref={sectionRef}
      >
        {sectionTitle}
      </h2>
    </div>
  );
};
