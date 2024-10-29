export const ContactPage = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="max-w-[720px] w-full">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-2xl py-[15px] px-[20px] text-foreground bg-background focus:bg-transparent outline-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl py-[15px] px-[20px] text-foreground bg-background focus:bg-transparent outline-primary"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-2xl py-[15px] px-[20px] text-foreground bg-background focus:bg-transparent outline-primary"
            ></textarea>
            <button
              type="button"
              className="hover:bg-primary bg-primary/90 text-card py-[15px] px-[20px] tracking-wide rounded-2xl w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
